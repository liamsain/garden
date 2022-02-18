<script setup lang="ts">
import { computed, watch, ref } from 'vue';
import { format } from 'date-fns';
import { JobType } from '../types/types';
import harvesterImg from '../assets/harvester.png';
import sowIndoorsImg from '../assets/seeding.png';
import sowOutdoorsImg from '../assets/sow.png';
import plantOutSeedlingsImg from '../assets/plant-out-seedlings.png';
import { veg } from '../data/veg';
import MonthJob from './MonthJob.vue';
const props = defineProps<{
  monthNumber: number
}>();
const show = ref(true);
watch(() => props.monthNumber, () => {
  show.value = false;
  setTimeout(() => show.value = true, 50);

});

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
    <h1>{{ format(new Date(2000, monthNumber, 1), 'LLLL') }}</h1>
    <div class="month-jobs__controls">
      <div>
        <button @click="$emit('prev')">Previous month</button>
        <button @click="$emit('next')">Next month</button>
      </div>
    </div>
    <transition name="fade" appear>
      <div class="month-jobs__container" v-if="show">
        <MonthJob
          v-if="sowingIndoorsForMonth.length"
          :img="sowIndoorsImg"
          :vegetables="sowingIndoorsForMonth"
          :jobType="JobType.SowIndoors"
          title="Sow Indoors"
          class="month-jobs__entry"
        />

        <MonthJob
          v-if="sowingOutdoorsForMonth.length"
          :img="sowOutdoorsImg"
          :vegetables="sowingOutdoorsForMonth"
          :jobType="JobType.SowOutdoors"
          title="Sow Outdoors"
          class="month-jobs__entry"
        />

        <MonthJob
          v-if="plantingOutSeedlingsForMonth.length"
          :img="plantOutSeedlingsImg"
          :vegetables="plantingOutSeedlingsForMonth"
          :jobType="JobType.PlantOutSeedlings"
          title="Plant Seedlings Out"
          class="month-jobs__entry"
        />
        <MonthJob
          v-if="harvestForMonth.length"
          :img="harvesterImg"
          :vegetables="harvestForMonth"
          :jobType="JobType.Harvest"
          title="Harvest"
          class="month-jobs__entry"
        />
      </div>
    </transition>
  </div>
</template>
<style>
.month-jobs__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.month-jobs__controls {
  display: flex;
  align-items: center;
  justify-content: center;
}

.month-jobs__controls button {
  margin: 0 8px 0 8px;
  padding: 6px;
  font-weight:bolder;
}
.month-jobs__controls button:hover {
  cursor: pointer;
}
.month-jobs__entry {
  margin: 0 12px 0 12px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.bounce-enter-active {
  -webkit-animation: bounce-in 0.5s ease-out both;
  animation: bounce-in 0.5s ease-out both;
}

.bounce-leave-active {
  animation: bounce-in 1.5s reverse ease-in both;
}

@-webkit-keyframes bounce-in {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-in {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>