<script>
import { t, lang } from "$lib/i18n.ts";
import toGitHubURL from "$lib/toGitHubURL.ts";
import { page } from '$app/stores';
</script>

<header>
  <a href="/"><h1>{ t("althub") }</h1></a>
  <a href="{ toGitHubURL($page.url.pathname) }">{ t("view_on_github")}</a>
</header>

<slot></slot>
