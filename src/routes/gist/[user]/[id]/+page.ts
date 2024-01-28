import * as htmlparser2 from "htmlparser2";
import { error } from '@sveltejs/kit';
import type { PageLoad } from "./$types";

export async function load({ params }): PageLoad {
	const res = (await fetch(`https://gist.github.com/${params.user}/${params.id}`)).text();
	const doc = htmlparser2.parseDocument(res);
	return {
		title: /<div itemprop="about">.*?<\/div>/.exec(res)[0].trim()
	};
}
