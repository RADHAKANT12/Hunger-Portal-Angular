import { Component, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hunger-frontend-ui';

  constructor(){
    console.log("app component called")
    inject(AuthService).logout()

    }
  }

