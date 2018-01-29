import { Component, EventEmitter, Input, Output } from "@angular/core";

let up_vote_component = {
	selector: "up-vote",
	templateUrl: "app/components/events/up-vote.component.html",
	templateUrls: ["app/components/events/up-vote.component.css"]
};

@Component(up_vote_component)
export class UpVoteComponent
{
	@Input() count: number;
	@Input() voted; boolean = false;
	@Output() vote = new EventEmitter();

	constructor()
	{
		console.info("UpVoteComponent ctor");
	}

	onClick()
	{
		this.vote.emit({});
	}
}