// Basic JS for interactive website

// 1️⃣ 13 Tools click alert
document.querySelectorAll('.tool-item').forEach(item => {
  item.addEventListener('click', () => {
    alert(item.innerText + " clicked!");
  });
});

// 2️⃣ Example: simple menu toggle (optional)
const menuBtn = document.querySelector('.menu-btn');
if(menuBtn) {
  menuBtn.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
  });
}

// 3️⃣ Example: PWA Service Worker registration (optional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('../service-worker.js')
      .then(reg => console.log('Service Worker registered', reg))
      .catch(err => console.log('SW registration failed', err));
  });
}