import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import {CarsListBaseComponent} from "../cars-list-base/cars-list-base.component";
import {TableDirective} from "../../../../shared/directives/table.directive";
import {CommonModule} from "@angular/common";
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { CarControllerService, ModelControllerService } from '../../../../shared/services/api';
import { Observable } from 'rxjs';
import { ModelsCardListComponent } from '../../../models/components/models-card-list/models-card-list.component';


@Component({
  selector: 'app-cars-list-table',
  standalone: true,
  imports: [
    TableDirective,
    CommonModule,
    ButtonComponent,
    RouterModule
  ],
  templateUrl: './cars-list-table.component.html',
  styleUrl: './cars-list-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarsListTableComponent extends CarsListBaseComponent{



  constructor(
    carsService: CarControllerService, 
    change: ChangeDetectorRef,
    private carControllerService: CarControllerService,


  ){
    super(carsService,change);
  }

  deleteCar(id: number) {
    this.carControllerService.deleteCarById({ id }).subscribe({
      complete: () => {
        this.getCarsList();
      },
    });
  }




}
