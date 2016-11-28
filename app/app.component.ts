    import { Component } from '@angular/core';
    @Component({
      moduleId:module.id,
      selector: 'my-app',
      template: `
        <h1>{{title}}</h1>
         <nav>
           <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
           <a routerLink="/bills" routerLinkActive="active">הצעות חוק</a>
          </nav>
        <router-outlet></router-outlet>
      `,
      styleUrls:['app.component.css']
    })
    export class AppComponent {
      title = 'Tour of Heroes';
    }