import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { BreakpointService } from "./services/breakpoint.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  isHandset$: Observable<boolean>;

  constructor(private breakpointService: BreakpointService) {
    this.isHandset$ = this.breakpointService.isHandset$;
  }

  ngOnInit(): void {}
}
