import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {
  private projects = new BehaviorSubject<any>(['tite', 'lit'])
  project = this.projects.asObservable()

  constructor() {}
   changeProject(project){
     this.projects.next(project)
   }

   

}
