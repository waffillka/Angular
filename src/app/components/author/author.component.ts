import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {AuthorDetails} from "../../models/Details/AuthorDetails";
import {AuthorService} from "../../services/author.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {merge} from "rxjs";
import {catchError, map, startWith, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  providers: [AuthorService]
})
export class AuthorComponent implements OnInit {
  data : AuthorDetails | undefined;
  private authorId : string | null = "";
  public errorMessage: string | undefined;

  displayedColumns: string[] = ['name', 'description', 'publisher'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AuthorService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        if (params.get("id")) {
          this.authorId = params.get("id");
          this.service.getById(this.authorId).subscribe(
            responce => {
              this.data = responce;
              console.log(responce);
            },
            error => {
              this.errorMessage = error;
            });
        } else {
          //rederect NotFound-------------------------------------------------------------------------------------------
        }
      }
    );
  }
}
