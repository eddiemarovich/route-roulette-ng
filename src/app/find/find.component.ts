import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DataService } from '../data.service'


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {

  itemCount: number
  apiKey: string = '111877272-0be5e5bf0133d67a6e691eb8772a4fde'
  url: string = 'https://www.mountainproject.com/data/get-routes-for-lat-lon?lat='
  buttonText: string = 'find routes'
  count: number = 0
  location: string = ''
  minDifficulty: string = '5.12'
  maxDifficulty: string = '5.12'
  distance: string = '20'
  posts: any
  routes = []
  newProject: object = {}
  savedRoutes = []
  maxKey: number = 0
  localStorageKeyArray: array = []
  title: string = 'My first AGM project';
  latString: string = '-105.25'
  lngString: string = '40.03'
  lng: number = -105.25
  lat: number = 40.03

  readonly ROOT_URL = 'https://www.mountainproject.com/data/get-routes-for-lat-lon?lat='


  constructor(private http: HttpClient, private _data: DataService) {}

  getRandom(num){
    return Math.floor(Math.random() * Math.floor(num))
  }

  getRoutes() {
    this.ROOT_URL += `${this.latString}&lon=${this.lngString}&maxDistance=${this.distance}&minDiff=${this.minDifficulty}&maxDiff=${this.maxDifficulty}&key=${this.apiKey}`
    this.posts = this.http.get(this.ROOT_URL)
    .subscribe(
      (data:any[]) => {
        this.routes = []
        for (let i = 0; i < 1; i++) {
            let num = this.getRandom(data.routes.length + 1)
            data.routes.splice(num, 1)
            this.routes.push(data.routes[num])
        }
      }
    )
  }

  getMinDifficulty(event: any){
    this.minDifficulty = event.target.value
  }
  getMaxDifficulty(event: any){
    this.maxDifficulty = event.target.value
  }
  getDistance(event: any){
    this.distance = event.target.value
  }
  onChooseLocation(event){
    this.latString = event.coords.lat
    this.lngString = event.coords.lng
    this.lat = parseFloat(event.coords.lat)
    this.lng = parseFloat(event.coords.lng)
  }

  addRoute(event: any){
    this.maxKey++
    this.newProject.number = this.maxKey
    this.newProject.name = this.routes[0].name
    this.newProject.grade = this.routes[0].rating
    this.newProject.url = this.routes[0].url
    this.savedRoutes.push(this.newProject)
    localStorage.setItem(this.maxKey, JSON.stringify(this.savedRoutes))
    console.log(this.newProject)
  }


  ngOnInit() {

    for (let key in localStorage){
      if (key % 2 == 0 || key % 2 == 1){
        this.localStorageKeyArray.push(key)
        this.maxKey = Math.max(...this.localStorageKeyArray)
      }
    }
  }

}
