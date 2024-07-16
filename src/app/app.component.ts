import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'vt-hiking-trails';
  enteredLocation = new FormControl('');
  localImg = new String;
  searchComplete = false;
  async fetchDogs(): Promise<String | null>{
    const data = await fetch('https://dog.ceo/api/breeds/image/random')
    return await data.json()
  }
  searchLocation:Function = () => {
    console.log('testLocal', this.enteredLocation);
    this.fetchDogs()
    .then((res:any) => {
      console.log('res', res);
      this.localImg = res.message;
      this.searchComplete = true;
    })
    .catch((err) => console.log('err', err));
  };
}
