import { Component } from '@angular/core';
import { Router }    from '@angular/router';

@Component({
  selector: 'app-main-buttons',
  templateUrl: './main-buttons.html',
  styleUrls: ['./main-buttons.scss'],
})
export class MainButtonsComponent {

  constructor(private router: Router) { }

  navigate(): void {
    this.router.navigate(['/lobby', '/settings', '/statistics']);
  }
}
