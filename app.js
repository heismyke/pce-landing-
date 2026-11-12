// ─── Edit contact details here ────────────────────────────────────────────────
// Any entry with an empty `value` is hidden from the page.
const CONTACTS = {
  phone:     { label: "Call us",   value: "08064530306" },
  whatsapp:  { label: "WhatsApp",  value: "" },           // e.g. "2348064530306"
  email:     { label: "Email",     value: "info@pceenergies.com" },
  gmail:     { label: "Gmail",     value: "" },           // e.g. "pceenergies@gmail.com"
  instagram: { label: "Instagram", value: "" },           // handle without @
  linkedin:  { label: "LinkedIn",  value: "" },           // full URL
  x:         { label: "X",         value: "" },           // handle without @
  tiktok:    { label: "TikTok",    value: "" },           // handle without @
  website:   { label: "Website",   value: "https://www.pceenergies.com" },
  address:   { label: "Visit us",  value: "Plot 97 Adeola Odeku, Victoria Island, Lagos" },
};

// Gallery items — drop new photos in assets/gallery/ and add them here.
const PROJECTS = [
  { src: "assets/gallery/project-1.jpg", title: "EV Fast-Charging Hub" },
  { src: "assets/gallery/project-2.jpg", title: "Solar Energy Hub" },
  { src: "assets/gallery/project-3.jpg", title: "Charging Station & Lounge" },
  { src: "assets/gallery/project-4.jpg", title: "Battery Energy Storage System" },
  { src: "assets/gallery/project-5.jpg", title: "EV Service & Maintenance" },
  { src: "assets/gallery/project-6.jpg", title: "EV Charger Installation" },
  { src: "assets/gallery/project-7.jpg", title: "Energy Storage Unit" },
];
// ──────────────────────────────────────────────────────────────────────────────

const ICONS = {
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
  whatsapp: '<path d="M3 21l1.6-4.7A8.5 8.5 0 1 1 8 19.6L3 21Z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1a3.5 3.5 0 0 1-2-2l1-1-1-2L9 9.5Z"/>',
  email: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  gmail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  x: '<path d="M4 4l16 16M20 4 4 20"/>',
  tiktok: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.5 2.5 2.5 4.5 5 5"/>',
  website: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
  address: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
};

function intlPhone(n) {
  const d = n.replace(/\D/g, "");
  return d.startsWith("0") ? "+234" + d.slice(1) : "+" + d;
}

function hrefFor(key, v) {
  switch (key) {
    case "phone":     return "tel:" + intlPhone(v);
    case "whatsapp":  return "https://wa.me/" + v.replace(/\D/g, "");
    case "email":
    case "gmail":     return "mailto:" + v;
    case "instagram": return "https://instagram.com/" + v.replace(/^@/, "");
    case "x":         return "https://x.com/" + v.replace(/^@/, "");
    case "tiktok":    return "https://www.tiktok.com/@" + v.replace(/^@/, "");
    case "address":   return "https://maps.google.com/?q=" + encodeURIComponent(v);
    default:          return v;
  }
}

function displayFor(key, v) {
  if (key === "instagram" || key === "x" || key === "tiktok") return "@" + v.replace(/^@/, "");
  if (key === "website" || key === "linkedin") return v.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  return v;
}

const list = document.getElementById("contact-list");
for (const [key, { label, value }] of Object.entries(CONTACTS)) {
  if (!value) continue;
  const external = /^https?:/.test(hrefFor(key, value));
  const li = document.createElement("li");
  li.innerHTML = `
    <a class="contact" href="${hrefFor(key, value)}"${external ? ' target="_blank" rel="noopener"' : ""}>
      <span class="contact-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[key]}</svg></span>
      <span class="contact-text"><span class="contact-label">${label}</span><span class="contact-value"></span></span>
      <svg class="contact-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>
    </a>`;
  li.querySelector(".contact-value").textContent = displayFor(key, value);
  list.appendChild(li);
}

const grid = document.getElementById("gallery-grid");
const lightbox = document.getElementById("lightbox");
const lbImg = lightbox.querySelector("img");
const lbCaption = lightbox.querySelector(".lightbox-caption");

PROJECTS.forEach((p, i) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "tile" + (i === 0 ? " tile-wide" : "");
  btn.innerHTML = `<img loading="${i < 2 ? "eager" : "lazy"}" decoding="async" alt=""><span class="tile-caption"></span>`;
  btn.querySelector("img").src = p.src;
  btn.querySelector("img").alt = p.title;
  btn.querySelector(".tile-caption").textContent = p.title;
  btn.addEventListener("click", () => {
    lbImg.src = p.src;
    lbImg.alt = p.title;
    lbCaption.textContent = p.title;
    lightbox.showModal();
  });
  grid.appendChild(btn);
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target.closest(".lightbox-close")) lightbox.close();
});

document.getElementById("save-contact").addEventListener("click", () => {
  const lines = ["BEGIN:VCARD", "VERSION:3.0", "ORG:Phoenix Creed Energies", "FN:Phoenix Creed Energies"];
  if (CONTACTS.phone.value) lines.push("TEL;TYPE=WORK,VOICE:" + intlPhone(CONTACTS.phone.value));
  if (CONTACTS.email.value) lines.push("EMAIL;TYPE=WORK:" + CONTACTS.email.value);
  if (CONTACTS.gmail.value) lines.push("EMAIL:" + CONTACTS.gmail.value);
  if (CONTACTS.website.value) lines.push("URL:" + CONTACTS.website.value);
  if (CONTACTS.address.value) lines.push("ADR;TYPE=WORK:;;" + CONTACTS.address.value.replace(/,/g, "\\,") + ";;;;");
  lines.push("END:VCARD");
  const blob = new Blob([lines.join("\r\n")], { type: "text/vcard" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "Phoenix-Creed-Energies.vcf";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
});

document.getElementById("year").textContent = new Date().getFullYear();
