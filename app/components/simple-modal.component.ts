import { Component, Input } from "@angular/core";

let simple_modal_component = {
	selector: "simple-modal",
	templateUrl: "app/components/simple-modal.component.html",
	stylesUrl: ["app/components/simple-modal.component.css"]
};

@Component(simple_modal_component)
export class SimpleModalComponent
{
	@Input() title: string;
	constructor()
	{
		console.info("SimpleModalComponent ctor");
	}
}