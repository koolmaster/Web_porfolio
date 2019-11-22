import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressbarModule } from 'ngx-bootstrap';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    SkillComponent
  ],
  imports: [
    CommonModule,
    ProgressbarModule.forRoot()
  ]
})
export class HomeModule { }
