import { Component, EventEmitter, Input, Output } from "@angular/core";

let up_vote_component = {
	selector: "up-vote",
	templateUrl: "app/components/events/up-vote.component.html",
	templateUrls: ["app/components/events/up-vote.component.css"]
};

@Component(up_vote_component)
export class UpVoteComponent
{
	@Input() count;
	@Input() set voted(value)
	{
		this.iColor = value ? "#ff0000" : "#ffffff";
	}
	@Output() vote = new EventEmitter();
	public iColor: string;

	constructor()
	{
		console.info("UpVoteComponent ctor");
	}

	onClick()
	{
		this.vote.emit({});
	}
}
//<i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
//<i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>