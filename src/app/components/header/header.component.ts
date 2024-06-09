import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    IconComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  private logo: string = "/src/assets/icons/icon-a.svg"

  private router: Router = inject(Router);

  ngOnInit() {
    console.log(this.logo);

  }

  onSingUp() {
    this.router.navigateByUrl("/create-account");
  }

  onLogin() {
    this.router.navigateByUrl("/login");
  }

  onNavigate(path: string) {
    this.router.navigateByUrl(`${path}`);
  }

}
