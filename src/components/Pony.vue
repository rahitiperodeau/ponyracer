<template>
  <figure @click="ponyClicked()">
    <img :src="imgURL" :alt="ponyModel.name" />
    <figcaption>{{ ponyModel.name }}</figcaption>
  </figure>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { PonyModel } from "@/models/PonyModel";

export default defineComponent({
  name: "Pony",
  props: {
    ponyModel: {
      type: Object as PropType<PonyModel>,
      required: true,
    },
  },
  emits: {
    selected: (pony: PonyModel) => true,
  },
  setup(props, { emit }) {
    const imgURL = computed(() => {
      return "/images/pony-" + props.ponyModel.color.toLowerCase() + ".gif";
    });

    function ponyClicked() {
      return emit("selected", props.ponyModel);
    }
    return { imgURL, ponyClicked };
  },
});
</script>

<style>
figure {
  margin: 3px;
  padding: 3px;
  font-size: 12px;
}

img {
  height: 50px;
}
</style>
