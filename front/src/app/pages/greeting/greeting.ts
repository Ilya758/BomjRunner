import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: 'greeting.html',
  styleUrls: ['greeting.scss'],
})
export class GreetingPage {
  @Input()
  public login: string;
  @Input()
  public password: string;
  @Output()
  public textButton = 'OK';

  constructor() {}
}
