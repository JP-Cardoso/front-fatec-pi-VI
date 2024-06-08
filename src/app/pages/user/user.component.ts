import { Component } from '@angular/core';
import { LeftPanelComponent } from '../../components/left-panel/left-panel.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    LeftPanelComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
