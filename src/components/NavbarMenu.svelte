<script>
  import { dashboardRoutes } from "../routes";
  import NavbarMenuItem from "./NavbarMenuItem.svelte";

  export let currentRoute;
</script>

<nav class="hidden md:block">
  <ul class="ml-10 flex items-baseline space-x-4">
    {#each dashboardRoutes as route}
      {#if !route.isExcludedFromNav}
        <NavbarMenuItem {route} {currentRoute} />
      {/if}
    {/each}
  </ul>
</nav>
