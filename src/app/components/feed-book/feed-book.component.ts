import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SortLink} from "../../models/SortLink";

@Component({
  selector: 'app-feed-book',
  templateUrl: './feed-book.component.html',
  styleUrls: ['./feed-book.component.css']
})
export class FeedBookComponent {
  public links: SortLink[] | undefined;

  constructor(private route: ActivatedRoute) {
    this.links = [
      {
        optionLink: "/feed/new",
        optionName: "Новые"
      },
      {
        optionLink: "/feed/popular",
        optionName: "Популярные"
      }
    ];
  }
}
