document.addEventListener('DOMContentLoaded', function() {
  const validCredentials = {
    username: "Hasnen",
    password: "02080910"
  };
  
  const loginForm = document.getElementById('loginForm');
  const attendanceLink = document.getElementById('navbaratt');
  const messageDiv = document.getElementById('message');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(event){
      event.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      if (username === validCredentials.username && password === validCredentials.password) {
        messageDiv.textContent = "Login successful! Redirecting...";
        messageDiv.style.color = "#00ff00";
        messageDiv.style.textShadow = "0 0 8px #00ff00";
        
        attendanceLink.style.display = 'inline-flex';
        
        setTimeout(() => {
          window.location.href = "loader.html";
        }, 1000);
      } else {
        messageDiv.textContent = "Invalid username or password!";
        messageDiv.style.color = "#ff5555";
        messageDiv.style.textShadow = "0 0 8px #ff0000";
        
        setTimeout(() => {
          messageDiv.textContent = "";
        }, 3000);
      }
    });
  }
  attendanceLink.style.display = 'none';
});