import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormComponent} from '../app/form/form.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormComponent],
  styleUrl: './app.component.css',
  template:'<app-form></app-form>'
  // templateUrl: "app.component.html"
})
export class AppComponent {
  title = 'test1';
}
