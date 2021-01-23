<script>
  import { dashboardRoutes } from "../routes";
  import NavbarMobileMenuItem from "./NavbarMobileMenuItem.svelte";

  export let currentRoute;
  export let isMobileMenuOpened;
</script>

<div class="{isMobileMenuOpened ? 'block' : 'hidden'} md:hidden">
  <ul class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    {#each dashboardRoutes as route}
      {#if !route.isExcludedFromNav}
        <NavbarMobileMenuItem {route} {currentRoute} />
      {/if}
    {/each}
  </ul>
</div>
