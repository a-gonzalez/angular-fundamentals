import { Component } from "@angular/core";

let error_404_component = {
	selector: "error-404",
	templateUrl: "app/components/errors/404.component.html",
	styleUrls: ["app/components/errors/404.component.css"]
};

@Component(error_404_component)
export class Error404Component
{
	constructor()
	{
		console.info("Error404Component ctor");
	}
}