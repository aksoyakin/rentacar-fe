import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddCarFormComponent } from '../../../features/cars/add-car-form/add-car-form.component';

@Component({
  selector: 'app-management-create-car-page',
  standalone: true,
  imports: [
    CommonModule,
    AddCarFormComponent,
  ],
  template:`
  
      <h1>Add Car</h1>
      <app-add-car-form></app-add-car-form>
  `,
  styles:``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementCreateCarPageComponent { }
