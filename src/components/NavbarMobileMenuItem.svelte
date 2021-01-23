<script>
  let isActive = false;

  export let route = {};
</script>

<li>
  <a
    href="/"
    title={route.label}
    class="{isActive ? 'bg-gray-100 text-black' : 'text-gray-400 hover:bg-gray-200 hover:text-black'}
    px-3 py-2 rounded-sm text-sm font-medium tracking-wide block">
    {route.label}
  </a>
</li>
