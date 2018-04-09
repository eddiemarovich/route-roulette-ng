import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';


  // readonly ROOT_URL = 'https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=107143844-3f7ee1e2a5799e05b02d6b0ec7eb6d66'
  //
  //
  // posts: any
  // routes: array = []
  // constructor(private http: HttpClient) {}
  //
  // getRoutes() {
  //   this.posts = this.http.get(this.ROOT_URL)
  //   .subscribe(
  //     (data:any[]) => {
  //       this.routes = data.routes.map(e => e.name + ', '  + e.rating)
  //       console.log()
  //     }
  //   )
  // }

}
