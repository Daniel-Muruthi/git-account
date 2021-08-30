import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GetgitaccountService {

  constructor(private http: HttpClient){

  }

  gitData():Observable<any>{
    
    var gitUrl="https://api.github.com/users";
    // var gitUrl="2fa6de2e93fc5d13e3ef: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 https://api.github.com/users"
    
    
    return this.http.get<any>(gitUrl);
  }
}