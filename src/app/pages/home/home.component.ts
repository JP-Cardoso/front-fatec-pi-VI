import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from '../../components/card/card.component';
import { CardInfoComponent } from '../../components/card-info/card-info.component';

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

}
