<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <a class="navbar-brand">PonyRacer</a>
    <button v-on:click="toggleNavbar()" type="button" class="navbar-toggler">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      id="navbar"
      class="navbar-collapse"
      :class="{ collapse: navbarCollapsed }"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link">Races</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Navbar",
  setup() {
    const navbarCollapsed = ref(true);
    function toggleNavbar() {
      navbarCollapsed.value = !navbarCollapsed.value;
    }
    return {
      toggleNavbar,
      navbarCollapsed,
    };
  },
});
</script>
