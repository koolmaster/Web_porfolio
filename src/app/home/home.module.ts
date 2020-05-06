import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountoModule } from 'angular2-counto';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { SkillComponent } from './skill/skill.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FeatureComponent } from './feature/feature.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    SkillComponent,
    ExperiencesComponent,
    FeatureComponent,
    GalleryComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    CountoModule
  ]
})
export class HomeModule { }
