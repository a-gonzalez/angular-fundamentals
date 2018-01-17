import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { ToastService } from "../../components/services/toast.service";
import { UserService } from "../../components/services/user.service";

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

	constructor(private router: Router, private toast: ToastService, private auth: UserService)
	{
		console.info("UserProfileComponent ctor");
	}

	ngOnInit()
	{
		console.info("UserProfileComponent init");
		//console.log(this.auth.user);

		this.firstname = new FormControl(this.auth.user.firstname, [Validators.required, Validators.pattern("^[A-Z].*")]);
		this.lastname = new FormControl(this.auth.user.lastname, [Validators.required, Validators.pattern("^[A-Z].*")]);
		this.profileform = new FormGroup({
			firstname: this.firstname,
			lastname: this.lastname
		});
	}

	cancel()
	{
		this.router.navigate(["events"]);
	}

	save(values)
	{
		if (this.profileform.valid)
		{
			this.auth.update(values.firstname, values.lastname);
			this.toast.success("Profile has been updated.", "Save");
			this.router.navigate(["events"]);
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