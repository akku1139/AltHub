import * as htmlparser2 from "htmlparser2";
import { error } from '@sveltejs/kit';
import type { PageLoad } from "./$types";

type ret = {
	title: string;
	user: string;
	gistID: string;
}

export async function load({ params }): PageLoad {
	const res = (await fetch(`https://gist.github.com/${params.user}/${params.gistID}`)).text();
	const doc = htmlparser2.parseDocument(res);
	return {
		title: /<div itemprop="about">.*?<\/div>/.exec(res)[0].trim(),
		user: params.user,
		gistID: params.gistID,
	} satisfies ret;
}
