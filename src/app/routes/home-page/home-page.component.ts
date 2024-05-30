import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {HomeLayoutComponent} from "../../shared/layouts/home-layout/home-layout.component";
import {ButtonComponent} from "../../shared/components/button/button.component";
import {BrandsListMenuComponent} from "../../features/brands/components/brands-list-menu/brands-list-menu.component";
//import {BrandListItemDto} from "../../features/brands/models/brand-list-item-dto";
import {ActivatedRoute, Router} from "@angular/router";
import {GetAllBrandResponse, GetAllTransmissionResponse} from "../../shared/services/api";
import { CommonModule } from '@angular/common';
import { ModelsCardListComponent } from '../../features/models/components/models-card-list/models-card-list.component';
import { LogoSliderComponent } from '../../shared/components/logo-slider/logo-slider.component';
import { CarsListMenuComponent } from '../../features/cars/components/cars-list-menu/cars-list-menu.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HomeLayoutComponent,
    ButtonComponent,
    BrandsListMenuComponent,
    ModelsCardListComponent,
    LogoSliderComponent,
    
    CarsListMenuComponent

    
    
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit{
  selectedBrandId: number | null = null;

  selectedTransmissionId: number | null = null;



  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getSelectedBrandIdFromRoute();
    this.getSelectedTransmissionIdFromRoute();
  }

  private getSelectedBrandIdFromRoute() {
    this.route.queryParams.subscribe((params) => {
      if(
        params['brandId'] &&
        this.selectedBrandId !== Number.parseInt(params['brandId'])
      )
        this.selectedBrandId = Number.parseInt(params['brandId']);
    });
  }

  onSelectBrand(selectedBrand: GetAllBrandResponse | null){
    this.selectedBrandId = selectedBrand?.id ?? null;

    if(this.selectedBrandId !== null)
      this.router.navigate([''], {
        queryParams: {
          brandId: this.selectedBrandId,
        },
      });
    else this.router.navigate(['']);
  }

  onSelectTransmission(selectedTransmission: GetAllTransmissionResponse | null) {
    this.selectedTransmissionId = selectedTransmission?.id ?? null;

    if(this.selectedTransmissionId !== null) {
      this.router.navigate([''], {
        queryParams: {
          tranmissionId: this.selectedTransmissionId,
        },
      });
    } else this.router.navigate(['']);
  }

  getSelectedTransmissionIdFromRoute() {
    this.route.queryParams.subscribe((params) => {
      if(
        params['transmissionId'] &&
        this.selectedTransmissionId !==
          Number.parseInt(params['transmissionId'])
      )
      this.selectedTransmissionId = Number.parseInt(params['transmissionId']);
    });
  }




}
