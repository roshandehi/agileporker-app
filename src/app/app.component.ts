import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { WebSocketDataService } from './websocket-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'VZ Agile';

stompSub: Subscription;


  constructor(
        private webSocketDataService: WebSocketDataService
    ) { }

   ngOnInit() {

        // subscribe to websocket notify server
        this.stompSub = this.webSocketDataService.stompState
            .subscribe(stompState => {
                console.log(stompState);
            });

}

    ngOnDestroy() {
        
    }


}
