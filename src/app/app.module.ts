import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store/src/store_module';

import { companyReducer } from './reducers/company.reducer';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { EffectsModule } from '@ngrx/effects/src/effects_module';
import { CompanyEffects } from './effects/company.effects';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      companies: companyReducer
    }),
    EffectsModule.forRoot([CompanyEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
