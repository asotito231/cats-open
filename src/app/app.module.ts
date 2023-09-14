import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {NgOptimizedImage} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import { MainContentComponent } from './cats/components/main-content/main-content.component';
import { FooterContentComponent } from './cats/components/footer-content/footer-content.component';
import { ToolbarComponent } from './cats/components/toolbar/toolbar.component';
import {CatApiService} from "./cats/services/cats-api.service";


@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    FooterContentComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    NgOptimizedImage,
    MatTableModule,
  ],
  providers: [CatApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

