import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BrandListItemDto} from "../models/brand-list-item-dto";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
}) //singleton
export class BrandsService {
  private readonly controllerUrl = `${environment.apiUrl}/brands`;
/*  data =
    [
      { id: 1, name: 'Toyota'},
      { id: 2, name: 'Hyundai'},
      { id: 3, name: 'Ford'},
      { id: 4, name: 'Mercedes'},
    ];*/

  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<BrandListItemDto[]> {
    return this.httpClient.get<BrandListItemDto[]>(
      this.controllerUrl);
  };
}
