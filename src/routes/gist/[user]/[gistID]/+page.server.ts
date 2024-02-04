import { parse } from 'node-html-parser';
import { error } from '@sveltejs/kit';
import type { Gist } from "$lib/types/gist.ts";

export async function load({ params }): Promise<Gist> {
  const res = await fetch(`https://gist.github.com/${params.user}/${params.gistID}`);
  if(!res.ok) {
    return error(404, {
      message: 'Not found',
    });
  }
  const text = await res.text();
  const doc = await parse(text).querySelector("div.application-main");
  const head = doc.querySelector("div.gisthead");
  return {
    title: new RegExp(`<a href="/${params.user}/${params.gistID}">(.*?)</a>`).exec(text)[1],
    description: /<div itemprop="about">(.*?)<\/div>/s.exec(text)[1].trim(),
    stars: Number(head.querySelector("#gist-star-button-count > * :nth-child(3)").innerText),
    forks: Number(head.querySelector("#gist-fork-button > * :nth-child(3)").innerText),
  };
}
