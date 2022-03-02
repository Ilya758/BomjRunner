import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-greeting',
  templateUrl: 'greeting.page.html',
  styleUrls: ['greeting.page.scss'],
})
export class GreetingPage {
  public login: string;
  public password: string;

  constructor(private router: Router) {}

  navigate(): void {
    this.router.navigate(['/main-buttons']);
  }
}
