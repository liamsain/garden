<script setup lang="ts">
import { ref } from 'vue';
import gardenImg from './assets/garden-veg-basket.jpg';
import carrot from './assets/carrot.png';
// https://www.rhs.org.uk/advice/pdfs/vegplanner.pdf
// https://www.countryliving.com/uk/homes-interiors/gardens/a35804714/vegetable-planting-calendar/
import { addMonths, format, getMonth } from 'date-fns';
import SideBar from './components/SideBar.vue';
import MonthJobs from './components/MonthJobs.vue';

const currentDate = ref(new Date());



/*
keep record of stuff in your garden
generates time to sow, time to harvest
links to places you can buy seeds
recommendations based on weather

*/
;
</script>

<template>
  <div class="bg" :style="{ backgroundImage: `url(${gardenImg})` }"></div>
  <div class="content">
    <MonthJobs
      :monthNumber="getMonth(currentDate)"
      @next="currentDate = addMonths(currentDate, 1)"
      @prev="currentDate = addMonths(currentDate, -1)"
    />
    <!-- <img :src="carrot" style="height: 40px"/> -->
    <footer>
      <p>
        <small>
          <a
            href="https://www.flaticon.com/free-icons/vegetable"
            title="vegetable icons"
          >Vegetable icons created by Freepik - Flaticon</a>
        </small>
      </p>
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
</template>

<style>
body,
html {
  margin: 0;
  /* background: rgb(23, 172, 23); */
  font-family: "Cabin", sans-serif;
  color: black;
  height: 100%;

  background-color: rgb(73, 94, 53);
}
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(232, 243, 232);
  height: 100%;
  /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */
}
p {
  margin: 0;
}
.wrapper {
  display: flex;
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
  /* position: absolute;
  bottom: 8px; */
  padding: 24px;
  color: rgb(124, 124, 124);
}
h1,
h2,
h3,
h4,
h5 {
  margin-top: 6px;
  margin-bottom: 6px;
  /* color: rgb(138, 138, 138);
  text-shadow: 2px 2px 8px #e0e0e0; */
}

.bg {
  height: 30%;
  opacity: 0.8;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* filter: blur(2px);
  background-color: black;
  box-shadow: 3px 3px red, -1em 0 .4em olive; */
}
.content {
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
  text-align: center;
  height: 100%;
  position: relative;
  /* background-color: rgba(201, 76, 76, 0.3); */
  /* background-color: rgba(36, 88, 23, 0.3); */
}
.bg img {
  opacity: 0.1;
}
</style>
