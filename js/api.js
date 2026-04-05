async function sendData(sheet, values) {
  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      sheet: sheet,
      values: values
    })
  });
}

async function getData() {
  const res = await fetch(API_URL);
  return await res.json();
}
