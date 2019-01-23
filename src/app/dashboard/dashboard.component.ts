import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  products: Product[];
  sortingOptions: any = [{'id': 1, 'name': 'Ascending Order', 'value': 'asc' }, {'id': 2, 'name': 'Descending Order', 'value': 'desc'}];
  sortingOption: any;
  constructor(private breakpointObserver: BreakpointObserver, private productService: ProductService) {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    }

    );
  }

  public getSearchedProducts(searchQuery: String) {
    let sortQuery: String = '';
    if (searchQuery == null || searchQuery === undefined) {
      searchQuery = '';
    }

    if (this.sortingOption !== undefined) {
      sortQuery = this.sortingOption.value;
    }

    this.productService.searchAndSortProducts(searchQuery, sortQuery).subscribe((data) => {
      this.products = data;
    });
  }

  public sortingProducts() {
    console.log(this.sortingOption);
  }

}
