import { Injectable } from '@angular/core';
import { registerInjectable } from '@angular/core/primitives/di'
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class IonicAppDbService {
  private storage!: Storage;

  constructor(private storageDb: Storage){
    this.init();
  }

  private async init() : Promise<void> {
    this.storage = await this.storageDb.create();
  }

  set(key: string, value: string): void{
    this.storage.set(key, value);
  }

  async get(key: string): Promise<string> {
    return await this.storage.get(key);

  }

  remove(key:string):void {
    this.storage.remove(key);
  }

  clean():void{
    this.storage.clear();
  }

}
