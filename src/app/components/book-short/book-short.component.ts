import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../models/Book";

@Component({
  selector: 'app-book-short',
  templateUrl: './book-short.component.html',
  styleUrls: ['./book-short.component.css']
})
export class BookShortComponent implements OnInit{
  @Input() book!: Book;

  constructor() { }

  ngOnInit(): void {
  }
}
