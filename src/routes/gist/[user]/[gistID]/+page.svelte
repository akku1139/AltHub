<script lang="ts">
import { page } from '$app/stores';
import type { Gist } from "$lib/types/gist.ts";
export let data:Gist;
</script>

<div><a href={ $page.params.user }>{ $page.params.user }</a>/<a href={ $page.params.gistID }>{ data.title }</a></div>
<div>{ data.description }</div>

<pre>{ JSON.stringify(data, null, 2) }</pre>
