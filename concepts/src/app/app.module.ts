import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './testdirectives/highlight.directive';
import { TestpipesComponent } from './testpipes/testpipes.component';
import { TestdirectivesComponent } from './testdirectives/testdirectives.component';
import { CustomPipePipe } from './testpipes/custom-pipe.pipe';
import { TestLifeCycleHooksComponent } from './test-life-cycle-hooks/test-life-cycle-hooks.component';
import { CompInteractionComponent,Pane } from './comp-interaction/comp-interaction.component';
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';
import { AddirectiveDirective } from './dynamic-comp/addirective.directive';
import { AdService } from './dynamic-comp/ad.service';

@NgModule({
  declarations: [
    AppComponent,
    Pane,
    HighlightDirective,
    TestpipesComponent,
    TestdirectivesComponent,
    CustomPipePipe,    
    TestLifeCycleHooksComponent, CompInteractionComponent, DynamicCompComponent, AddirectiveDirective
  ],
  imports: [
    BrowserModule,   
    FormsModule,
    AppRoutingModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
