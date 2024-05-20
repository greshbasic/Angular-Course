import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .overFive {
        color: white;
      }
    `
  ]
})
export class AppComponent {
  buttonClicked = false;
  clickLog = [];
  clicks = 0;

  onButtonClick() {
    this.clicks++;
    this.buttonClicked = true;
    this.clickLog.push(this.clicks);
  }
}


