import { useState, useEffect } from "react";

/* ──────────────────────────────────────────────────────────
 * PHOTO CACHE — persisted across sessions in localStorage
 * Key = person name, Value = url string | false (not found)
 * ────────────────────────────────────────────────────────── */
const CACHE_KEY = "wc2026_photos_v1";
let cache = {};

try {
  const raw = localStorage.getItem(CACHE_KEY);
  if (raw) {
    cache = JSON.parse(raw);
    let changed = false;
    for (const key of Object.keys(cache)) {
      if (cache[key] === false) {
        delete cache[key];
        changed = true;
      }
    }
    if (changed) {
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
      } catch {}
    }
  }
} catch { /* ignore */ }

function persist() {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch { /* quota exceeded — silent */ }
}

/* Wikipedia article title — spaces → underscores */
function wikiTitle(name) {
  return name.replace(/ /g, "_");
}

/* Two-letter initials from full name */
function initials(name) {
  if (!name) return "?";
  return name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/* Accent color based on position or role */
function accentFor(position, role) {
  if (role === "manager") return "var(--accent)";
  if (!position) return "var(--text2)";
  const p = position.toLowerCase();
  if (p.includes("gk") || p.includes("goal")) return "var(--accent)";
  if (p.includes("def") || p.includes("back")) return "var(--accent2)";
  if (p.includes("mid")) return "var(--green)";
  if (
    p.includes("fw") ||
    p.includes("for") ||
    p.includes("wing") ||
    p.includes("stri")
  )
    return "var(--red)";
  return "var(--text2)";
}

/**
 * PlayerPhoto — fetches a real headshot from Wikipedia and caches it.
 *
 * @param {string}  name      Full name of the person
 * @param {number}  size      Diameter in px  (default 48)
 * @param {string}  position  Player position (for color coding)
 * @param {string}  role      "manager" | undefined
 * @param {string}  photoUrl  Direct override URL for the photo
 */
export default function PlayerPhoto({ name, size = 48, position, role, photoUrl }) {
  const [url, setUrl] = useState(photoUrl || cache[name] || null);
  const [failed, setFailed] = useState(!photoUrl && cache[name] === false);

  useEffect(() => {
    if (photoUrl) {
      setUrl(photoUrl);
      setFailed(false);
      return;
    }

    if (!name) return;

    /* Already resolved (positive or negative) */
    if (name in cache) {
      if (cache[name]) {
        setUrl(cache[name]);
        setFailed(false);
      } else {
        setUrl(null);
        setFailed(true);
      }
      return;
    }

    const ctrl = new AbortController();

    fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        wikiTitle(name)
      )}`,
      { signal: ctrl.signal, headers: { Accept: "application/json" } }
    )
      .then((r) => {
        if (!r.ok) {
          if (r.status === 404) {
            cache[name] = false;
            persist();
          }
          throw new Error("not found");
        }
        return r.json();
      })
      .then((data) => {
        const src = data?.thumbnail?.source || null;
        cache[name] = src || false;
        persist();
        if (src) {
          setUrl(src);
          setFailed(false);
        } else {
          setFailed(true);
        }
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setFailed(true);
      });

    return () => ctrl.abort();
  }, [name, photoUrl]);

  const accent = accentFor(position, role);
  const letters = initials(name);

  /* ── Real photo ── */
  if (url && !failed) {
    return (
      <img
        src={url}
        alt={name}
        loading="lazy"
        onError={() => {
          setFailed(true);
          cache[name] = false;
          persist();
        }}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          objectFit: "cover",
          objectPosition: "center 20%",
          border: `2px solid ${accent}40`,
          background: "var(--surface2)",
          flexShrink: 0,
        }}
      />
    );
  }

  /* ── Initials fallback ── */
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `${accent}12`,
        border: `2px solid ${accent}25`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: Math.round(size * 0.32),
        fontWeight: 700,
        color: accent,
        flexShrink: 0,
        letterSpacing: "0.02em",
      }}
    >
      {letters}
    </div>
  );
}
