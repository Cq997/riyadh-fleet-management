async function loadData() {
  const data = await getData();

  let html = "<tr><th>المركبة</th><th>الحالة</th></tr>";

  data.forEach(row => {
    html += `<tr>
      <td>${row.vehicle}</td>
      <td>${row.status}</td>
    </tr>`;
  });

  document.getElementById("table").innerHTML = html;
}
let بيانات_المركبات = [];

async function تحميل_البيانات() {
  const res = await fetch(API_URL);
  const data = await res.json();

  بيانات_المركبات = data.fleet;

  تحميل_القائمة();
}

function تحميل_القائمة() {
  const القائمة = document.getElementById("قائمة_المركبات");

  بيانات_المركبات.slice(1).forEach(صف => {
    let خيار = document.createElement("option");
    خيار.value = صف[0];
    خيار.text = صف[1] + " - " + صف[3];
    القائمة.appendChild(خيار);
  });
}

function تعبئة_المركبة() {
  const id = document.getElementById("قائمة_المركبات").value;

  const مركبة = بيانات_المركبات.find(m => m[0] == id);

  document.getElementById("رقم_اللوحة").value = مركبة[1];
  document.getElementById("الحروف").value = مركبة[2];
  document.getElementById("النوع").value = مركبة[3];
  document.getElementById("الموديل").value = مركبة[4];
  document.getElementById("الشاصي").value = مركبة[5];
  document.getElementById("العداد").value = مركبة[6];
}

window.onload = تحميل_البيانات;
