import { Injectable } from "@angular/core";

import { IUser } from "../models/user.interface";
import { last } from "rxjs/operator/last";

@Injectable()
export class UserService
{
	public user: IUser = null;

	constructor()
	{
		console.info("UserService ctor");
	}

	login(username: string, password: string)
	{
		this.user = {
			id: 1,
			username: "agonzalez",
			firstname: "Abril",
			lastname: "Gonzalez"
		};
	}

	update(firstname: string, lastname: string)
	{
		this.user.firstname = firstname;
		this.user.lastname = lastname;
	}

	isAuthenticated(): boolean
	{
		return !!this.user;
	}

	logout(username: string)
	{
		this.user = null;
	}
}