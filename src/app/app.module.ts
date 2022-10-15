import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NextStepButtonComponent } from './components/next-step-button/next-step-button.component';
import { CodeComponent } from './components/code/code.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { UiModule } from './shared/ui/ui.module';
import { AuthModule } from './modules/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './modules/admin/admin.module';
import { PipesComponent } from './components/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NextStepButtonComponent,
    CodeComponent,
    TerminalComponent,
    PipesComponent,
  ],
  imports: [
    BrowserModule,
    UiModule,
    AuthModule,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
