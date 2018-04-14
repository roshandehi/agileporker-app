import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'underscore';

import 'rxjs/add/operator/share';

import {
    webSocketUrl,
    stomp_heartbeat_in,
    stomp_heartbeat_out,
    stomp_reconnect_delay
} from './properties/web.property';

declare var Stomp: any;
declare var SockJS: any;

type StompHeaders = { [key: string]: string };

// possible states for the STOMP service
export enum StompState {
    CLOSED,
    TRYING,
    CONNECTED,
    DISCONNECTING
}

@Injectable()
export class WebSocketDataService {

    connectObservable: Observable<StompState>;
    stompState: BehaviorSubject<StompState>;
    stompClient: any;
    stompUniqId: string;
    stompSubs: any;

    constructor() {

        this.stompState = new BehaviorSubject<StompState>(StompState.CLOSED);

        this.initStompClient(webSocketUrl);

        // this.connectObservable = this.stompState
        //     .filter((currentState: number) => {
        //         return currentState === StompState.CONNECTED;
        //     });

        this.stompSubs = {};

    }

    // initialize STOMP Client
    initStompClient(url: string) {

        this.disconnect();

        let self = this;
        let socket = new SockJS(url);

        this.stompClient = Stomp.over(socket);
        this.stompClient.heartbeat.incoming = stomp_heartbeat_in;
        this.stompClient.heartbeat.outgoing = stomp_heartbeat_out;

        // Auto reconnect
        this.stompClient.reconnect_delay = stomp_reconnect_delay;

        // Attempt connection, passing in a callback
        this.stompClient.connect({}, this.onConnectCallback, this.onErrorCallback);

    }

    // callback run on successfully connecting to server
    onConnectCallback = (frame: any) => {

        this.stompUniqId = (frame.headers.session).substr(8, 8);
        this.stompState.next(StompState.CONNECTED);

    }

    // callback run on errors while connecting to stomp server
    onErrorCallback = (error: any) => {

        if (typeof error === 'object') {
            error = error.body || error;
        }

        if (!this.stompClient.connected) {
            this.stompState.next(StompState.CLOSED);
        }
    }

    // subscribing to the queue
    subscribeToQueue(exchangeName: string, routingKey: string, headers: StompHeaders): Observable<any> {

        const webSocketObservable = Observable.create(
            (messages: Observer<any>) => {

                let stompSubscription: Subscription;
                let stompConnectedSubscription: Subscription;

                stompConnectedSubscription = this.connectObservable
                    .subscribe(() => {
                        stompSubscription = this.stompClient.subscribe(exchangeName + routingKey, (message: any) => {
                            messages.next(message);

                            // acknowledge it
                            message.ack();
                        }, headers);

                        this.stompSubs[exchangeName + routingKey] = stompSubscription;
                    });


                return () => {
                    stompConnectedSubscription.unsubscribe();

                    if (this.stompState.getValue() === StompState.CONNECTED) {
                        stompSubscription.unsubscribe();
                    }
                };

            });

        return webSocketObservable.share();
    }

    // the current connection status with the STOMP broker
    connected(): boolean {

        return this.stompState.getValue() === StompState.CONNECTED;

    }

    // disconnect the connection to the STOMP broker and clean up
    disconnect() {

        if (this.stompClient && this.stompClient.connected) {

            this.stompState.next(StompState.DISCONNECTING);
            this.stompClient.disconnect(() => this.stompState.next(StompState.CLOSED));

        }

    }

    // unsubscribe to a queue currently subscribed
    unsubscribeFromQueue(queueName) {

        let queue = this.stompSubs[queueName];

        if (queue) {
            queue.unsubscribe();
        }
    }

    // unsubscribe to all queue currently subscribed
    unsubscribeFromAllQueues() {

        let self = this;

        _.each(this.stompSubs, function(value, key) {
            self.unsubscribeFromQueue(key);
        });

    }

}
