import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-userdetails',
  imports: [],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent {
  user: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.activatedRoute.params.pipe(switchMap((params: any) =>
        this.http.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      )).subscribe((user: any) => {
      this.user = user;
    });
  }
}
