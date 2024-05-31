import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditCarFormComponent } from '../../../features/cars/edit-car-form/edit-car-form.component';

@Component({
  selector: 'app-management-edit-car-page',
  standalone: true,
  imports: [
    CommonModule,
    EditCarFormComponent,
  ],
  template: `
  
      <h1>Edit Car</h1>
      <app-edit-car-form [carId]="carId" ></app-edit-car-form>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementEditCarPageComponent implements OnInit {

  carId!: number;

  constructor(private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.getCarIdFromRoute();
  }

  private getCarIdFromRoute() {
    this.route.params.subscribe((params) => {
      const carId = params['carId'];
      if (!carId) return;

      this.carId = Number(carId);
    });
  }

 }
