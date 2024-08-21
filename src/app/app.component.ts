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
  noResultsFound = false;
  // console.log(localImg);
  async fetchDogs(dogName:string | null): Promise<String | null>{
    const data = await fetch(`https://dog.ceo/api/breed/${dogName}/images/random`)
    return await data.json()
  }
  searchLocation:Function = () => {
    console.log('testLocal', this.enteredLocation.value);
    this.noResultsFound = false;
    this.fetchDogs(this.enteredLocation.value)
    .then((res:any) => {
      console.log('res', res);
      if(res.status == 'success'){
        this.localImg = res.message;
        this.searchComplete = true;
      }else{
        this.noResultsFound = true;
      }
    })
    .catch((err) => console.log('err', err));
  };
}
