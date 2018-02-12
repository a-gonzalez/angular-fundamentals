import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import {
	TOASTR_TOKEN,
	Toastr,
	AuthenticationService
} from "../../components/services/index";
//import { UserService } from "../../components/services/user.service";

let user_profile_component = {
	selector: "user-profile",
	templateUrl: "app/components/users/user-profile.component.html",
	styleUrls: ["app/components/users/user-profile.component.css"]
}

@Component(user_profile_component)
export class UserProfileComponent implements OnInit
{ 
	private profileform: FormGroup;
	private lastname: FormControl;
	private firstname: FormControl;

	constructor(private router: Router, @Inject(TOASTR_TOKEN) private toast: Toastr, private auth: AuthenticationService)
	{
		console.info("UserProfileComponent ctor");
	}

	ngOnInit()
	{
		console.info("UserProfileComponent init");
		//console.log(this.auth.user);

		this.firstname = new FormControl(this.auth.user.firstName, [Validators.required, Validators.pattern("^[A-Z].*")]);
		this.lastname = new FormControl(this.auth.user.lastName, [Validators.required, Validators.pattern("^[A-Z].*")]);
		this.profileform = new FormGroup({
			firstname: this.firstname,
			lastname: this.lastname
		});
	}

	cancel()
	{
		this.router.navigate(["events"]);
	}

	logout()
	{
		this.auth.logout().subscribe(() =>
		{
			let url: string = "/user/login";
			
			this.router.navigate([url]);
		});
	}

	save(values)
	{
		if (this.profileform.valid)
		{
			this.auth.update(values.firstname, values.lastname).subscribe(() =>
			{
				this.toast.success("Profile has been updated.", "Save");
				this.router.navigate(["events"]);
			});
		}
		else
		{
			this.toast.error("Profile was not updated.", "Save");
		}
	}

	validateLastname()
	{
		return this.lastname.valid || this.lastname.untouched;
	}

	validateFirstname()
	{
		return this.firstname.valid || this.firstname.untouched;
	}
}