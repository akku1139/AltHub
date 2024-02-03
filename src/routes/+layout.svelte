<script>
import toGitHubURL from "$lib/toGitHubURL.ts";
import { page } from '$app/stores';
</script>

<header>
  <a href="/"><h1>AltHub</h1></a>
  <a href="{ toGitHubURL($page.url.pathname) }">{ t("view_on_github")}</a>
</header>

<slot></slot>
