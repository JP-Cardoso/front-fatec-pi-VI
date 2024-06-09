import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HeaderComponent,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);


  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group(
      {
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(6)]],
      }
    )
  }

  onSubmit() {
    const data = this.loginForm.value;    
  }
}
