import type schema from "./_schema.ts";
import en from "./en.ts";

export default {
  ...en,
  view_on_github: "GitHubで見る"
} as const satisfies schema;
