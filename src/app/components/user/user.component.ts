import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserDetails} from "../../models/Details/UserDetails";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  data : UserDetails | undefined;
  private userId : string | null = "";
  public errorMessage: string | undefined;

  displayedColumns: string[] = ['name', 'publisher', 'authors'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        if (params.get("id")) {
          this.userId = params.get("id");
          this.service.getById(this.userId).subscribe(
            responce => {
              this.data = responce;
              console.log(responce);
              console.log(this.userId);
              console.log(responce.nickname);
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
