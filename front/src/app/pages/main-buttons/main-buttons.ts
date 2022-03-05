import { Component } from '@angular/core';
import { Router }    from '@angular/router';

type Button = {
  text: string;
  icon: string;
};

@Component({
  selector: 'app-main-buttons',
  templateUrl: './main-buttons.html',
  styleUrls: ['./main-buttons.scss'],
})
export class MainButtonsComponent {
  public buttons: Array<Button> = [
    {text: 'lobby',      icon: 'game-controller-outline'},
    {text: 'settings',   icon: 'cog-outline'},
    {text: 'statistics', icon: 'pulse-outline'},
  ];

  constructor(private router: Router) { }

  navigate(): void {
    const links = this.getLink(this.buttons);
    this.router.navigate(links);
  }

  private getLink(object: Array<Button>): Array<string> {
    return object.map(item => `/${item.text}`);
  }
}
