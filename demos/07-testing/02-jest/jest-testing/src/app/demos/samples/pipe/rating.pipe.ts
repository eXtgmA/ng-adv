import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "rating"
})
export class RatingPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    let result: string = "";
    switch (true) {
      case value <= 0:
        throw new Error("Invalid param");
      case value == 1:
        result = "na oida";
        break;
      case value == 2:
        result = "geht so";
        break;
      case value == 3:
        result = "ok";
        break;
      case value == 4:
        result = "leiwand";
        break;
      case value == 5:
        result = "pipi fein";
        break;
      default:
        throw new Error("Argument out of range");
        break;
    }
    return result;
  }
}
