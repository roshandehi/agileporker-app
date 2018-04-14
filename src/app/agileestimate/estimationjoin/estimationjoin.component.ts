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

import { WebSocketDataService } from '../../websocket-data.service';


@Component({
  selector: 'app-estimationjoin',
  templateUrl: './estimationjoin.component.html',
  styleUrls: ['./estimationjoin.component.css'],
  providers: []
})

export class EstimationjoinComponent implements OnInit {

  currentPlayer: string;
  @ViewChild('currentPlayerRef') currentPlayerRef: ElementRef;

  private currentSessionId: String;


  /** Constructor */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private _stompService: StompService
    private webSocketDataService: WebSocketDataService
  ) { }

  ngOnInit() {
    this.currentSessionId = this.route.snapshot.paramMap.get('id');
   this.webSocketDataService.connected();
   //this.webSocketDataService.
  }

  ngOnDestroy() {
    //this.unsubscribe();
  }

  onJoin() {


    console.log('on Join');
   

    // let name = this.currentPlayer ? this.currentPlayer : null;
    // if (name) {
    //   this.sendPlayerMessage(name, '0');

    //   this.router.navigate(['estimationsession/' + this.currentSessionId, { 'currentPlayer': this.currentPlayer }]);
    // }
  }

  public sendPlayerMessage(player: string, points: string) {
    let message = new Message('player', JSON.stringify(new Player(player, points)));
    this.sendMessage(message);
  }

  public sendMessage(message: Message) {
    // this._stompService.publish('/topic/ng-demo-sub-' + this.currentSessionId, message.toString());
  }
}