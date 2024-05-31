import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EditModelFormComponent } from '../../../features/models/edit-model-form/edit-model-form.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-management-edit-model-page',
  standalone: true,
  imports: [
    CommonModule,
    EditModelFormComponent,
  ],
  template: `

      <h1>Edit Model</h1>
      <app-edit-model-form [modelId]="modelId" ></app-edit-model-form>
  

  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementEditModelPageComponent {
  modelId!: number;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.getModelIdFromRoute();
  }

  private getModelIdFromRoute() {
    this.route.params.subscribe((params) => {
      const modelId = params['modelId'];
      if (!modelId) return;

      this.modelId = Number(modelId);
    });
  }
}

