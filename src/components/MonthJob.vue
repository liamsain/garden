<script lang="ts" setup>
import { IVeg, JobType } from '../types/types';
import VegItem from './VegItem.vue';

const props = defineProps<{
  img: string,
  vegetables: IVeg[],
  title: string,
  jobType: JobType
}>();

</script>
<template>
  <div>
    <div class="month-job__title">
      <img :src="img" />
      <h4>{{ title }}</h4>
    </div>
    <div v-for="veg in vegetables">
      <VegItem :veg="veg" :jobType="jobType" />
    </div>
  </div>
</template>
<style>
.month-job__title {
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: 6px;
}
.month-job__title img {
  margin-right: 6px;
}
</style>