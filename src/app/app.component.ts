import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatButtonToggleModule,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  chosenLink ?:string ;
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
