<script setup lang="ts">
import { IVeg } from '../types/types';
const props = defineProps<{
  allVeg: IVeg[]
}>();
</script>
<template>
  <div class="side-bar">
    <h4>Your veg</h4>
    <div v-for="veg in allVeg" :key="veg.name">
      <div>
        <label
          :for="veg.name + '-checkbox'"
          style="display: flex;align-items: center;margin: 12px 0 12px;"
          class="no-select"
        >
          <input type="checkbox" :id="veg.name + '-checkbox'" />
          <p style="margin: 0 0 0 8px;">{{ veg.name }}</p>
        </label>
      </div>
    </div>
  </div>
</template>
<style>
.side-bar {
  border-right: 1px solid rgb(200, 200, 200);
  display: inline-block;
  height: 100vh;
  overflow-y: auto;
  padding: 20px 50px 0px 20px;
}
</style>