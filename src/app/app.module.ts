import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { ResumeComponent } from './components/content/resume/resume.component';
import { SkilComponent } from './components/content/skil/skil.component';
import { AcademicComponent } from './components/content/academic/academic.component';
import { ExperienceComponent } from './components/content/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ResumeComponent,
    AcademicComponent,
    SkilComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
