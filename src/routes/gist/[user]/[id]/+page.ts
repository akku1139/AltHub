import * as htmlparser2 from "htmlparser2";
import { error } from '@sveltejs/kit';
import type { PageLoad } from "./$types";

export async function load({ params }): PageLoad {
	const doc = htmlparser2.parseDocument((await fetch(`https://gist.github.com/${params.user}/${params.id}`)).text())
	return {
		title: ('div[@itemprop="about"]')
	};
}
