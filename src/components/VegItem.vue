<script setup lang="ts">
import { IVeg, JobType } from '../types/types';
import { ref, computed } from 'vue';
const props = defineProps<{
  veg: IVeg,
  jobType: JobType
}>();
const isOpen = ref(false);
const jobDescription = computed(() => {
  let result = '';

  if (props.jobType === JobType.SowIndoors) {
    result = props.veg.sowingIndoorsAdvice || '';
  } else if (props.jobType === JobType.SowOutdoors) {
    result = props.veg.sowingOutdoorsAdvice || '';
  } else if (props.jobType === JobType.PlantOutSeedlings) {
    result = props.veg.plantingOutSeedlingsAdvice || '';
  } else {
    result = props.veg.harvestingAdvice || '';
  }
  return result.split('\n');
});

</script>

<template>
  <div class="veg-item">
    <div
      class="veg-item__heading"
      :class="jobDescription[0].length ? 'veg-item__heading--with-description' : ''"
      @click="isOpen = !isOpen"
    >
      <img v-if="veg.img" :src="veg.img" />
      <h5 style="padding-left: 12px">{{ veg.name }}</h5>
    </div>
    <div class="veg-item__info" v-if="isOpen && jobDescription[0].length">
      <div>
        <p v-for="p in jobDescription">
          <small>{{ p }}</small>
        </p>
      </div>
    </div>
  </div>
</template>
<style>
.veg-item {
  width: 320px;
  margin: 12px;
  margin-bottom: 16px;
  -webkit-box-shadow: 1px 2px 58px -18px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 2px 58px -18px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 2px 58px -18px rgba(0, 0, 0, 0.75);
}
.veg-item__heading {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border: 2px solid rgb(100, 128, 75);

  border-radius: 10px 10px 0px 0px;
  transition: 0.2s;
}
.veg-item__heading--with-description:hover {
  background-color: rgb(141, 139, 27);
  cursor: pointer;
}
.veg-item__info {
  border: 2px solid rgb(100, 128, 75);
  border-top: none;
  padding: 4px;
  display: flex;
  justify-content: center;
  /* background-color: rgb(100, 128, 75); */
  border-radius: 0 0 3px 3px;
}
.veg-item__info p {
  padding-bottom: 8px;
}
</style>
