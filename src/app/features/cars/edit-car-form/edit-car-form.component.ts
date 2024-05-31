import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { Router } from '@angular/router';
import { CarControllerService } from '../../../shared/services/api';

@Component({
  selector: 'app-edit-car-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './edit-car-form.component.html',
  styleUrl: './edit-car-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCarFormComponent implements OnInit {

  @Input() carId!: number;

  form!: FormGroup;
  formMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder, 
    private carsService:CarControllerService,
    private change: ChangeDetectorRef,
    private router: Router
  ){}

  ngOnInit(): void {
    this.createForm();
    this.getCar();
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

  getCar(){
    this.carsService.getCarById({ id: this.carId }).subscribe((car) => {
      this.form.patchValue({
        year: car.year,
        mileageCounter: car.mileageCounter,
        seatingCapacity: car.seatingCapacity,
        plate: car.plate,
        color: car.color,
        price: car.price,
        state: car.state,
        description: car.description,
        modelId: car.modelId,
        transmissionTypeId: car.transmissionTypeId,
        fuelTypeId: car.fuelTypeId
      });
    });
  }

  edit(){
    this.carsService.updateCarById({id: this.carId, carRequest:{
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
  }) .subscribe ({
    complete: () => {
      this.formMessage = 'Car updated succesfully.'
      this.change.markForCheck;

      setTimeout(() => {
        this.router.navigate(['/management', 'cars']);
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
