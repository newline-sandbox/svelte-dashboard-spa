<script>
  import NavbarMenu from "./NavbarMenu.svelte";
  import NavbarMobileMenu from "./NavbarMobileMenu.svelte";
  import Titlebar from "./Titlebar.svelte";
  import { onMount } from "svelte";
  import { debounce } from "../utils";

  let isMobileMenuOpened = false;

  const toggleMenu = evt => {
    if (evt.type === "click") {
      isMobileMenuOpened = !isMobileMenuOpened;
    } else if (evt.type === "resize") {
      if (isMobileMenuOpened && window.innerWidth >= 768) {
        isMobileMenuOpened = false;
      }
    }
  };

  const debouncedToggleMenu = debounce(toggleMenu, 300);

  onMount(() => {
    window.addEventListener("resize", debouncedToggleMenu);

    return () => {
      window.removeEventListener("resize", debouncedToggleMenu);
    };
  });

  export let currentRoute;
</script>

<header class="border-solid border-b border-gray-50 border-opacity-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <img class="h-8 w-8" src="/assets/logo.svg" alt="Logo" />
        </div>
        <NavbarMenu {currentRoute} />
      </div>
      <div class="hidden lg:block">
        <div class="ml-4 flex items-center md:ml-6">
          <button
            class="p-1 rounded-full text-gray-400 hover:bg-gray-200
            hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-offset-gray-300 focus:ring-gray-300">
            <span class="sr-only">View notifications</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002
                6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6
                11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6
                0v-1m6 0H9" />
            </svg>
          </button>
          <div class="ml-3 relative">
            <div>
              <button
                class="max-w-xs bg-gray-100 rounded-full flex items-center
                text-sm focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-offset-gray-300 focus:ring-gray-300"
                id="user-menu"
                aria-haspopup="true">
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://i.pravatar.cc/300"
                  alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="-mr-2 flex md:hidden">
        <button
          class="bg-white inline-flex items-center justify-center p-2 rounded-md
          text-gray-400 hover:text-black hover:bg-gray-200 focus:outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300
          focus:ring-white"
          on:click={toggleMenu}>
          <span class="sr-only">Open main menu</span>
          <svg
            class="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            class="hidden h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <NavbarMobileMenu {currentRoute} {isMobileMenuOpened} />
</header>
<Titlebar {currentRoute} />
