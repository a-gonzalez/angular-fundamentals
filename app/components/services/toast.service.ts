import { OpaqueToken } from "@angular/core";

export let TOASTR_TOKEN = new OpaqueToken("toastr");

export interface Toastr
{
	success(message: string, title?: string): void;
	info(message: string, title?: string): void;
	warning(message: string, title?: string): void;
	error(message: string, title?: string): void;
}