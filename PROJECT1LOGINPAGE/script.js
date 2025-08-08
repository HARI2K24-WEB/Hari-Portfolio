function handleLogin(e) {
  e.preventDefault();
  const btn = document.querySelector('.login-button');
  btn.textContent = "Logging in...";
  btn.disabled = true;
  setTimeout(() => {
    alert("Logged in successfully!");
    btn.textContent = "Log In";
    btn.disabled = false;
  }, 1500);
 }
function handleForgot(e) {
  e.preventDefault();
  const btn = document.querySelector('.login-button');
  btn.textContent = "Change Password...";
  btn.disabled = true;
  setTimeout(() => {
    alert("Change Password in successfully!");
    btn.textContent = "Forgot Password";
    btn.disabled = false;
  }, 1500);
}
function showWelcome() {
  const content = document.getElementById("cardContent");
  content.innerHTML = `<h2 style="text-align:center; color:white;">Welcome Broo 😎</h2>`;
}
function rotateToSignIn() {
  const content = document.getElementById("cardContent");
  content.innerHTML = `
    <h2 class="mac-title">Sign In</h2>
    <form onsubmit="return handleLogin(event)">
      <div class="input-group">
        <input placeholder="Username" required />
        
      </div>
      <div class="input-group">
        <input placeholder="password" required />
       
      </div>
      <button type="submit" class="login-button">Sign In</button>
      <a href="forgot.html" class="forgot-link">Forgot Password?</a>
    </form>`;
}
function rotateToLogin() {
  const content = document.getElementById("cardContent");
  content.innerHTML = `
    <h2 class="mac-title">Login</h2>
    <form onsubmit="return handleLogin(event)">
      <div class="input-group">
        <input placeholder="Username" required />
      </div>
      <div class="input-group">
        <input placeholder="password" required />
        
      </div>
      <button type="submit" class="login-button">Log In</button>
      <a href="forgot.html" class="forgot-link">Forgot Password?</a>
    </form>`;
}
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");
}
window.onload = function () {
  document.getElementById("redBtn").onclick = showWelcome;
  document.getElementById("yellowBtn").onclick = rotateToSignIn;
  document.getElementById("greenBtn").onclick = rotateToLogin;
};
