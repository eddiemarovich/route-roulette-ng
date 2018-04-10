import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {

  buttonText: string = 'find routes'
  location: string = ''
  minDifficulty: string = ''
  maxDifficulty: string = ''
  distance: string = ''
  posts: any
  routes: array = []
  readonly ROOT_URL = ``


  constructor(private http: HttpClient) {}

  getRandom(num){
    return Math.floor(Math.random() * Math.floor(num))
  }

  getRoutes() {
    this.posts = this.http.get(this.ROOT_URL)
    .subscribe(
      (data:any[]) => {
        this.routes = []
        for (let i = 0; i < 4; i++) {
            let num = this.getRandom(data.routes.length + 1)
            data.routes.splice(num, 1)
            this.routes.push(data.routes[num])
        }
        console.log(this.routes)
      }
    )
  }
  getMinDifficulty(event: any){
    this.minDifficulty = event.target.value
    this.ROOT_URL = `https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minDiff=${this.minDifficulty}&maxDiff=${this.maxDifficulty}&key=107143844-3f7ee1e2a5799e05b02d6b0ec7eb6d66`
  }
  getMaxDifficulty(event: any){
    this.maxDifficulty = event.target.value
    this.ROOT_URL = `https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minDiff=${this.minDifficulty}&maxDiff=${this.maxDifficulty}&key=107143844-3f7ee1e2a5799e05b02d6b0ec7eb6d66`
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
