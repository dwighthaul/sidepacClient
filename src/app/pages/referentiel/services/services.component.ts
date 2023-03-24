import { BackService } from 'src/app/service/back.service';
import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/model/sidepa';
import { TreeviewConfig, TreeviewItem } from '@charmedme/ngx-treeview';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  items: TreeviewItem[];
  configTreeview = {
    nbrLevelDisplay: 2,
    displayDebug: false
  }

  constructor(private serviceBack: BackService) { }

  ngOnInit(): void {

    this.serviceBack.recuperationServices((services: Service[]) => {
      this.items = this.parseServices(services);
    });

  }

  private parseServices(services: Service[]) {
    let nodes: TreeviewItem[];

    nodes = services.filter((service) => {
      return (service.path.split("/").length === 2);
    }).map((service) => {
      return this.creerTreviewDepuisService(service, services, 0);
    })
    return nodes;
  }

  private creerTreviewDepuisService(service: Service, services: Service[], value: number) {
    let childs: TreeviewItem[];

    childs = services.filter((serviceChild) => {
      let pathParent = serviceChild.path.substring(0, serviceChild.path.lastIndexOf("/"))
      return service.path === pathParent
    }).map((service) => {
      return this.creerTreviewDepuisService(service, services, value + 1);
    })

    return new TreeviewItem({
      text: service.code,
      value: value,
      collapsed: true,
      children: childs
    })
  }

}
