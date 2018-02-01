import { Directive } from "@angular/core";
import { Validator, FormGroup, NG_VALIDATORS } from "@angular/forms";

let validate_location = {
	selector: "[validateLocation]",
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: ValidateLocation,
			multi: true
		}
	]
};

@Directive(validate_location)
export class ValidateLocation implements Validator
{
	constructor()
	{
		console.info("ValidateLocation ctor");
	}

	validate(group: FormGroup): {[key: string]: any}
	{
		let result = null;

		let address = group.controls["address"];
		let city = group.controls["city"];
		let country = group.controls["country"];
		let url = (<FormGroup>group.root).controls["onlineUrl"];

		console.log("address: ", address);
		console.log("city: ", city);
		console.log("country: ", country);
		console.log("url: ", url);

		if ((!(address && address.value) && !(city && city.value) && !(country && country.value)) || (url && url.value))
		{
			result = {
				valid: false
			};

			console.log(result);
		}
		return result;
	}
}