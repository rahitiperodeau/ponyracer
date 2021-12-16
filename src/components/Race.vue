<template>
  <h2>{{ raceModel.name }}</h2>
  <h3>{{ instantFromNow }}</h3>
  <div>
    <Pony
      v-for="pony in raceModel.ponies"
      :ponyModel="pony"
      :key="pony.id"
      @selected="changeColor(pony)"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import Pony from "@/components/Pony.vue";
import { RaceModel } from "@/models/RaceModel";
import { PonyModel } from "@/models/PonyModel";
import fromNow from "@/utils/FromNow.ts";
import randomColor from "@/utils/ChangeColor.ts";

export default defineComponent({
  name: "Race",
  components: { Pony: Pony },
  setup(props) {
    const instantFromNow = computed(() => {
      return fromNow(props.raceModel.startInstant);
    });
    function changeColor(pPony: PonyModel) {
      pPony.color = randomColor();
    }
    return { instantFromNow, changeColor };
  },
  props: {
    raceModel: {
      type: Object as PropType<RaceModel>,
      required: true,
    },
  },
});
</script>
