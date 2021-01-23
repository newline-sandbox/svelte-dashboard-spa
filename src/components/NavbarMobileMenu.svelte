<script>
  import NavbarMobileMenuItem from "./NavbarMobileMenuItem.svelte";

  export let isMobileMenuOpened;
  export let dashboardRoutes;
</script>

<div class="{isMobileMenuOpened ? 'block' : 'hidden'} md:hidden">
  <ul class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    {#each dashboardRoutes as route}
      <NavbarMobileMenuItem {route} />
    {/each}
  </ul>
</div>
