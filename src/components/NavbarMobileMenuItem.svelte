<script>
  import { routeIsActive, Navigate } from "svelte-router-spa";

  export let route = {};
  export let currentRoute;

  let isActive = false;

  $: isActive = currentRoute && route.path && routeIsActive(route.path, true);
</script>

<li>
  <Navigate
    to={route.path}
    title={route.label}
    styles="{isActive ? 'bg-gray-100 text-black' : 'text-gray-400 hover:bg-gray-200 hover:text-black'}
    px-3 py-2 rounded-sm text-sm font-medium tracking-wide block">
    {route.label}
  </Navigate>
</li>
