import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { fetchLetter } from "../mock/letter.mock";
import { Letter } from "../models/letter.model";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getLetters(page: number, count: number) {
    console.log('[page] : ', page);
    return of(fetchLetter(page, count));
  }
}
