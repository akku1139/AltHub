import schema from "./_schema.ts";
import en from "./en.ts";

export default {
  ...en,
  althub: "オルトハブ" // TODO ダサいので後で消す
} as const satisfies schema;
