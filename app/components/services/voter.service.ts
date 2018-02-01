import { Injectable } from "@angular/core";

import { ISession } from "../models/index";

@Injectable()
export class VoterService
{
	constructor()
	{
		console.info("VoterService ctor");
	}

	remove(session: ISession, username: string)
	{
		session.voters = session.voters.filter(voter => voter !== username);
	}

	add(session: ISession, username: string)
	{
		session.voters.push(username);
	}

	voted(session: ISession, username: string)
	{
		return session.voters.some(voter => voter === username);
	}
}