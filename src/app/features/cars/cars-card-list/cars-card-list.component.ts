import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { BrandControllerService, CarControllerService, CarResponse, FuelTypeControllerService, FuelTypeResponse, GetAllBrandResponse, GetAllModelResponse, ModelControllerService, TransmissionTypeControllerService, TransmissionTypeResponse } from '../../../shared/services/api';
import { CarsListBaseComponent } from '../cars-list-base/cars-list-base.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cars-card-list',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    RouterLink
  ],
  templateUrl: './cars-card-list.component.html',
  styleUrl: './cars-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsCardListComponent extends CarsListBaseComponent implements OnInit {
  @Input() modelId: number | null = null;

  @Input() brandId: number | null = null;

  carsList: CarResponse [] = [];

  get filteredCars(): CarResponse[] {
    let newList: CarResponse[] = this.cars;

    if (this.modelId)
      newList = newList.filter((car) => car.modelId === this.modelId);

    return newList;
  }

  get filteredModels(): GetAllModelResponse[] {
    let newList: GetAllModelResponse[] = this.models;

    if (this.brandId)
      newList = newList.filter((model) => model.brandId === this.brandId);

    return newList;
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.getCarRelations();
  }

  constructor(
    private carService: CarControllerService,
    change: ChangeDetectorRef,
    private modelControllerService: ModelControllerService,
    private brandsService: BrandControllerService,
    private fuelsService: FuelTypeControllerService,
    private transmissionsService: TransmissionTypeControllerService,
    private imageUrlService: ModelControllerService,
  ){
    super(carService,change)
  }

  
  brands: GetAllBrandResponse[] = [];
  fuels: FuelTypeResponse[] = [];
  transmissions: TransmissionTypeResponse[] = [];
  models: GetAllModelResponse [] = [];

  getCarRelations(): void {
    //Model
    this.modelControllerService.getAllModels().subscribe((models)=> {
      this.models = models;
    })

    // Brand
    this.brandsService.getAllBrands().subscribe((brands) => {
      this.brands = brands;
     
    });

    // Fuel
    this.fuelsService.getAllFuelTypes().subscribe((fuels) => {
      this.fuels = fuels;

    });

  
    // Transmission
    this.transmissionsService
      .getAllTransmissionTypes()
      .subscribe((transmissions) => {
        this.transmissions = transmissions;

      });
  }

  getCarCardText(car: CarResponse): string {
    return `Model: ${
      this.models.find((model) => model.id === car.modelId)?.name
    }, Fuel: ${
      this.fuels.find((f) => f.id === car.fuelTypeId)?.type
    }, Transmission: ${
      this.transmissions.find((t) => t.id === car.transmissionTypeId)?.type
    }, Year: ${
      car.color
    }, Mileage Counter: ${
      car.mileageCounter
    }, Seating Capacity: ${
      car.seatingCapacity
    }, Plate: ${
      car.plate
    }, Price: ${
      car.price
    }, State: ${
      car.state
    }, Description: ${
      car.description
    }   
    
    `;
  }

 





 
}
