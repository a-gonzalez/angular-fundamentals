import { Routes } from "@angular/router";

import { EventListComponent } from "./components/events/event-list.component";
import { EventDetailComponent } from "./components/events/event-detail.component";
import { EventCreateComponent } from "./components/events/event-create.component";
import { SessionCreateComponent } from "./components/events/session-create.component";
import { Error404Component } from "./components/errors/404.component";

import { EventRouteActivatorService } from "./components/services/event-route-activator.service";
import { EventListResolverService } from "./components/services/event-list-resolver.service";

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
		canActivate: [EventRouteActivatorService]
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