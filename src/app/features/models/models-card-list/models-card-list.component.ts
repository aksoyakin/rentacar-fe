/* import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ModelsListBaseComponent } from '../models-list-base/models-list-base.component';
import { BrandControllerService, FuelTypeControllerService, FuelTypeResponse, GetAllBrandResponse, GetAllModelResponse, ModelControllerService, TransmissionTypeControllerService, TransmissionTypeResponse } from '../../../shared/services/api';

@Component({
  selector: 'app-models-card-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './models-card-list.component.html',
  styleUrl: './models-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsCardListComponent extends ModelsListBaseComponent implements OnInit {
  @Input() brandId: number | null = null;

  get filteredModels(): GetAllModelResponse[] {
    let newList: GetAllModelResponse[] = this.models;

    if (this.brandId)
      newList = newList.filter((model) => model.brandId === this.brandId);

    return newList;
  }

  constructor(
    private modelControllerService: ModelControllerService,
    private brandsService: BrandControllerService,
    private fuelsService: FuelTypeControllerService,
    private transmissionsService: TransmissionTypeControllerService,
    private imageUrlService: ModelControllerService,
    change: ChangeDetectorRef
  ) {
    super(modelControllerService, change);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.getModelRelations();
  }

  brands: GetAllBrandResponse[] = [];
  fuels: FuelTypeResponse[] = [];
  transmissions: TransmissionTypeResponse[] = [];
  imageUrls: GetAllModelResponse[] = [];



  getModelRelations(): void {
    // Brand
    this.brandsService.getAllBrands().subscribe((brands) => {
      this.brands = brands;
      this.change.markForCheck();
    });

    // Fuel
    this.fuelsService.getAllFuelTypes().subscribe((fuels) => {
      this.fuels = fuels;
      this.change.markForCheck();
    });

  
    // Transmission
    this.transmissionsService
      .getAllTransmissionTypes()
      .subscribe((transmissions) => {
        this.transmissions = transmissions;
        this.change.markForCheck();
      });

    
  }

  getModelCardText(model: GetAllModelResponse): string {
    return `Brand: ${
      this.brands.find((brand) => brand.id === model.brandId)?.name
    }, Fuel: ${
      this.fuels.find((f) => f.id === model.fuelId)?.name
    }, Transmission: ${
      this.transmissions.find((t) => t.id === model.transmissionId)?.name
    }, ImageUrl: ${
      this.imageUrls.find((u) => u.imageUrl === model.imageUrl)?.imageUrl }
    `;
  }
 }
 */