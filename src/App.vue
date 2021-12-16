<template>
  <div>
    <Navbar></Navbar>
    <div>
      <RouterView v-slot="{ Component }">
        <Alert
          dismissible
          @dismissed="error = false"
          variant="alert alert-danger"
          v-if="error"
        >
          An error occurred while loading.
        </Alert>
        <Suspense v-else>
          <component :is="Component" />
          <template #fallback>Loading, be patient...</template>
        </Suspense>
      </RouterView>

    </div>
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import Races from "@/views/Races.vue";
import Home from "@/components/Home.vue";
import { defineComponent, ref, onErrorCaptured } from "vue";

export default defineComponent({
  name: "App",

  components: {
    Navbar: Navbar,
  },

  setup() {
    const error = ref(false);

    onErrorCaptured(() => {
      error.value = true;
      return false;
    });

    return { error };
  },
});
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~font-awesome/css/font-awesome.min.css";
</style>
