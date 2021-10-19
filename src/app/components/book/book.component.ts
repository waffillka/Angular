import { Component, OnInit } from '@angular/core';
import {BookDetailsService} from "../../services/book-details.service";
import {BookDetails} from "../../models/Details/BookDetails";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookDetailsService]
})
export class BookComponent implements OnInit {
  public book: BookDetails | undefined;
  public bookId: string | undefined;
  public errorMessage: string | undefined;

  constructor(
    private service: BookDetailsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.bookId = params.get("bookId")!;
      this.getBook();
    });
  }

  public getBook() {
    this.errorMessage = undefined;

    this.service.get(this.bookId!).subscribe(
      responce => {
        this.book = responce;
      },
      error => {
        this.errorMessage = error;
      }
    );
  }

  public delete() {
    this.service.delete(this.bookId!).subscribe(
      responce => {
        this.router.navigate(['/profile']);
      }
    );
  }

}
