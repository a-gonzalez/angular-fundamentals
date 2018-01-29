import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { APP_ROUTES } from "./app.routes";

import {
	AppComponent,
	NavigationComponent,
	EventListComponent,
	EventThumbnailComponent,
	EventDetailComponent,
	EventCreateComponent,
	SessionCreateComponent,
	SessionListComponent,
	UpVoteComponent
} from "./components/index";

import {
	Error404Component
} from "./components/errors/index";

import {
	EventService,
	EventListResolverService,
	EventRouteActivatorService,
	UserService,
	VoterService,
	Toastr,
	TOASTR_TOKEN,
	JQUERY_TOKEN
} from "./components/services/index";

import {
	DurationPipe
} from "./components/pipes/index";

import { CollapsibleWellComponent } from "./components/collapsible-well.component";
import { SimpleModalComponent } from "./components/simple-modal.component";
import { ModalTriggerDirective } from "./components/directives/modal-trigger.directive";

declare let toastr: Toastr;
declare let jQuery: Object;

var app_module = {
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(APP_ROUTES)
	],
	declarations: [
		AppComponent,
		NavigationComponent,
		EventListComponent,
		EventThumbnailComponent,
		EventDetailComponent,
		EventCreateComponent,
		SessionCreateComponent,
		SessionListComponent,
		DurationPipe,
		Error404Component,
		CollapsibleWellComponent,
		SimpleModalComponent,
		ModalTriggerDirective,
		UpVoteComponent
	],
	providers: [
		EventService,
		EventRouteActivatorService,
		EventListResolverService,
		UserService,
		VoterService,
		{
			provide: TOASTR_TOKEN,
			useValue: toastr
		},
		{
			provide: JQUERY_TOKEN,
			useValue: jQuery
		}
	],
	bootstrap: [AppComponent]
};

@NgModule(app_module)
export class AppModule
{
	constructor()
	{
		console.info("AppModule ctor");
	}
}