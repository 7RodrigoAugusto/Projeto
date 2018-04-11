function plot() { 
      var myChart = Highcharts.chart('plot', {
          chart: {
              type: 'bar'
          },
          title: {
              text: 'Mulheres x Homens - Concluintes'
          },
          xAxis: {
              categories: ['2007', '2008', '2008','2009','2010','2011']
          },
          yAxis: {
              title: {
                  text: 'Teste'
              }
          },
          series: [{
              name: 'Mulheres',
              data: [29, 48, 85, 273, 1177]
          }, {
              name: 'Homens',
              data: [10, 15, 67, 169, 623]
          }]
        });
};

plot()