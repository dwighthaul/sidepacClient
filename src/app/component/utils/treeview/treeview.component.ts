import { Component, Input, OnInit } from '@angular/core';
import { TreeviewItem } from '@charmedme/ngx-treeview';
import { Service } from 'src/app/model/sidepa';
import { BackService } from 'src/app/service/back.service';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent implements OnInit {
  @Input()
  items: TreeviewItem[];

  @Input()
  config: any;

  @Input()
  id: string = '0';

  @Input()
  level: number = 0;
  constructor() {
    /*
        console.log(this.items);
        if (!this.items) {
          console.log(this.level + " Pas d'items");
          return;
        }
        this.items.forEach((item) => {
          item.collapsed = (this.level < this.config.nbrLevelDisplay);
        })*/
  }

  ngOnInit(): void {/*
    console.log(this.items);
    if (!this.items) {
      console.log(this.level + " Pas d'items");
      return;
    }
    this.items.forEach((item) => {
      item.collapsed = (this.level < this.config.nbrLevelDisplay);
    })*/
  }

  toggleAffichage(item: TreeviewItem) {
    console.log("Toggle : " + item.text);
    item.collapsed = !item.collapsed;
  }

}
