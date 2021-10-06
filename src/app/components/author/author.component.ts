import {Component, Input, OnInit} from '@angular/core';
import {Author} from "../../models/Author";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  @Input() author!: Author;
  constructor() { }

  ngOnInit(): void {
  }

}
