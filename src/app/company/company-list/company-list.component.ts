import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Company } from '../../models/company';
import { AppState } from '../../models/appState';
import * as companyActions from './../../actions/company.actions';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {

  companies$: Observable<Company[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.loadCompanies();
    this.companies$ = this.store.select(state => state.companies.companies);
  }

  loadCompanies() {
    this.store.dispatch(new companyActions.LoadCompaniesAction());
  }

  deleteCompany(companyId: number) {
    this.store.dispatch(new companyActions.DeleteCompanyAction(companyId));
  }

}
