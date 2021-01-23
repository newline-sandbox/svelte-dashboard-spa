<script>
  import PlaceholderViewContent from "../components/PlaceholderViewContent.svelte";
  import { getRouteLabel } from "../routes";

  export let currentRoute;
  export let params;

  $: currentView = getRouteLabel(currentRoute.path);
</script>

<PlaceholderViewContent {currentView} />
