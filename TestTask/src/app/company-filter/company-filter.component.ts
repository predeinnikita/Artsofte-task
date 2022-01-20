import { FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay';
import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, Observable, Subscription } from 'rxjs';
import { CompaniesService } from '../companies.service';
import { ICompany } from '../models/Company';

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['./company-filter.component.css']
})
export class CompanyFilterComponent implements OnInit {
  @Input()companies!: ICompany[];
  private subscriber: Subscription | undefined;
  private allCompanies!: ICompany[];
  constructor(private companiesService: CompaniesService) {
    
  }
  
  filterForm!: FormControl;

  
  properties: IFilterProperty[] = [
    { value: 'business_name', view: 'name' },
    { value: 'type', view: 'type' },
    { value: 'industry', view: 'industry'}
  ]



  ngOnInit(): void {
    this.filterForm = new FormControl('');

    let isFirstChange: boolean = true;
    this.filterForm.valueChanges.subscribe(() => {
      if (isFirstChange) {
        this.allCompanies = this.companies.slice();
        isFirstChange = false;
      }
      this.filterCompanies(this.filterForm.value);
    });
  }


  selected: string = '';
  private filterCompanies(name: string) {
      this.cleanAll(this.companies);
      this.companies.push(...this.allCompanies);
      this.cleanBy(this.companies, this.selected? this.selected: 'business_name');
  }

  private cleanBy(array: ICompany[], property: string) {
    for (let i = 0; i < array.length; i++){
      if (!array[i][property as keyof ICompany].toString().toLowerCase().includes(this.filterForm.value.toLowerCase())) {
        array.splice(i, 1);
        i -= 1;
      }
    } 
  }

  private cleanAll(array: any[]) {
    for (let i = 0; i < array.length; i++){
        array.splice(i, 1);
        i -= 1;
    } 
  }
}


interface IFilterProperty {
  value: string;
  view: string;
}