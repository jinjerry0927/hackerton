// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('river-level-chart').getContext('2d');
  
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
        datasets: [{
          label: '형산강 수위 (m)',
          data: [1.5, 1.8, 2.0, 3.0, 2.8, 1.7],
          borderColor: 'red',
          borderWidth: 2,
          fill: false,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: '수위 (m)'
            }
          }
        }
      }
    });
  });
  