import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { MainButtonComponent } from 'src/app/components/main-button/main-button';
import { SettingsComponent } from './settings';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let button: MainButtonComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsComponent);
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
