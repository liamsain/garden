<script setup lang="ts">
import { computed } from 'vue';
import { format } from 'date-fns';
import { IVeg } from '../types/types';
import harvesterImg from '../assets/harvester.png';
import sowIndoorsImg from '../assets/seeding.png';
import sowOutdoorsImg from '../assets/sow.png';
import plantOutSeedlingsImg from '../assets/plant-out-seedlings.png';
import { veg } from '../data/veg';
import MonthJob from './MonthJob.vue';
const props = defineProps<{
  monthNumber: number
}>();
const monthNumberIsInRange = (range?: [number, number]): boolean => {
  if (!range) {
    return false;
  }
  if (range[0] <= range[1]) {
    return props.monthNumber >= range[0] && props.monthNumber <= range[1];
  } else {
    return props.monthNumber <= range[0];
  }
};
const harvestForMonth = computed(() =>
  veg
    .filter(v => monthNumberIsInRange(v.harvestingRange)))

const sowingIndoorsForMonth = computed(() =>
  veg
    .filter(v => monthNumberIsInRange(v.sowingIndoorsRange)))

const sowingOutdoorsForMonth = computed(() =>
  veg
    .filter(v => monthNumberIsInRange(v.sowingOutdoorsRange)))

const plantingOutSeedlingsForMonth = computed(() =>
  veg
    .filter(v => monthNumberIsInRange(v.plantingOutSeedlingsRange)))
</script>
<template>
  <div>
    <h1 style="margin-bottom: 24px">{{ format(new Date(2000, monthNumber, 1), 'LLLL') }}</h1>
    <div class="month-jobs__container">
      <MonthJob
        v-if="sowingIndoorsForMonth.length"
        :img="sowIndoorsImg"
        :vegetables="sowingIndoorsForMonth"
        title="Sow Indoors"
        class="month-jobs__entry"
      />

      <MonthJob
        v-if="sowingOutdoorsForMonth.length"
        :img="sowOutdoorsImg"
        :vegetables="sowingOutdoorsForMonth"
        title="Sow Outdoors"
        class="month-jobs__entry"
      />

      <MonthJob
        v-if="plantingOutSeedlingsForMonth.length"
        :img="plantOutSeedlingsImg"
        :vegetables="plantingOutSeedlingsForMonth"
        title="Plant Seedlings Out"
        class="month-jobs__entry"
      />
      <MonthJob
        v-if="harvestForMonth.length"
        :img="harvesterImg"
        :vegetables="harvestForMonth"
        title="Harvest"
        class="month-jobs__entry"
      />
    </div>
  </div>
</template>
<style>
.month-jobs__container {
  display: flex;
  flex-wrap: wrap;
}

.month-jobs__entry {
  margin-left: 44px;
  margin-right: 44px;
}
</style>