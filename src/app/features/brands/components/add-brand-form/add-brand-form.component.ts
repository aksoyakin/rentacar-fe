import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonComponent} from "../../../../shared/components/button/button.component";
import {BrandControllerService, CreateBrandRequestParams} from "../../../../shared/services/api";

@Component({
  selector: 'app-add-brand-form',
  standalone: true,
  imports: [
    CommonModule,
    //FormsModule,
    ReactiveFormsModule,
    ButtonComponent
  ],
  templateUrl: './add-brand-form.component.html',
  styleUrl: './add-brand-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBrandFormComponent implements OnInit{

  form!: FormGroup;
  formMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private brandsService: BrandControllerService,
    private change: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.createForm();

  }

  private createForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  add(){
    const request: CreateBrandRequestParams = {
      createBrandRequest: {
        name: this.form.value.name,
      },
    };
    this.brandsService.createBrand(request).subscribe({
      next: (response) => {
        // next: Observable'dan gelen veri yakaladığımız fonks.
        console.log(response);
      },
      error: (error) => {
        this.formMessage = error.error.message;
        this.change.markForCheck();
      },
      complete: () => {
        // comple çalıştığı takdirde observable'a  gelen veri akışı sona ere
        this.formMessage = 'Brand added successfully';
        this.form.reset();
        this.change.markForCheck(); // on push oldupu için bir sonraki bir olayak değişikliği algılamaz.
      },
    });
  }

  onFormSubmit() {
    if(this.form.invalid){
      this.formMessage = 'Please fill all required fields';
      return
    }
    this.add();
  }

}
