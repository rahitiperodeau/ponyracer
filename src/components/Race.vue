<template>
  <h2>{{ raceModel.name }}</h2>
  <div :v-for="pony in raceModel.ponies">
    <Pony :ponyModel="pony" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Pony from "@/components/Pony.vue";
import { RaceModel } from "@/models/RaceModel";

export default defineComponent({
  name: "Race",
  components: { Pony: Pony },
  props: {
    raceModel: {
      type: Object as PropType<RaceModel>,
      required: true,
    },
  },
});
</script>
