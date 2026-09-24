// PHASE 3: JavaScript. State -> render() -> events.
const CATEGORIES = ["All", "Tops", "Bottoms", "Dresses", "Corporate", "Shoes", "Accessories"];
const VIBES = ["Casual", "Church", "Outing"]; // add a new vibe here + a colour in style.css
const EMOJI = { Tops: "👚", Bottoms: "👖", Dresses: "👗", Corporate: "💼", Shoes: "👟", Accessories: "👜" };

// ---- State (the single source of truth) ----
// WARDROBE (the starter pieces) lives in items.js. Your own changes are stored
// separately: pieces you add, favourite overrides, hidden pieces and outfits.
let user = { custom: [], favs: {}, hidden: [], outfits: [] };
let state = { items: [], category: "All", vibe: "All", query: "", favOnly: false, picked: [] };

// localStorage keeps data after refresh. It can fail (private mode, full), so try/catch.
function load() {
  try {
    const saved = JSON.parse(localStorage.getItem("wardrobe-v2"));
    if (saved) user = { ...user, ...saved };
  } catch (e) { console.warn("Could not load", e); }
  buildItems();
}
function save() {
  try { localStorage.setItem("wardrobe-v2", JSON.stringify(user)); }
  catch (e) { alert("Storage is full. Try smaller photos or delete some items."); }
}
// Combine your own pieces with the starter data, applying favourites + deletions
function buildItems() {
  state.items = [...user.custom, ...WARDROBE.filter((i) => !user.hidden.includes(i.id))]
    .map((i) => ({ ...i, fav: i.id in user.favs ? user.favs[i.id] : !!i.fav }));
}

// ---- Helpers ----
const $ = (id) => document.getElementById(id);
const byId = (id) => state.items.find((i) => i.id === id);

// Placeholder colour + emoji, with the photo layered on top if item.image exists.
// If the file is missing, the <img> removes itself and the card shows the path it expects.
function pic(item) {
  const isFile = item.image && !item.image.startsWith("data:");
  const img = item.image
    ? `<img src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="this.parentNode.classList.add('no-img');this.remove()">`
    : "";
  return { attrs: `style="background-color:${item.color}" ${isFile ? `data-slot="${item.image}"` : ""}`, inner: EMOJI[item.category] + img };
}

// ---- Render ----
function renderChips() {
  $("cats").innerHTML = CATEGORIES.map(
    (c) => `<button class="chip" data-cat="${c}" aria-pressed="${c === state.category}">${c}</button>`
  ).join("");
}

function renderVibeChips() {
  $("vibe-chips").innerHTML = ["All", ...VIBES].map(
    (v) => `<button class="chip" data-vibe="${v}" aria-pressed="${v === state.vibe}">${v === "All" ? "Any vibe" : v}</button>`
  ).join("");
}

function vibeTags(item) {
  return `<div class="vibes">${(item.vibes || []).map((v) => `<span class="vibe ${v.toLowerCase()}">${v}</span>`).join("")}</div>`;
}

function renderGrid() {
  const q = state.query.toLowerCase();
  const shown = state.items.filter(
    (i) =>
      (state.category === "All" || i.category === state.category) &&
      (state.vibe === "All" || (i.vibes || []).includes(state.vibe)) &&
      i.name.toLowerCase().includes(q) &&
      (!state.favOnly || i.fav)
  );
  $("count").textContent = `${state.items.length} pieces, ${shown.length} showing`;
  $("grid").innerHTML = shown.length
    ? shown.map((i) => `
      <article class="item ${state.picked.includes(i.id) ? "picked" : ""}" data-id="${i.id}">
        <div class="thumb" ${pic(i).attrs}>${pic(i).inner}
          <button class="heart" data-action="fav" aria-pressed="${i.fav}" aria-label="Favourite ${escapeHtml(i.name)}">♥</button>
        </div>
        <div class="meta"><h3>${escapeHtml(i.name)}</h3><span>${i.category}</span>${vibeTags(i)}</div>
        <div class="actions">
          <button class="add" data-action="pick">${state.picked.includes(i.id) ? "Remove from outfit" : "Add to outfit"}</button>
          <button data-action="delete" aria-label="Delete ${escapeHtml(i.name)}">Delete</button>
        </div>
      </article>`).join("")
    : `<p class="empty">Nothing here yet. Add a piece or clear your filters.</p>`;
}

function miniHtml(id) {
  const i = byId(id);
  return i ? `<div class="mini" ${pic(i).attrs} title="${escapeHtml(i.name)}" data-id="${id}">${pic(i).inner}</div>` : "";
}

function renderTray() {
  $("tray-items").innerHTML = state.picked.length
    ? state.picked.map(miniHtml).join("")
    : `<span class="hint">Tap “Add to outfit” on any piece to start building.</span>`;
}

function renderSaved() {
  $("saved").innerHTML = user.outfits.length
    ? user.outfits.map((o) => `
      <div class="outfit" data-oid="${o.id}">
        <strong>${escapeHtml(o.name)}</strong>
        <div class="row">${o.items.map(miniHtml).join("")}</div>
        <button class="btn" data-action="del-outfit">Delete</button>
      </div>`).join("")
    : `<p class="muted">No outfits saved yet.</p>`;
}

function render() { renderChips(); renderVibeChips(); renderGrid(); renderTray(); renderSaved(); }

// Never put user text into innerHTML without escaping it
function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// ---- Events ----
$("search").addEventListener("input", (e) => { state.query = e.target.value; renderGrid(); });

$("cats").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-cat]");
  if (!btn) return;
  state.category = btn.dataset.cat; renderChips(); renderGrid();
});

$("vibe-chips").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-vibe]");
  if (!btn) return;
  state.vibe = btn.dataset.vibe; renderVibeChips(); renderGrid();
});

$("fav-toggle").addEventListener("click", (e) => {
  state.favOnly = !state.favOnly;
  e.currentTarget.setAttribute("aria-pressed", state.favOnly);
  renderGrid();
});

// Event delegation: one listener on the grid handles every card's buttons
$("grid").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  const id = Number(btn.closest(".item").dataset.id);
  const item = byId(id);
  if (btn.dataset.action === "fav") { user.favs[id] = !item.fav; save(); buildItems(); }
  if (btn.dataset.action === "pick") {
    state.picked = state.picked.includes(id) ? state.picked.filter((p) => p !== id) : [...state.picked, id];
  }
  if (btn.dataset.action === "delete" && confirm(`Delete “${item.name}”?`)) {
    // your own pieces are removed; starter pieces are hidden
    if (user.custom.some((i) => i.id === id)) user.custom = user.custom.filter((i) => i.id !== id);
    else user.hidden.push(id);
    state.picked = state.picked.filter((p) => p !== id);
    save(); buildItems();
  }
  render();
});

// Clicking a thumbnail in the tray removes it from the outfit
$("tray-items").addEventListener("click", (e) => {
  const m = e.target.closest(".mini");
  if (!m) return;
  state.picked = state.picked.filter((p) => p !== Number(m.dataset.id));
  render();
});

$("clear-outfit").addEventListener("click", () => { state.picked = []; render(); });

$("save-outfit").addEventListener("click", () => {
  if (state.picked.length < 2) return alert("Pick at least two pieces for an outfit.");
  const name = $("outfit-name").value.trim() || `Outfit ${user.outfits.length + 1}`;
  user.outfits.push({ id: Date.now(), name, items: [...state.picked] });
  state.picked = []; $("outfit-name").value = ""; save(); render();
});

$("saved").addEventListener("click", (e) => {
  if (e.target.dataset.action !== "del-outfit") return;
  const oid = Number(e.target.closest(".outfit").dataset.oid);
  user.outfits = user.outfits.filter((o) => o.id !== oid); save(); render();
});

// ---- PHASE 4: image upload ----
// Shrink photos before saving so localStorage (about 5 MB) doesn't fill up.
function shrink(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, 480 / Math.max(img.width, img.height));
      const c = document.createElement("canvas");
      c.width = img.width * scale; c.height = img.height * scale;
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      resolve(c.toDataURL("image/jpeg", 0.8));
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

$("add-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const vibes = [...document.querySelectorAll('input[name="vibe"]:checked')].map((c) => c.value);
  if (!vibes.length) return alert("Pick at least one vibe: Casual, Church or Outing.");
  const file = $("f-img").files[0];
  let image = null;
  if (file) { try { image = await shrink(file); } catch { return alert("That image couldn't be read."); } }
  user.custom.unshift({
    id: Date.now(), name: $("f-name").value.trim(), category: $("f-cat").value,
    color: $("f-color").value, vibes, image,
  });
  e.target.reset(); save(); buildItems(); render();
});

load();
render();
