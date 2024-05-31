import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModelsListTableComponent } from '../../../features/models/models-list-table/models-list-table.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-management-models-page',
  standalone: true,
  imports: [
    CommonModule,
    ModelsListTableComponent,
    ButtonComponent,
    RouterModule,
  ],
  template:`
  
  <div class="d-flex justify-content-between align-items-center">
    <h1>Models</h1>
    <app-button routerLink="/management/models/create" variant="primary">Create Model</app-button>
  </div>

  <app-models-list-table></app-models-list-table>

  
  `,
  styles:``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementModelsPageComponent { }
