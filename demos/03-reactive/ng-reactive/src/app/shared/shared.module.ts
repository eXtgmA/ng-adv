import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MarkdownRendererComponent } from './markdown-renderer/markdown-renderer.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { IntroComponent } from './intro/intro.component';
import { LoadingComponent } from './loading/loading.component';

const comps = [
  NavbarComponent,
  SidePanelComponent,
  MarkdownRendererComponent,
  IntroComponent,
  LoadingComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
  ],
  declarations: comps,
  exports: comps,
})
export class SharedModule { }
