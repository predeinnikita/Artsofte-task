import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, Subscriber } from 'rxjs';
import { ICompany } from './models/Company';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  [x: string]: any;
  
  public companies: ICompany[] = [];

  public subscriber: Subscriber<ICompany[]> | undefined;
  public httpClient: HttpClient;
  private url = "https://random-data-api.com/api/company/random_company?size=100";

  constructor(private http: HttpClient) {
    this.httpClient = http;
    this.fetchData();
  }

  public fetchData(){ 
    this.httpClient.get<ICompany[]>(this.url)//.pipe(catchError(this.handleError))
      .subscribe(companies => {
          this.companies = companies;
          //При получении данных сразу отправляем их подписчику, если он есть
          if(this.subscriber){
              this.subscriber.next(this.companies)
          }
        }
      )
  }

  // public handleError(error: HttpErrorResponse){ 
  //   console.error(error.message);
  //   return []
  // }

  public getCompany(id: number): Observable<ICompany> {
    let company = this.companies.find(company => company.id === id)!;
    return of(company)
  }

  public getCompanies(): Observable<ICompany[]> {
    const observable = new Observable<ICompany[]>((subscriber) => {
        this.subscriber = subscriber;
        this.subscriber.next(this.companies)
    })
    return observable;
  }
}

