import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PercentagePipe } from './percentage.pipe';
import { FormsModule } from '@angular/forms';
import { FileterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PercentagePipe,
    //Here we declares that Pipe
    FileterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
