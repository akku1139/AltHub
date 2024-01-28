import * as htmlparser2 from "htmlparser2";
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";

type ret = {
	title: string;
	user: string;
	gistID: string;
}

export async function load({ params }): PageServerLoad {
	const res = await (await fetch(`https://gist.github.com/${params.user}/${params.gistID}`)).text();
	const doc = htmlparser2.parseDocument(res);
	return {
		title: /<div itemprop="about">(.*?)<\/div>/s.exec(res)[1].trim(),
	} satisfies ret;
}
