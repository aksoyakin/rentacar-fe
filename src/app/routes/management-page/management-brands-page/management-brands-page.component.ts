import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BrandsListTableComponent } from '../../../features/brands/components/brands-list-table/brands-list-table.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-management-brands-page',
  standalone: true,
  imports: [
    CommonModule,
    BrandsListTableComponent,
    ButtonComponent,
    RouterModule,
  ],
  template: `

    <div class="d-flex justify-content-between align-items-center">

      <h1>Brands</h1>
      <app-button routerLink="/management/brands/create" variant="primary">Create Brand</app-button>

    </div>

    <app-brands-list-table></app-brands-list-table>

  
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ManagementBrandsPageComponent { }
