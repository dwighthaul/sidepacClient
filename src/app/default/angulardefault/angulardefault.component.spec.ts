import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulardefaultComponent } from './angulardefault.component';

describe('AngulardefaultComponent', () => {
  let component: AngulardefaultComponent;
  let fixture: ComponentFixture<AngulardefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngulardefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulardefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
