import { Component } from "@angular/core";

import {
	EventService,
	UserService
} from "../services/index";

import { ISession } from "../models/session.interface";
import { SessionListComponent } from "../index";

let navigation_component = {
	selector: "navigation-bar",
	templateUrl: "app/components/navigation/navigation.component.html",
	styleUrls: ["app/components/navigation/navigation.component.css"]
};

@Component(navigation_component)
export class  NavigationComponent
{
	private term: string = "";
	private sessions_found: ISession[];

	constructor(private auth: UserService, private service: EventService)
	{
		console.info("NavigationComponent ctor");
	}

	private search(term: string)
	{
		this.service.searchSessions(term)
		.subscribe(sessions => 
		{
			this.sessions_found = sessions;

			//console.log(this.sessions_found);
		});
	}
}