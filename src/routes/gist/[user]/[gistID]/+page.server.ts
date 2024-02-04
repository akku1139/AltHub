import { parse } from 'node-html-parser';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";

export async function load({ params }): PageServerLoad {
  const res = await (await fetch(`https://gist.github.com/${params.user}/${params.gistID}`)).text();
  const doc = await parse(res);
  return {
    title: new RegExp(`<a href="/${params.user}/${params.gistID}">(.*?)</a>`).exec(res)[1],
    description: /<div itemprop="about">(.*?)<\/div>/s.exec(res)[1].trim(),
  } satisfies Gist;
}
