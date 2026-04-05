const data = {
  fleet: 150,
  ready: 120,
  maintenance: 20,
  accidents: 10
};

document.getElementById("fleet").innerText = data.fleet;
document.getElementById("ready").innerText = data.ready;
document.getElementById("maintenance").innerText = data.maintenance;
document.getElementById("accidents").innerText = data.accidents;

new Chart(document.getElementById("chart"), {
  type: 'pie',
  data: {
    labels: ['جاهزة', 'صيانة', 'حوادث'],
    datasets: [{
      data: [120, 20, 10]
    }]
  }
});
