<script setup lang="ts">
// https://www.rhs.org.uk/advice/pdfs/vegplanner.pdf
// https://www.countryliving.com/uk/homes-interiors/gardens/a35804714/vegetable-planting-calendar/
import { addMonths, format, getMonth } from 'date-fns';
import { IVeg } from './types/types';
import MonthJobs from './components/MonthJobs.vue';



const allVeg: IVeg[] = [
  {
    name: 'Aubergine',
    inGarden: false,
    sowingIndoorsRange: [1, 2],
    plantingOutSeedlingsRange: [3, 4],
    harvestingRange: [6, 8]
  },
  {
    name: 'Beetroot',
    inGarden: false,
    sowingOutdoorsRange: [2, 5],
    harvestingRange: [5, 7]
  },
  {
    name: 'Runner beans',
    inGarden: false,
    sowingIndoorsRange: [3, 4],
    sowingOutdoorsRange: [4, 5],
    plantingOutSeedlingsRange: [5, 6],
    harvestingRange: [6, 8]
  },
  {
    name: 'Carrots',
    inGarden: false,
    sowingOutdoorsRange: [1, 5],
    harvestingRange: [5, 8]
  },
  {
    name: 'Chicory',
    inGarden: false,
    sowingOutdoorsRange: [2, 4],
    harvestingRange: [9, 2]
  },
  {
    name: 'Courgettes',
    inGarden: false,
    sowingIndoorsRange: [3, 4],
    sowingOutdoorsRange: [4, 5],
    harvestingRange: [6, 10]
  },
  {
    name: 'Cucumber',
    inGarden: false,
    sowingIndoorsRange: [2, 3],
    sowingOutdoorsRange: [4, 4],
    harvestingRange: [5, 6]
  },
  {
    name: 'Fennel',
    inGarden: false,
    sowingOutdoorsRange: [3, 6],
    harvestingRange: [5, 10]
  },
  {
    name: 'Garlic',
    inGarden: false,
    sowingOutdoorsRange: [1, 2],
    harvestingRange: [4, 8]
  },
  {
    name: 'Leek',
    inGarden: false,
    sowingIndoorsRange: [0, 1],
    sowingOutdoorsRange: [2, 3],
    plantingOutSeedlingsRange: [4, 5],
    harvestingRange: [8, 3]
  },
];
const vegOptions = [
  'Aubergine',
  'Beetroot',
  'Broadbeans',
  'Carrots',
  'Chicory',
  'Courgettes',
  'Cucumber',
  'Fennel',
  'Garlic',
  'Leek',
  'Onions',
  'Parsnips',
  'Potatos',
  'Shallots',
  'Spring onions',
  'Tomatos'
]
  ;
/*
keep record of stuff in your garden
generates time to sow, time to harvest
links to places you can buy seeds

*/
;
</script>

<template>
  <div class="wrapper">
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
    <div class="main-content">
      <div class="month-jobs-container">
        <MonthJobs :monthNumber="getMonth(addMonths(new Date(), -1))" :veg="allVeg" />
        <MonthJobs :monthNumber="getMonth(new Date())" :veg="allVeg" />
        <MonthJobs :monthNumber="getMonth(addMonths(new Date(), 1))" :veg="allVeg" />
      </div>
      <footer>
        <p>
          <small>
          <a
            target="_blank"
            href="https://www.rhs.org.uk/advice/pdfs/vegplanner.pdf"
          >RHS veg planner</a>
          </small>
        </p>
        <p>
          <small>
          <a
            target="_blank"
            href="https://www.countryliving.com/uk/homes-interiors/gardens/a35804714/vegetable-planting-calendar/"
          >Country living veg calendar</a>
          </small>
        </p>
      </footer>
    </div>
  </div>
</template>

<style>
body,
html {
  margin: 0;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
p {
  margin: 0;
}
.wrapper {
  display: flex;
}
.side-bar {
  border-right: 1px solid rgb(200, 200, 200);
  display: inline-block;
  height: 100vh;
  overflow-y: auto;
  padding: 20px 50px 0px 20px;
}
.main-content {
  width: 100%;
  margin: 20px;
}
.month-jobs-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
label {
  cursor: pointer;
}
.no-select {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
footer {
  position: absolute;
  bottom: 20px;
  color: rgb(124, 124, 124);
}
h1, h2, h3, h4, h5 { 
  margin-top: 6px;
  margin-bottom: 6px;
}
</style>
