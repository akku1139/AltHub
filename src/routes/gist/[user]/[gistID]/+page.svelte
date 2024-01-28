<script lang="ts">
import { page } from '$app/stores';
import type { PageData } from "./$types";
export let data:PageData;
</script>

<h1>gist</h1>
<div>{ data.title }</div>
<div><span>{ $page.params.user }</span>/<span>{ $page.params.gistID }</span></div>
