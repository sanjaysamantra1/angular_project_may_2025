import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of, mergeMap, concatMap, Observable, switchMap, map } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css'
})
export class ObservableDemo2Component {
  searchResult$: Observable<any> | undefined;
  searchForm: any;


  constructor(private httpClient: HttpClient) {
    this.searchForm = new FormGroup({
      searchField: new FormControl()
    });
  };

  ngOnInit() {
    // this.mergeMap_demo();
    // this.concatMap_demo();
    this.switchMap_demo();
  }

  mergeMap_demo() {
    let userPublisher = of(1, 2, 3, 4, 5);

    // without mergeMap()
    /*  userPublisher.subscribe(userId => {
       this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`).subscribe(
         cartResponse => {
           console.log(cartResponse)
         }
       )
     }); */

    userPublisher.pipe(mergeMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`)
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }

  concatMap_demo() {
    let userPublisher = of(1, 2, 3, 4, 5);
    userPublisher.pipe(concatMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`)
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }

  switchMap_demo() {
    this.searchResult$ = this.searchForm.get("searchField").valueChanges.pipe(
      switchMap((term) =>
        // this.http.get<any>(`https://swapi.dev/api/people/?search=${term}`)
        this.httpClient.get<any>(`https://dummyjson.com/users/search?q=${term}`)
      ),
      map((response: any) =>
        response.users.length > 0 ? response.users : []
      ));
  }
}
