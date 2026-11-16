:root {
  --night: #1a1740;
  --violet: #5a3d9a;
  --rose: #d8658a;
  --amber: #f3a56b;
  --ink: #fff;
  --glass: rgba(255, 255, 255, 0.14);
  --glass-edge: rgba(255, 255, 255, 0.38);
}

* { box-sizing: border-box; margin: 0; }

html, body { height: 100%; }

body {
  font-family: "Figtree", system-ui, sans-serif;
  color: var(--ink);
  background: linear-gradient(160deg, var(--night) 0%, var(--violet) 42%, var(--rose) 78%, var(--amber) 100%);
  background-size: 140% 140%;
  animation: drift 24s ease-in-out infinite alternate;
  overflow: hidden;
}

@keyframes drift {
  from { background-position: 0% 0%; }
  to   { background-position: 100% 100%; }
}

/* ---------- Background graphics (barely visible) ---------- */
.bg { position: fixed; inset: 0; pointer-events: none; }

.orb {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 25%, rgba(255,255,255,0.55), rgba(255,255,255,0.08) 55%, rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.25);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  opacity: 0.22;
}
.orb-a { width: 26vmax; height: 26vmax; top: -8vmax; left: -6vmax; }
.orb-b { width: 16vmax; height: 16vmax; bottom: -4vmax; right: 8vw; }
.orb-c { width: 7vmax;  height: 7vmax;  top: 18vh; right: 14vw; opacity: 0.16; }

.spark { position: absolute; fill: #fff; opacity: 0.16; }
.spark-a { width: 4.5rem; top: 14vh; left: 18vw; }
.spark-b { width: 2.5rem; bottom: 18vh; left: 12vw; opacity: 0.12; }

.ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,0.5);
  opacity: 0.14;
}
.ring-a { width: 14rem; height: 14rem; bottom: 10vh; right: -4rem; }
.ring-b { width: 6rem; height: 6rem; top: 10vh; right: 30vw; }

/* ---------- Content ---------- */
.stage {
  position: relative;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 1.25rem;
  text-align: center;
}

.wordmark {
  font-family: "Unbounded", system-ui, sans-serif;
  font-weight: 700;
  font-size: clamp(2.4rem, 9vw, 5.5rem);
  letter-spacing: -0.02em;
  line-height: 1;
  background: linear-gradient(180deg, #ffffff 20%, rgba(255,255,255,0.72) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 6px 24px rgba(26, 23, 64, 0.35));
}

/* ---------- Glass signup ---------- */
.glass {
  background: var(--glass);
  border: 1px solid var(--glass-edge);
  border-radius: 999px;
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.5),
    0 12px 40px rgba(26, 23, 64, 0.25);
}

.signup {
  display: flex;
  gap: 0.5rem;
  width: min(30rem, 100%);
  padding: 0.4rem;
}

.signup input {
  flex: 1;
  min-width: 0;
  padding: 0.85rem 1.25rem;
  font: inherit;
  color: var(--ink);
  background: transparent;
  border: 0;
  border-radius: 999px;
}
.signup input::placeholder { color: rgba(255,255,255,0.7); }
.signup input:focus-visible { outline: 2px solid rgba(255,255,255,0.8); outline-offset: 0; }

.signup button {
  padding: 0.85rem 1.5rem;
  font: inherit;
  font-weight: 600;
  color: var(--night);
  background: linear-gradient(180deg, #fff, #f1e6ff);
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 2px 10px rgba(26, 23, 64, 0.25);
  transition: transform 0.15s ease;
}
.signup button:hover { transform: translateY(-1px); }
.signup button:active { transform: translateY(0); }
.signup button:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }

.status {
  min-height: 1.5rem;
  font-weight: 600;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.status.show { opacity: 1; transform: none; }

.sr-only {
  position: absolute; width: 1px; height: 1px; overflow: hidden;
  clip: rect(0 0 0 0); white-space: nowrap;
}

@media (max-width: 420px) {
  .signup { flex-direction: column; border-radius: 1.75rem; }
  .signup input { text-align: center; }
}

@media (prefers-reduced-motion: reduce) {
  body { animation: none; }
  .status, .signup button { transition: none; }
}
