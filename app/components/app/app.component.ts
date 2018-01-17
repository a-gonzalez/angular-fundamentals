import { Component, OnInit } from "@angular/core";

let app_component = {
	selector: "app-root",
	template: "<navigation-bar></navigation-bar><router-outlet></router-outlet>"
};

@Component(app_component)
export class AppComponent implements OnInit
{
	constructor()
	{
		console.info("AppComponent ctor");
	}

	ngOnInit()
	{
		console.info("© 2018 Gonzalez. All Rights Reserved.");
	}
}