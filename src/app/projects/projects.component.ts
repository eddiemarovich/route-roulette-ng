import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  routeList: object = {}

  constructor() { }

  ngOnInit() {
      this.routeList = JSON.parse(localStorage.getItem(1, {}))
      console.log(this.routeList)

  }

}
