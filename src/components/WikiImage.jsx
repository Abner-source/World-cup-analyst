import { useState, useEffect } from "react";

const CACHE_KEY = "wc2026_wiki_images_v1";
let cache = {};

try {
  const raw = localStorage.getItem(CACHE_KEY);
  if (raw) cache = JSON.parse(raw);
} catch {}

function persist() {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch {}
}

function wikiTitle(name) {
  return name.replace(/ /g, "_");
}

export default function WikiImage({ wikiPage, url: directUrl, caption, style, maxHeight = 320 }) {
  const [url, setUrl] = useState(directUrl || cache[wikiPage] || null);
  const [failed, setFailed] = useState(!directUrl && cache[wikiPage] === false);
  const [loading, setLoading] = useState(!directUrl && !url && !failed);

  useEffect(() => {
    if (directUrl) {
      setUrl(directUrl);
      setFailed(false);
      setLoading(false);
      return;
    }

    if (!wikiPage) {
      setFailed(true);
      setLoading(false);
      return;
    }

    if (wikiPage in cache) {
      if (cache[wikiPage]) {
        setUrl(cache[wikiPage]);
        setFailed(false);
      } else {
        setUrl(null);
        setFailed(true);
      }
      setLoading(false);
      return;
    }

    setLoading(true);
    const ctrl = new AbortController();

    fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        wikiTitle(wikiPage)
      )}`,
      { signal: ctrl.signal, headers: { Accept: "application/json" } }
    )
      .then((r) => {
        if (!r.ok) {
          if (r.status === 404) {
            cache[wikiPage] = false;
            persist();
          }
          throw new Error("not found");
        }
        return r.json();
      })
      .then((data) => {
        const src = data?.originalimage?.source || data?.thumbnail?.source || null;
        cache[wikiPage] = src || false;
        persist();
        if (src) {
          setUrl(src);
          setFailed(false);
        } else {
          setFailed(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setFailed(true);
        setLoading(false);
      });

    return () => ctrl.abort();
  }, [wikiPage, directUrl]);

  if (loading) {
    return (
      <div style={{
        height: 180,
        background: "var(--surface2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--text3)",
        fontSize: 12,
        ...style
      }}>
        Loading archive image...
      </div>
    );
  }

  if (failed || !url) {
    return (
      <div style={{
        height: 80,
        background: "var(--surface)",
        border: "1px dashed var(--border)",
        borderRadius: "var(--radius)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--text3)",
        fontSize: 12,
        fontStyle: "italic",
        padding: 16,
        textAlign: "center",
        ...style
      }}>
        Image archive — {caption || wikiPage}
      </div>
    );
  }

  return (
    <div style={{
      border: "1px solid var(--border)",
      borderRadius: "var(--radius)",
      overflow: "hidden",
      background: "var(--bg)",
      ...style
    }}>
      <img
        src={url}
        alt={caption || wikiPage}
        loading="lazy"
        onError={() => {
          setFailed(true);
          if (wikiPage) {
            cache[wikiPage] = false;
            persist();
          }
        }}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "450px",
          objectFit: "contain",
          background: "var(--surface2)",
          display: "block"
        }}
      />
      {caption && (
        <div style={{
          padding: "10px 12px",
          fontSize: 11,
          color: "var(--text2)",
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          fontStyle: "italic",
          lineHeight: 1.4
        }}>
          {caption}
        </div>
      )}
    </div>
  );
}
