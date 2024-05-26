import { Component } from '@angular/core';

import {AddCarFormComponent} from "../../../features/cars/components/add-car-form/add-car-form.component";
import {
  CarsListTableComponent
} from "../../../features/cars/components/cars-list-table/cars-list-table.component";
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-management-cars-page',
  standalone: true,
  imports: [
    CommonModule,
    CarsListTableComponent,
    ButtonComponent,
    RouterModule
],
  templateUrl: './management-cars-page.component.html',
  styleUrl: './management-cars-page.component.scss'
})
export class ManagementCarsPageComponent {

}
