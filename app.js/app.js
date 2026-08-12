// ============================================
// MATHLINGS - MAIN JAVASCRIPT (app.js)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  
  // Navigation Buttons
  const loginBtn = document.getElementById('loginBtn');
  const joinBtn = document.getElementById('joinBtn');
  const learnMoreBtn = document.getElementById('learnMoreBtn');
  const heroStartBtn = document.querySelector('.hero-start');
  const heroDemoBtn = document.querySelector('.hero-demo');
  const earthDayBtn = document.querySelector('.earth-day-btn');
  const cardBtns = document.querySelectorAll('.card-btn');
  
  // Login button
  if (loginBtn) {
    loginBtn.addEventListener('click', function() {
      window.location.href = 'login.html';
    });
  }
  
  // Join Us button
  if (joinBtn) {
    joinBtn.addEventListener('click', function() {
      window.location.href = 'login.html';
    });
  }
  
  // Learn More button
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', function() {
      window.location.href = 'about.html';
    });
  }
  
  // Start Free button
  if (heroStartBtn) {
    heroStartBtn.addEventListener('click', function() {
      window.location.href = 'login.html';
    });
  }
  
  // See how it works button
  if (heroDemoBtn) {
    heroDemoBtn.addEventListener('click', function() {
      window.location.href = 'demo.html';
    });
  }
  
  // All Play now buttons
  if (cardBtns.length > 0) {
    cardBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        window.location.href = 'math-games.html';
      });
    });
  }
  
  // Earth Day button
  if (earthDayBtn) {
    earthDayBtn.addEventListener('click', function() {
      window.location.href = 'eco-collection.html';
    });
  }
  
  console.log('Mathlings website ready! 🚀');
});
