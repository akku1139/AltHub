<script>
import toGitHubURL from "$lib/toGitHubURL.ts";
import { page } from '$app/stores';
</script>

<header>
  <a href="/"><h1>AltHub</h1></a>
  <a href="{ toGitHubURL($page.url.pathname) }">View on GitHub</a>
</header>

<slot></slot>
