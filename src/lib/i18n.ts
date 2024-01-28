import locales from "../../locales/_index.ts";

lang = "ja"

export function t(name: string): string {
  return locales[lang][name];
}
