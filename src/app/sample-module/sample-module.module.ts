import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KredasHomeComponent } from './kredas-home/kredas-home.component';
import { KredasAboutComponent } from './kredas-about/kredas-about.component';
import { SampleComponent } from './sample.component';
import { RouterModule } from '@angular/router';
import { KredasContactComponent } from './kredas-contact/kredas-contact.component';
import { KredasCareersComponent } from './kredas-careers/kredas-careers.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    KredasHomeComponent,
    KredasAboutComponent,
    SampleComponent,
    KredasContactComponent,
    KredasCareersComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SampleModuleModule { }
