import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  constructor(private breakpointObserver: BreakpointObserver) { }

  get isHandset$() {
    return this.breakpointObserver
            .observe([ 
                Breakpoints.XSmall, 
                Breakpoints.Small, 
                // Breakpoints.Medium
            ])
            .pipe(
                map((result) => result.matches),
                shareReplay()
            );
  }
}
