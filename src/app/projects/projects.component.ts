import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  routeObj: object = {}
  routeList: array = []
  constructor() { }

  removeRoute(i){

  }



  ngOnInit() {
    for (let key in localStorage){
      if (key % 2 == 0 || key % 2 == 1){
        this.routeObj[key] = JSON.parse(localStorage[key])
        this.routeList.push(this.routeObj[key][0])
      }
    }
  }
