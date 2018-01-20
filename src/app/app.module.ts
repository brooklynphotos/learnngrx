import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store/src/store_module';

import { companyReducer } from './reducers/company.reducer';
import { CompanyListComponent } from './company/company-list/company-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      companies: companyReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
