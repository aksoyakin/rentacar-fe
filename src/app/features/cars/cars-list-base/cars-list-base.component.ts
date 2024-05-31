import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarControllerService, CarResponse } from '../../../shared/services/api';

@Component({
  selector: 'app-cars-list-base',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template:``,
  styles:``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsListBaseComponent implements OnInit {
  @Input() initialSelectedCarId: number | null = null;
  @Output() selectCar = new EventEmitter<CarResponse | null>();



  cars !: CarResponse[];
  selectedCar: CarResponse | null = null;
  initialSelectedCarIndex: number | null = null;

  constructor(
    private carsService: CarControllerService,
    private change: ChangeDetectorRef) {}

  ngOnInit() {
    this.getCarsList()
  }

  getCarsList() {
    this.carsService.getAllCars().subscribe((response) => {
    
      
      this.cars = response;

      if (this.initialSelectedCarId) {
        this.selectedCar =
          this.cars.find(
            (car) => car.id === this.initialSelectedCarId
          ) ?? null;
        this.initialSelectedCarIndex = this.cars.findIndex(
          (car) => car.id === this.initialSelectedCarId
        );
      }
      this.change.markForCheck();
    });
  }

  onSelectCar(car: CarResponse) {
    this.selectedCar = this.selectedCar?.id !== car.id ? car : null;
    this.selectCar.emit(this.selectedCar);
  }
 }
