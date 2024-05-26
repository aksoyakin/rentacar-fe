import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import {MenuComponent, MenuItem} from "../../../../shared/components/menu/menu.component";
//import {CarListItemDto} from "../../models/car-list-item-dto";
import {CarControllerService, GetAllCarResponse} from "../../../../shared/services/api";
import {CarsListBaseComponent} from "../cars-list-base/cars-list-base.component";
import { CommonModule } from '@angular/common';
//import {CarsService} from "../../services/cars.service";

@Component({
  selector: 'app-cars-list-menu',
  standalone: true,
  imports: [
    CommonModule,
    MenuComponent
],
  templateUrl: './cars-list-menu.component.html',
  styleUrl: './cars-list-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsListMenuComponent extends CarsListBaseComponent implements OnInit {
  
  get carsMenuItem(): MenuItem[] {
    console.log(this.cars);

    return (
      this.cars?.map((car) => {
        return {
          label: car.modelName!, // ' ! ' : null olmayan bir değer olduğunu belirtir. //değiştirilecek modelName ile
          click: (_: MouseEvent) => this.onSelectCar(car),
        };
      }) ?? []
    );
  }

}
