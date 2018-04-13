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
  count:any = 1

  constructor() { }

  removeRoute(event){
    for (let i = 0; i < this.routeList.length; i++){
      if (this.routeList[i].number == this.routeToRemove){
        this.routeList.splice(i, 1)
        localStorage.clear()
      }
      if (this.routeList[i].number > this.routeToRemove){
        this.routeList[i].number--
      }
    }
    for (let i = 0; i < this.routeList.length; i++){
      localStorage.setItem(this.count, JSON.stringify(this.routeList[i]))
      this.count++
    }
  }

  getRouteName(){
    if (event.target.value.length > 0){
      this.routeToRemove = event.target.value
    }
  }


  ngOnInit() {
    for (var key in localStorage){
      if (parseInt(key) % 2 ==1 || parseInt(key) % 2 == 0){
        this.routeObj[key] = JSON.parse(localStorage[key])
        console.log(this.routeObj)
        this.routeList.push(this.routeObj[key])
        console.log(this.routeList)
      }

    }
  }
}
