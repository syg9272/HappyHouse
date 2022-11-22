<template>
  <canvas ref="lineChart" />
</template>

<script>
import { mapState } from "vuex";

const mapStore = "mapStore";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  name: "MapChart",
  data() {
    return {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "해당 년도 평균 거래금액",
            data: [],
            backgroundColor: ["rgba(10, 17, 81, 1)"],
            borderColor: ["rgba(10, 17, 81, 1)"],
          },
        ],
      },
      options: {
        responsive: false,
        scales: {
          y: {
            ticks: {
              min: null,
              callback: function (value) {
                return value.toLocaleString("ko-KR") + " 억";
              },
            },
          },
        },
      },
    };
  },
  computed: {
    ...mapState(mapStore, ["apt"]),
    ...mapState(mapStore, ["avgAmount"]),
    ...mapState(mapStore, ["year"]),
  },
  created() {
    this.data.labels = this.year;
    this.data.datasets[0].data = this.avgAmount;

    var maxAvg = 0;
    var minAvg = 100;
    for (let index = 0; index < this.avgAmount.length; index++) {
      const element = this.avgAmount[index];
      maxAvg = maxAvg < element ? element : maxAvg;
      minAvg = minAvg > element ? element : minAvg;
    }
    this.options.scales.y.ticks.min = minAvg;
  },
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      new Chart(this.$refs.lineChart, {
        type: "line",
        data: this.data,
        options: this.options,
      });
    },
  },
};
</script>

<style>
canvas {
  padding: 15px;
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.274);
}
</style>
