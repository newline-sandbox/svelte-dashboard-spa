<script>
  import Searchbar from "./Searchbar.svelte";
  import { getRouteLabel } from "../routes";

  export let currentRoute;

  $: currentRouteLabel = getRouteLabel(currentRoute.path);
</script>

<div class="bg-white shadow">
  <div
    class="max-w-7xl mx-auto py-4 md:py-5 xl:py-6 px-4 sm:px-6 lg:px-8 flex
    justify-between">
    <h1
      class="text-2xl xl:text-3xl leading-tight black tracking-wider uppercase
      font-semibold flex items-center">
      <span>Dashboard</span>
      <svg
        viewBox="0 0 18 18"
        role="presentation"
        aria-hidden="true"
        focusable="false"
        style="color: rgb(118, 118, 118);"
        class="h-3 w-auto mx-3">
        <path
          d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1
          -1.42-1.41l7.29-7.29z"
          fill-rule="evenodd"
          fill="currentcolor" />
      </svg>
      <span>{currentRouteLabel}</span>
    </h1>
    <Searchbar />
  </div>
</div>
