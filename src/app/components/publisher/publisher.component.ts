import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PublisherDetails} from "../../models/Details/PublisherDetails";
import {PublisherService} from "../../services/publisher.service";
import {MatTableDataSource} from "@angular/material/table";
import {BookLookUp} from "../../models/LookUp/BookLookUp";

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css'],
  providers: [PublisherService]
})
export class PublisherComponent implements OnInit {
  data : PublisherDetails | undefined;
  private publisherId : string | null = "";
  public errorMessage: string | undefined;

  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<BookLookUp>();

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PublisherService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        if (params.get("id")) {
          this.publisherId = params.get("id");
          this.service.getById(this.publisherId).subscribe(
            responce => {
              this.data = responce;
              this.dataSource = new MatTableDataSource<BookLookUp>(this.data.books);
              console.log(responce);
              console.log(this.publisherId);
            },
            error => {
              this.errorMessage = error;
            });
        } else {
          this.router.navigate(['/not-found'])
        }
      }
    );
  }
}
