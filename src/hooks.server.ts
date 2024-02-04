import type { HandleServerError } from "@sveltejs/kit";

export async function handleError({ error, event, status, message }): HandleServerError {
  return {
    message: error,
  };
}
