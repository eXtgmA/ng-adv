import { RatingPipe } from "./rating.pipe";

// var p;

beforeEach(() => {
  //   p = new RatingPipe();
});

describe("RatingPipe", function() {
  it("creates an instance", function() {
    let p = new RatingPipe();
    expect(p).toBeTruthy();
  });

  it("returns 'geht so' when 2 is passed", function() {
    let p = new RatingPipe();
    expect(p.transform(2)).toEqual("geht so");
  });

  it("throws an err when a negative value is passed", function() {
    let p = new RatingPipe();
    expect(() => {
      p.transform(-1);
    }).toThrowError("Invalid param");
  });
});
