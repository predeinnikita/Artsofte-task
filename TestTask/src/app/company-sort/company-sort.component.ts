import { Component, Input, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ICompany } from '../models/Company';
import { CompaniesService } from '../companies.service';
import { Subscriber } from 'rxjs';
import { Observable, Subscription } from 'rxjs';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['./company-sort.component.css']
})
export class CompanySortComponent implements OnInit {
  @Input()companies: ICompany[] | undefined;
  private subscriber: Subscription | undefined;
  constructor(private companiesService: CompaniesService) { }

  ngOnInit(): void {
  }

  selected:string = '';
  sort() {
    this.subscriber = this.companiesService.getCompanies()
      .subscribe((companies)=>{
        companies.sort((a, b) => 
          a[this.selected as keyof ICompany] >= b[this.selected as keyof ICompany] ? 1 : -1);
    })
  }

  criterions: ICriterion[] = [
    { view: 'name', value: 'business_name' },
    { view: 'type', value: 'type' },
    { view: 'industry', value: 'industry' }
  ];
}

interface ICriterion {
  view?: string;
  value?: string;
}
