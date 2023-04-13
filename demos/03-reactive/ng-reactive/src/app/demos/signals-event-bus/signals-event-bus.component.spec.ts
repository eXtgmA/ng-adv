import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsEventBusComponent } from './signals-event-bus.component';

describe('SignalsEventBusComponent', () => {
  let component: SignalsEventBusComponent;
  let fixture: ComponentFixture<SignalsEventBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalsEventBusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsEventBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
