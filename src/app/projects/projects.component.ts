import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  routeObj: object = {}
  tempObj: object = {}
  routeList = []
  routeToRemove: string = ''
  keyList = []
  count: number = 0

  constructor() { }

  removeRoute(event){
    for (let i = 0; i < this.routeList.length; i++){
      if (this.routeList[i].number == this.routeToRemove){
        this.routeList.splice(i, 1)
        console.log(this.routeList)
      }
    }
  }

  getRouteName(){
    this.routeToRemove = event.target.value
  }


  ngOnInit() {
    for (let key in localStorage){
      if (key % 2 == 0 || key % 2 == 1){
        this.routeObj[key] = JSON.parse(localStorage[key])
        this.routeList.push(this.routeObj[key][0])
        this.keyList.push(parseInt(key))
      }
    }
  }
