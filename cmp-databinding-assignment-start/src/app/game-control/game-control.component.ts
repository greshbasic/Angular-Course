import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  interval;
  lastNumber: number = 0;
  @Output() intervalFired = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onEndGame() {
    clearInterval(this.interval);
  }
}
