import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsMenuComponent } from './signals-menu.component';

describe('SignalsMenuComponent', () => {
  let component: SignalsMenuComponent;
  let fixture: ComponentFixture<SignalsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
