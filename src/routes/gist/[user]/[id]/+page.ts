import libxmljs from "libxmljs";
import { error } from '@sveltejs/kit';
import type { PageLoad } from "./$types";

export function load({ params }): PageLoad {
	const res = fetch(`https://gist.github.com/${params.user}/${params.id}`).then((res) => {
		if(res.status !== 200){
			error(404, 'Not found');
			return;
		}
		res.text().then((_text) => {
			const doc = libxmljs.parseXml(_text);
			doc.find('//div[@itemprop="about"]')[0].text();
		})
	})
}
