import { Line } from 'vue-chartjs';
import axios from 'axios';

export default {
  extends: Line,
  data: () => ({
    results: [],
    chartdata: {
      //labels:['2020-3-05',4,5,6],
      labels: [],
      datasets: [
        {
          label: 'US Covid Deaths',
          data: [],
          //backgroundColor:['aqua','lightgreen','red','orange'],
          borderWidth: 0.5,
          borderColor: 'orange',
          backgroundColor: 'orange',
          fill: false
        },
        {
          label: 'Total US Covid Deaths',
          data: [],
          borderColor: 'red',
          backgroundColor: 'red',
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'US Covid Deaths'
      },
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              max: '2020-03-18T20:00:00.199Z'
            }
          }
        ]
      }
    }
  }),
  methods: {
    fetchData: function() {
      axios.get('https://covid19.soficoop.com/country/us').then(response => {
        this.results = response.data.snapshots;
        // console.log(response.data);
        // console.log(this.results);
        for (let key in this.results) {
          this.chartdata.datasets[0].data.push(this.results[key].todayDeaths);
          this.chartdata.labels.push(this.results[key].timestamp + '');
          this.chartdata.datasets[1].data.push(this.results[key].deaths);
        }
        this.renderChart(this.chartdata, this.options);
      });
    }
  },
  created() {
    // console.log('Do I come here');
    this.fetchData();
  }
};
