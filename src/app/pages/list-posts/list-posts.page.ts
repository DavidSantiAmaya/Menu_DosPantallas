import { PostsService } from './../../services/posts';
import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { PostComponent } from '../../componets/post/post.component';
import { post } from 'src/app/models/post-model';
@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.page.html',
  styleUrls: ['./list-posts.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, PostComponent]
})
export class ListPostsPage implements OnInit {

  posts = signal<Array<post>>([]);
  PostsService = inject(PostsService);

  constructor() { }

  ngOnInit() {
    this.PostsService.getAllpost().subscribe({
    next:(data)=>{
      this.posts.set(data);
    },
    error:(data)=>{
      this.posts.set(data);
    },
    complete:()=>{

    },

  });

}
}
