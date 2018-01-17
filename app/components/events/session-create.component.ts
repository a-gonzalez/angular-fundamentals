import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { ToastService } from "../services/index";

import { ISession } from "../models/session.interface";

let session_create_component = {
	selector: "session-create",
	templateUrl: "app/components/events/session-create.component.html",
	styleUrls: ["app/components/events/session-create.component.css"]
};

@Component(session_create_component)
export class SessionCreateComponent implements OnInit
{
	@Output() newsession = new EventEmitter();
	@Output() canceladd = new EventEmitter();
	public sessionform: FormGroup;
	public name: FormControl;
	public presenter: FormControl;
	public duration: FormControl;
	public level: FormControl;
	public abstract: FormControl;

	constructor(private router: Router, private toast: ToastService)
	{
		console.info("SessionCreateComponent ctor");
	}

	ngOnInit()
	{
		this.name = new FormControl("", Validators.required);
		this.presenter = new FormControl("", Validators.required);
		this.duration = new FormControl("", Validators.required);
		this.level = new FormControl("", Validators.required);
		this.abstract = new FormControl("", [Validators.required, Validators.maxLength(400), this.restricted(["blue", "SAD", "angry", "ninja"])]);
		this.sessionform = new FormGroup({
			name: this.name,
			presenter: this.presenter,
			duration: this.duration,
			level: this.level,
			abstract: this.abstract
		});
		console.info("SessionCreateComponent init");
	}

	cancel()
	{
		//this.router.navigate(["events"]);
		this.canceladd.emit();
	}

	save(values)
	{
		let session: ISession = {
			id: undefined,
			name: values.name,
			duration: +values.duration,
			level: values.level,
			presenter: values.presenter,
			abstract: values.abstract,
			voters: []
		};
		console.log(session);

		this.newsession.emit(session);
		//this.toast.warning("This has not beem implemented.", "Save");
	}

	private restricted(words)
	{
		//return control.value.includes("foobar") ? {"restricted" : "foobar"} : null;
		return (control: FormControl): {[key: string]: any} =>
		{
			if (!words)
			{
				return null;
			}
			var invalid = words.map(word => control.value.toLowerCase().includes(word.toLowerCase()) ? word: null)
							   .filter(word => word != null);
			
			return invalid && invalid.length > 0 ? {"restricted" : invalid.join(", ").toLowerCase()} : null;
		}
	}
}