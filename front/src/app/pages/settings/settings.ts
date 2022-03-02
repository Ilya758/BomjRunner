import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.html',
  styleUrls: ['./settings.scss'],
})
export class SettingsComponent {

  constructor(private router: Router) { }

  goBack(): void {
    this.router.navigate(['/main-buttons']);
  }
}
