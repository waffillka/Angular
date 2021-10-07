import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
import {Book} from "../../models/Book";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
export class BookComponent implements OnInit {
  public book: Book | undefined;
  public bookId: string | undefined;
  public errorMessage: string | undefined;

  constructor(
    private service: BookService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.bookId = params.get("bookId")!;
      this.getSnippet();
    });
  }

  public getSnippet() {
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
