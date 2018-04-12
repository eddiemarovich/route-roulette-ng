import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service'
import { AppComponent } from './app.component';
import { FindComponent } from './find/find.component'
import { ProjectsComponent } from './projects/projects.component'
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core'

@NgModule({
  declarations: [
    AppComponent,
    FindComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBV1hDBYwTFwmYXXR4VWT12J6ybl5Ev93s'
    })
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
