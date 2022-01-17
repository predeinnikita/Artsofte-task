import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICompany } from './models/Company';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  constructor(private http: HttpClient) {}
  private url = 'https://random-data-api.com/api/company/random_company?size=100';

  getCompanies(): Observable<ICompany[]> {
    return this.http.get<ICompany[]>(this.url)
  }
}
