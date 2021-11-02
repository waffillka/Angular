import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BookService} from "../../services/book.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {BookDetails} from "../../models/Details/BookDetails";
import {UserService} from "../../services/user.service";
import {MatBottomSheetConfig} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService, UserService, MatBottomSheetConfig]
})
export class BookComponent implements OnInit {
  data : BookDetails | undefined;
  private bookId : string | null = "";
  public errorMessage: string | undefined;

  displayedColumns: string[] = ['name', 'description', 'publisher'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService : UserService,
    private bookService: BookService
  ) { }

  subscribe(){
    this.userService.subscribe(this.bookId).subscribe(responce => {
        console.log(responce);
      },
      error => {
        this.errorMessage = error;
      });
  }

  unsubscribe(){
    this.userService.unsubscribe(this.bookId).subscribe(responce => {
        console.log(responce);
      },
      error => {
        this.errorMessage = error;
      });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        if (params.get("id")) {
          this.bookId = params.get("id");
          this.bookService.getById(this.bookId).subscribe(
            responce => {
              this.data = responce;
              console.log(responce);
              console.log(this.bookId);
              console.log(responce.name);
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
