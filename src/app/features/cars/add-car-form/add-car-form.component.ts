import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarControllerService, CreateCarRequestParams } from '../../../shared/services/api';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-add-car-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './add-car-form.component.html',
  styleUrl: './add-car-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCarFormComponent implements OnInit {
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

  createForm() {
    this.form = this.formBuilder.group({
      year: ['',[Validators.required]],
      mileageCounter: ['',[Validators.required]],
      seatingCapacity: ['',[Validators.required]],
      plate: ['',[Validators.required]],
      color: ['',[Validators.required]],
      price: ['',[Validators.required]],
      state: ['',[Validators.required]],
      description: ['',[Validators.required]],
      modelId: ['',[Validators.required]],
      transmissionTypeId: ['',[Validators.required]],
      fuelTypeId: ['',[Validators.required]],
    });
  }

  add(){
    const request: CreateCarRequestParams = {
      carRequest: {
        year: this.form.value.year,
        mileageCounter: this.form.value.mileageCounter,
        seatingCapacity: this.form.value.seatingCapacity,
        plate: this.form.value.plate,
        color: this.form.value.color,
        price: this.form.value.price,
        state: this.form.value.state,
        description: this.form.value.description,
        modelId: this.form.value.modelId,
        transmissionTypeId: this.form.value.transmissionTypeId,
        fuelTypeId: this.form.value.fuelTypeId,
      },
    };

    this.carsService.createCar(request).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        this.formMessage = error.error.message;
        this.change.markForCheck();
      },
      complete: () => {
        this.formMessage = "Car added successfully.";
        this.form.reset();
        this.change.markForCheck();
        setTimeout(() => {
          this.router.navigate(['/management', 'cars']);
        }, 2000);
      },
    });
  }

  onFormSubmit() {
    if(this.form.invalid){
      this.formMessage = "Please fill all required fields."
      return
    }
    
    this.add();
  }

 }
