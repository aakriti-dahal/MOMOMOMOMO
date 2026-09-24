import "./index.css";

// Import images
import heroImg from "./images/veg_momo.jpeg";
import cMomoImg from "./images/chicken_momo.jpeg";
import kotheyImg from "./images/kothey_momo.jpg";
import jholImg from "./images/jhol_momo.jpg";

function App() {
  return (
    <div className="site-wrapper">
      {/* Header */}
      <header className="site-header" id="top">
        <div className="header-container">
          <a href="#top" className="logo">
            <span className="logo-icon">🥟</span>
            <div className="logo-text">
              <span className="brand-title">Momo Odyssey</span>
              <span className="brand-tagline">Himalayan Culinary Art</span>
            </div>
          </a>
          <nav className="nav-menu" id="nav-menu">
            <a href="#recipes" className="nav-link">How to Cook</a>
            <a href="#pleating" className="nav-link">Pleating Guide</a>
            <a href="#chutneys" className="nav-link">Achaar &amp; Jhol</a>
            <a href="#timer-section" className="nav-link">Steaming Timer</a>
            <a href="#secrets" className="nav-link">Chef's Secrets</a>
          </nav>
          <div className="header-actions">
            <button id="sound-toggle-btn" className="icon-btn" title="Toggle Kitchen Audio Chime" aria-label="Toggle kitchen timer sound">
              <span className="icon" id="sound-icon">🔔</span>
            </button>
            <a href="#recipes" className="btn btn-primary btn-sm">Explore Recipes</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="hero-section">
          <canvas id="hero-steam-canvas"></canvas>
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Traditional Kathmandu Valley &amp; Himalayan Craft</span>
            </div>
            <h1 className="hero-title">
              Master the Soul of <span className="gradient-text">Himalayan Momos</span>
            </h1>
            <p className="hero-description">
              From translucent steaming bamboo baskets to crackling pan‑seared bottoms, fiery wok sizzlers, and comforting sesame‑timur broths. Discover authentic master recipes with interactive kitchen tools.
            </p>
            <div className="hero-cta-group">
              <a href="#recipes" className="btn btn-primary">
                <span>Browse 4 Master Recipes</span>
                <span className="btn-arrow">→</span>
              </a>
              <a href="#timer-section" className="btn btn-secondary">
                <span>⏱️ Open Cooking Timer</span>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img src={heroImg} alt="Steamed Veg Momos in Bamboo Steamer" id="hero-feature-img" className="hero-img" />
            </div>
          </div>
        </section>

        {/* Recipes Grid */}
        <section className="section recipes-section" id="recipes">
          <div className="section-header">
            <span className="section-subtitle">The Collection</span>
            <h2 className="section-title">Four Legendary Ways to Relish Momos</h2>
            <p className="section-desc">Each style honors a distinct textural experience—delicately steamed, fiery chili tossed, golden pan‑crisped, or drenched in nutty timur broth.</p>
            <div className="filter-tabs">
              <button className="filter-tab active" data-filter="all">All Styles (4)</button>
              <button className="filter-tab" data-filter="steamed">Steamed</button>
              <button className="filter-tab" data-filter="chilli">Chilli Wok</button>
              <button className="filter-tab" data-filter="pan-fried">Crispy Bottom</button>
              <button className="filter-tab" data-filter="broth">Soup / Jhol</button>
            </div>
          </div>
          <div className="recipes-grid" id="recipes-grid">
            {/* Recipe Card – Veg Steamed Momo */}
            <article className="recipe-card" data-category="steamed" id="card-veg-momo">
              <div className="card-media">
                <img src={heroImg} alt="Classic Steamed Veg Momo" loading="lazy" />
                <div className="card-badges">
                  <span className="badge badge-nature">🌿 Classic Veg</span>
                  <span className="badge badge-steam">♨️ Steamed</span>
                </div>
                <button className="card-quick-timer-btn" data-time="11" title="Set 11 min steam timer">⏱️ 11 min</button>
              </div>
              <div className="card-body">
                <div className="card-meta">
                  <span className="meta-item">⏱️ Prep: 40m</span>
                  <span className="meta-item">🔥 Steam: 11m</span>
                  <span className="meta-item">🌶️ Mild / Savory</span>
                </div>
                <h3 className="card-title">Classic Steamed Veg Momo</h3>
                <p className="card-excerpt">
                  Delicate hand‑pleated dumplings packed with finely minced cabbage, carrots, red onions, garlic, ginger, and aromatic Himalayan spices. Served hot with homemade sesame‑tomato achaar.
                </p>
                <div className="card-highlights">
                  <span className="highlight-chip">Crisp Cabbage &amp; Carrots</span>
                  <span className="highlight-chip">Ginger‑Garlic Punch</span>
                  <span className="highlight-chip">Toasted Coriander</span>
                </div>
                <div className="card-footer">
                  <button className="btn btn-outline open-recipe-btn" data-recipe-id="veg-momo">View Full Recipe &amp; Scaler →</button>
                </div>
              </div>
            </article>
            {/* Recipe Card – C Momo */}
            <article className="recipe-card" data-category="chilli" id="card-c-momo">
              <div className="card-media">
                <img src={cMomoImg} alt="Fiery Nepalese C Momo" loading="lazy" />
                <div className="card-badges">
                  <span className="badge badge-spice">🔥 Spicy Sizzler</span>
                  <span className="badge badge-wok">🥢 Wok‑Tossed</span>
                </div>
                <button className="card-quick-timer-btn" data-time="4" title="Set 4 min wok sauce timer">⏱️ 4 min</button>
              </div>
              <div className="card-body">
                <div className="card-meta">
                  <span className="meta-item">⏱️ Prep: 15m</span>
                  <span className="meta-item">🔥 Wok: 5m</span>
                  <span className="meta-item">🌶️🌶️🌶️ Fiery &amp; Tangy</span>
                </div>
                <h3 className="card-title">Fiery C Momo (Chilli Momo)</h3>
                <p className="card-excerpt">
                  Golden pan‑crisped or steamed dumplings tossed vigorously in a smoking hot wok with sweet and spicy chili garlic paste, crunchy bell peppers, caramelized red onions, and scallions.
                </p>
                <div className="card-highlights">
                  <span className="highlight-chip">Fiery Garlic‑Chili Glaze</span>
                  <span className="highlight-chip">Charred Bell Peppers</span>
                  <span className="highlight-chip">Spring Onion Crunch</span>
                </div>
                <div className="card-footer">
                  <button className="btn btn-outline open-recipe-btn" data-recipe-id="c-momo">View Full Recipe &amp; Scaler →</button>
                </div>
              </div>
            </article>
            {/* Recipe Card – Kothey Momo */}
            <article className="recipe-card" data-category="pan-fried" id="card-kothey-momo">
              <div className="card-media">
                <img src={kotheyImg} alt="Crispy Bottom Kothey Momos" loading="lazy" />
                <div className="card-badges">
                  <span className="badge badge-gold">✨ Crispy Bottom</span>
                  <span className="badge badge-pan">🍳 Potsticker Style</span>
                </div>
                <button className="card-quick-timer-btn" data-time="8" title="Set 8 min sear &amp; steam timer">⏱️ 8 min</button>
              </div>
              <div className="card-body">
                <div className="card-meta">
                  <span className="meta-item">⏱️ Prep: 35m</span>
                  <span className="meta-item">🔥 Pan‑Sear: 8m</span>
                  <span className="meta-item">🌶️ Medium Spiced</span>
                </div>
                <h3 className="card-title">Crispy Kothey Momo</h3>
                <p className="card-excerpt">
                  Signature crescent dumplings pan‑seared in sesame oil till the bottoms form an irresistible golden‑brown lace, followed by a quick lid‑steam to lock in juicy tenderness.
                </p>
                <div className="card-highlights">
                  <span className="highlight-chip">Golden Caramelized Base</span>
                  <span className="highlight-chip">Steamed Juicy Crown</span>
                  <span className="highlight-chip">Toasted Sesame Crunch</span>
                </div>
                <div className="card-footer">
                  <button className="btn btn-outline open-recipe-btn" data-recipe-id="kothey-momo">View Full Recipe &amp; Scaler →</button>
                </div>
              </div>
            </article>
            {/* Recipe Card – Jhol Momo */}
            <article className="recipe-card" data-category="broth" id="card-jhol-momo">
              <div className="card-media">
                <img src={jholImg} alt="Authentic Jhol Momo" loading="lazy" />
                <div className="card-badges">
                  <span className="badge badge-soup">🥣 Sesame Broth</span>
                  <span className="badge badge-timur">✨ Himalayan Timur</span>
                </div>
                <button className="card-quick-timer-btn" data-time="12" title="Set 12 min broth simmer timer">⏱️ 12 min</button>
              </div>
              <div className="card-body">
                <div className="card-meta">
                  <span className="meta-item">⏱️ Prep: 30m</span>
                  <span className="meta-item">🔥 Simmer: 12m</span>
                  <span className="meta-item">🌶️🌶️ Tangy &amp; Nutty</span>
                </div>
                <h3 className="card-title">Royal Jhol Momo</h3>
                <p className="card-excerpt">
                  Piping hot steamed dumplings submerged in an artisanal, golden‑hued soup made from roasted tomatoes, toasted white sesame seeds, roasted soybean, fresh lemon, and citrusy Timur pepper.
                </p>
                <div className="card-highlights">
                  <span className="highlight-chip">Roasted Sesame &amp; Timur</span>
                  <span className="highlight-chip">Warm Tangy Broth</span>
                  <span className="highlight-chip">Fresh Cilantro Garnish</span>
                </div>
                <div className="card-footer">
                  <button className="btn btn-outline open-recipe-btn" data-recipe-id="jhol-momo">View Full Recipe &amp; Scaler →</button>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Pleating Section */}
        <section className="section pleating-section" id="pleating">
          <div className="section-header">
            <span className="section-subtitle">Artisan Craftsmanship</span>
            <h2 className="section-title">The Art of the Momo Pleat</h2>
            <p className="section-desc">The fold determines texture, steam circulation, and the visual elegance of your dumpling. Master all three authentic Himalayan techniques.</p>
          </div>
          {/* Pleating UI omitted for brevity */}
        </section>

        {/* Timer Section */}
        <section className="section timer-section" id="timer-section">
          <div className="timer-container">
            <div className="timer-info-col">
              <span className="section-subtitle">Precision Cooking</span>
              <h2 className="section-title">Interactive Kitchen Steaming Timer</h2>
              <p className="section-desc">Overcooking makes momo wrappers gummy and soggy, while undercooking leaves raw dough. Use our precision timer calibrated for steam pressure and pan‑searing.</p>
            </div>
            {/* Timer UI would be implemented later */}
          </div>
        </section>

        {/* Secrets Section */}
        <section className="section secrets-section" id="secrets">
          <div className="section-header">
            <span className="section-subtitle">Culinary Wisdom</span>
            <h2 className="section-title">Chef’s Golden Secrets for Flawless Momos</h2>
            <p className="section-desc">Avoid sticky bottoms, dry fillings, and torn skins with these restaurant‑tested secrets.</p>
          </div>
          <div className="secrets-grid">
            <div className="secret-card">
              <div className="secret-num">01</div>
              <h3>The Moisture Balance</h3>
              <p>Finely grate cabbage and squeeze out the excess liquid with a pinch of salt. Squeezing prevents the raw filling from releasing water inside the wrapper, which creates soggy, leaking dumplings.</p>
            </div>
            <div className="secret-card">
              <div className="secret-num">02</div>
              <h3>The Juicy Fat Secret</h3>
              <p>Vegetable momo filling needs fat to stay juicy! Always fold in 2 tablespoons of melted ghee or hot mustard oil infused with fenugreek seeds (methi) into your vegetable mix before stuffing.</p>
            </div>
            <div className="secret-card">
              <div className="secret-num">03</div>
              <h3>Never Stick Steamer Liners</h3>
              <p>Brush your bamboo or metal steamer rack generously with vegetable oil, or line with perforated parchment paper or fresh cabbage leaves. Never put momos onto a dry or cold steamer tier!</p>
            </div>
            <div className="secret-card">
              <div className="secret-num">04</div>
              <h3>Steam Over Roaring Water</h3>
              <p>Ensure the water in the bottom steamer vessel is boiling vigorously and producing dense steam BEFORE placing the momo tier on top. This sets the wrapper dough instantly.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">🥟</span>
              <span className="brand-title">Momo Odyssey</span>
            </div>
            <p>Celebrating the sacred culinary traditions of the Himalayas. Hand‑rolled with passion, steamed with patience, and savored with friends.</p>
          </div>
          <div className="footer-links">
            <h4>The 4 Master Recipes</h4>
            <ul>
              <li><a href="#card-veg-momo" className="open-recipe-link" data-recipe-id="veg-momo">Classic Steamed Veg Momo</a></li>
              <li><a href="#card-c-momo" className="open-recipe-link" data-recipe-id="c-momo">Fiery C Momo (Chilli Sizzler)</a></li>
              <li><a href="#card-kothey-momo" className="open-recipe-link" data-recipe-id="kothey-momo">Golden Crispy Kothey Momo</a></li>
              <li><a href="#card-jhol-momo" className="open-recipe-link" data-recipe-id="jhol-momo">Royal Sesame Timur Jhol Momo</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Culinary Guides</h4>
            <ul>
              <li><a href="#pleating">Pleating Techniques</a></li>
              <li><a href="#chutneys">Achaar &amp; Jhol Broths</a></li>
              <li><a href="#timer-section">Kitchen Steaming Timer</a></li>
              <li><a href="#secrets">Moisture &amp; Juiciness Secrets</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Momo Odyssey. Crafted for culinary lovers. Authentic recipes from Kathmandu &amp; the Himalayas.</p>
          <a href="#top" className="back-to-top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
