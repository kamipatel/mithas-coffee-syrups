"use client";

import { useState, useEffect, useRef } from "react";

/* ════════════════════════════════════════════
   MITHAS COFFEE SYRUPS — V2 REDESIGN
   Aesthetic: Warm editorial luxury, magazine-inspired
   ════════════════════════════════════════════ */

const C = {
  cream: "#F6F1E9",
  parchment: "#EDE7DB",
  linen: "#E8E0D0",
  espresso: "#2A1810",
  brown: "#3D2518",
  walnut: "#5C3A28",
  caramel: "#9B7340",
  gold: "#C4973B",
  brightGold: "#D4A843",
  roseGold: "#C9A87C",
  blush: "#DDB8A0",
  rose: "#C4727F",
  fig: "#7B4B3A",
  date: "#8B6914",
  carrot: "#D4802A",
  white: "#FFFDF9",
};

const syrups = [
  {
    id: "gulab",
    name: "Gulabi Aankein",
    subtitle: "Gulab Jamun Syrup",
    price: 15,
    color: C.rose,
    bg: "linear-gradient(145deg, #F5E0E4 0%, #EECDD4 50%, #E8B8C2 100%)",
    description: "Rose-scented sweetness inspired by the beloved gulab jamun. Transforms your latte into a floral, nostalgic dream.",
    recipe: "Add 1–2 tbsp to steamed milk. Top with dried rose petals.",
    tag: "Bestseller",
    icon: "🌹",
  },
  {
    id: "anjeer",
    name: "Anjeer Halwa",
    subtitle: "Fig & Walnut Syrup",
    price: 15,
    color: C.fig,
    bg: "linear-gradient(145deg, #F0E4D8 0%, #E5D5C4 50%, #D9C7B2 100%)",
    description: "Rich fig and walnut flavors drawn from the classic anjeer halwa. Earthy, nutty, and deeply comforting.",
    recipe: "Stir into cold brew or espresso. Pairs beautifully with oat milk.",
    tag: "Rich & Nutty",
    icon: "🫘",
  },
  {
    id: "date",
    name: "Salted Date",
    subtitle: "Salted Date Syrup",
    price: 15,
    color: C.date,
    bg: "linear-gradient(145deg, #F2EADB 0%, #E8DCC6 50%, #DDD0B6 100%)",
    description: "Caramel-like sweetness of dates with a hint of salt. The perfect balance for your morning coffee ritual.",
    recipe: "Perfect in a hot latte or iced matcha. A Ramadan essential.",
    tag: "Ramadan Special",
    icon: "🌴",
  },
  {
    id: "chikki",
    name: "Peanut Chikki",
    subtitle: "Roasted Peanuts & Jaggery",
    price: 15,
    color: C.caramel,
    bg: "linear-gradient(145deg, #F4EDE0 0%, #EBE0CE 50%, #E0D3BD 100%)",
    description: "Crunchy peanut chikki reimagined as a syrup. Jaggery sweetness meets roasted nuttiness in every sip.",
    recipe: "Drizzle into a banana smoothie or warm chai latte.",
    tag: "Crunchy Vibes",
    icon: "🥜",
  },
  {
    id: "gajar",
    name: "Gajar-e-Ishq",
    subtitle: "Gajar ka Halwa Syrup",
    price: 15,
    color: C.carrot,
    bg: "linear-gradient(145deg, #FFF0DB 0%, #F5E2C4 50%, #EBD4AE 100%)",
    description: "Winter's favorite dessert in a bottle. Warm carrot halwa spices that make any drink feel like a hug.",
    recipe: "Incredible in matcha. Add a pinch of cardamom for the full experience.",
    tag: "Winter Favorite",
    icon: "🥕",
  },
];

const testimonials = [
  { text: "I put the Gulab Jamun syrup in my matcha and I literally can't go back to regular lattes.", name: "Priya S.", detail: "UT Austin '26" },
  { text: "Bought the sampler pack as a gift and ended up keeping it for myself. The Salted Date is unreal.", name: "Amir K.", detail: "Ramadan 2026" },
  { text: "Finally, coffee syrups that actually taste like the real thing. Not just 'inspired by' — these ARE the flavors.", name: "Neha R.", detail: "Pop-Up Café regular" },
];

/* ─── Hooks ─── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); ob.unobserve(el); } },
      { threshold }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, [threshold]);
  return [ref, vis];
}

function useActiveSection(ids) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) ob.observe(el); });
    return () => ob.disconnect();
  }, []);
  return active;
}

/* ─── Components ─── */
function Reveal({ children, delay = 0, y = 50, className = "", style = {} }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} className={className} style={{
      ...style,
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : `translateY(${y}px)`,
      transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

function GrainOverlay() {
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      pointerEvents: "none", zIndex: 9999, opacity: 0.028, mixBlendMode: "multiply",
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }} />
  );
}

function Divider({ width = 80 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, margin: "28px 0" }}>
      <div style={{ width, height: 1, background: `linear-gradient(to right, transparent, ${C.gold}80)` }} />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="2" fill={C.gold} />
        {[0, 60, 120, 180, 240, 300].map(a => (
          <circle key={a} cx={8 + 5.5 * Math.cos(a * Math.PI / 180)} cy={8 + 5.5 * Math.sin(a * Math.PI / 180)} r="1" fill={C.gold} opacity="0.45" />
        ))}
      </svg>
      <div style={{ width, height: 1, background: `linear-gradient(to left, transparent, ${C.gold}80)` }} />
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <p style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 13, letterSpacing: "0.3em", textTransform: "uppercase",
      color: C.gold, fontWeight: 600, margin: "0 0 14px",
    }}>{children}</p>
  );
}

function SectionTitle({ children, size = "clamp(30px, 5vw, 46px)" }) {
  return (
    <h2 style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: size, color: C.espresso, margin: 0,
      fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.01em",
    }}>{children}</h2>
  );
}

/* ═══════ MAIN ═══════ */
export default function MithasSite() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSyrup, setActiveSyrup] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const navIds = ["story", "syrups", "recipes", "order", "popups"];
  const activeSection = useActiveSection(navIds);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx(i => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Story", id: "story" },
    { label: "Syrups", id: "syrups" },
    { label: "Recipes", id: "recipes" },
    { label: "Order", id: "order" },
    { label: "Pop-Ups", id: "popups" },
  ];

  const navShowing = scrollY > 80;

  return (
    <div style={{ background: C.cream, minHeight: "100vh", overflowX: "hidden", position: "relative" }}>
      <GrainOverlay />

      {/* ════ NAVBAR ════ */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 clamp(16px, 4vw, 40px)", height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: navShowing ? `${C.cream}ee` : "transparent",
        backdropFilter: navShowing ? "blur(24px) saturate(1.2)" : "none",
        borderBottom: navShowing ? `1px solid ${C.gold}18` : "1px solid transparent",
        transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
      }}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{
          background: "none", border: "none", cursor: "pointer", padding: 0,
          fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 600,
          color: C.espresso, letterSpacing: "0.02em",
        }}>
          mithas
        </button>

        <div className="dt-nav" style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {navLinks.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} style={{
              background: activeSection === l.id ? `${C.gold}15` : "none",
              border: "none", cursor: "pointer", padding: "6px 14px", borderRadius: 100,
              fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 500,
              color: activeSection === l.id ? C.espresso : C.walnut,
              transition: "all 0.3s", letterSpacing: "0.02em",
            }}>{l.label}</button>
          ))}
          <button onClick={() => scrollTo("order")} style={{
            background: C.espresso, color: C.cream, border: "none",
            fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600,
            padding: "9px 22px", borderRadius: 100, cursor: "pointer",
            marginLeft: 8, transition: "transform 0.2s, box-shadow 0.2s",
            letterSpacing: "0.02em",
          }}
            onMouseEnter={e => { e.target.style.transform = "scale(1.04)"; e.target.style.boxShadow = `0 4px 20px ${C.espresso}40`; }}
            onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = "none"; }}
          >Order Now</button>
        </div>

        <button className="mob-btn" onClick={() => setMenuOpen(!menuOpen)} style={{
          display: "none", background: "none", border: "none", cursor: "pointer", padding: 8, zIndex: 101,
        }}>
          <div style={{ width: 22, display: "flex", flexDirection: "column", gap: 5 }}>
            <span style={{ display: "block", height: 2, background: C.espresso, borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span style={{ display: "block", height: 2, background: C.espresso, borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
            <span style={{ display: "block", height: 2, background: C.espresso, borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </div>
        </button>
      </nav>

      {/* Mobile overlay */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        background: `${C.cream}fa`, backdropFilter: "blur(30px)",
        zIndex: 99, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28,
        opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none",
        transition: "opacity 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}>
        {navLinks.map((l, i) => (
          <button key={l.id} onClick={() => scrollTo(l.id)} style={{
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 500, color: C.espresso,
            opacity: menuOpen ? 1 : 0, transform: menuOpen ? "none" : "translateY(20px)",
            transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.06}s`,
          }}>{l.label}</button>
        ))}
        <button onClick={() => scrollTo("order")} style={{
          background: C.espresso, color: C.cream, border: "none",
          fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600,
          padding: "16px 44px", borderRadius: 100, cursor: "pointer", marginTop: 8,
        }}>Order Now</button>
      </div>

      {/* ════ HERO ════ */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", textAlign: "center",
        padding: "120px 24px 80px", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `
            radial-gradient(ellipse 700px 500px at 25% 35%, ${C.rose}06, transparent),
            radial-gradient(ellipse 600px 600px at 75% 65%, ${C.gold}08, transparent),
            radial-gradient(ellipse 400px 300px at 50% 80%, ${C.blush}06, transparent)
          `,
        }} />

        {/* Animated floating elements */}
        {[
          { emoji: "🌹", top: "12%", left: "7%", size: 64, speed: 0.08, opacity: 0.1 },
          { emoji: "🌴", bottom: "18%", right: "8%", size: 52, speed: -0.06, opacity: 0.08 },
          { emoji: "🥕", top: "22%", right: "12%", size: 44, speed: 0.05, opacity: 0.07 },
          { emoji: "☕", bottom: "28%", left: "12%", size: 40, speed: -0.04, opacity: 0.06 },
        ].map((f, i) => (
          <div key={i} style={{
            position: "absolute", fontSize: f.size, opacity: f.opacity,
            top: f.top, bottom: f.bottom, left: f.left, right: f.right,
            transform: `translateY(${scrollY * f.speed}px)`,
            transition: "transform 0.1s linear",
          }}>{f.emoji}</div>
        ))}

        <Reveal delay={0.1} y={30}>
          <div style={{
            width: 72, height: 72, borderRadius: "50%",
            background: `linear-gradient(135deg, ${C.parchment}, ${C.linen})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 28px", border: `1px solid ${C.gold}30`,
            boxShadow: `0 8px 32px ${C.gold}12`,
          }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="4" fill={C.gold} />
              <circle cx="16" cy="16" r="9" stroke={C.gold} strokeWidth="0.8" opacity="0.5" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map(a => (
                <circle key={a} cx={16 + 9 * Math.cos(a * Math.PI / 180)} cy={16 + 9 * Math.sin(a * Math.PI / 180)} r="1.8" fill={C.gold} opacity="0.4" />
              ))}
            </svg>
          </div>
        </Reveal>

        <Reveal delay={0.25} y={40}>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(56px, 12vw, 110px)", fontWeight: 400,
            color: C.espresso, margin: 0, letterSpacing: "-0.03em", lineHeight: 1,
          }}>mithas</h1>
        </Reveal>

        <Reveal delay={0.4} y={25}>
          <p style={{
            fontFamily: "'Outfit', sans-serif", fontSize: "clamp(11px, 1.8vw, 14px)",
            letterSpacing: "0.35em", textTransform: "uppercase",
            color: C.gold, margin: "18px 0 0", fontWeight: 600,
          }}>Handcrafted Coffee Syrups</p>
        </Reveal>

        <Reveal delay={0.5} y={20}>
          <Divider width={70} />
        </Reveal>

        <Reveal delay={0.6} y={30}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(22px, 4vw, 36px)", fontStyle: "italic",
            color: C.espresso, maxWidth: 520, lineHeight: 1.45,
            margin: "0 auto", fontWeight: 300,
          }}>Flavors that feel like home</p>
        </Reveal>

        <Reveal delay={0.7} y={25}>
          <p style={{
            fontFamily: "'Outfit', sans-serif", fontSize: "clamp(14px, 2vw, 17px)",
            color: C.walnut, maxWidth: 420, lineHeight: 1.75,
            margin: "18px auto 0", fontWeight: 300, opacity: 0.8,
          }}>
            Inspired by desi childhood desserts. Handmade in small batches in Austin, TX.
          </p>
        </Reveal>

        <Reveal delay={0.85} y={20}>
          <div style={{ display: "flex", gap: 14, marginTop: 40, flexWrap: "wrap", justifyContent: "center" }}>
            <button onClick={() => scrollTo("syrups")} style={{
              background: C.espresso, color: C.cream, border: "none",
              fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 600,
              padding: "16px 38px", borderRadius: 100, cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
            }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = `0 12px 36px ${C.espresso}30`; }}
              onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = "none"; }}
            >Explore Syrups</button>
            <button onClick={() => scrollTo("order")} style={{
              background: "transparent", color: C.espresso, border: `1.5px solid ${C.espresso}`,
              fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 600,
              padding: "15px 38px", borderRadius: 100, cursor: "pointer",
              transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.target.style.background = C.espresso; e.target.style.color = C.cream; }}
              onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = C.espresso; }}
            >Order Now</button>
          </div>
        </Reveal>

        {/* Scroll hint */}
        <div style={{
          position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
          opacity: scrollY > 100 ? 0 : 0.4, transition: "opacity 0.5s",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.walnut }}>Scroll</span>
          <div style={{ width: 1, height: 32, background: `linear-gradient(to bottom, ${C.walnut}, transparent)`, animation: "scrollPulse 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ════ STORY ════ */}
      <section id="story" style={{ padding: "100px 24px 110px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {/* Editorial asymmetric layout */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0, textAlign: "center" }}>
            <Reveal>
              <SectionLabel>Our Story</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <SectionTitle>Turning childhood<br />desserts into your<br />morning coffee</SectionTitle>
            </Reveal>
            <Reveal delay={0.16}>
              <Divider />
            </Reveal>

            {/* Two-column story text */}
            <Reveal delay={0.22}>
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px 48px", textAlign: "left", marginTop: 8,
              }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 20,
                  color: C.espresso, lineHeight: 1.8, margin: 0, fontWeight: 400,
                }}>
                  <span style={{ fontSize: 44, float: "left", lineHeight: 1, marginRight: 8, marginTop: 4, color: C.gold, fontWeight: 300 }}>G</span>
                  rowing up, the sweetest memories were always tied to mithai — gulab jamun at celebrations, gajar ka halwa on winter evenings, anjeer halwa from grandmother's kitchen.
                </p>
                <p style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 15,
                  color: C.walnut, lineHeight: 1.85, margin: 0, fontWeight: 300,
                }}>
                  Mithas was born from a simple idea: what if those flavors could be part of your everyday coffee? Each syrup is handcrafted in small batches right here in Austin. No artificial flavors, no shortcuts — just real ingredients and the flavors of home, one latte at a time.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════ SYRUPS ════ */}
      <section id="syrups" style={{
        padding: "90px 24px 110px",
        background: `linear-gradient(180deg, ${C.cream} 0%, ${C.parchment} 30%, ${C.parchment} 70%, ${C.cream} 100%)`,
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <SectionLabel>The Collection</SectionLabel>
              <SectionTitle>Five Syrups, Five Stories</SectionTitle>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: C.walnut, opacity: 0.65, margin: "14px 0 0", fontWeight: 300 }}>
                Each inspired by a beloved desi sweet · All $15 per bottle
              </p>
            </div>
          </Reveal>

          {/* Product showcase — featured syrup + grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {syrups.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.08}>
                <div
                  onClick={() => setActiveSyrup(i)}
                  style={{
                    background: C.white, borderRadius: 20, overflow: "hidden",
                    cursor: "pointer", position: "relative",
                    border: activeSyrup === i ? `2px solid ${s.color}50` : `2px solid transparent`,
                    transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                    boxShadow: activeSyrup === i
                      ? `0 20px 60px ${s.color}15, 0 4px 20px rgba(0,0,0,0.04)`
                      : "0 2px 16px rgba(0,0,0,0.03)",
                    transform: activeSyrup === i ? "translateY(-6px)" : "none",
                  }}
                >
                  {/* Top visual */}
                  <div style={{
                    height: 140, background: s.bg, position: "relative",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    overflow: "hidden",
                  }}>
                    <span style={{
                      fontSize: 56, filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.08))",
                      transform: activeSyrup === i ? "scale(1.1)" : "scale(1)",
                      transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                    }}>{s.icon}</span>

                    {s.tag && (
                      <span style={{
                        position: "absolute", top: 12, right: 12,
                        background: `${s.color}dd`, color: "#fff",
                        fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600,
                        letterSpacing: "0.08em", textTransform: "uppercase",
                        padding: "4px 10px", borderRadius: 100,
                      }}>{s.tag}</span>
                    )}
                  </div>

                  <div style={{ padding: "22px 24px 26px" }}>
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', serif", fontSize: 24,
                      color: C.espresso, margin: "0 0 3px", fontWeight: 600,
                    }}>{s.name}</h3>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: 11, color: s.color,
                      fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                      margin: "0 0 12px",
                    }}>{s.subtitle}</p>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: 14, color: C.walnut,
                      lineHeight: 1.7, margin: "0 0 16px", fontWeight: 300,
                    }}>{s.description}</p>

                    {/* Recipe hint — key UX addition */}
                    <div style={{
                      background: `${s.color}08`, borderRadius: 10, padding: "10px 14px",
                      display: "flex", gap: 8, alignItems: "flex-start",
                      border: `1px solid ${s.color}12`,
                    }}>
                      <span style={{ fontSize: 14, marginTop: 1 }}>☕</span>
                      <p style={{
                        fontFamily: "'Outfit', sans-serif", fontSize: 12, color: C.walnut,
                        lineHeight: 1.55, margin: 0, fontWeight: 400, fontStyle: "italic",
                      }}>{s.recipe}</p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 18 }}>
                      <span style={{
                        fontFamily: "'Cormorant Garamond', serif", fontSize: 28,
                        color: C.espresso, fontWeight: 600,
                      }}>${s.price}</span>
                      <span style={{
                        fontFamily: "'Outfit', sans-serif", fontSize: 10,
                        color: C.walnut, opacity: 0.5, letterSpacing: "0.06em",
                      }}>per bottle</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Sampler pack */}
          <Reveal delay={0.15}>
            <div style={{
              marginTop: 48, borderRadius: 24, overflow: "hidden",
              background: `linear-gradient(135deg, ${C.espresso}, ${C.brown} 40%, ${C.walnut})`,
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              position: "relative",
            }}>
              <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: `radial-gradient(circle at 15% 30%, ${C.gold}12, transparent 50%), radial-gradient(circle at 85% 70%, ${C.rose}08, transparent 40%)`,
              }} />
              <div style={{ padding: "clamp(32px, 5vw, 56px)", position: "relative" }}>
                <span style={{
                  display: "inline-block", background: C.gold, color: C.espresso,
                  fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  padding: "5px 14px", borderRadius: 100, marginBottom: 20,
                }}>Best Value</span>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 38px)",
                  color: C.cream, margin: "0 0 4px", fontWeight: 500,
                }}>Mithai ka Dabba</h3>
                <p style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 12, color: C.roseGold,
                  letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 18px", fontWeight: 500,
                }}>Sampler Pack</p>
                <p style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 15, color: `${C.cream}bb`,
                  lineHeight: 1.75, margin: "0 0 28px", fontWeight: 300, maxWidth: 380,
                }}>
                  Can't pick just one? Three mini bottles in a beautiful gift box — perfect for gifting or discovering your new favorite.
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, color: C.cream, fontWeight: 500 }}>$12</span>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: `${C.cream}66`, fontWeight: 300 }}>sampler</span>
                </div>
              </div>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: 40, fontSize: 80, gap: 8,
                background: `radial-gradient(circle at center, ${C.gold}08, transparent 60%)`,
              }}>
                <span style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.15))" }}>🌹</span>
                <span style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.15))" }}>🫘</span>
                <span style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.15))" }}>🌴</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════ RECIPE IDEAS (NEW UX SECTION) ════ */}
      <section id="recipes" style={{ padding: "100px 24px", background: C.cream }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <SectionLabel>Make It at Home</SectionLabel>
              <SectionTitle>Three Ways to Enjoy</SectionTitle>
            </div>
          </Reveal>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24,
          }}>
            {[
              {
                title: "The Classic Latte",
                steps: "Steam your milk. Pull a shot. Add 1–2 tbsp of any Mithas syrup. Stir gently. Garnish with a sprinkle of cardamom or rose petals.",
                time: "3 min",
                icon: "☕",
                color: C.fig,
              },
              {
                title: "Iced Matcha Mithas",
                steps: "Whisk matcha with a splash of hot water. Add syrup (Gajar-e-Ishq is incredible). Pour over ice and oat milk. Watch the magic.",
                time: "2 min",
                icon: "🍵",
                color: "#5B8C5A",
              },
              {
                title: "The Gift Box Moment",
                steps: "Order the Mithai ka Dabba. Pair with a bag of someone's favorite coffee beans. Wrap it up. The most thoughtful desi gift under $20.",
                time: "Perfect gift",
                icon: "🎁",
                color: C.gold,
              },
            ].map((r, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div style={{
                  background: C.white, borderRadius: 20, padding: "32px 28px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.03)",
                  border: `1px solid ${C.gold}10`,
                  height: "100%",
                  display: "flex", flexDirection: "column",
                }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: `${r.color}10`, display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontSize: 26, marginBottom: 20,
                  }}>{r.icon}</div>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif", fontSize: 22,
                    color: C.espresso, margin: "0 0 12px", fontWeight: 600,
                  }}>{r.title}</h3>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: 14, color: C.walnut,
                    lineHeight: 1.75, margin: "0 0 20px", fontWeight: 300, flex: 1,
                  }}>{r.steps}</p>
                  <span style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: 11,
                    color: r.color, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                  }}>{r.time}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════ TESTIMONIALS ════ */}
      <section style={{
        padding: "80px 24px",
        background: C.parchment,
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <SectionLabel>Kind Words</SectionLabel>
            <div style={{ position: "relative", minHeight: 160, marginTop: 24 }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{
                  position: i === 0 ? "relative" : "absolute",
                  top: 0, left: 0, right: 0,
                  opacity: testimonialIdx === i ? 1 : 0,
                  transform: testimonialIdx === i ? "translateY(0)" : "translateY(12px)",
                  transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
                  pointerEvents: testimonialIdx === i ? "auto" : "none",
                }}>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(20px, 3vw, 26px)",
                    color: C.espresso, lineHeight: 1.6, margin: "0 0 20px",
                    fontStyle: "italic", fontWeight: 400,
                  }}>"{t.text}"</p>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: 13, color: C.walnut, fontWeight: 600, margin: "0 0 2px",
                  }}>{t.name}</p>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: 12, color: C.caramel, fontWeight: 400,
                  }}>{t.detail}</p>
                </div>
              ))}
            </div>
            {/* Dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestimonialIdx(i)} style={{
                  width: testimonialIdx === i ? 24 : 8, height: 8, borderRadius: 100,
                  background: testimonialIdx === i ? C.gold : `${C.gold}40`,
                  border: "none", cursor: "pointer", padding: 0,
                  transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                }} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════ HOW TO ORDER ════ */}
      <section id="order" style={{ padding: "100px 24px 110px", background: C.cream }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionLabel>Simple & Easy</SectionLabel>
              <SectionTitle>How to Order</SectionTitle>
            </div>
          </Reveal>

          {/* Steps with connecting line */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 28, position: "relative" }}>
            {[
              { step: "01", title: "DM Us", desc: "Send a message on Instagram with what you'd like — syrup flavors and quantity.", icon: "💬", color: C.rose },
              { step: "02", title: "Confirm & Pay", desc: "We'll confirm your order and total. Venmo or cash — whatever's easier for you.", icon: "✨", color: C.gold },
              { step: "03", title: "Pick Up", desc: "Grab your syrups on West Campus at a time that works for you. That's it!", icon: "📍", color: C.fig },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div style={{
                  textAlign: "center", padding: "36px 24px 32px", borderRadius: 20,
                  background: C.white, boxShadow: "0 2px 16px rgba(0,0,0,0.03)",
                  border: `1px solid ${C.gold}10`, position: "relative",
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: "50%",
                    background: `${item.color}10`, display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontSize: 28, margin: "0 auto 18px",
                    border: `1px solid ${item.color}20`,
                  }}>{item.icon}</div>
                  <span style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: 10, color: C.gold,
                    fontWeight: 700, letterSpacing: "0.18em",
                  }}>STEP {item.step}</span>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif", fontSize: 24,
                    color: C.espresso, margin: "8px 0 10px", fontWeight: 600,
                  }}>{item.title}</h3>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: 14, color: C.walnut,
                    lineHeight: 1.7, margin: 0, fontWeight: 300,
                  }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Main CTA */}
          <Reveal delay={0.2}>
            <div style={{ textAlign: "center", marginTop: 56 }}>
              <a href="https://www.instagram.com/mithas.coffeesyrups/" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 12,
                background: `linear-gradient(135deg, ${C.espresso}, ${C.brown})`,
                color: C.cream, fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600,
                padding: "18px 44px", borderRadius: 100, textDecoration: "none",
                transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                boxShadow: `0 4px 24px ${C.espresso}20`,
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${C.espresso}30`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = `0 4px 24px ${C.espresso}20`; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                DM to Order on Instagram
              </a>
              <p style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 13, color: C.walnut,
                opacity: 0.5, marginTop: 14, fontWeight: 300,
              }}>@mithas.coffeesyrups · West Campus pickup · Venmo accepted</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════ POP-UPS ════ */}
      <section id="popups" style={{ padding: "90px 24px 100px", background: C.parchment }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <SectionLabel>Events</SectionLabel>
              <SectionTitle>Pop-Up Café</SectionTitle>
              <p style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 16, color: C.walnut,
                maxWidth: 480, margin: "16px auto 0", lineHeight: 1.75, fontWeight: 300, opacity: 0.8,
              }}>
                We host pop-up café events around Austin with handcrafted lattes, matcha, and syrup tastings. Follow us to catch the next one.
              </p>
            </div>
          </Reveal>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20,
          }}>
            {[
              { icon: "☕", title: "Specialty Lattes", desc: "Handcrafted drinks made with Mithas syrups — flavors you can't get anywhere else." },
              { icon: "🛍️", title: "Shop Bottles", desc: "Full-size bottles and sampler packs available at every pop-up event." },
              { icon: "🎁", title: "Exclusive Drops", desc: "Limited seasonal flavors and collaborations only available at our events." },
              { icon: "🤝", title: "Community", desc: "Meet the maker. Taste test. Connect with Austin's desi food community." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{
                  background: C.white, borderRadius: 18, padding: "28px 22px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
                  border: `1px solid ${C.gold}10`,
                  textAlign: "center",
                }}>
                  <span style={{ fontSize: 30, display: "block", marginBottom: 12 }}>{item.icon}</span>
                  <h4 style={{
                    fontFamily: "'Cormorant Garamond', serif", fontSize: 18,
                    color: C.espresso, margin: "0 0 8px", fontWeight: 600,
                  }}>{item.title}</h4>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: 13, color: C.walnut,
                    lineHeight: 1.65, margin: 0, fontWeight: 300,
                  }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════ INSTAGRAM CTA ════ */}
      <section style={{
        padding: "80px 24px", textAlign: "center", position: "relative",
        background: `linear-gradient(180deg, ${C.cream}, ${C.parchment}08)`,
      }}>
        <Reveal>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(26px, 4.5vw, 40px)",
            color: C.espresso, margin: "0 0 12px", fontWeight: 400, fontStyle: "italic",
          }}>Follow the journey</p>
          <a href="https://www.instagram.com/mithas.coffeesyrups/" target="_blank" rel="noopener noreferrer" style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 17, color: C.gold,
            textDecoration: "none", fontWeight: 600, display: "inline-flex",
            alignItems: "center", gap: 6, transition: "opacity 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >@mithas.coffeesyrups <span style={{ fontSize: 20 }}>→</span></a>
        </Reveal>
      </section>

      {/* ════ FOOTER ════ */}
      <footer style={{
        padding: "48px 24px 36px", borderTop: `1px solid ${C.gold}15`, textAlign: "center",
        background: C.cream,
      }}>
        <Divider width={40} />
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: C.espresso, margin: "20px 0 4px", fontWeight: 500 }}>mithas</p>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: C.walnut, opacity: 0.5, margin: "2px 0 0", fontWeight: 300 }}>
          Flavors that feel like home · Austin, TX
        </p>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: C.walnut, opacity: 0.3, margin: "20px 0 0", fontWeight: 300 }}>
          © 2026 Mithas. Handcrafted with love.
        </p>
      </footer>

      {/* ════ FLOATING MOBILE CTA ════ */}
      <div className="float-cta" style={{
        position: "fixed", bottom: 20, left: 16, right: 16,
        zIndex: 90, display: "none",
        opacity: scrollY > 600 ? 1 : 0,
        transform: scrollY > 600 ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        pointerEvents: scrollY > 600 ? "auto" : "none",
      }}>
        <a href="https://www.instagram.com/mithas.coffeesyrups/" target="_blank" rel="noopener noreferrer" style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
          background: C.espresso, color: C.cream,
          fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 600,
          padding: "16px 24px", borderRadius: 100, textDecoration: "none",
          boxShadow: `0 8px 32px ${C.espresso}50`,
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          DM to Order
        </a>
      </div>

      {/* ════ STYLES ════ */}
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 0.8; transform: scaleY(1.3); transform-origin: top; }
        }

        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; -webkit-font-smoothing: antialiased; }

        ::selection { background: ${C.gold}35; color: ${C.espresso}; }

        @media (max-width: 768px) {
          .dt-nav { display: none !important; }
          .mob-btn { display: block !important; }
          .float-cta { display: block !important; }
        }
        @media (min-width: 769px) {
          .mob-btn { display: none !important; }
          .float-cta { display: none !important; }
        }
      `}</style>
    </div>
  );
}
