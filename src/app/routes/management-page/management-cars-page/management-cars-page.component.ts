import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarsListTableComponent } from '../../../features/cars/cars-list-table/cars-list-table.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-management-cars-page',
  standalone: true,
  imports: [
    CommonModule,
    CarsListTableComponent,
    ButtonComponent,
    RouterModule,
  ],
  template: `
    <div class="d-flex justify-content-between align-items-center">
      <h1>Cars</h1>
      <app-button routerLink="/management/cars/create" variant="primary">Create Car</app-button>
    </div>

    <app-cars-list-table></app-cars-list-table>

  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementCarsPageComponent { }
