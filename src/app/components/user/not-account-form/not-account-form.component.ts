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

/**
 * code_gender: genero (M e F);
 * flag_own_car: tem carro e quantidade?
 * flag_own_realty: possui imovel e quantidae?
 * cnt_children: quantidade de filhos
 * amt_income_type: renda anual
 * name_education_type: qual o parametro? é númerico?
 * name_family_status: qual o parametro? é númerico?
 * name_housing_type: qual o parametro? é númerico?
 * days_birth: idade
 * days_employed: dias
 * flag_mobile: qual o parametro? é númerico?
 * flag_work_phone: qual o parametro? é númerico?
 * flag_phone: qual o parametro? é o número do telefone fixo?
 * occupation_type: qual o parametro
 * cnt_fam_members: quantidade de pessoas
 * month_balance: não entendi
 * status: não entendi
 * 
 * 'CODE_GENDER': 'genero',
    'FLAG_OWN_CAR': 'carro_proprio',
    'FLAG_OWN_REALTY': 'casa_propria',
    'CNT_CHILDREN': 'filhos',
    'AMT_INCOME_TOTAL': 'renda',
    'NAME_INCOME_TYPE': 'tipo_de_renda',
    'NAME_EDUCATION_TYPE': 'grau_de_escolaridade',
    'NAME_FAMILY_STATUS': 'estado_civil',
    'NAME_HOUSING_TYPE': 'tipo_de_moradia',
    'FLAG_MOBIL': 'celular',
    'FLAG_WORK_PHONE': 'telefone_trabalho',
    'FLAG_PHONE': 'telefone',
    'FLAG_EMAIL': 'email',
    'CNT_FAM_MEMBERS': 'membros_da_familia',
    'MONTHS_BALANCE': 'saldo_meses',
    'STATUS' : 'status',
    'DAYS_BIRTH' : 'idade_em_dias',
    'DAYS_EMPLOYED' : 'dias_empregado'
 */