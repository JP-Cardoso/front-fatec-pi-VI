import { Component } from '@angular/core';
import { LeftPanelComponent } from '../../components/left-panel/left-panel.component';
import { TransactionsComponent } from '../../components/transactions/transactions.component';
import { CardComponent } from '../../components/card/card.component';
import { CardInfoComponent } from '../../components/card-info/card-info.component';
import { CardAccountComponent } from '../../components/user/card-account/card-account.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    LeftPanelComponent,
    TransactionsComponent,
    CardComponent,
    CardInfoComponent,
    CardAccountComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
