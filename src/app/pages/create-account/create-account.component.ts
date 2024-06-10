import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../../components/header/header.component';
import { UserServiceService } from '../../services/user-service.service';
import { FormValidatios } from '../../validators/form-validator';
import { SnackBarService } from '../../services/snack-bar.service';

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
  private fb: FormBuilder = inject(FormBuilder);
  private userService: UserServiceService = inject(UserServiceService);
  hide = true;
  snackBarService: SnackBarService = inject(SnackBarService);

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.singUpForm = this.fb.group(
      {
        name: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(6)]],
        confirPpassword: [null, [
          Validators.required,
          Validators.minLength(6),
          FormValidatios.equalsTo('password')]
        ]
      }
    )
  }

  onSubmit() {
    const data = this.formatJson();
    this.userService.register(data).
      subscribe(
        {
          next: () => {},
          error:(msg) => {
            const text: string = "Erro ao cadastrar usuário";
            this.snackBarService.error(msg);
          }
        }
      )
  }

  formatJson() {
    const { name, confirPpassword, email } = this.singUpForm.value;
    return {
      nome: name,
      email,
      confirPpassword
    }
  }


}
