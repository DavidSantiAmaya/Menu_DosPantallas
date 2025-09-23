import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent} from '@ionic/angular/standalone'
import { post } from 'src/app/models/post-model';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  imports:[IonCard, IonCardHeader, IonCardTitle, IonCardContent]
})

export class PostComponent  implements OnInit {

  @Input({required: true}) post !: post;

  constructor() {}

  ngOnInit() {}

}
