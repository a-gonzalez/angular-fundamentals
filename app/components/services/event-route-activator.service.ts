import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

import { EventService } from "../services/event.service";

@Injectable()
export class EventRouteActivatorService implements CanActivate
{
	constructor(private service: EventService, private router: Router)
	{
		console.info("EventRouteActivatorService ctor");
	}

	canActivate(route: ActivatedRouteSnapshot)
	{
		let id: number = route.params["id"];
		let active: boolean = true;
		const exists = this.service.getEvent(id);

		if (!exists)
		{
			this.router.navigate(["404"])

			active = false;
		}
		return active;
	}
}