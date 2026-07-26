/* =========================================================
   Shared app logic — included on every page via <script src="js/app.js">
   Data storage: browser localStorage (persists on this device/browser,
   shared by everyone who uses that browser profile).
   Session (who is logged in on this tab): sessionStorage — clears when
   the tab/browser closes, so each visit starts at the login page.
   ========================================================= */

/* ================= STORAGE HELPERS ================= */
function getData(key, fallback){
  try{
    const raw = localStorage.getItem(key);
    if(raw === null) return fallback;
    return JSON.parse(raw);
  }catch(e){
    return fallback;
  }
}
function setData(key, value){
  try{
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }catch(e){
    showToast('خطا در ذخیره‌سازی. دوباره تلاش کنید.');
    return false;
  }
}

/* ================= MISC HELPERS ================= */
function randomId(){ return 'id_' + Date.now() + '_' + Math.floor(Math.random()*10000); }
function randomUsername(){
  const words = ['jang','sepah','tir','shir','gorg','zobin','tigh','sang'];
  const w = words[Math.floor(Math.random()*words.length)];
  return w + Math.floor(100 + Math.random()*899);
}
function randomPassword(len){
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
  let out = '';
  for(let i=0;i<len;i++) out += chars[Math.floor(Math.random()*chars.length)];
  return out;
}
function nowStr(){
  return new Date().toLocaleString('fa-IR');
}
function showToast(msg){
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=> t.classList.remove('show'), 2200);
}
function escapeHtml(str){
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
function badgeSvg(role, size){
  size = size || 24;
  if(role === 'admin'){
    return `<svg viewBox="0 0 32 32" width="${size}" height="${size}"><path d="M16 2 L28 7 V15 C28 23 22.5 27.5 16 30 C9.5 27.5 4 23 4 15 V7 Z" fill="#241d08" stroke="#c9a227" stroke-width="1.8"/><path d="M16 9 L16 21 M11 14 L21 14" stroke="#c9a227" stroke-width="2.2" stroke-linecap="round"/></svg>`;
  }
  return `<svg viewBox="0 0 32 32" width="${size}" height="${size}"><path d="M16 2 L28 7 V15 C28 23 22.5 27.5 16 30 C9.5 27.5 4 23 4 15 V7 Z" fill="#151d27" stroke="#7c93ab" stroke-width="1.8"/><circle cx="16" cy="16" r="5.5" fill="none" stroke="#7c93ab" stroke-width="2"/></svg>`;
}

/* ================= SEED DATA =================
   Seeds two fixed accounts the first time the site is opened:
     admin -> username: winter   / password: server57
     user  -> username: username / password: player1
   Re-adds either one if it's ever missing, without touching any
   other accounts created later via the admin panel. */
function ensureAdmin(){
  let users = getData('thg_users', null);
  if(users === null) users = [];
  let changed = false;

  if(!users.some(u => u.username === 'winter')){
    users.push({ id: randomId(), username: 'winter', password: 'server57', role: 'admin' });
    changed = true;
  }
  if(!users.some(u => u.username === 'username')){
    users.push({ id: randomId(), username: 'username', password: 'player1', role: 'user' });
    changed = true;
  }

  if(changed) setData('thg_users', users);
}
function ensureCollections(){
  if(getData('thg_notifications', null) === null) setData('thg_notifications', []);
  if(getData('thg_targets', null) === null) setData('thg_targets', []);
  if(getData('thg_alliance', null) === null){
    setData('thg_alliance', { content: 'هنوز اطلاعاتی درباره اتحاد ثبت نشده است.', editor: '', time: '' });
  }
}
document.addEventListener('DOMContentLoaded', () => {
  ensureAdmin();
  ensureCollections();
});

/* ================= SESSION / AUTH ================= */
function getCurrentUser(){
  try{
    const raw = sessionStorage.getItem('thg_session_user');
    return raw ? JSON.parse(raw) : null;
  }catch(e){
    return null;
  }
}
function setCurrentUser(user){
  sessionStorage.setItem('thg_session_user', JSON.stringify(user));
}
function logout(){
  sessionStorage.removeItem('thg_session_user');
  window.location.href = 'index.html';
}

/* Call at the top of every protected page.
   requiredRole: pass 'admin' to restrict the page to admins only.
   Returns the current user object, or redirects and returns null. */
function requireAuth(requiredRole){
  const user = getCurrentUser();
  if(!user){
    window.location.href = 'index.html';
    return null;
  }
  if(requiredRole && user.role !== requiredRole){
    window.location.href = 'menu.html';
    return null;
  }
  return user;
}

/* Fills in the shared topbar (name, role, badge, admin-panel link) on
   pages that include the standard #topbarWho / #topbarActions markup. */
function paintTopbar(user){
  const nameEl = document.getElementById('menuWhoName');
  const roleEl = document.getElementById('menuWhoRole');
  const badgeEl = document.getElementById('menuRankBadge');
  const adminBtn = document.getElementById('adminPanelBtn');
  if(nameEl) nameEl.textContent = user.username;
  if(roleEl) roleEl.textContent = user.role === 'admin' ? 'فرمانده' : 'سرباز';
  if(badgeEl) badgeEl.innerHTML = badgeSvg(user.role, 30);
  if(adminBtn) adminBtn.style.display = user.role === 'admin' ? 'inline-flex' : 'none';
}

/* ================= LOGIN (index.html) ================= */
function doLogin(){
  const u = document.getElementById('loginUser').value.trim();
  const p = document.getElementById('loginPass').value;
  const errBox = document.getElementById('loginError');
  errBox.textContent = '';
  if(!u || !p){
    errBox.textContent = 'نام کاربری و رمز عبور را وارد کنید.';
    return;
  }
  const users = getData('thg_users', []);
  const found = users.find(x => x.username === u && x.password === p);
  if(!found){
    errBox.textContent = 'نام کاربری یا رمز عبور اشتباه است.';
    return;
  }
  setCurrentUser(found);
  window.location.href = 'menu.html';
}

/* ================= SHARED POST-LIST RENDERING (notifications/targets) ================= */
function renderComposer(containerId, placeholder, submitFn, canPost){
  const el = document.getElementById(containerId);
  if(!canPost){ el.innerHTML = ''; return; }
  el.innerHTML = `
    <div class="composer">
      <textarea id="${containerId}_input" placeholder="${placeholder}"></textarea>
      <div class="composer-foot">
        <button class="btn btn-gold" onclick="${submitFn}()">ثبت و ارسال</button>
      </div>
    </div>`;
}

function postCard(post, kind, currentUser){
  const liked = post.likes.includes(currentUser.username);
  const authorRole = post.authorRole === 'admin' ? 'admin' : 'user';
  const commentsHtml = post.comments.map(c => `
    <div class="comment"><span><b>${escapeHtml(c.author)}:</b> ${escapeHtml(c.text)}</span><span style="color:var(--text-muted); white-space:nowrap;">${escapeHtml(c.time)}</span></div>
  `).join('');
  return `
    <div class="post ${kind === 'target' ? 'attack' : 'notice'}">
      <div class="post-head">
        <div class="post-author">
          <span class="author-badge">${badgeSvg(authorRole, 20)}</span>
          <span>${escapeHtml(post.author)}</span>
        </div>
        <span class="post-time">${escapeHtml(post.time)}</span>
      </div>
      <div class="post-text">${escapeHtml(post.text)}</div>
      <div class="post-actions">
        <button class="action-btn ${liked ? 'liked':''}" onclick="toggleLike('${kind}','${post.id}')">
          <svg viewBox="0 0 24 24" fill="${liked ? 'currentColor':'none'}" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7.5-4.6-10-9.3C.6 8 2.4 4.5 6 4.1c2-.2 3.7.8 6 3 2.3-2.2 4-3.2 6-3 3.6.4 5.4 3.9 4 7.6C19.5 16.4 12 21 12 21z"/></svg>
          <span>${post.likes.length}</span>
        </button>
        <button class="action-btn" onclick="toggleComments('${kind}_${post.id}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
          <span>${post.comments.length}</span>
        </button>
      </div>
      <div class="comments" id="comments_${kind}_${post.id}">
        ${commentsHtml}
        <div class="comment-input-row">
          <input type="text" id="cinput_${kind}_${post.id}" placeholder="نظر خود را بنویسید...">
          <button onclick="addComment('${kind}','${post.id}')">ارسال</button>
        </div>
      </div>
    </div>`;
}

function toggleComments(key){
  document.getElementById('comments_' + key).classList.toggle('open');
}

/* toggleLike(kind, id) and addComment(kind, id) are defined on each
   page that renders posts (notifications.html, targets.html), since
   each page knows its own currentUser and its own refresh function. */
