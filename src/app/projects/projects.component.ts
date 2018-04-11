import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  routeObj: object = {}
  tempRouteName: string = ''
  tempRouteGrade: string = ''
  tempRouteUrl: string = ''
  routeList: array = []
  constructor() { }



  ngOnInit() {
    for (let key in localStorage){
      if (key % 2 == 0 || key % 2 == 1){
        this.routeObj[key] = JSON.parse(localStorage[key])
        console.log('routeObj: ', this.routeObj[key][0])
        this.tempRouteName = this.routeObj[key][0].name
        this.tempRouteGrade = this.routeObj[key][0].grade
        this.tempRouteUrl = this.routeObj[key][0].url
        this.routeList.push(this.tempRouteName, this.tempRouteGrade, this.tempRouteUrl)
      }
    }
  }
