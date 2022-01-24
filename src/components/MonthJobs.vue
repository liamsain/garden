<script setup lang="ts">
import { computed } from 'vue';
import { format, addMonths, getMonth } from 'date-fns';
import { IVeg } from '../types/types';

const props = defineProps<{
	veg: IVeg[],
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
	props.veg
		.filter(veg => monthNumberIsInRange(veg.harvestingRange))
		.map(x => x.name))

const sowingIndoorsForMonth = computed(() =>
	props.veg
		.filter(veg => monthNumberIsInRange(veg.sowingIndoorsRange))
		.map(x => x.name))

const sowingOutdoorsForMonth = computed(() => 
	props.veg
		.filter(veg => monthNumberIsInRange(veg.sowingOutdoorsRange))
		.map(x => x.name));

const plantingOutSeedlingsForMonth = computed(() => 
	props.veg
		.filter(veg => monthNumberIsInRange(veg.plantingOutSeedlingsRange))
		.map(x => x.name));
</script>
<template>
	<div>
		<h2>{{ format(new Date(2000, monthNumber, 1), 'LLL') }}</h2>
		<h4 v-if="sowingIndoorsForMonth.length">Sow indoors:</h4>
		<div v-for="vegName in sowingIndoorsForMonth">{{ vegName }}</div>
		<h4 v-if="sowingOutdoorsForMonth.length">Sow outdoors:</h4>
		<div v-for="vegName in sowingOutdoorsForMonth">{{ vegName }}</div>
		<h4 v-if="plantingOutSeedlingsForMonth.length">Plant seedlings out:</h4>
		<div v-for="vegName in plantingOutSeedlingsForMonth">{{ vegName }}</div>
		<h4 v-if="harvestForMonth.length">Harvest:</h4>
		<div v-for="vegName in harvestForMonth">{{ vegName }}</div>
	</div>
</template>