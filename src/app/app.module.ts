import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { PersonalComponent } from './personal/personal.component';
import { LoanComponent } from './loan/loan.component';
import { ReferenceComponent } from './reference/reference.component';
import { FinancialComponent } from './financial/financial.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PersonalComponent,
    LoanComponent,
    ReferenceComponent,
    FinancialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
