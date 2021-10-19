import {Component, Input, OnInit} from '@angular/core';
import {BookDetails} from "../../models/Details/BookDetails";

@Component({
  selector: 'app-book-short',
  templateUrl: './book-short.component.html',
  styleUrls: ['./book-short.component.css']
})
export class BookShortComponent implements OnInit{
  @Input() book!: BookDetails;

  constructor() { }

  ngOnInit(): void {
  }
}
