import { Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estimator',
  templateUrl: './agileestimator.component.html',
  styleUrls: ['./agileestimator.component.css']
})
export class AgileEstimatorComponent implements OnInit {

   vzsessionIdField: String;
   @ViewChild('vzsessionIdFieldRef') vzsessionIdFieldRef: ElementRef;


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

generateSessionId(): string {

    const max = 10000;
    const min = 1;

    return '' + (Math.floor(Math.random() * (max - min + 1)) + min);
  }


  joinEstimationSession() {
    let sessId = this.vzsessionIdField ? this.vzsessionIdField : null;

    if(!sessId){
      sessId = this.generateSessionId();
    }
    console.log('sessionID=' + sessId);
  
  
    this.router.navigate(['estimationjoin/' + sessId, { foo: 'fooIsfoo' } ]);
  }

}
