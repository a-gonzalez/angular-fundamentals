import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

import { IEvent } from "../models/event.interface";

let event_thumbnail_component = {
	selector: "event-thumbnail",
	templateUrl: "app/components/events/event-thumbnail.component.html",
	styleUrls: ["app/components/events/event-thumbnail.component.css"]
};

@Component(event_thumbnail_component)
export class EventThumbnailComponent implements OnInit
{
	@Input() event: IEvent;
	@Output() emitter = new EventEmitter();

	//public property: string = "Events";

	constructor()
	{
		console.info("EventThumbnailComponent ctor");
	}

	ngOnInit()
	{
		//this.log();
		console.info("EventListComponent init");
	}

	register()
	{
		//console.info("register clicked");

		//this.emitter.emit(this.event.id);
	}

	log()
	{
		console.info("© 2018 Gonzalez. All Rights Reserved.");
	}
}