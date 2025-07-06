
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const tiktok = document.getElementById('tiktok').value;

  document.getElementById('registerForm').style.display = 'none';
  document.getElementById('profile').style.display = 'block';
  document.getElementById('nameDisplay').textContent = username;
  const link = document.getElementById('tiktokLink');
  link.href = tiktok;
  link.textContent = '📲 زيارة ' + tiktok;
});
