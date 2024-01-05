<template>
  <div><h1>Covid Details</h1></div>
  <div v-if="arrPositive?.length > 0" class="charts">
    <LineChart label="Positive Cases" :chartData="arrPositive" :styling="positiveChartColors" :margin="false" />
  </div>
  <div v-if="arrHospitalized?.length > 0" class="charts">
    <LineChart label="Hospitalized Cases" :chartData="arrHospitalized" :styling="hospitalizedChartColors" :margin="true" />
  </div>
  <!-- <div v-if="arrInIcu?.length > 0" class="charts">
    <LineChart label="Positive Cases" :chartData="arrInIcu" :styling="inIcuColors" :margin="true" />
  </div> -->
</template>

<script>
import LineChart from './components/LineChart.vue';
import axios from "axios";
import moment from "moment";

export default {
  name: 'App',
  components: {
    LineChart
  },
  data() {
    return {
      arrPositive: [],
      positiveChartColors: {
        borderColor: "#077187",
        pointBorderColor: "#0E1428",
        pointBackgroundColor: "#AFD6AC",
        backgroundColor: "#74A57F"
      },
      arrHospitalized: [],
      hospitalizedChartColors: {
        borderColor: "#251F47",
        pointBorderColor: "#260F26",
        pointBackgroundColor: "#858EAB",
        backgroundColor: "#858EAB"
      },
      arrInIcu: [],
      inIcuColors: {
        borderColor: "#190B28",
        pointBorderColor: "#190B28",
        pointBackgroundColor: "#E55381",
        backgroundColor: "#E55381"
      },
      arrOnVentilators: [],
      onVentilatorsColors: {
        borderColor: "#784F41",
        pointBorderColor: "#784F41",
        pointBackgroundColor: "#BBE5ED",
        backgroundColor: "#BBE5ED"
      },
      arrRecovered: [],
      recoveredColors: {
        borderColor: "#4E5E66",
        pointBorderColor: "#4E5E66",
        pointBackgroundColor: "#31E981",
        backgroundColor: "#31E981"
      },
      arrDeaths: [],
      deathColors: {
        borderColor: "#E06D06",
        pointBorderColor: "#E06D06",
        pointBackgroundColor: "#402A2C",
        backgroundColor: "#402A2C"
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  async created() {
    const { data } = await axios.get("https://api.covidtracking.com/v1/us/daily.json");
    data.forEach(d => {
      const date = moment(d.date, "YYYYMMDD").format("MM/DD");
      const {
        positive,
        hospitalizedCurrently,
        inIcuCurrently,
        onVentilatorCurrently,
        recovered,
        death
      } = d;
      this.arrPositive.push({ date, total: positive });
      this.arrHospitalized.push({ date, total: hospitalizedCurrently });
      this.arrInIcu.push({ date, total: inIcuCurrently });
      this.arrOnVentilators.push({ date, total: onVentilatorCurrently });
      this.arrRecovered.push({ date, total: recovered });
      this.arrDeaths.push({ date, total: death });
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.charts{
  margin-top: 20px;
  margin-bottom:20px;
}
</style>
