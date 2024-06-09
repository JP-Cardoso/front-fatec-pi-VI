import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-not-account',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './not-account.component.html',
  styleUrl: './not-account.component.scss'
})
export class NotAccountComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}
