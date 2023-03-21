import { Dashboard } from './../../../../model/structure/Dashboard';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  @Input()
  dashboard !: Dashboard;

  ngOnInit(): void {
  }

}
