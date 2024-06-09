import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../../components/header/header.component';


@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    HeaderComponent
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {

  singUpForm!: FormGroup;
  private fb: FormBuilder = inject(FormBuilder)
  formControl: any;
  emailFormControl: any;
  hide = true;

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.singUpForm = this.fb.group(
      {
        name: [null, Validators.required],
        lastName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(6)]]
      }
    )
  }

  onSubmit() {
    const data = this.singUpForm.value;
    console.log(data);
    
  }

}
