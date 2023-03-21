import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {
  isDisplayDebug = false;
  constructor() { }

  @Input()
  public objectDebug: any

  @Input()
  public objectNom!: string;

  ngOnInit(): void {
  }

  display() {
    this.isDisplayDebug = true;
  }
  hide() {
    this.isDisplayDebug = false;
  }

}
