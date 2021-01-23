<script>
  import { Route } from "svelte-router-spa";
  import Navbar from "../components/Navbar.svelte";

  export let currentRoute;

  const params = {};
</script>

<div>
  <Navbar {currentRoute} />
  <main>
    <div class="max-w-7xl mx-auto py-8 sm:py-10 md:py-12 sm:px-10 lg:px-12">
      <Route {currentRoute} {params} />
    </div>
  </main>
</div>
