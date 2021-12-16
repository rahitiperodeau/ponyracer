<template>
  <div>
    <div>
      <Race v-for="race in races" :key="race.id" :raceModel="race" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Race from "@/components/Race.vue";
import { RaceModel } from "@/models/RaceModel";
import { useRaceService } from "@/composables/RaceService.ts";

export default defineComponent({
  name: "Races",
  components: { Race: Race },
  async setup() {
    const races = ref<Array<RaceModel>>();
    let race = useRaceService();
    race.list().then((response) => {
      console.log(response);
      races.value = response.data;
    });
    return {
      races,
    };
  },
});
</script>
