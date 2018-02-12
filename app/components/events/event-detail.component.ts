import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import {
	IEvent,
	ISession
} from "../models/index";

import { EventService } from "../../components/services/event.service";
import { SessionListComponent } from "../index";

let event_detail_component = {
	selector: "event-detail",
	templateUrl: "app/components/events/event-detail.component.html",
	styleUrls: ["app/components/events/event-detail.component.css"]
};

@Component(event_detail_component)
export class EventDetailComponent implements OnInit
{
	event: IEvent;
	addMode: boolean;
	filterBy: string = "all";
	sortBy: string = "name";

	constructor(private route: ActivatedRoute, private service: EventService)
	{
		console.info("EventDetailComponent ctor");
	}

	ngOnInit()
	{
		//this.route.params.forEach((params: Params) =>
		this.route.data.forEach((data) =>
		{
			this.event = data["event"]; //this.route.snapshot.data["event"];
			this.addMode = false;
			/*let id: number = params["id"];

			this.service.getEvent(id).subscribe((event: IEvent) =>
			{
				this.event = event;
				this.addMode = false;
			});*/
			//this.event = this.service.getEvent(+params["id"]);
		});
		/*let id: number = this.router.snapshot.params["id"];

		console.log("EventDetailComponent -> init id: ", id);

		this.event = this.service.getEvent(+id);*/

		//console.log(this.event);
	}

	addSession()
	{
		this.addMode = true;
	}

	cancelSession()
	{
		this.addMode = false;
	}

	saveSession(session: ISession)
	{
		let id: number = Math.max.apply(null, this.event.sessions.map(s => s.id));
		session.id = id + 1;

		console.log("saveSession: ", session);

		this.event.sessions.push(session);

		this.service.save(this.event).subscribe(event =>
		{
			this.addMode = false;
		});
		//this.addMode = false;
	}

	filter(by: string)
	{
		this.filterBy = by;
	}

	sort(by: string)
	{
		this.sortBy = by;
	}
}