import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms'
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  template: `<form  (ngSubmit)="writeTo()">
  <label for="inputField">Enter your name:</label>
  <input type="text" id="inputField" name="name" [(ngModel)]="name" required>
  <button type="submit">Submit</button>
</form>
@if (data) {
  <section class="weatherData">
    <div class="firstline">
      <p>{{ data.name }}</p>
      <img [src]="getWeatherIconURL(data.weather[0].icon)" alt="Weather Icon" />
    </div>
    <div class="secondLine">
    <p>Humidity: {{ data.main.humidity }}</p>
    <p>Pressure:{{ data.main.pressure }}</p>
    <p>wind Speed: {{ data.wind.speed }}</p>
    <p>weather:{{ data.weather[0].main }}</p>
        </div>
  </section>
  }
`,
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(private httpClient: HttpClient) {


  }
  name: string = '';
  data: any

  writeTo() {
    console.log(this.name);
    this.getWeather(this.name);
  }
  //`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=07757ec187083d20a61ca9076760437d`
  getWeather(cityName: string) {
    this.httpClient.get(`http://localhost:3001?city=${cityName}`).toPromise().then(result => {
      this.data = result;
      console.log(this.data)
    }).catch(error => {
      this.data = null;
    });
  }
  getWeatherIconURL(icon: any) {
    return `http://openweathermap.org/img/w/${icon}.png`;
  }

}
