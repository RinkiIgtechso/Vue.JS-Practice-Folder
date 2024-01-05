<template>
  <div class="line-chart"><canvas ref="myChart" width="400px" height="400px" :style="this.margin? styleObject : {}"></canvas></div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'LineChart',
  props: {
    chartData: Array,
    styling: Object,
    label: String,
    margin: Boolean
  },
  data(){
    return{
      styleObject: {
        marginTop: "40% !important"
      }
    }
  },
  mounted(){
    const dates = this.chartData.map(d => d.date).reverse();
    const totals = this.chartData.map(d => d.total).reverse();
    const ctx = this.$refs.myChart;
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: this.label || "Data",
          data: totals,
          fill: true,
          tension: 0.6,
          borderColor: this.styling.borderColor,
          backgroundColor: this.styling.backgroundColor,
          pointBackgroundColor: this.styling.pointBackgroundColor,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    myChart;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.line-chart{
  width: 70%;
  margin: auto;
  height: 400px !important;
  padding-top: 7%;
  margin-bottom: 7%;
}

</style>
