import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditBrandFormComponent } from '../../../features/brands/components/edit-brand-form/edit-brand-form.component';

@Component({
  selector: 'app-management-edit-brand-page',
  standalone: true,
  imports: [
    CommonModule,
    EditBrandFormComponent
  ],
  template: `

      <h1>Edit Brand</h1>
      <app-edit-brand-form [brandId]="brandId" ></app-edit-brand-form>
  
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementEditBrandPageComponent {

  brandId!: number;

  constructor(private route: ActivatedRoute

  ){

  }

  ngOnInit(): void {
    this.getBrandIdFromRoute();
  }

  private getBrandIdFromRoute() {
    this.route.params.subscribe((params) => {
      const brandId = params['brandId'];
      if (!brandId) return;

      this.brandId = Number(brandId);
    });
  }
 }
