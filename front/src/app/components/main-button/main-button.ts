import { Component, Input } from '@angular/core';
import { Router }           from '@angular/router';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.html',
  styleUrls: ['./main-button.scss'],
})
export class MainButtonComponent {
  @Input()
  public textButton = 'Back';

  constructor(private router: Router) { }

  goMainPage(): void {
    this.router.navigate(['/main-buttons']);
  }

}
