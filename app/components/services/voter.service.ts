import { Injectable } from "@angular/core";
import {
	Http,
	Response,
	Headers,
	RequestOptions
} from "@angular/http";
import { Observable } from "rxjs/Rx";

import { ISession } from "../models/index";

@Injectable()
export class VoterService
{
	constructor(private http: Http)
	{
		console.info("VoterService ctor");
	}

	remove(eventID: number, session: ISession, username: string)
	{
		session.voters = session.voters.filter(voter => voter !== username);

		let url = `/api/events/${eventID}/sessions/${session.id}/voters/${username}`;

		console.log("Voter -> remove: ", url);

		this.http.delete(url).catch(this.ErrorHandler).subscribe();
	}

	add(eventID: number, session: ISession, username: string)
	{
		session.voters.push(username);

		let headers = new Headers({"Content-Type": "application/json"});
		let options = new RequestOptions({headers: headers});
		let url = `/api/events/${eventID}/sessions/${session.id}/voters/${username}`;

		console.log("Voter -> add: ", url);

		this.http.post(url, JSON.stringify({}), options).
		catch(this.ErrorHandler).subscribe();
	}

	voted(session: ISession, username: string): boolean
	{
		return session.voters.some(voter => voter === username);
	}

	private ErrorHandler(error: Response)
	{
		return Observable.throw(error.statusText);
	}
}