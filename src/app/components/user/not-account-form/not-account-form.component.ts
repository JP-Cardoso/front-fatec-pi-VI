import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { UserServiceService } from '../../../services/user-service.service';
import { DialogComponent } from '../../dialog/dialog.component';
import { LocalStorageService } from '../../../services/local-storage.service';


@Component({
  selector: 'app-not-account-form',
  standalone: true,
  imports: [
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  templateUrl: './not-account-form.component.html',
  styleUrl: './not-account-form.component.scss'
})
export class NotAccountFormComponent {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  private localStorageService: LocalStorageService = inject(LocalStorageService);
  private idConta!: string;
  constructor(
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,
    private userService: UserServiceService,
  ) { }

  ngOnInit() {
    this.fetchUserInformation();
    this.firstFormGroupBuild();
    this.secondFormGroupBuild();
    this.thirdFormGroupBuild();
  }


  fetchUserInformation() {
    const id: string = this.localStorageService.getLocalStorage("id");

    this.userService.seachAccountData(id)
      .subscribe(
        {
          next: (res: any) => {
            console.log(res.idConta);
            this.idConta = res.idConta;
          }
        }
      );
  }

  firstFormGroupBuild() {
    this.firstFormGroup = this._formBuilder.group({
      genero: [null, Validators.required],
      filhos: [null, Validators.required],
      estado_civil: [null, Validators.required],
      faixa_etaria: [null, Validators.required],
      membros_da_familia: [null, Validators.required],
    });
  }

  secondFormGroupBuild() {
    this.secondFormGroup = this._formBuilder.group({
      carro_proprio: [null, [Validators.required]],
      casa_propria: [null, [Validators.required]],
      tipo_de_moradia: [null, [Validators.required]],
      tipo_de_renda: [null, [Validators.required]],
      grau_de_escolaridade: [null, [Validators.required]]
    });
  }

  thirdFormGroupBuild() {
    this.thirdFormGroup = this._formBuilder.group({
      renda_anual: [null, [Validators.required]],
      tempo_emprego: [null, [Validators.required]],
      tempo_registro_dado: [0]
    });
  }

  onValidateForm() {
    const isvalid = this.isValid();
    let data = {}
    if (isvalid) {
      const formData = {
        idConta: this.idConta,
        ...this.firstFormGroup.value,
        ...this.secondFormGroup.value,
        ...this.thirdFormGroup.value,
        celular: 1,
        telefone_trabalho: 1,
        telefone: 0,
        email: 1
      };
      data = { ...formData }
    
    }
    return data;
  }
  isValid(): boolean {
    return this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup ? true : false;
  }

  onSubmit() {
    const data = this.onValidateForm();
    console.log(data);
    this.userService.analytics(data)
      .subscribe(
        {
          next: () => {
            //abrir dialog
            this.openDialog();
          },
          error: () => { },
          complete: () => { }
        }
      )
  }

  openDialog() {
    const dialogRef = this.dialog.open(
      DialogComponent
    )
  }

}
