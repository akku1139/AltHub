<script lang="ts">
import { page } from '$app/stores';
import type { PageData } from "./$types";
export let data:PageData;
</script>

<div><a href={ $page.params.user }>{ $page.params.user }</span>/<span href={ $page.params.gistID }>{ data.title }</span></div>
<div>{ data.description }</div>
