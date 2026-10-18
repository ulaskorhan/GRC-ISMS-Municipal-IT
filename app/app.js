// ISMS Risk Viewer
// Reads the risk register and the Statement of Applicability from the CSV files
// in ../data and shows them as a risk matrix and a filterable table.
// Plain JavaScript, no libraries, no build step. Nothing is stored or sent.

const RISK_CSV = "../data/risk-register.csv";
const SOA_CSV = "../data/statement-of-applicability.csv";

let risks = [];      // rows from risk-register.csv
let controls = [];   // rows from statement-of-applicability.csv
let view = "before"; // "before" or "after" treatment
let selectedRisk = null;

// ---------- CSV ----------
// Small CSV parser: handles quoted fields with commas and "" inside quotes.
function parseCSV(text) {
  const rows = [];
  let row = [], field = "", inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') inQuotes = false;
      else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field); rows.push(row); row = []; field = "";
    } else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const [header, ...data] = rows.filter(r => r.some(v => v !== ""));
  return data.map(r => Object.fromEntries(header.map((h, i) => [h, r[i] ?? ""])));
}

const splitList = s => s.split(";").map(x => x.trim()).filter(Boolean);

// ---------- Risk level ----------
// Same acceptance criteria as docs/02-risk-method.md
function level(score) {
  if (score >= 15) return "High";
  if (score >= 8) return "Medium";
  return "Low";
}

// Small helper to create elements without innerHTML (avoids injecting text as HTML)
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  }
  for (const child of children) node.append(child);
  return node;
}

// ---------- Risk matrix ----------
function renderMatrix() {
  const matrix = document.getElementById("matrix");
  matrix.replaceChildren();
  const lKey = view === "before" ? "Likelihood" : "Residual likelihood";
  const cKey = view === "before" ? "Consequence" : "Residual consequence";

  matrix.append(el("div", { class: "axis-title" }, "Likelihood ↓   Consequence →"));
  for (let L = 5; L >= 1; L--) {
    matrix.append(el("div", { class: "axis" }, String(L)));
    for (let C = 1; C <= 5; C++) {
      const cell = el("div", { class: "cell " + level(L * C).toLowerCase(), title: `Likelihood ${L} × consequence ${C} = ${L * C}` });
      risks
        .filter(r => Number(r[lKey]) === L && Number(r[cKey]) === C)
        .forEach(r => cell.append(
          el("button", {
            type: "button", class: "chip",
            "aria-pressed": String(selectedRisk === r.ID),
            title: r.Risk,
            onclick: () => selectRisk(r.ID),
          }, r.ID)
        ));
      matrix.append(cell);
    }
  }
  matrix.append(el("div"));
  for (let C = 1; C <= 5; C++) matrix.append(el("div", { class: "axis" }, String(C)));
}

// ---------- Risk detail ----------
function selectRisk(id, scroll = false) {
  selectedRisk = (selectedRisk === id && !scroll) ? null : id;
  renderMatrix();
  renderDetail();
  if (scroll) document.getElementById("detail").scrollIntoView({ behavior: "smooth" });
}

function renderDetail() {
  const box = document.getElementById("detail");
  const r = risks.find(x => x.ID === selectedRisk);
  if (!r) { box.hidden = true; return; }
  box.hidden = false;

  const before = Number(r.Score), after = Number(r["Residual score"]);
  const controlButtons = el("span");
  splitList(r["Annex A controls"]).forEach((c, i) => {
    if (i) controlButtons.append(", ");
    controlButtons.append(el("button", { type: "button", class: "link-btn", onclick: () => showControl(c) }, c));
  });

  const rows = [
    ["Asset", r.Asset],
    ["Threat", r.Threat],
    ["Vulnerability", r.Vulnerability],
    ["Existing controls", r["Existing controls"]],
    ["Risk before", el("span", {}, `${r.Likelihood} × ${r.Consequence} = ${before} `, el("span", { class: "badge " + level(before) }, level(before)))],
    ["Treatment", r.Treatment],
    ["Planned actions", r["Planned actions"]],
    ["Annex A controls", controlButtons],
    ["Owner", r.Owner],
    ["Risk after", el("span", {}, `${r["Residual likelihood"]} × ${r["Residual consequence"]} = ${after} `, el("span", { class: "badge " + level(after) }, level(after)))],
  ];
  const dl = el("dl");
  rows.forEach(([k, v]) => dl.append(el("dt", {}, k), el("dd", {}, v)));
  box.replaceChildren(el("h3", {}, `${r.ID} ${r.Risk}`), dl);
}

// Filter the SoA table to one control and scroll to it
function showControl(id) {
  document.getElementById("search").value = id;
  document.getElementById("theme").value = "";
  document.getElementById("status").value = "";
  document.getElementById("risk").value = "";
  renderSoA();
  document.getElementById("soa-title").scrollIntoView({ behavior: "smooth" });
}

// ---------- Overview ----------
const STATUSES = ["Implemented", "Partially implemented", "Planned", "Not applicable"];

function renderOverview() {
  const count = (key, lvl) => risks.filter(r => level(Number(r[key])) === lvl).length;
  const stats = document.getElementById("stats");
  stats.replaceChildren(
    el("div", { class: "stat" }, el("b", {}, String(risks.length)), el("span", {}, "risks")),
    el("div", { class: "stat" }, el("b", {}, `${count("Score", "High")} → ${count("Residual score", "High")}`), el("span", {}, "high risks, before → after treatment")),
    el("div", { class: "stat" }, el("b", {}, `${count("Score", "Medium")} → ${count("Residual score", "Medium")}`), el("span", {}, "medium risks, before → after")),
    el("div", { class: "stat" }, el("b", {}, String(controls.filter(c => c.Applicable === "Yes").length)), el("span", {}, `of ${controls.length} Annex A controls applicable`)),
  );

  // Stacked bar: share of controls per status
  const bar = document.getElementById("soa-bar");
  const legend = document.getElementById("soa-legend");
  bar.replaceChildren(); legend.replaceChildren();
  const parts = STATUSES.map(s => [s, controls.filter(c => c.Status === s).length]);
  bar.setAttribute("aria-label", parts.map(([s, n]) => `${s}: ${n}`).join(", "));
  parts.forEach(([s, n], i) => {
    if (!n) return;
    bar.append(el("span", { class: "seg s" + i, style: `flex:${n}`, title: `${s}: ${n}` }));
    legend.append(el("li", {}, el("i", { class: "dot s" + i }), `${s} `, el("b", {}, String(n))));
  });
}

// ---------- Risk register ----------
function renderRegister() {
  const body = document.getElementById("register-body");
  const sorted = [...risks].sort((a, b) => Number(b.Score) - Number(a.Score) || a.ID.localeCompare(b.ID));
  body.replaceChildren(...sorted.map(r => {
    const before = Number(r.Score), after = Number(r["Residual score"]);
    return el("tr", {},
      el("td", {}, el("button", { type: "button", class: "link-btn", onclick: () => { selectRisk(r.ID, true); } }, r.ID)),
      el("td", {}, r.Risk),
      el("td", { class: "nowrap" }, `${before} `, el("span", { class: "badge " + level(before) }, level(before))),
      el("td", { class: "nowrap" }, `${after} `, el("span", { class: "badge " + level(after) }, level(after))),
      el("td", {}, r.Owner));
  }));
}

// ---------- Statement of Applicability ----------
function renderSoA() {
  const q = document.getElementById("search").value.trim().toLowerCase();
  const theme = document.getElementById("theme").value;
  const status = document.getElementById("status").value;
  const risk = document.getElementById("risk").value;

  const visible = controls.filter(c =>
    (!theme || c.Control.split(".")[0] === theme) &&
    (!status || c.Status === status) &&
    (!risk || splitList(c["Linked risks"]).includes(risk)) &&
    (!q || c.Control === q || [c.Control, c.Title, c.Justification].join(" ").toLowerCase().includes(q))
  );

  const body = document.getElementById("soa-body");
  body.replaceChildren(...visible.map(c => {
    const riskCell = el("td");
    splitList(c["Linked risks"]).forEach((id, i) => {
      if (i) riskCell.append(", ");
      riskCell.append(el("button", { type: "button", class: "link-btn", onclick: () => selectRisk(id, true) }, id));
    });
    return el("tr", { class: c.Applicable === "No" ? "na" : "" },
      el("td", {}, c.Control),
      el("td", {}, c.Title),
      el("td", { class: "status" }, c.Status),
      el("td", {}, c.Justification),
      riskCell);
  }));
  document.getElementById("soa-count").textContent = `${visible.length} of ${controls.length} controls`;
}

// ---------- Start ----------
async function load() {
  try {
    const [riskText, soaText] = await Promise.all([
      fetch(RISK_CSV).then(r => { if (!r.ok) throw new Error(RISK_CSV); return r.text(); }),
      fetch(SOA_CSV).then(r => { if (!r.ok) throw new Error(SOA_CSV); return r.text(); }),
    ]);
    risks = parseCSV(riskText);
    controls = parseCSV(soaText);
  } catch (err) {
    document.querySelector("main").prepend(el("p", { class: "note" },
      "Could not load the data files. Open this page through GitHub Pages or a local web server, not as a file."));
    return;
  }

  const riskSelect = document.getElementById("risk");
  risks.forEach(r => riskSelect.append(el("option", { value: r.ID }, `${r.ID} ${r.Risk}`)));

  document.querySelectorAll(".toggle button").forEach(btn => btn.addEventListener("click", () => {
    view = btn.dataset.view;
    document.querySelectorAll(".toggle button").forEach(b => b.setAttribute("aria-pressed", String(b === btn)));
    renderMatrix();
  }));
  ["search", "theme", "status", "risk"].forEach(id =>
    document.getElementById(id).addEventListener("input", renderSoA));

  renderOverview();
  renderMatrix();
  renderRegister();
  renderSoA();
}

load();
