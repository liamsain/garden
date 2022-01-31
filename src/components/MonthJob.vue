<script lang="ts" setup>
import { IVeg } from '../types/types';

const props = defineProps<{
  img: string,
  vegetables: IVeg[],
  title: string
}>();

</script>
<template>
  <div>
    <div class="month-job__title">
      <img :src="img" />
      <h2>{{ title }}</h2>
    </div>
    <div v-for="veg in vegetables" class="month-job__veg">
      <img v-if="veg.img" :src="veg.img" />
      <h4 style="padding-left: 12px">{{ veg.name }}</h4>
    </div>
  </div>
</template>
<style>
.month-job__title {
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
}
.month-job__title img {
  padding-left: 20px;
  padding-right: 20px;
}
.month-job__veg {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
}
</style>