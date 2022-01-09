import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { Letter } from "../../models/letter.model";
import { ApiService } from "../../services/api.service";
import { merge, Observable, of as observableOf } from "rxjs";
import { catchError, map, startWith, switchMap } from "rxjs/operators";
import { BreakpointService } from "../../services/breakpoint.service";

@Component({
  selector: 'app-delivery-table',
  templateUrl: './delivery-table.component.html',
  styleUrls: ['./delivery-table.component.scss']
})
export class DeliveryTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isHandset$: Observable<boolean>;

  displayedColumns: string[] = ["firstName", "lastName", "address", "wish"];
  data: Letter[] = [];
  pageSize = 10;

  resultsLength = 0;
  
  constructor(
    private apiService: ApiService,
    private breakpointService: BreakpointService
  ) {
    this.isHandset$ = this.breakpointService.isHandset$;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.apiService!.getLetters(
            this.paginator.pageIndex,
            this.pageSize
          );
        }),
        map((data) => {
          console.log("[data] : ", data);

          if (data === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.
          this.resultsLength = data.total_count;
          return data.items;
        })
      )
      .subscribe((data) => (this.data = data));
  }
}
