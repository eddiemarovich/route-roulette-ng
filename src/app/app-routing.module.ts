import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindComponent } from './find/find.component'
import { ProjectsComponent } from './projects/projects.component'

const routes: Routes = [
  {
    path: '',
    component: FindComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
