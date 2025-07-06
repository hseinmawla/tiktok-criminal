
import { db } from './firebase-config.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-lite.js';

document.getElementById('registerForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const tiktok = document.getElementById('tiktok').value;

  try {
    const docRef = await addDoc(collection(db, "users"), {
      username: username,
      tiktok_url: tiktok,
      points: 10
    });
    console.log("تمت الإضافة:", docRef.id);
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('nameDisplay').textContent = username;
    const link = document.getElementById('tiktokLink');
    link.href = tiktok;
    document.getElementById('userPoints').textContent = "10";
  } catch (e) {
    console.error("حدث خطأ أثناء الإضافة:", e);
  }
});
