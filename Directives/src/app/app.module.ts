import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BasicHighlight } from './highlight/highlight.component'
import { AppComponent } from './app.component';
import { BetterHighlightDirective } from './highlight/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlight,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
