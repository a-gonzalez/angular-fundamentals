import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";

import { EventService } from "./event.service";
import { Observable } from "rxjs/Observable";
import { IEvent } from "../models/index";

@Injectable()
export class EventResolverService implements Resolve<IEvent>
{
	constructor(private service: EventService)
	{
		console.info("EventResolverService ctor");
	}

	resolve(route: ActivatedRouteSnapshot): Observable<IEvent>
	{
		let id: number = route.params["id"];

		console.log("resolving id: ", id);

		return this.service.getEvent(id);
	}
}