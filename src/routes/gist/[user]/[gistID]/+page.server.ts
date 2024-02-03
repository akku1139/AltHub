import { parse } from 'node-html-parser';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";

type User = {
	id: string;
	iconURL: string;
};

type Gist = {
	title: string;
	description: string;
	user: string; // TODO: define another type
	gistID: string;
	stars: number;
	forks: number;
	files: {
		filename: string;
		content:  {
			text?: string; // if basic file
			url?: string; // if image like file
		};
	};
	revisions: {

	}
	comments: {
		user: User;
		date: Date;
		contentHistory: string[];
	}
};

export async function load({ params }): PageServerLoad {
	const res = await (await fetch(`https://gist.github.com/${params.user}/${params.gistID}`)).text();
	const doc = await parse(res);
	return {
		title: new RegExp(`<a href="/${params.user}/${params.gistID}">(.*?)</a>`).exec(res)[1],
		description: /<div itemprop="about">(.*?)<\/div>/s.exec(res)[1].trim(),
	} satisfies Gist;
}
