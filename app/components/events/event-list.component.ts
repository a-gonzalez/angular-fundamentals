import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { EventService } from "../../components/services/event.service";
import { ToastService } from "../../components/services/toast.service";

import { IEvent } from "../models/event.interface";

let event_list_component = {
	selector: "event-list",
	templateUrl: "app/components/events/event-list.component.html"
};

@Component(event_list_component)
export class EventListComponent implements OnInit
{
	events: IEvent[];

	constructor(private service: EventService, private toast: ToastService, private route: ActivatedRoute)
	{
		console.info("EventListComponent ctor");
	}

	//listener(data)
	//{
	//	console.info("Received ID:", data);
	//}

	getEvents()
	{
		//this.toast.info("Fetching events", "Events");

		/*this.service.getEvents().subscribe(events =>
		{
			this.events = events;
		});*/
		this.events = this.route.snapshot.data["events"];
	}

	ngOnInit()
	{
		console.info("EventListComponent init");

		this.getEvents();
	}

	disco(name)
	{
		this.toast.success(name, "Events");
	}
}