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
        optionLink: "/langs/sort/popular",
        optionName: "Популярные"
      },
      {
        optionLink: "/langs/sort/abc",
        optionName: "По алфавиту"
      }
    ];
  }
}
