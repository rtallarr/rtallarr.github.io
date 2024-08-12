const ctx = document.getElementById('chart1');

getChessData().then(data => {
    new Chart(ctx, {
        type: 'bar',
        animation: true,
        data: {
          labels: ['wins', 'losses', 'draws'],
          datasets: [{
            label: '# of Games',
            data: [data.chess_rapid.record.win, data.chess_rapid.record.loss, data.chess_rapid.record.draw],
            borderWidth: 1
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
})