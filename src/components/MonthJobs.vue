<script setup lang="ts">
import { computed, watch, ref } from 'vue';
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
const show = ref(false);
setTimeout(() => show.value = true, 50);
watch(() => props.monthNumber,() => {
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
    <div style="display:flex;align-items: center;justify-content:center;">
      <button @click="$emit('prev')">Prev</button>
      <button @click="$emit('next')">Next</button>
    </div>
    <transition name="fade">
      <div class="month-jobs__container" v-if="show">
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
    </transition>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
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
    transform: scale(.8);
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
    transform: scale(.8);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>