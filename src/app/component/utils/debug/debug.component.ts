import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {
  isDisplayDebug = false;
  estDebug = false;
  constructor(private route: ActivatedRoute) { }

  @Input()
  public objectDebug: any

  @Input()
  public objectNom!: string;

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.estDebug = (params['estDebug']) ? true : false;
      }
      );
  }

  display() {
    this.isDisplayDebug = true;
  }
  hide() {
    this.isDisplayDebug = false;
  }

}
