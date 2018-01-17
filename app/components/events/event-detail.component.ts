import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { IEvent } from "../models/event.interface";

import { EventService } from "../../components/services/event.service";
import { ISession } from "../models/session.interface";
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

	constructor(private router: ActivatedRoute, private service: EventService)
	{
		console.info("EventDetailComponent ctor");
	}

	ngOnInit()
	{
		let id: number = this.router.snapshot.params["id"];

		console.log("EventDetailComponent -> init id: ", id);

		this.event = this.service.getEvent(+id);

		console.log(this.event);
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

		this.service.update(this.event);

		this.addMode = false;
	}

	filter(by: string)
	{
		this.filterBy = by;
	}
}