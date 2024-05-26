import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonComponent} from "../../../../shared/components/button/button.component";
import {CarControllerService, CreateCarRequestParams} from "../../../../shared/services/api";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonComponent
],
  templateUrl: './add-car-form.component.html',
  styleUrl: './add-car-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCarFormComponent implements OnInit{

  form!: FormGroup;
  formMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private carsService: CarControllerService,
    private change: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();

  }

  private createForm() {
    this.form = this.formBuilder.group({
      modelId: ['', [Validators.required]],
      modelYear: ['', [Validators.required]],
      plate: ['', [Validators.required]],
      dailyPrice: ['', [Validators.required]],
      state: ['', [Validators.required]],
    });
  }

  add(){
    const request: CreateCarRequestParams = {
      createCarRequest: {
        modelId: this.form.value.modelId,
        modelYear: this.form.value.modelYear,
        plate: this.form.value.plate,
        dailyPrice: this.form.value.dailyPrice,
        state: this.form.value.state,
      },
    };
    
    this.carsService.createCar(request).subscribe({
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
        this.formMessage = 'Car added successfully';
        this.form.reset();
        this.change.markForCheck(); // on push oldupu için bir sonraki bir olayak değişikliği algılamaz.
        setTimeout(() => {
          this.router.navigate(['/management', 'cars']);
        }, 2000);
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
