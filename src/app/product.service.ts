import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // baseUrl: String =  'ec2-34-226-143-226.compute-1.amazonaws.com:8080/';
  baseUrl: String =  'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'product/');
  }

  searchAndSortProducts(searchQuery: String, sortQuery: String): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'product/search/?search=' + searchQuery + '&order=' + sortQuery);
  }
}
