import { Component, Input } from "@angular/core";

let collapsible_well_component = {
	selector: "collapsible-well",
	templateUrl: "app/components/collapsible-well.component.html"
};

@Component(collapsible_well_component)
export class CollapsibleWellComponent
{
	//@Input() title: string;
	private visible: boolean = false;

	constructor()
	{
		console.info("CollapsibleWellComponent ctor");
	}

	toggle()
	{
		this.visible = !this.visible;
	}
}