import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

import { EventService } from "../services/event.service";
import { RouterModule } from "@angular/router/src/router_module";

@Injectable()
export class EventRouteActivatorService implements CanActivate
{
	constructor(private service: EventService, private router: Router)
	{
		console.info("EventRouteActivatorService ctor");
	}

	canActivate(route: ActivatedRouteSnapshot)
	{
		const exists = this.service.getEvent(+route.params["id"]);
		let active: boolean = true;

		if (!exists)
		{
			this.router.navigate(["404"])

			active = false;
		}
		return active;
	}
}