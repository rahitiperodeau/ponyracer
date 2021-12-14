<template>
  <div>{{ ponyModel.name }}</div>
  <div>{{ ponyModel.color }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PonyModel } from "@/models/PonyModel";

export default defineComponent({
  name: "Pony",
  props: {
    ponyModel: {
      type: Object as PropType<PonyModel>,
      required: true,
    },
  },
});
</script>
