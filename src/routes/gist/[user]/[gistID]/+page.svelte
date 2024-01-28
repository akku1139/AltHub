<script lang="ts">
import type { PageData } from "./$types";
export let data:PageData;
</script>

<h1>gist</h1>
<div>{ data.title }</div>
<div><span>{ data.user }</span>/<span>{ data.gistID }</span>
