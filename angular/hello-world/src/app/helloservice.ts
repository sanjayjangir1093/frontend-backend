import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	  providedIn: 'root'
})
export class HelloService {
	  private apiUrl = 'http://localhost:5000/HelloWorld'; // Adjust the URL if needed

	    constructor(private http: HttpClient) { }

	      getHelloWorld(): Observable<string> {
		          return this.http.get<string>(this.apiUrl);
			    }
}
