import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: 'greeting.html',
  styleUrls: ['greeting.scss'],
})
export class GreetingPage {
  @Input() public app = {login: '',  password: ''};
  public textButton = 'OK';

  constructor() {}
}
