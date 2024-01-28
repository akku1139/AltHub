import libxmljs from "libxmljs";
import { error } from '@sveltejs/kit';
import { PageLoad } from "./$types";

export function load({ params }): PageLoad {
	const res = await fetch(`https://gist.github.com/${params.user}/${params.id}`)
	if(res.status !== 200){
		error(404, 'Not found');
		return;
	}
	const doc = libxmljs.parseXml(res.text());
	
}
