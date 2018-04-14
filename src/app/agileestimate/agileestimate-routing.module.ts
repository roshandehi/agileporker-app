import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgileEstimatorComponent } from './agileestimator.component';

import { EstimationjoinComponent } from './estimationjoin/estimationjoin.component'
import {EstimationsessionComponent} from './estimationsession/estimationsession.component'

const estimteRoutes: Routes = [
  { path: 'estimation', component: AgileEstimatorComponent },
  { path: 'estimationjoin/:id', component: EstimationjoinComponent },
  { path: 'estimationsession/:id', component: EstimationsessionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(estimteRoutes)],
  exports: [RouterModule]
})
export class EstimateRoutingModule { }
