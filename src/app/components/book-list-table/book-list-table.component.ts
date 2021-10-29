import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {merge} from "rxjs";
import {map, startWith, switchMap} from "rxjs/operators";
import {BookService} from "../../services/book.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookLookUp} from "../../models/LookUp/BookLookUp";

@Component({
  selector: 'app-book-list-table',
  templateUrl: './book-list-table.component.html',
  styleUrls: ['./book-list-table.component.css'],
  providers: [BookService]
})
export class BookListTableComponent implements AfterViewInit {
  displayedColumns: string[] = [ 'name'];
  data: BookLookUp[] = [];
  filterValue : string = '';
  toppings: FormGroup;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: BookService, fb: FormBuilder) {
    this.toppings = fb.group({ isFree: false });
  }

  ngAfterViewInit() {
    this.table();
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.table();
  }

  applyCheckbox(){
    this.table();
  }

  table() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.service!.getManyWithParams(this.sort.direction, this.paginator.pageIndex + 1, this.paginator.pageSize, this.filterValue, this.toppings.value.isFree);
        }),
        map(data => {
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }
          this.service.getCount(this.filterValue, this.toppings.value.isFree).subscribe(result => this.resultsLength = result);
          return data;
        })
      ).subscribe(data => this.data = data);
  }
}
