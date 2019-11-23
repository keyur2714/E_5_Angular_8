import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.model';

@Injectable()
export class ItemService{

    itemAppUrl : string = 'http://localhost:3000/items';

    constructor(private httpClient : HttpClient){}

    getItems() : Observable<Item[]>{
        return this.httpClient.get<Item[]>(this.itemAppUrl);
    }

    getItemById(id : number) : Observable<Item>{
        return this.httpClient.get<Item>(this.itemAppUrl+"/"+id);
    }
}