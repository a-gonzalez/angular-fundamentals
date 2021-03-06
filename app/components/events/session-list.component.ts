import { Component, OnInit, Input, OnChanges } from "@angular/core";

import { AuthenticationService, VoterService } from "../../components/services/index";

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
	@Input() sortBy: string;
	@Input() eventID: number;
	sessions_filtered: ISession[] = [];

	constructor(private auth: AuthenticationService, private voter: VoterService)
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
			this.sortBy === "name" ? this.sessions_filtered.sort(this.sortByNameAsc) : this.sessions_filtered.sort(this.sortByVotesDesc);
		}
	}

	voted(session: ISession): boolean
	{
		return this.voter.voted(session, this.auth.user.userName);
	}

	vote(session: ISession)
	{
		//console.log("vote...");

		if (this.voted(session))
		{
			this.voter.remove(this.eventID, session, this.auth.user.userName);
		}
		else
		{
			this.voter.add(this.eventID, session, this.auth.user.userName);
		}

		if (this.sortBy === "votes")
		{
			this.sessions_filtered.sort(this.sortByVotesDesc);
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

	private sortByNameAsc(a: ISession, b: ISession): number
	{
		let result: number = 0;

		if (a.name > b.name)
		{
			result = 1;
		}
		else if (a.name < b.name)
		{
			result = -1;
		}
		return result;
	}

	private sortByVotesDesc(a: ISession, b: ISession)
	{
		return b.voters.length - a.voters.length;
	}
}