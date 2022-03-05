import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { MainButtonComponent } from 'src/app/components/main-button/main-button';
import { StatisticsComponent } from './statistics';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;
  let button: MainButtonComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    button = fixture.nativeElement.querySelector('app-main-button');
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display button back', () => {
    fixture.detectChanges();
    expect(button.textButton).toBeFalsy();
  });
});
