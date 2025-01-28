import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	  providedIn: 'root'
})
export class HelloWorldService {
	  private apiUrl = 'https://localhost:5001/api/HelloWorld'; // Adjust the URL if necessary

	    constructor(private http: HttpClient) { }

	      getHelloWorld(): Observable<string> {
		          return this.http.get<string>(this.apiUrl);
			    }
}
