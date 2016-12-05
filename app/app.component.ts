    import { Component } from '@angular/core';
    @Component({
      moduleId:module.id,
      selector: 'my-app',
      template: `
        <h1>{{title}}</h1>
         <nav>
           <a routerLink="/minister" routerLinkActive="active">השרים</a>
           <a routerLink="/bills" routerLinkActive="active">הצעות חוק</a>
          </nav>
        <router-outlet></router-outlet>
      `,
      styleUrls:['app.component.css']
    })
    export class AppComponent {
      title = 'ועדת שרים פתוחה';
    }