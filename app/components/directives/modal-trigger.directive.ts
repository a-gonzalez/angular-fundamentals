import { Directive, OnInit, Inject, ElementRef, Input } from "@angular/core";

import { JQUERY_TOKEN } from "../../components/services/jquery.service";

let modal_trigger_directive = {
	selector: "[modal-trigger]"
};

@Directive(modal_trigger_directive)
export class ModalTriggerDirective implements OnInit
{
	private element: HTMLElement;
	@Input("modal-trigger") modalID: string;

	constructor(ref: ElementRef, @Inject(JQUERY_TOKEN) private $: any)
	{
		console.info("ModalTriggerDirective ctor");

		this.element = ref.nativeElement;
	}

	ngOnInit()
	{
		this.element.addEventListener("click", event =>
		{
			this.$(`#${this.modalID}`).modal({});
		});
	}
}