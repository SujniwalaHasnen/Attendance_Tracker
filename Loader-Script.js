// loader-script.js
document.addEventListener('DOMContentLoaded', function() {
  const progressBar = document.getElementById('progressBar');
  const statusText = document.querySelector('.status-text');
  const appTitle = document.querySelector('.app-title');
  const appLogo = document.querySelector('.app-logo');
  
  const statusMessages = [
    "Loading security modules...",
    "Preparing attendance interface...",
    "Connecting to database...",
    "Finalizing setup...",
    "Ready to track attendance!"
  ];
  
  let progress = 0;
  let currentStatus = 0;
  
  function updateProgress() {
    if (progress < 100) {
      progress += Math.floor(Math.random() * 6) + 1;
      if (progress > 100) progress = 100;
      
      progressBar.style.width = `${progress}%`;
      
      if (progress > currentStatus * 20 && currentStatus < statusMessages.length - 1) {
        currentStatus++;
        statusText.textContent = statusMessages[currentStatus];
        
        statusText.style.opacity = 0;
        setTimeout(() => {
          statusText.style.transition = 'opacity 0.5s ease';
          statusText.style.opacity = 1;
        }, 10);
      }
      
      setTimeout(updateProgress, 300);
    } else {
      statusText.textContent = statusMessages[statusMessages.length - 1];
      progressBar.style.animation = 'borderGlow 1.5s infinite';
      appTitle.style.animation = 'pulse 0.8s infinite alternate';
      appLogo.style.animation = 'pulse 0.8s infinite alternate';
      
      setTimeout(() => {
        window.location.href = "Attendance.html";
      },1500);
    }
  }
  setTimeout(updateProgress, 9000);
});