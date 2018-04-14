import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgiledashboardComponent } from './agiledashboard/agiledashboard.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const routes: Routes = [
  { path: 'dashboard', component: AgiledashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
