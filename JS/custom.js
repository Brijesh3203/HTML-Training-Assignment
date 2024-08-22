document.addEventListener('DOMContentLoaded', () => {
    const salesChartCtx = document.getElementById('salesChart').getContext('2d');
    const salesByCountryChartCtx = document.getElementById('salesByCountryChart').getContext('2d');

    new Chart(salesChartCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Sales',
                data: [12000, 15000, 10000, 17000, 20000, 21000, 25000, 22000, 24000, 23000, 26000, 28000],
                borderColor: 'red',
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(salesByCountryChartCtx, {
        type: 'pie',
        data: {
            labels: ['United States Of America', 'Canada', 'Russia', 'India'],
            datasets: [{
                data: [45, 25, 15, 15],
                backgroundColor: ['red', 'orange', 'yellow', 'green']
            }]
        },

        options: {
            title: {
                display: true,
                Text: 'Sales By Country'
            }
        }
    }); 
});