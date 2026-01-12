// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.difriscodesigns.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.difriscodesigns.com/","title_tag":"Interior & Residential Design | DiFrisco Designs","meta_description":"Creative interior, residential and commercial design services with spatial planning and pre-construction consultation. Serving NY, NJ & CA. Book a consultation today."},{"page_url":"https://www.difriscodesigns.com/book-online","title_tag":"Design Consultation & Spatial Planning | DiFrisco Designs","meta_description":"Book online for design consultation, spatial planning, and pre-construction consultation. Remote or in-person sessions starting at $150."},{"page_url":"https://www.difriscodesigns.com/blog","title_tag":"Interior Design Blog & Tips | DiFrisco Designs","meta_description":"Explore interior design, home renovation tips, trends and budget-friendly ideas from DiFrisco Designs. Resources for residential and commercial design."},{"page_url":"https://www.difriscodesigns.com/post/magic-in-making-an-old-space-new","title_tag":"Home Renovation & Interior Design | DiFrisco Designs","meta_description":"See how DiFrisco Designs renovates kitchens with smart interior design—budget-friendly updates, lighting and finishes to refresh your home."},{"page_url":"https://www.difriscodesigns.com/post/10-ways-to-upgrade-your-bathroom-on-a-budget","title_tag":"Bathroom Renovation Tips | DiFrisco Designs","meta_description":"10 affordable bathroom upgrades for stylish home renovation. Practical interior design ideas to refresh fixtures, lighting and finishes."},{"page_url":"https://www.difriscodesigns.com/post/14-interior-design-trends-you-ll-fall-in-love-with","title_tag":"Interior Design Trends | DiFrisco Designs","meta_description":"Discover 14 interior design trends to inspire residential and commercial design. Ideas for furniture, color and decor from DiFrisco Designs."}],"keywords":["Interior Design","Residential Design","Commercial Design","Spatial Planning","Design Consultation","Pre-Construction Consultation","New York Designs","New Jersey Designs","California Designs","Home Renovation"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.difriscodesigns.com/#business",
      "name": "DIFRISCO DESIGNS",
      "url": "https://www.difriscodesigns.com/",
      "description": "Since 2004, DIFRISCO DESIGNS has provided interior design services for residential and commercial spaces, including spatial planning and pre-construction consultation. Book a consultation to create the design that aligns with your taste and vision.",
      "email": "difriscodesigns@gmail.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "973-310-2551",
          "contactType": "office"
        },
        {
          "@type": "ContactPoint",
          "telephone": "805-448-6649",
          "contactType": "mobile"
        }
      ],
      "image": [
        "https://static.wixstatic.com/media/455a72_1ab83da6826c46edad9f2dcda5d48dd4%7Emv2.png/v1/fit/w_2500,h_1330,al_c/455a72_1ab83da6826c46edad9f2dcda5d48dd4%7Emv2.png"
      ],
      "logo": "https://static.wixstatic.com/media/455a72_1ab83da6826c46edad9f2dcda5d48dd4%7Emv2.png/v1/fit/w_2500,h_1330,al_c/455a72_1ab83da6826c46edad9f2dcda5d48dd4%7Emv2.png",
      "areaServed": [
        "NY",
        "NJ",
        "CA"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Design Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Zoom Interactive Design Consultation",
            "itemOffered": {
              "@type": "Service",
              "name": "Zoom Interactive Design Consultation",
              "description": "Remote interactive design consultation via Zoom.",
              "serviceType": "Design Consultation",
              "timeRequired": "PT1H"
            },
            "price": "150",
            "priceCurrency": "USD",
            "url": "https://www.difriscodesigns.com/book-online"
          },
          {
            "@type": "Offer",
            "name": "Exterior 3D Design",
            "itemOffered": {
              "@type": "Service",
              "name": "Exterior 3D Design",
              "description": "Exterior 3D design services.",
              "serviceType": "3D Design",
              "timeRequired": "PT5H"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "description": "Prices vary"
            },
            "url": "https://www.difriscodesigns.com/book-online"
          },
          {
            "@type": "Offer",
            "name": "Spatial Planning",
            "itemOffered": {
              "@type": "Service",
              "name": "Spatial Planning",
              "description": "Spatial planning to optimize the layout and flow of residential and commercial spaces.",
              "serviceType": "Spatial Planning",
              "timeRequired": "PT2H"
            },
            "price": "750",
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "description": "Starting at $750"
            },
            "url": "https://www.difriscodesigns.com/book-online"
          },
          {
            "@type": "Offer",
            "name": "Pre-Construction Consultation",
            "itemOffered": {
              "@type": "Service",
              "name": "Pre-Construction Consultation",
              "description": "Pre-construction consultation to plan finishes, features, and layout before construction begins.",
              "serviceType": "Pre-Construction Consultation",
              "timeRequired": "PT2H"
            },
            "price": "350",
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "description": "Starting at $350"
            },
            "url": "https://www.difriscodesigns.com/book-online"
          }
        ]
      },
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.difriscodesigns.com/book-online"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.difriscodesigns.com/"
      }
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
