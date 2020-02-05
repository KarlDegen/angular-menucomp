import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  arr: number[] = [3,6,5,3,1,0,3,2,3];

  do1() {
    this.arr.sort(
      (a,b) => {  return a - b }
    );
  }
}
