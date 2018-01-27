import { Component, Input, ViewChild, ElementRef, Inject } from "@angular/core";

import { JQUERY_TOKEN } from "../components/services/jquery.service";

let simple_modal_component = {
	selector: "simple-modal",
	templateUrl: "app/components/simple-modal.component.html",
	stylesUrl: ["app/components/simple-modal.component.css"]
};

@Component(simple_modal_component)
export class SimpleModalComponent
{
	@Input() title: string;
	@Input() elementID: string;
	@Input() closeOnBodyClick: string;
	@ViewChild("modalContainer") ref: ElementRef;
	
	constructor(@Inject(JQUERY_TOKEN) private $: any)
	{
		console.info("SimpleModalComponent ctor");
	}

	close()
	{
		if (this.closeOnBodyClick.toLocaleLowerCase() === "true")
		{
			this.$(this.ref.nativeElement).modal("hide");
		}
	}
}