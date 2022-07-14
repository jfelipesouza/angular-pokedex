import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderApplicationComponent } from './main-header-application.component';

describe('MainHeaderApplicationComponent', () => {
  let component: MainHeaderApplicationComponent;
  let fixture: ComponentFixture<MainHeaderApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHeaderApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHeaderApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
