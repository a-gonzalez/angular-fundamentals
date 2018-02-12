import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
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
	//EventRouteActivatorService,
	EventResolverService,
	AuthenticationService,
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
import {
	ModalTriggerDirective,
	ValidateLocation
} from "./components/directives/index";

declare let toastr: Toastr;
declare let jQuery: Object;

var app_module = {
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
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
		ValidateLocation,
		UpVoteComponent
	],
	providers: [
		EventService,
		//EventRouteActivatorService,
		EventListResolverService,
		EventResolverService,
		AuthenticationService,
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