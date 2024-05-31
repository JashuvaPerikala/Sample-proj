import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { LoginComponent } from './login/login.component';
import { PracticesComponent } from './practices/practices.component';
import { SampleComponent } from './sample-module/sample.component';
import { KredasHomeComponent } from './sample-module/kredas-home/kredas-home.component';
import { KredasAboutComponent } from './sample-module/kredas-about/kredas-about.component';
import { KredasContactComponent } from './sample-module/kredas-contact/kredas-contact.component';
import { KredasCareersComponent } from './sample-module/kredas-careers/kredas-careers.component';
import { HeaderComponent } from './sample-module/header/header.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'first', title: 'FIRST', component: FirstcomponentComponent },
  { path: 'prac', component: PracticesComponent },
  {
    path: 'sample', component: SampleComponent, children: [
      { path: '', component: HeaderComponent },
      { path: 'home', component: KredasHomeComponent },
      { path: 'about', component: KredasAboutComponent },
      { path: 'contact', component: KredasContactComponent },
      { path: 'careers', component: KredasCareersComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
