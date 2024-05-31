import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomeLayoutComponent } from '../../shared/home-layout/home-layout.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { BrandsListMenuComponent } from '../../features/brands/components/brands-list-menu/brands-list-menu.component';
import { SliderComponent } from '../../shared/components/slider/slider.component';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllBrandResponse, TransmissionTypeResponse } from '../../shared/services/api';
import { CarsCardListComponent } from '../../features/cars/cars-card-list/cars-card-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HomeLayoutComponent,
    ButtonComponent,
    BrandsListMenuComponent,
    SliderComponent,

    CarsCardListComponent
    
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  selectedBrandId: number | null = null;
  selectedTransmissionId: number | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getSelectedBrandIdFromRoute();

  }


  getSelectedBrandIdFromRoute() {
    this.route.queryParams.subscribe((params) => {
      if (
        params['brandId'] &&
        this.selectedBrandId !== Number.parseInt(params['brandId'])
      )
        this.selectedBrandId = Number.parseInt(params['brandId']);
    });
  }

  onSelectBrand(selectedBrand: GetAllBrandResponse | null) {
    this.selectedBrandId = selectedBrand?.id ?? null;

    if (this.selectedBrandId !== null) {
      this.router.navigate([''], {
        queryParams: {
          brandId: this.selectedBrandId, // ?brandId=1
        },
      });
    } else this.router.navigate(['']);
  }

 }
