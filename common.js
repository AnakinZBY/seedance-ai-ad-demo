let toastWrap;
function showToast(msg, duration = 2600) {
  if (!toastWrap) {
    toastWrap = document.createElement('div');
    toastWrap.className = 'toast-wrap';
    document.body.appendChild(toastWrap);
  }
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = msg;
  toastWrap.appendChild(t);
  setTimeout(() => {
    t.classList.add('fade-out');
    setTimeout(() => t.remove(), 220);
  }, duration);
}

document.body.addEventListener('click', e => {
  const btn = e.target.closest('[data-toast]');
  if (btn) {
    e.preventDefault();
    showToast(btn.dataset.toast);
  }
});

document.querySelectorAll('.filter-group, .char-filter').forEach(group => {
  group.addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    group.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
  });
});
