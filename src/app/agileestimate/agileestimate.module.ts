import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";


import { AgileEstimatorComponent} from './agileestimator.component';
import { EstimationsessionComponent } from './estimationsession/estimationsession.component';
import { EstimationjoinComponent } from './estimationjoin/estimationjoin.component';
import { EstimateRoutingModule } from './agileestimate-routing.module';
import { SessionService } from './session.service';


@NgModule({
  declarations: [
    AgileEstimatorComponent,
    EstimationsessionComponent,
    EstimationjoinComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    EstimateRoutingModule
  ],
  providers: [SessionService]
})
export class EstimateModule { }
