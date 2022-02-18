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
      <img :src="img"/>
      <h3>{{ title }}</h3>
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
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 20px;
  width: 320px;
}
.month-job__title img {
  margin-right: 12px;
  height: 46px;
}
</style>