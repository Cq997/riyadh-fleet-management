function login() {
  const user = document.getElementById("srca").value;
  const pass = document.getElementById("997").value;

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("auth", true);
    window.location.href = "dashboard.html";
  } else {
    alert("بيانات الدخول غير صحيحة");
  }
}
