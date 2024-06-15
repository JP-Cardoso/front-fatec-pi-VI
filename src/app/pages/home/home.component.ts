import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from '../../components/card/card.component';
import { CardInfoComponent } from '../../components/card-info/card-info.component';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    CardComponent,
    CardInfoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private userService: UserServiceService
  ) {
    this.userService.healthcheck().subscribe({
      next: (msg: any) => {
        console.log(msg);
      }
    })
  }
}
