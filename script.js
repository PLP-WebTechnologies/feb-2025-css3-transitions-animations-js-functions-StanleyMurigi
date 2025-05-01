// Toggle Dark Mode + Save Preference
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Save Username to localStorage
function saveUsername() {
  const name = document.getElementById('username').value;
  localStorage.setItem('username', name);
  updateGreeting(name);
}

function updateGreeting(name) {
  const greeting = document.getElementById('greeting');
  greeting.textContent = name ? `Welcome back, ${name}! 👋` : '';
}

// Load stored username
document.addEventListener('DOMContentLoaded', () => {
  const savedName = localStorage.getItem('username');
  if (savedName) {
    document.getElementById('username').value = savedName;
    updateGreeting(savedName);
  }
});

// Trigger Animation
function triggerAnimation() {
  const box = document.getElementById('box');
  box.classList.remove('animate-box'); // Reset
  void box.offsetWidth; // Force reflow
  box.classList.add('animate-box');
}
