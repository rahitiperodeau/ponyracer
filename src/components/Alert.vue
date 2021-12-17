<template>
  <div :class="alertClasses">
    <slot></slot>
    <button
      v-if="dismissible"
      @click="dismiss()"
      type="button"
      class="close mx-2 float-right"
      aria-label="Close"
    >
      <span aria-hidden="true">&#215;</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "Alert",
  props: {
    dismissible: {
      type: Boolean,
    },
    variant: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const alertClasses = computed(() => {
      return props.variant;
    });

    function dismiss() {
      return emit("dismissed", props.dismissible);
    }
    return { dismiss, alertClasses };
  },
});
</script>
