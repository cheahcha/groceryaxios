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
          label: 'MRT Ridership',
          data: [],
          //backgroundColor:['aqua','lightgreen','red','orange'],
          borderWidth: 0.5,
          borderColor: 'blue',
          backgroundColor: 'blue',
          fill: false
        },
        {
          label: 'Bus Ridership',
          data: [],
          //backgroundColor:['aqua','lightgreen','red','orange'],
          borderWidth: 0.5,
          borderColor: 'orange',
          backgroundColor: 'orange',
          fill: false
        },
        {
          label: 'LRT Ridership',
          data: [],
          //backgroundColor:['aqua','lightgreen','red','orange'],
          borderWidth: 0.5,
          borderColor: 'green',
          backgroundColor: 'green',
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Singapore Public Transport Ridership'
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
              max: '2002'
            }
          }
        ]
      }
    }
  }),
  methods: {
    fetchData: function() {
      axios
        .get(
          'https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a'
        )
        .then(response => {
          this.results = response.data.result.records;
          console.log(response.data);
          console.log(this.results);
          for (let key in this.results) {
            console.log(this.results[key].type_of_public_transport);
            if (this.results[key].type_of_public_transport == 'MRT') {
              this.chartdata.datasets[0].data.push(
                this.results[key].average_ridership
              );
              this.chartdata.labels.push(this.results[key].year + '');
            }
            if (this.results[key].type_of_public_transport == 'Bus') {
              this.chartdata.datasets[1].data.push(
                this.results[key].average_ridership
              );
              this.chartdata.labels.push(this.results[key].year + '');
            }
            if (this.results[key].type_of_public_transport == 'LRT') {
              this.chartdata.datasets[2].data.push(
                this.results[key].average_ridership
              );
              this.chartdata.labels.push(this.results[key].year + '');
            }
          }
          this.renderChart(this.chartdata, this.options);
        });
    }
  },
  mounted() {
    // console.log('Do I come here');
    this.fetchData();
  }
};
