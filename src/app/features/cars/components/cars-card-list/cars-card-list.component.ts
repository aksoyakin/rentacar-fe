import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CarsListBaseComponent } from '../cars-list-base/cars-list-base.component';
import { CarControllerService, FuelControllerService, GetAllCarResponse, GetAllFuelResponse, GetAllModelResponse, GetAllTransmissionResponse, ModelControllerService, TransmissionControllerService } from '../../../../shared/services/api';
import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-cars-card-list',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
  ],
  templateUrl: './cars-card-list.component.html',
  styleUrl: './cars-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsCardListComponent extends CarsListBaseComponent implements OnInit {
  




 }

