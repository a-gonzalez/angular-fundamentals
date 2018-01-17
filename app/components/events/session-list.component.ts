import { Component, OnInit, Input } from "@angular/core";

import { ISession } from "../models/session.interface";

let session_list_component = {
	selector: "session-list",
	templateUrl: "app/components/events/session-list.component.html"
};

@Component(session_list_component)
export class SessionListComponent implements OnInit
{
	@Input() sessions: ISession

	constructor()
	{
		console.info("SessionListComponent ctor");
	}

	ngOnInit()
	{
		console.info("SessionListComponent init");
	}
}