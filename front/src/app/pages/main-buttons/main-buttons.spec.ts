import { ComponentFixture, TestBed, waitForAsync, inject } from '@angular/core/testing';
import { IonicModule }                                     from '@ionic/angular';
import { RouterTestingModule }                             from '@angular/router/testing';
import { Router }                                          from '@angular/router';

import { MainButtonsComponent } from './main-buttons';

describe('MainButtonsComponent', () => {
  let component: MainButtonsComponent;
  let fixture: ComponentFixture<MainButtonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MainButtonsComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MainButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check navigate', inject([Router], (router: Router) => {
    spyOn(router, 'navigate').and.stub();
    expect(component.navigate()).toBeFalsy();
    expect(router.navigate).toHaveBeenCalledWith([ '/lobby', '/settings', '/statistics' ]);
  }));
});
