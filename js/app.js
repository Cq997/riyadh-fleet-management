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
