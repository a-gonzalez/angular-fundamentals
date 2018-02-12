import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";

import {
	TOASTR_TOKEN,
	Toastr,
	AuthenticationService
} from "../../components/services/index";

let user_login_component = {
	selector: "user-login",
	templateUrl: "app/components/users/user-login.component.html",
	styleUrls: ["app/components/users/user-login.component.css"]
};

@Component(user_login_component)
export class UserLoginComponent
{
	private failed: boolean = false;

	constructor(@Inject(TOASTR_TOKEN) private toast: Toastr, private router: Router, private auth: AuthenticationService)
	{
		console.info("UserLoginComponent ctor");
	}

	cancel()
	{
		this.router.navigate(["events"]);
	}

	private login(values)
	{
		if (values != undefined && values != null)
		{
			console.log(values);

			this.auth.login(values.username, values.password).subscribe(response =>
			{
				console.log("login result: ", response);

				if (response != false)
				{
					this.toast.success("User has been authenticated.", "Login");
					this.router.navigate(["events"]);
				}
				else
				{
					this.toast.error("User was not authenticated.", "Login");
					this.failed = true;
				}
			});
		}
	}
}