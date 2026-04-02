// ============================================
// MATHLINGS - LOGIN JAVASCRIPT (login.js)
// ============================================

const loginToggle = document.getElementById('loginToggle');
const signupToggle = document.getElementById('signupToggle');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');
const loginFormElement = document.getElementById('loginFormElement');
const signupFormElement = document.getElementById('signupFormElement');

function showLogin() {
  loginToggle.classList.add('active');
  signupToggle.classList.remove('active');
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
}

function showSignup() {
  signupToggle.classList.add('active');
  loginToggle.classList.remove('active');
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
}

if (loginToggle) {
  loginToggle.addEventListener('click', showLogin);
}

if (signupToggle) {
  signupToggle.addEventListener('click', showSignup);
}

if (switchToSignup) {
  switchToSignup.addEventListener('click', function(e) {
    e.preventDefault();
    showSignup();
  });
}

if (switchToLogin) {
  switchToLogin.addEventListener('click', function(e) {
    e.preventDefault();
    showLogin();
  });
}

if (loginFormElement) {
  loginFormElement.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    if (email && password) {
      if (rememberMe) {
        localStorage.setItem('rememberedUser', email);
      } else {
        localStorage.removeItem('rememberedUser');
      }
      alert('Welcome back, ' + email + '! 🎈 Ready for math adventures?');
      window.location.href = 'index.html';
    } else {
      alert('Please enter both email and password! 🌟');
    }
  });
}

if (signupFormElement) {
  signupFormElement.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all fields! 🌟');
      return;
    }
    
    if (password !== confirmPassword) {
      alert('Passwords do not match! 😅');
      return;
    }
    
    if (!agreeTerms) {
      alert('Please agree to the terms & conditions! 📝');
      return;
    }
    
    if (password.length < 6) {
      alert('Password must be at least 6 characters! 🔒');
      return;
    }
    
    alert('🎉 Welcome to Mathlings, ' + name + '! Check ' + email + ' to start your adventure!');
    showLogin();
    signupFormElement.reset();
  });
}

window.addEventListener('load', function() {
  const rememberedUser = localStorage.getItem('rememberedUser');
  if (rememberedUser) {
    const loginEmail = document.getElementById('loginEmail');
    if (loginEmail) {
      loginEmail.value = rememberedUser;
      const rememberCheckbox = document.getElementById('rememberMe');
      if (rememberCheckbox) {
        rememberCheckbox.checked = true;
      }
    }
  }
});