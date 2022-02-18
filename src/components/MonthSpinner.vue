<script setup lang="ts">
import { format, addMonths } from 'date-fns';
import { computed } from 'vue';
const props = defineProps<{
  date: Date
}>();
const months = computed(() =>
  [
    addMonths(props.date, -1),
    props.date,
    addMonths(props.date, 1)
  ]
);

</script>
<template>
  <div class="month-spinner">
    <button @click="$emit('prev')">
      <strong>Previous</strong>
    </button>
    <div style="display: flex;width: 200px;">
      <h4 class="no-select" @click="$emit('prev')">{{ format(months[0], 'MMM') }}</h4>
      <h1>{{ format(months[1], 'MMM') }}</h1>
      <h4 class="no-select" @click="$emit('next')">{{ format(months[2], 'MMM') }}</h4>
    </div>
    <button @click="$emit('next')">
      <strong>Next</strong>
    </button>
  </div>
</template>
<style>
.month-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
}
.month-spinner h4,
h2 {
  padding: 24px;
}
.month-spinner h4 {
  color: rgb(202, 202, 202);
  cursor: pointer;
}
.month-spinner button {
  /* height: 32px; */
  padding: 10px;
  font-weight: bolder;
  cursor: pointer;
}
</style>