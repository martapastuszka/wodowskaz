var ctx = document.getElementById('dailyUsage');
var dailyUsage = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(115, 112, 105, 0.2)',            
            ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            // // ],
            // borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Dzienne zużycie wody',
            fontSize: 20,
        },
        legend:{
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('dailyAverage');
var dailyAverage = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['kuchnia','łazienka'],
        datasets: [{
            data: [12, 19],
            backgroundColor: [
                'rgba(182, 255, 0, 0.2)',
                'rgba(255, 186, 0, 0.2)',
            ],
          
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Średnie dzienne zużycie wody w ciągu ostatnich 7 dni - kuchnia/łazienka',
            fontSize: 20,
        },
        legend:{
            display: true,
            labels:{
                fontSize: 19
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    display: false,
                },
                gridLines:{
                    display: false,
                }
            }]
        }
    }
});

var ctx = document.getElementById('dailyAverageTemp');
var dailyAverage = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['zimna woda','ciepła woda'],
        datasets: [{
            data: [40, 19],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(0, 115, 254, 0.2)'
            ],
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Średnie dzienne zużycie wody w ciągu ostatnich 7 dni- temperatura',
            fontSize: 20,
        },
        legend:{
            display: true,
            labels:{
                fontSize: 19
            }
        },
     
        scales: {
            xAxes: [{
                ticks: {
                 display:false,
                },
                gridLines:{
                    display: false,
                }
            }]
        }
   
    }
});

var ctx = document.getElementById('dailyUsageKitch');
var dailyUsageKitch = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                'rgba(182, 255, 0, 0.2)',
             ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            // // ],
            // borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Dzienne zużycie wody - Kuchnia',
            fontSize: 20,
        },
        legend:{
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('dailyUsageBath');
var dailyUsageBath = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 186, 0, 0.2)',
            ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            // // ],
            // borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Dzienne zużycie wody - Łazienka',
            fontSize: 20,
        },
        legend:{
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});