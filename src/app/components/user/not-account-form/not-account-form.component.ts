import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-not-account-form',
  standalone: true,
  imports: [
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './not-account-form.component.html',
  styleUrl: './not-account-form.component.scss'
})
export class NotAccountFormComponent {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onValidateForm() {
    if (this.firstFormGroup.valid && this.secondFormGroup.valid) {
      const formData = {
        ...this.firstFormGroup.value,
        ...this.secondFormGroup.value
      };
      console.log('Formulário enviado com sucesso!', formData);
    }
  }

  buildObject() {}

  onSubmit() {}
}
