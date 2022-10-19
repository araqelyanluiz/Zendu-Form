import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { SubmissionsComponent } from './submissions/submissions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { GMapModule } from 'primeng/gmap';

@NgModule({
  declarations: [AppComponent, SubmissionsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutsModule,
    BrowserAnimationsModule,
    MatIconModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    FormsModule,
    GMapModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
