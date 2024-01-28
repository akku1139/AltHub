import locales from "../../locales/_index.ts";

let lang = "ja"

export function t(name: string): string {
  return locales[lang][name];
}
