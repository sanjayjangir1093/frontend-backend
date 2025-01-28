import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from './hello-world.service';

@Component({
	  selector: 'app-root',
	    template: `<h1>{{ message }}</h1>`,
})
export class AppComponent implements OnInit {
	  message: string = '';

	    constructor(private helloWorldService: HelloWorldService) {}

	      ngOnInit() {
		          this.helloWorldService.getHelloWorld().subscribe(
				        (data) => {
						        this.message = data;
							      },
							            (error) => {
									            console.error('Error fetching data', error);
										          }
											      );
											        }
}
