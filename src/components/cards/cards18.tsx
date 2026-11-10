// DevUI Card 18 — Lumina Sign In
// Zelfstandig bestand; geen extra stylesheets, fonts of iconenpakketten nodig.
import { useId, useState } from "react";

export const cardMeta = {
  title: "Card 18 — Lumina Sign In",
  category: "Dark / Light effects",
  description: "Violet verlichte inlogkaart met een diagonale lichtbundel.",
  tags: ["Login", "Violet", "Glass"],
};

export default function Cards18({
  onEmailSubmit,
  onGoogleSignIn,
}: {
  onEmailSubmit?: (email: string) => void;
  onGoogleSignIn?: () => void;
} = {}) {
  const [email, setEmail] = useState("");
  const emailId = useId();
  return (
    <>
      <style>{`.devui-card-18 { width:320px; max-width:100%; container-type:inline-size; }
.devui-card-18, .devui-card-18 * { box-sizing:border-box; }
.devui-card-18 .panel { position:relative; isolation:isolate; width:100%; overflow:hidden; color:#f6f5f9; font-family:Arial,Helvetica,sans-serif; background:#090a0e; }
.devui-card-18 h2, .devui-card-18 h3, .devui-card-18 p { margin:0; }
.devui-card-18 button, .devui-card-18 input { font:inherit; }
.devui-card-18 button { cursor:pointer; -webkit-tap-highlight-color:transparent; }
.devui-card-18 button:focus-visible, .devui-card-18 input:focus-visible { outline:2px solid #a6b4ff; outline-offset:3px; }
.devui-card-18 .grain { position:absolute; z-index:3; inset:0; pointer-events:none; opacity:.13; background-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22160%22%20height%3D%22160%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%22.8%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Cpath%20fill%3D%22white%22%20filter%3D%22url%28%23n%29%22%20opacity%3D%22.4%22%20d%3D%22M0%200h160v160H0z%22%2F%3E%3C%2Fsvg%3E"); mix-blend-mode:screen; }
.devui-card-18 svg { display:block; }
@media(prefers-reduced-motion:reduce) { .devui-card-18 *, .devui-card-18 *::before, .devui-card-18 *::after { animation:none !important; transition:none !important; } }

.devui-card-18 .panel { aspect-ratio:.903; border-radius:8cqw; border:1px solid #272134; background:radial-gradient(ellipse at 102% -4%,#d6d9ff,rgba(161,121,220,.45) 17%,transparent 42%),radial-gradient(ellipse at 9% 0%,#1e1c2a,transparent 49%),linear-gradient(150deg,#070710,#03020a); box-shadow:inset 0 0 2cqw rgba(103,78,255,.12); }
.devui-card-18 .panel::before { content:''; position:absolute; z-index:-1; width:147%; height:35%; left:-10%; top:13%; transform:rotate(-42deg); background:linear-gradient(180deg,transparent,rgba(202,174,255,.5) 24%,rgba(174,114,255,.65) 53%,rgba(100,81,227,.25) 76%,transparent); filter:blur(7cqw); }
.devui-card-18 .lumina-brand { margin-top:14cqw; text-align:center; font:400 9.3cqw/1.2 'Courier New',monospace; letter-spacing:.6cqw; color:#e7e2ec; }
.devui-card-18 h2 { margin-top:12cqw; text-align:center; font:400 6.1cqw/1.2 'Courier New',monospace; letter-spacing:.5cqw; color:#e9e4f5; text-shadow:0 0 3cqw #c7bcf3; }
.devui-card-18 form { position:relative; margin:12cqw 14cqw 0; }
.devui-card-18 label { display:block; margin-bottom:2.2cqw; font:3.1cqw/1.2 monospace; color:#a49cad; }
.devui-card-18 input { width:100%; height:8cqw; padding:0 3cqw; border:1px solid #312541; border-radius:1cqw; color:#e5dbff; background:rgba(65,37,103,.15); font-size:3cqw; }
.devui-card-18 input::placeholder { color:#766780; }
.devui-card-18 .lumina-or { margin:3.7cqw 0; text-align:center; color:#554b63; font:3cqw monospace; }
.devui-card-18 .lumina-actions { display:grid; grid-template-columns:1fr 1fr; gap:2.2cqw; }
.devui-card-18 button { height:7.2cqw; padding:0 1cqw; border:1px solid rgba(255,255,255,.07); border-radius:2.4cqw; background:#682cba; color:#d6c9f0; font:2.4cqw/1 monospace; white-space:nowrap; }
.devui-card-18 button:last-child { background:#25232c; color:#b9b2c4; }
.devui-card-18 .lumina-note { position:absolute; bottom:4cqw; left:10%; right:10%; text-align:center; color:#3d374c; font-size:2.3cqw; }`}</style>
      <div className="devui-card-18">
        <section className="panel" aria-label="Lumina sign in">
          <div className="lumina-brand">Lumina</div>
          <h2>Sign in</h2>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (email.trim()) onEmailSubmit?.(email.trim());
            }}
          >
            <label htmlFor={emailId}>Email address</label>
            <input
              id={emailId}
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <div className="lumina-or">or</div>
            <div className="lumina-actions">
              <button type="button" onClick={() => onGoogleSignIn?.()}>
                continue with google
              </button>
              <button type="submit">continue with email</button>
            </div>
          </form>
          <p className="lumina-note">
            By continuing, you agree to our Terms &amp; Privacy Policy.
          </p>
        </section>
      </div>
    </>
  );
}
