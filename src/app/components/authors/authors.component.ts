import { Component } from '@angular/core';
import { SortLink } from 'src/app/models/SortLink';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  public links: SortLink[] | undefined;

  constructor(private route: ActivatedRoute) {
    this.links = [
      {
        optionLink: "/author/search?OrderBy=0",
        optionName: "Популярные"
      },
      {
        optionLink: "/author/search?OrderBy=1",
        optionName: "По алфавиту"
      }
    ];
  }
}
