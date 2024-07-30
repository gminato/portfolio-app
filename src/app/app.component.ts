import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatButtonToggleModule,FormsModule,CommonModule,MatInputModule,MatIconModule,MatFormFieldModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
chosenLink ?:string = "home";
name?:string;
email?:string;
  toggleButtonArray =[
    {
      "value":"home",
      "title":"Home"
    },
    {
      "value":"about",
      "title":"About",
    },
    {
      "value":"projects",
      "title":"Projects"
    },
    {
      "value":"contact",
      "title":"Contact"
    }
  ] 
}
