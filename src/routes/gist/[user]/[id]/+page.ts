import { JSDOM } from 'jsdom';
import { error } from '@sveltejs/kit';
import type { PageLoad } from "./$types";

export async function load({ params }): PageLoad {
	const dom = JSDOM.fromURL(`https://gist.github.com/${params.user}/${params.id}`);
	const document:Document = dom.window.document;
	return {
		title: document.querySelector('div[@itemprop="about"]')?.innerHTML
	};
}
