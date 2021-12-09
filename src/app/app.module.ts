import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './imports/material.module';
import { AboutComponent } from './about/about.component';
import { CallForPapersComponent } from './call-for-papers/call-for-papers.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    CallForPapersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
