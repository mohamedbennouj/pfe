import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonumentService {
  constructor(
    private http: HttpClient,
  ) {
    
   }

   getAll(type: string): any {
    return this.http.get("http://localhost:3000/places/type/"+type);
   }

   getTop(): any {
    return this.http.get("http://localhost:3000/places/top");
   }


}
