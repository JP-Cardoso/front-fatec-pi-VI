import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HeaderComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);
  private userService: UserServiceService = inject(UserServiceService);
  private router: Router = inject(Router);
  private localStorageService: LocalStorageService = inject(LocalStorageService);
  hide = true;
  snackBarService: SnackBarService = inject(SnackBarService);


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
    console.log('opa');

    const data = this.loginForm.value;
    this.userService.login(data)
      .subscribe(
        {
          next: (res) => {
            const { token, id, nome } = res.data;
            this.localStorageService.setLocalStorage('token', JSON.stringify(token));
            this.localStorageService.setLocalStorage('nome', JSON.stringify(nome));
            this.localStorageService.setLocalStorage('id', JSON.stringify(id));
          },
          error: (msg) => {
            const text: string = "Erro ao logar";
            this.snackBarService.error(text);
          },
          complete: () => {
            this.router.navigateByUrl("/account")
          }

        }
      );
  }
}
