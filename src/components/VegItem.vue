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
  const resultParaSplit = result.split('\n');
  return resultParaSplit[0].length > 0 ? resultParaSplit : '';
});

</script>

<template>
  <div class="veg-item">
    <div
      class="veg-item__heading"
      :class="jobDescription.length ? 'veg-item__heading--with-description' : ''"
      @click="isOpen = !isOpen"
    >
      <img v-if="veg.img" :src="veg.img" />
      <h5 style="padding-left: 12px">{{ veg.name }}</h5>
    </div>
    <div class="veg-item__info" v-if="isOpen && jobDescription.length">
      <div>
        <p v-for="(p, i) in jobDescription" :key="i">
          <small>{{ p }}</small>
        </p>
      </div>
    </div>
  </div>
</template>
<style>
.veg-item {
  width: 180px;
  margin: 8px;
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
  background-color: rgb(100, 128, 75);
  border-radius: 0 0 3px 3px;
}
.veg-item__info p {
  max-width: 150px;
  padding-bottom: 8px;
}
</style>
