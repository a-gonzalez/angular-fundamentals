import { Component } from "@angular/core";

import { UserService } from "../services/user.service";

let navigation_component = {
	selector: "navigation-bar",
	templateUrl: "app/components/navigation/navigation.component.html",
	styleUrls: ["app/components/navigation/navigation.component.css"]
};

@Component(navigation_component)
export class  NavigationComponent
{
	constructor(private auth: UserService)
	{
		console.info("NavigationComponent ctor");
	}
}