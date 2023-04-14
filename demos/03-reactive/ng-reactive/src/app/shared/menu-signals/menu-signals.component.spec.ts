import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSignalsComponent } from './menu-signals.component';

describe('MenuSignalsComponent', () => {
  let component: MenuSignalsComponent;
  let fixture: ComponentFixture<MenuSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSignalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
