function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("auth", true);
    window.location.href = "dashboard.html";
  } else {
    alert("بيانات الدخول غير صحيحة");
  }
}
