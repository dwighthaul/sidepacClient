import { Component, Input, OnInit } from '@angular/core';
import { Demande } from 'src/app/model/sidepa';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {

  @Input()
  demande !: Demande;

  constructor() { }

  ngOnInit(): void {
  }

}
