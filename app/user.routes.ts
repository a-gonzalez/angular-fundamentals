import { Routes } from "@angular/router";

import { UserLoginComponent } from "./components/users/user-login.component";
import { UserProfileComponent } from "./components/users/user-profile.component";

export const USER_ROUTES: Routes = [
	{
		path: "login",
		component: UserLoginComponent
	},
	{
		path: "profile",
		component: UserProfileComponent
	}
];