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
	SessionListComponent
} from "./components/index";

import {
	Error404Component
} from "./components/errors/index";

import {
	EventService,
	ToastService,
	EventListResolverService,
	EventRouteActivatorService,
	UserService
} from "./components/services/index";

import {
	DurationPipe
} from "./components/pipes/index";

import { CollapsibleWellComponent } from "./components/collapsible-well.component";

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
		CollapsibleWellComponent
	],
	providers: [
		EventService,
		ToastService,
		EventRouteActivatorService,
		EventListResolverService,
		UserService
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