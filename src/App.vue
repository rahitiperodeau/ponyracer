<template>
  <div>
    <Navbar></Navbar>
    <div class="container" style="margin-top: 70px">
      <h1>Ponyracer</h1>
    </div>
    <div><PonyRaces></PonyRaces></div>
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import PonyRaces from "@/views/PonyRaces.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  components: {
    Navbar: Navbar,
    PonyRaces: PonyRaces,
  },
});
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~font-awesome/css/font-awesome.min.css";
</style>
