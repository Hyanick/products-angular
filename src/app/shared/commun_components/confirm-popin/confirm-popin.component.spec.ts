import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPopinComponent } from './confirm-popin.component';

describe('ConfirmPopinComponent', () => {
  let component: ConfirmPopinComponent;
  let fixture: ComponentFixture<ConfirmPopinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmPopinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPopinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
