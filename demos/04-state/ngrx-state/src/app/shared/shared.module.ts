import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { IntroComponent } from './intro/intro.component';
import { LoadingComponent } from './loading/loading.component';
import { MarkdownRendererComponent } from './markdown-renderer/markdown-renderer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

const comps = [
  NavbarComponent,
  MarkdownRendererComponent,
  IntroComponent,
  SidePanelComponent,
  LoadingComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    NgOptimizedImage,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
  ],
  declarations: comps,
  exports: comps,
})
export class SharedModule { }
