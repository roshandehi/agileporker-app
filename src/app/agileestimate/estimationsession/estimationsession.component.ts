import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';
//import { Message } from '@stomp/stompjs';

import { Subscription } from 'rxjs/Subscription';
//import { StompService } from '@stomp/ng2-stompjs';


import 'rxjs/add/operator/switchMap';

import { SessionService } from '../session.service';
import { Message } from '../message';
import { Player } from '../player';


@Component({
  selector: 'app-estimationsession',
  templateUrl: './estimationsession.component.html',
  styleUrls: ['./estimationsession.component.css']
})
export class EstimationsessionComponent implements OnInit {

  // Stream of messages
  private subscription: Subscription;

  //public messages: Observable<Message>;

  // Subscription status
  public subscribed: boolean;

  // Array of historic message (bodies)
  public playerList: Array<Player> = [];

  public pointValues = ['0', '1', '2', '3', '5', '8', '13', '20', '40', '100', '?'];

  public currentPlayer;

  vzVoteField: string;
  @ViewChild('vzVoteFieldRef') vzVoteFieldRef: ElementRef;

  private currentSessionId: String;

  /** Constructor */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
   // private _stompService: StompService
  ) { }

  ngOnInit() {
    this.currentSessionId = this.route.snapshot.paramMap.get('id');

    this.currentPlayer = this.route.snapshot.paramMap.get('currentPlayer');

    let data = new Player(this.currentPlayer, null);

    this.playerList.push(data);


    this.subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  onVote(event: any) {
    let vote = event.target.value;
    console.log('vote=' + vote);
    this.sendPlayerMessage(this.currentPlayer, vote);
  }

  public subscribe() {

    if (this.subscribed) {
      this.unsubscribe();
    }

    // Stream of messages
   //this.messages = this._stompService.subscribe('/topic/ng-demo-sub-' + this.currentSessionId);

    //this.subscription = this.registerListener('player', this.playerMessage);

    this.subscribed = true;

  }

  public registerListener(type: string, callbackFn: (value: Message) => void) {
/*    return this.messages.filter(value => JSON.parse(value.body).type == type).subscribe(obj => {
      //console.log('Filtered: ' + obj.body);
      callbackFn(JSON.parse(obj.body));
    });*/

  }

  public sendPlayerMessage(name: string, points: string) {
    let message = new Message('player', JSON.stringify(new Player(name, points)));
    this.sendMessage(message);
  }



  /** Consume a message from the _stompService */
  public playerMessage = (message: Message) => {
    let data = JSON.parse(message.message);


    let player = this.playerList.find(value => value.name == data.name);
    if (player) {
      player.points = data.points;
    } else {
      this.playerList.push(data);
    }

  }

  public sendMessage(message: Message) {
    //this._stompService.publish('/topic/ng-demo-sub-' + this.currentSessionId, message.toString());
  }


  public unsubscribe() {

    if (!this.subscribed) {
      return;
    }

    // This will internally unsubscribe from Stomp Broker
    // There are two subscriptions - one created explicitly, the other created in the template by use of 'async'
    this.subscription.unsubscribe();
    this.subscription = null;
   // this.messages = null;

    this.subscribed = false;

  }

}