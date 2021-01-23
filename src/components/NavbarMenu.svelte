<script>
  import NavbarMenuItem from "./NavbarMenuItem.svelte";

  export let dashboardRoutes;
</script>

<nav class="hidden md:block">
  <ul class="ml-10 flex items-baseline space-x-4">
    {#each dashboardRoutes as route}
      <NavbarMenuItem {route} />
    {/each}
  </ul>
</nav>
