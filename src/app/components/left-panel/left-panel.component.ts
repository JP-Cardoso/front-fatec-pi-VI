import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-left-panel',
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.scss'
})
export class LeftPanelComponent {

  onClickPage(route: string | any) {
    
  }

}
