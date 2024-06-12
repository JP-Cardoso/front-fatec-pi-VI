import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { UserServiceService } from '../../../services/user-service.service';
import { DialogComponent } from '../../dialog/dialog.component';


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

  constructor(
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,
    private userService: UserServiceService,
  ) { }

  ngOnInit() {
    this.firstFormGroupBuild();
    this.secondFormGroupBuild();
    this.thirdFormGroupBuild();
  }

  firstFormGroupBuild() {
    this.firstFormGroup = this._formBuilder.group({
      genero: ['', Validators.required],
      filhos: ['', Validators.required],
      estado_civil: ['', Validators.required],
      faixa_etaria: ['', Validators.required],
      membros_da_familia: ['', Validators.required],
    });
  }

  secondFormGroupBuild() {
    this.secondFormGroup = this._formBuilder.group({
      carro_proprio: ['', [Validators.required]],
      casa_propria: ['', [Validators.required]],
      tipo_de_moradia: ['', [Validators.required]],
      tipo_de_renda: ['', [Validators.required]],
      grau_de_escolaridade: ['', [Validators.required]]
    });
  }

  thirdFormGroupBuild() {
    this.thirdFormGroup = this._formBuilder.group({
      renda_anual: ['', [Validators.required]],
      tempo_emprego: ['', [Validators.required]],
      tempo_registro_dado: ['Nenhum mes']
    });
  }

  onValidateForm() {
    this.openDialog();
    const isvalid = this.isValid();
    let data = {}
    if (isvalid) {
      const formData = {
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
