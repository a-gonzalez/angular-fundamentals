import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

import { EventService } from "./event.service";

@Injectable()
export class EventListResolverService implements Resolve<any>
{
	constructor(private service: EventService)
	{
		console.info("EventListResolverService ctor");
	}

	resolve()
	{
		//return this.service.getEvents().map(events => events);
		return this.service.getEvents();
	}
}