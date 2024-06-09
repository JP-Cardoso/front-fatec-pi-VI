import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

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
  
  private router: Router = inject(Router)
  
  logout() {
    this.router.navigateByUrl("/")
  }

  onClickPage(route: string | any) {

  }

}
