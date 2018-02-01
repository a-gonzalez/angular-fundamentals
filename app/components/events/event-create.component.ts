import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { Toastr, TOASTR_TOKEN } from "../../components/services/index";
import { EventService } from "../../components/services/event.service";

import { IEvent } from "../models/event.interface";

let event_create_component = {
	selector: "event-create",
	templateUrl: "app/components/events/event-create.component.html",
	styleUrls: ["app/components/events/event-create.component.css"]
};

@Component(event_create_component)
export class EventCreateComponent implements OnInit
{
	private isDirty: boolean = true;
	//private event: any;

	constructor(private service: EventService, private router: Router, @Inject(TOASTR_TOKEN) private toast: Toastr)
	{
		console.info("EventCreateComponent ctor");
	}

	ngOnInit()
	{
		/*this.event = {
			name: "Angular Boot Camp",
			date: "06/14/2020",
			time: "10:00 AM",
			price: 850.99,
			location: {
				address: "234 East Field Street",
				city: "Fort Worth",
				country: "US of A"
			},
			onlineUrl: "http://microsoft.com/abc",
			imageUrl: "http://localhost:8808/app/assets/images/kitten.png"
		};*/
		console.info("EventCreateComponent init");
	}

	cancel()
	{
		this.router.navigate(["events"]);
	}

	save(values)
	{
		this.service.save(values);
		this.isDirty = false;
		this.toast.success("Event was saved successfully.", "Save");
		this.router.navigate(["events"]);
	}
}