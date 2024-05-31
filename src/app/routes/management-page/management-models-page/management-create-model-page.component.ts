import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddModelFormComponent } from '../../../features/models/add-model-form/add-model-form.component';

@Component({
  selector: 'app-management-create-model-page',
  standalone: true,
  imports: [
    CommonModule,
    AddModelFormComponent,
  ],
  template:`

    <h1>Add Model</h1>
    <app-add-model-form></app-add-model-form>
    
  `,
  styles:``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementCreateModelPageComponent { }
