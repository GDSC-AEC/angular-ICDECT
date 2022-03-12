import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SpecialsessionsComponent } from './specialsessions/specialsessions.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    // data: { animationState: 'One' }
  },
  {
    path: 'about/:id',
    component: AboutComponent,
    // data: { animationState: 'Two' },
  children: []
  },
  {
    path: 'team',
    component: TeamComponent,
    // data: { animationState: 'Three' },
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    // data: { animationState: 'Four' },
  },
  {
    path:'register',
    component:RegisterComponent,
    // data: { animationState: 'Five' },
  },
  {
    path:'submissions',
    component:SubmissionsComponent,
    // data: { animationState: 'Five' },
  },{
    path: 'specialsessions',
    component: SpecialsessionsComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
