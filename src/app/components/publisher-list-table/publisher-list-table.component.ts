import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AuthorLookUp} from "../../models/LookUp/AuthorLookUp";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AuthorService} from "../../services/author.service";
import {merge} from "rxjs";
import {map, startWith, switchMap} from "rxjs/operators";
import {PublisherLookUp} from "../../models/LookUp/PublisherLookUp";
import {PublisherService} from "../../services/publisher.service";

@Component({
  selector: 'app-publisher-list-table',
  templateUrl: './publisher-list-table.component.html',
  styleUrls: ['./publisher-list-table.component.css'],
  providers: [PublisherService]
})
export class PublisherListTableComponent implements AfterViewInit {
  displayedColumns: string[] = [ 'name' ];
  data: PublisherLookUp[] = [];
  filterValue : string = '';

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: PublisherService) { }

  ngAfterViewInit() {
    this.table();
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.table();
  }

  table() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.service!.getManyWithParams(this.sort.direction, this.paginator.pageIndex + 1, this.paginator.pageSize, this.filterValue);
        }),
        map(data => {
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }
          this.service.getCount(this.filterValue).subscribe(result => this.resultsLength = result);
          return data;
        })
      ).subscribe(data => this.data = data);
  }
}
