import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem } from '@ionic/angular/standalone';
import { IonicAppDbService } from 'src/app/service/ionic-app-db-service';
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonItem, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class DashboardPage implements OnInit {

  EjemploFrom = new FormGroup({
    nombre: new FormControl('',[Validators.required])


  });

  constructor(private db: IonicAppDbService) { }

  ngOnInit() {
    this.db.set ('nameApp', 'Ionic app')
  }

  async guardarNombre() :Promise<void>{
    const nombres = await this.db.get('nombres');
    let lista =[];
    if(nombres){
      lista = JSON.parse(nombres);
    }
    const nombreInput =this.EjemploFrom.get('nombre')?.value;
    nombreInput && lista.push(nombreInput);
    this.db.set('nombres', JSON.stringify(lista));
  }
}
