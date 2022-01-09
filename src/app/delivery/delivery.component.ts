import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { BreakpointService } from "../services/breakpoint.service";

@Component({
  selector: "app-delivery",
  templateUrl: "./delivery.component.html",
  styleUrls: ["./delivery.component.scss"],
})
export class DeliveryComponent implements OnInit {
  
  isHandset$: Observable<boolean>;

  constructor(
    private breakpointService: BreakpointService
  ) {
    this.isHandset$ = this.breakpointService.isHandset$;
  }

  ngOnInit(): void {}

  
}
