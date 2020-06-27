import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './testdirectives/highlight.directive';
import { TestpipesComponent } from './testpipes/testpipes.component';
import { TestdirectivesComponent } from './testdirectives/testdirectives.component';
import { CustomPipePipe } from './testpipes/custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TestpipesComponent,
    TestdirectivesComponent,
    CustomPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
