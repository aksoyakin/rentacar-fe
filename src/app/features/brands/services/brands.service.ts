import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) //singleton
export class BrandsService {
  data =
    [
      { id: 1, name: 'Toyota'},
      { id: 2, name: 'Hyundai'},
      { id: 3, name: 'Ford'},
      { id: 4, name: 'Mercedes'},
    ];

  constructor() { }

  getBrands() {
    return this.data;
  }
}
