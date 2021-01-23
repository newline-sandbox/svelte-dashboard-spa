<script>
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
</script>

<style global lang="postcss">
  /* Only apply purgecss on utilities, per the Tailwind documentation. */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;
</style>

<Router {routes} />
