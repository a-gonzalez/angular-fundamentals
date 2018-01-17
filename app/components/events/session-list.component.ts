import { Component, OnInit, Input, OnChanges } from "@angular/core";

import { ISession } from "../models/session.interface";

let session_list_component = {
	selector: "session-list",
	templateUrl: "app/components/events/session-list.component.html"
};

@Component(session_list_component)
export class SessionListComponent implements OnInit, OnChanges
{
	@Input() sessions: ISession[];
	@Input() filterBy: string;
	sessions_filtered: ISession[] = [];

	constructor()
	{
		console.info("SessionListComponent ctor");
	}

	ngOnInit()
	{
		console.info("SessionListComponent init");
	}

	ngOnChanges()
	{
		if (this.sessions != undefined)
		{
			this.filterSessions(this.filterBy);
		}
	}

	private filterSessions(filter: string)
	{
		if (filter === "all")
		{
			this.sessions_filtered = this.sessions.slice(0);
		}
		else
		{
			this.sessions_filtered = this.sessions.filter(session => {
				return session.level.toLocaleLowerCase() == filter;
			});
		}
	}
}