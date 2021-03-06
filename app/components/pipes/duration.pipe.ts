import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "duration"})
export class DurationPipe implements PipeTransform
{
	private durations: string[] = [
		"",
		"Half Hour",
		"One Hour",
		"Half Day",
		"Full Day"
	];

	constructor()
	{
		console.info("DurationPipe ctor");
	}

	transform(value: number): string
	{
		console.log("duration: ", value);

		let result: string = this.durations[value];
		/*switch(value)
		{
			case 1:
			{
				result = "Half Hour"; break;
			}
			case 2:
			{
				result = "One Hour"; break;
			}
			case 3:
			{
				result = "Half Day"; break;
			}
			case 4:
			{
				result = "Full Day"; break;
			}
			default:
			{
				result = value.toString(); break;
			}
		}*/
		return result;
	}
}