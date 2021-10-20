import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {merge} from "rxjs";
import {map, startWith, switchMap} from "rxjs/operators";
import {AuthorLookUp} from "../../models/LookUp/AuthorLookUp";
import {AuthorService} from "../../services/author.service";

@Component({
  selector: 'app-author-list-table',
  templateUrl: './author-list-table.component.html',
  styleUrls: ['./author-list-table.component.css'],
  providers: [AuthorService]
})
export class AuthorListTableComponent implements AfterViewInit {
  displayedColumns: string[] = [ 'name', 'birthday'];
  data: AuthorLookUp[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: AuthorService) { }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.service!.getManyWithParams(this.sort.direction, this.paginator.pageIndex + 1, this.paginator.pageSize);
        }),
        map(data => {
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }
          this.service.getCount().subscribe(result => this.resultsLength = result);
          return data;
        })
      ).subscribe(data => this.data = data);
  }
}
