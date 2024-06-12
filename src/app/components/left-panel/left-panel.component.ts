import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-left-panel',
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.scss'
})
export class LeftPanelComponent implements OnInit {

  private router: Router = inject(Router);
  private localStorageService: LocalStorageService = inject(LocalStorageService);
  name!: string;

  ngOnInit() {     
    this.name = this.localStorageService.getLocalStorage('nome').toUpperCase();    
  }

  logout() {
    this.localStorageService.clearAll();
    this.router.navigateByUrl("/");
  }

  onClickPage(route: string | any) {

  }

}
