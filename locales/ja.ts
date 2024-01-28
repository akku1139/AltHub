import schema from "./_schema.ts";
import en from "./en.ts";

export default {
  ...en,
} as const satisfies schema;
