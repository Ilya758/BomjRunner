import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.html',
  styleUrls: ['./back-button.scss'],
})
export class BackButtonComponent {

  constructor(private router: Router) { }

  goBack(): void {
    this.router.navigate(['/main-buttons']);
  }

}
