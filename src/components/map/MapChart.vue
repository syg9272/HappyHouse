<template>
  <canvas ref="lineChart" />
</template>

<script>
// 1. Import Chart.js so you can use the global Chart object
// import { Chart } from "chart.js";
// 2. Import the `generateChart()` method to create the vue component.
// import { generateChart } from "vue-chartjs";
// 3. Import needed controller from Chart.js
// import { LineController } from "chart.js";

// export default {
//   extends: Line,
//   name: "MapChart",
// };

// import "@/utils/charts/global";
// import { Line } from "~/vue-chartjs-3.5.1/src/index";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  name: "MapChart",
  data: () => ({
    type: "line",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  }),
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
