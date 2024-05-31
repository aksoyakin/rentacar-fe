import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrandService } from '../../services/brand.service';
import { BrandControllerService } from '../../../../shared/services/api';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-edit-brand-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent
  ],
  templateUrl: './edit-brand-form.component.html',
  styleUrl: './edit-brand-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditBrandFormComponent {
  @Input() brandId!: number;

  form!: FormGroup;
  formMessage: string | null = null;

  constructor(
    private fb: FormBuilder, 
    private brandsService:BrandService,
    private brandControllerService: BrandControllerService,
    private change: ChangeDetectorRef,
    private router: Router
  ){}

  ngOnInit(): void {
    this.createForm();
    this.getBrand();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['',[Validators.required]]
    });
  }

  getBrand() {
    this.brandsService.getBrandById({id: this.brandId}).subscribe((brand) =>{
      this.form.patchValue({
        name: brand.name,
      });
    });
  }

  edit() {
    this.brandControllerService.updateBrandById({id: this.brandId, updateBrandRequest:{
      name: this.form.value.name
    }}).subscribe({
      complete: () => {
        this.formMessage = 'Brand updated successfully.';
        this.change.markForCheck;

        setTimeout(() => {
          this.router.navigate(['/management', 'brands']);
        }, 2000);
      },
    });
  }

  onFormSubmit() {
    if(this.form.invalid){
      this.formMessage = 'Please fill the form correctly';
      return;
    }
    this.edit();
  }
 }
