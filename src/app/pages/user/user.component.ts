import { Component, inject } from '@angular/core';
import { LeftPanelComponent } from '../../components/left-panel/left-panel.component';
import { TransactionsComponent } from '../../components/user/transactions/transactions.component';
import { CardComponent } from '../../components/card/card.component';
import { CardInfoComponent } from '../../components/card-info/card-info.component';
import { CardAccountComponent } from '../../components/user/card-account/card-account.component';
import { NotAccountComponent } from '../../components/user/not-account/not-account.component';
import { LocalStorageService } from '../../services/local-storage.service';
import { UserServiceService } from '../../services/user-service.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    LeftPanelComponent,
    TransactionsComponent,
    CardComponent,
    CardInfoComponent,
    CardAccountComponent,
    NotAccountComponent,
    MatProgressSpinnerModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  account: boolean = false;
  agencia: string = "";
  saldo!: number;
  spinner: boolean = false;

  private localStorageService: LocalStorageService = inject(LocalStorageService);
  private userService: UserServiceService = inject(UserServiceService);

  ngOnInit() {
    this.fetchUserInformation();
  }

  fetchUserInformation() {
    const id: string = this.localStorageService.getLocalStorage("id");

    this.userService.seachAccountData(id)
      .subscribe(
        {
          next: (res: any) => {
            this.spinner = true;
            res.status !== "ATIVADO" ? this.account = false : this.account = true;
            this.agencia = res.agencia;
            this.saldo = parseFloat(res.saldo)
          }
        }
      );
  }
}