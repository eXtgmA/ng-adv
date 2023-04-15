import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-test-pipe",
  templateUrl: "./test-pipe.component.html",
  styleUrls: ["./test-pipe.component.scss"]
})
export class TestPipeComponent implements OnInit {
  constructor() {}

  mdpath = environment.markdownPath + "pipe.md";

  ngOnInit() {}
}
