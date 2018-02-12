import { Injectable } from "@angular/core";
import {
	Http,
	Response,
	RequestOptions,
	Headers
} from "@angular/http";

import { Observable } from "rxjs/Rx";

import { IUser } from "../models/user.interface";

@Injectable()
export class AuthenticationService
{
	public user: IUser = null;

	constructor(private http: Http)
	{
		console.info("AuthenticationService ctor");
	}

	login(username: string, password: string)
	{
		let url: string = "/api/login";
		let headers = new Headers({"Content-Type": "application/json"});
		let options = new RequestOptions({headers: headers});
		let info = {
			username: username,
			password: password
		};

		return this.http.post(url, JSON.stringify(info), options).do(response =>
		{
			if (response)
			{
				this.user = <IUser>response.json().user;
			}
		}).catch(error =>
		{
			return Observable.of(false);
		});
		/*this.user = {
			id: 1,
			username: "agonzalez",
			firstname: "Abril",
			lastname: "Gonzalez"
		};*/
	}

	update(firstname: string, lastname: string)
	{
		this.user.firstName = firstname;
		this.user.lastName = lastname;

		let url: string = `/api/users/${this.user.id}`;
		let headers = new Headers({"Content-Type": "application/json"});
		let options = new RequestOptions({headers: headers});

		return this.http.put(url, JSON.stringify(this.user), options);
	}

	isAuthenticated(): boolean
	{
		return !!this.user;
	}

	logout()
	{
		this.user = undefined;

		let url: string = "/api/logout";
		let headers = new Headers({"Content-Type": "application/json"});
		let options = new RequestOptions({headers: headers});
		
		return this.http.post(url, JSON.stringify({}), options);
	}

	verifyAuthenticationStatus()
	{
		let url = "/api/currentIdentity";

		return this.http.get(url).map((response: any) =>
		{
			let result = {};

			if (response._body)
			{
				result = response.json();
			}
			console.log("verify map: ", result);

			return result;
		}).do((user: any) =>
		{
			if (!!user.userName)
			{
				console.log("verify do: ", user);

				this.user = user;
			}
		}).subscribe();
	}
}