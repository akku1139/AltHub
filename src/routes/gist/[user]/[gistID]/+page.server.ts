import * as htmlparser2 from "htmlparser2";
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";

type ret = {
	title: string;
	description: string;
	files: {
		filename: string;
		content:  {
			text: string; // if basic file
		};
	};
}

export async function load({ params }): PageServerLoad {
	const res = await (await fetch(`https://gist.github.com/${params.user}/${params.gistID}`)).text();
	const doc = htmlparser2.parseDocument(res);
	return {
		title: new RegExp(`<a href="/${params.user}/${params.gistID}">(.*?)</a>`).exec(res)[1],
		description: /<div itemprop="about">(.*?)<\/div>/s.exec(res)[1].trim(),
	} satisfies ret;
}
