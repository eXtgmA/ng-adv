import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { FoodService } from "../foodService/food.service";
import { RatingPipe } from "../pipe/rating.pipe";
import { FoodRowComponent } from "./food-row/food-row.component";
import { IntegrationTestComponent } from "./integration-test.component";

describe("Integration Test:", () => {
  let fixture: ComponentFixture<IntegrationTestComponent>;
  let service: FoodService;

  let foodData = [
    { name: "Pad Thai", rating: 5 },
    { name: "Butter Chicken", rating: 5 },
    { name: "Cannelloni", rating: 4 },
    { name: "Cordon Bleu", rating: 2 },
  ];

  let serviceResult = [
    { name: "Pad Thai", rating: 5 },
    { name: "Butter Chicken", rating: 5 },
    { name: "Cannelloni", rating: 4 },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntegrationTestComponent, FoodRowComponent, RatingPipe],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [FoodService],
    });

    fixture = TestBed.createComponent(IntegrationTestComponent);
    service = TestBed.get(FoodService);
  });

  it("component has been created", () => {
    expect(service).toBeTruthy();
  });

  it("should render each FoodItem as FoodItemRow", () => {
    jest.spyOn(service, "getItems").mockImplementation(() => of(foodData));
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.directive(FoodRowComponent));
    expect(rows.length).toEqual(4);
    expect(rows[0].componentInstance.food.name).toEqual("Pad Thai");
  });
});
