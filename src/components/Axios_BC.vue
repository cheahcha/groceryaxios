<template>
  <div id="main">
    <div id="chart">
      <axiosExample></axiosExample>
    </div>
    <div id="chart">
      <PSIIndex></PSIIndex>
    </div>
    <div id="chart">
      <axios></axios>
    </div>
    <div id="chart">
      <covid></covid>
    </div>
    <div id="chart">
      <coviddeaths></coviddeaths>
    </div>
    <div id="chart">
      <mrt></mrt>
    </div>
  </div>
</template>

<script>
import axiosExample from "../axiosExample.js";
import PSIIndex from "../PSIIndex.js";
import axios from "../axios2";
import covid from "../USCovid";
import coviddeaths from "../CovidDeaths";
import mrt from "../Transport";

export default {
  components: {
    axiosExample,
    PSIIndex,
    axios,
    covid,
    coviddeaths,
    mrt
  }
};
</script>>
<style scoped>
#main {
  content: "";
  display: table;
  clear: both;
}
#chart {
  /* height: 240px;
  width: 300px; */
  border-style: solid;
  border-color: rgb(155, 84, 84);
  border-width: 1px;
  padding-bottom: 60px;
  float: left;
  display: flex;
}
</style>