import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AgiledashboardComponent} from './agiledashboard/agiledashboard.component';
import { EstimateModule } from './agileestimate/agileestimate.module';
import { PageNotFoundComponent } from './pagenotfound.component';
//import {StompConfig, StompService} from '@stomp/ng2-stompjs';
import { WebSocketDataService} from './websocket-data.service';

/*const stompConfig: StompConfig = {
  // Which server?
  //url: 'ws://localhost:15674/ws',
  url: 'ws://localhost:8080/pos-wsock-server/',

  // Headers
  // Typical keys: login, passcode, host
  headers: {
    login: 'guest',
    passcode: 'guest'
  },

  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeat_in: 0, // Typical value 0 - disabled
  heartbeat_out: 20000, // Typical value 20000 - every 20 seconds
  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 5000 (5 seconds)
  reconnect_delay: 5000,

  // Will log diagnostics on console
  debug: true
};
*/

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    AgiledashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EstimateModule,
    AppRoutingModule
     
  ],
  providers: [MessageService,WebSocketDataService
  
/*  StompService,
    {
      provide: StompConfig,
      useValue: stompConfig
    }*/
    
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
