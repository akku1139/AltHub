<script lang="ts">
import { page } from '$app/stores';
import type { PageData } from "./$types";
export let data:PageData;
</script>

<div><a href={ $page.params.user }>{ $page.params.user }</a>/<span href={ $page.params.gistID }>{ data.title }</a></div>
<div>{ data.description }</div>
