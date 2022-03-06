import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule }                     from '@angular/router/testing';
import { IonicModule }                             from '@ionic/angular';

import { GreetingPage } from './greeting';

describe('GreetingPage', () => {
  let component: GreetingPage;
  let fixture: ComponentFixture<GreetingPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GreetingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
