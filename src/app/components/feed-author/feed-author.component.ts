import { Component, OnInit } from '@angular/core';
import {AuthorDetailsService} from "../../services/author-details.service";
import {Author} from "../../models/Author";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-feed-author',
  templateUrl: './feed-author.component.html',
  styleUrls: ['./feed-author.component.css'],
  providers: [AuthorDetailsService]
})
export class FeedAuthorComponent implements OnInit {
  public author: Author | undefined;

  public isErrorOccured = false;
  public errorMessage!: string;

  constructor(
    private route: ActivatedRoute,
    private service: AuthorDetailsService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      var authorId = params.get('authorId') ?? '';

      this.getLang(authorId);
    });
  }

  public getLang(authorId: string) {
    this.isErrorOccured = false;

    this.service.getById(authorId).subscribe(
      responce => {
        this.author = responce;
      },
      error => {
        this.errorMessage = error;
        this.isErrorOccured = true;
      }
    );
  }
}
