import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse} from  '@angular/common/http';
import { Observable, throwError  } from 'rxjs'
import{catchError, retry} from 'rxjs/operators'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GetgitaccountService {


  constructor(private http: HttpClient){

  }

  public error_handler(error: HttpErrorResponse){
    return throwError(error.error instanceof ErrorEvent ? `MESSAGE:${error.error.message}` : `STATUS:${error.status} MESSAGE:${error.message}`)

    
  }

  public gitDataRepo(originalGitRepo: string):Observable<any>{
    
    var gitUrl="https://api.github.com/users";
    // var gitUrl="2fa6de2e93fc5d13e3ef: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 https://api.github.com/users"
    // return this.http.get<any>(gitUrl);
    let userRepo =(`${gitUrl}/${originalGitRepo}/repos?access_token=${environment.accessToken}`)

    return this.http.get<any>(userRepo).pipe(retry(1), catchError(this.error_handler));
    
  }


}