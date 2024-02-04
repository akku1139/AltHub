import { parse } from 'node-html-parser';
import { error } from '@sveltejs/kit';
import type { Gist } from "$lib/types/gist.ts";

export async function load({ params }): Gist {
  const res = await fetch(`https://gist.github.com/${params.user}/${params.gistID}`);
  if(!res.ok) {
    return error(404, {
			message: 'Not found'
		});
  }
  const document = await parse(await res.text());
  return {
    title: new RegExp(`<a href="/${params.user}/${params.gistID}">(.*?)</a>`).exec(res)[1],
    description: /<div itemprop="about">(.*?)<\/div>/s.exec(res)[1].trim(),
    forks: document.getElementById("gist-fork-button").children[0].children[2].innerText,
  };
}
