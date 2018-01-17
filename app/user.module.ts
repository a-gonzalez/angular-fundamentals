import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { USER_ROUTES } from "../app/user.routes";

import { UserLoginComponent } from "./components/users/user-login.component";
import { UserProfileComponent } from "./components/users/user-profile.component";

let user_module = {
	imports : [
		CommonModule,
		RouterModule.forChild(USER_ROUTES),
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		UserLoginComponent,
		UserProfileComponent
	],
	providers: [

	]
};

@NgModule(user_module)
export class UserModule
{
	constructor()
	{
		console.info("UserModule ctor");
	}
}