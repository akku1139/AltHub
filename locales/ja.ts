import schema from "./_schema.ts";
import en from "./en.ts";

export default {
  ...en,
  althub: "オルトハブ"
} as const satisfies schema;
