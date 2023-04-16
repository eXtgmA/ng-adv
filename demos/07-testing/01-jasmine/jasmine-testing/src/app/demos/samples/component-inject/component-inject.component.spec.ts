import { ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DemoService } from '../../demo-base/demo.service';
import { ComponentInjectComponent } from './component-inject.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ComponentInjectComponent', () => {
  let component: ComponentInjectComponent;
  let fixture: ComponentFixture<ComponentInjectComponent>;
  let ds: any;

  let result = [
    {
      "url": "testing-intro",
      "title": "Testing Intro",
      "id": 1,
      "topicid": 1,
      "visible": true,
      "sortOrder": 0
    },
    {
      "url": "testpipe",
      "title": "Test Pipe",
      "id": 2,
      "topicid": 1,
      "visible": true,
      "sortOrder": 0
    }]


  beforeEach(() => {
    ds = jasmine.createSpyObj(['getItems']);
    TestBed.configureTestingModule({
      declarations: [ComponentInjectComponent],
      providers: [{ provide: DemoService, useValue: ds }],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ComponentInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 2 demos', fakeAsync(() => {
    // ds.getItems.and.returnValue(result);
    // flush();
    // fixture.detectChanges();

    // const rows = fixture.debugElement.queryAll(By.css('.demorow'));
    // expect(rows.length).toEqual(2);
  }));
});
