<template>
  <div class="text-center" style="margin-top: 100px">
    <div>
      <h1>Ponyracer <small>Always a pleasure to bet on ponies</small></h1>
    </div>

    <div>
      <RouterLink class="btn btn-primary mx-1" to="/races"
        >Go to Races</RouterLink
      >
      <RouterLink class="btn btn-success mx-1" to="/register"
        >Register</RouterLink
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Home",
});
</script>
