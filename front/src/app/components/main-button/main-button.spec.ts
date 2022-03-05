import { ComponentFixture, TestBed, waitForAsync, inject } from '@angular/core/testing';
import { IonicModule }                                     from '@ionic/angular';
import { RouterTestingModule }                             from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA }                          from '@angular/core';
import { Router }                                          from '@angular/router';

import { MainButtonComponent } from './main-button';

describe('MainButtonComponent', () => {
  let component: MainButtonComponent;
  let fixture: ComponentFixture<MainButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MainButtonComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(MainButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check goMainPage', inject([Router], (router: Router) => {
    spyOn(router, 'navigate').and.stub();
    expect(component.goMainPage()).toBeFalsy();
    expect(router.navigate).toHaveBeenCalledWith(['/main-buttons']);
  }));
});
