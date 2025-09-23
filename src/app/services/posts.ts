import { HttpClient } from '@angular/common/http';
import { inject,Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsResponse } from '../models/post-response.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private http = inject(HttpClient);

  //constructor(private http: HttpClient){}:

  getAllpost(): Observable<PostsResponse>{

    return this.http.get<PostsResponse>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

}
