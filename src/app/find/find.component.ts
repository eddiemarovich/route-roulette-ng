import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {

  buttonText: string = 'find routes'

  readonly ROOT_URL = 'https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=107143844-3f7ee1e2a5799e05b02d6b0ec7eb6d66'

  location: string = ''
  difficulty: string = ''
  distance: string = ''
  posts: any
  routes: array = []
  constructor(private http: HttpClient) {}

  getRoutes() {
    this.posts = this.http.get(this.ROOT_URL)
    .subscribe(
      (data:any[]) => {
        this.routes = data.routes.map(e => e.name + ', '  + e.rating)
        console.log()
      }
    )
  }
  getDifficulty(event: any){
    this.difficulty = event.target.value
  }

  getDistance(event: any){
    this.distance = event.target.value
  }
  getLocation(event: any){
    this.location = event.target.value
  }

  ngOnInit() {
  }

}
