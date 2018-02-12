import { Routes } from "@angular/router";

import {
	EventListComponent,
	EventDetailComponent,
	EventCreateComponent,
	SessionCreateComponent
} from "./components/events/index";

import { Error404Component } from "./components/errors/404.component";

//import { EventRouteActivatorService } from "./components/services/event-route-activator.service";
import {
	EventListResolverService,
	EventResolverService
} from "./components/services/index";

export const APP_ROUTES: Routes = [
	{
		path: "events/new",
		component: EventCreateComponent
	},
	{
		path: "events",
		component: EventListComponent,
		resolve: {
			events: EventListResolverService
		}
	},
	{
		path: "events/:id",
		component: EventDetailComponent,
		//canActivate: [EventRouteActivatorService]
		resolve: {
			event: EventResolverService
		}
	},
	{
		path: "events/session/new",
		component: SessionCreateComponent
	},
	{
		path: "404",
		component: Error404Component
	},
	{
		path: "",
		redirectTo: "/events",
		pathMatch: "full"
	},
	{
		path: "user",
		loadChildren: "app/user.module#UserModule"
	}
];