import { Component, inject } from '@angular/core';
import { LocalStorageService } from '../../../services/local-storage.service';
import { UserServiceService } from '../../../services/user-service.service';

@Component({
  selector: 'app-card-account',
  standalone: true,
  imports: [],
  templateUrl: './card-account.component.html',
  styleUrl: './card-account.component.scss'
})
export class CardAccountComponent {

  agencia: string = "";
  saldo!: number; 

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
            this.agencia = res.agencia;
            this.saldo = res.saldo;
            console.log(res);
          }
        }
      );
  }
}
