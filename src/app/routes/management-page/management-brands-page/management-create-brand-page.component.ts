import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddBrandFormComponent } from '../../../features/brands/components/add-brand-form/add-brand-form.component';

@Component({
  selector: 'app-management-create-brand-page',
  standalone: true,
  imports: [
    CommonModule,
    AddBrandFormComponent,
  ],
  template: `
  
    <h1>Add Brand</h1>
    <app-add-brand-form></app-add-brand-form>

    `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementCreateBrandPageComponent { }
