import { Component, OnInit } from '@angular/core';
import {AuthorDetails} from "../../models/Details/AuthorDetails";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {AuthorService} from "../../services/author.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css'],
  providers: [AuthorService]
})
export class EditAuthorComponent implements OnInit {
  public form: FormGroup | undefined;
  public data: AuthorDetails | undefined;
  private authorId : string | null = "";
  public errorMessage: string | undefined;

  displayedColumns: string[] = ['name', 'description', 'publisher'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AuthorService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        if (params.get("id")) {
          this.authorId = params.get("id");
          this.service.getById(this.authorId).subscribe(
            responce => {
              this.data = responce;
              console.log(responce);
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
