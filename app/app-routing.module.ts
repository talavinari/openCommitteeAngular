import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { AboutComponent }      from './about.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { MinisterDetailComponent }  from './minister-detail.component';

const routes: Routes = [
  { path: 'minister',  component: DashboardComponent },
  { path: 'minister/:id',  component: MinisterDetailComponent },
  { path: 'bills/:id', component: HeroDetailComponent },
  { path: 'bills',     component: HeroesComponent },
  { path: 'about',     component: AboutComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}