import './App.css'

const inventory = [
  { make: 'Mercedes-Benz', model: 'C200', price: 'KES 3.9M', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=88' },
  { make: 'Toyota', model: 'Prado TX', price: 'KES 7.8M', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=88' },
  { make: 'Honda', model: 'Fit RS', price: 'KES 2.1M', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=88' },
  { make: 'Nissan', model: 'X-Trail', price: 'KES 4.9M', image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=88' },
]

const services = ['Import sourcing', 'Finance guidance', 'Vehicle inspection', 'Delivery booking']

function App() {
  return (
    <div className="hastoh-app">
      <header className="topbar">
        <a className="logo" href="#home">
          <span className="logo-mark">HT</span>
          <span className="logo-text">
            <span className="logo-title">Hastoh Motors</span>
            <span className="logo-sub">Kenya Auto Store</span>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#inventory">Inventory</a>
          <a href="#process">Buying Process</a>
          <a href="#services">Services</a>
          <a href="#why">Why Hastoh</a>
          <a className="book-button" href="#contact">Book a Viewing</a>
        </nav>
      </header>

      <main className="main">
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <div className="small-label">Hastoh Motors</div>
            <h1>Find your next road.</h1>
            <p className="hero-text">
              Quality cars, clear choices, and delivery support for drivers moving through Kenya.
            </p>

            <div className="hero-actions">
              <a className="primary-cta" href="#inventory">Explore Inventory</a>
              <a className="ghost-cta" href="#services">Our Services</a>
            </div>

            <div className="stat-row">
              <div>
                <span className="stat-number">350+</span>
                <span className="stat-label">Verified Vehicles</span>
              </div>
              <div>
                <span className="stat-number">24/7</span>
                <span className="stat-label">WhatsApp Support</span>
              </div>
              <div>
                <span className="stat-number">01</span>
                <span className="stat-label">Duty-Free Sourcing</span>
              </div>
            </div>
          </div>

          <aside className="hero-image-panel">
            <div className="image-frame">
              <div className="hero-image">
                <span className="floating-tag">Urban SUV Deals</span>
                <span className="floating-price">KES 2.7M+</span>
                <span className="floating-note">From curated stock</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="feature-strip">
          {services.map((item, index) => (
            <span className="strip-item" key={item}>
              <span className="strip-index">0{index + 1}</span>
              <span>{item}</span>
            </span>
          ))}
        </section>

        <section className="inventory-section" id="inventory">
          <div className="section-head">
            <div>
              <span className="small-label dark">Featured Stock</span>
              <h2>Latest arrivals</h2>
            </div>
            <a className="text-link" href="#contact">Request shortlist →</a>
          </div>

          <div className="inventory-grid">
            {inventory.map((car) => (
              <article className="inventory-card" key={car.model}>
                <div className="car-image-wrap">
                  <img src={car.image} alt={car.model} className="car-image" />
                  <span className="car-badge">Verified</span>
                </div>
                <div className="car-detail">
                  <div className="car-top">
                    <span className="car-make">{car.make}</span>
                    <span className="car-price">{car.price}</span>
                  </div>
                  <h3>{car.model}</h3>
                  <div className="car-meta">
                    <span>2021</span>
                    <span className="meta-sep"></span>
                    <span>Kenya Ready</span>
                  </div>
                  <a href="#contact" className="inspect-button">Inspect Vehicle</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="section-head process-head">
            <div>
              <span className="small-label dark">Buying process</span>
              <h2>From shortlist to road.</h2>
            </div>
          </div>
          <div className="process-grid">
            <article className="process-card">
              <span className="process-number">01</span>
              <h3>Choose your drive</h3>
              <p>Tell us your route, fuel type, family use, and budget lane.</p>
            </article>
            <article className="process-card">
              <span className="process-number">02</span>
              <h3>Inspect and verify</h3>
              <p>We check condition, paperwork, pricing and availability.</p>
            </article>
            <article className="process-card">
              <span className="process-number">03</span>
              <h3>Take delivery</h3>
              <p>We organize proof of ownership, handover and delivery.</p>
            </article>
          </div>
        </section>

        <section className="service-section" id="services">
          <div className="service-panel">
            <span className="small-label light">Hastoh Care</span>
            <h2>Auto buying with clarity.</h2>
            <p>We help you choose by use, budget, reliability and delivery needs.</p>
            <ul>
              <li>Inspection and valuation</li>
              <li>Finance and sourcing support</li>
              <li>Delivery and handover</li>
            </ul>
          </div>
          <div className="service-list-panel">
            <article>
              <span className="service-index">01</span>
              <div>
                <h3>Quality checked</h3>
                <p>Every vehicle receives a practical inspection before it reaches inventory.</p>
              </div>
            </article>
            <article>
              <span className="service-index">02</span>
              <div>
                <h3>Trade support</h3>
                <p>We connect your budget, body type and delivery schedule.</p>
              </div>
            </article>
            <article>
              <span className="service-index">03</span>
              <div>
                <h3>Clear paperwork</h3>
                <p>We keep your buying steps clean, direct and transparent.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="why-section" id="why">
          <div className="section-head centered">
            <span className="small-label dark">Why Hastoh</span>
            <h2>Confidence before delivery.</h2>
          </div>
          <div className="why-grid">
            <article className="why-card">
              <span className="why-index">01</span>
              <h3>Local market fit</h3>
              <p>We steer you toward cars that match Kenya roads and daily use.</p>
            </article>
            <article className="why-card">
              <span className="why-index">02</span>
              <h3>Real inspection</h3>
              <p>We evaluate condition, mileage and delivery expectations.</p>
            </article>
            <article className="why-card">
              <span className="why-index">03</span>
              <h3>Fast support</h3>
              <p>Our team answers quickly and guides you from shortlist to purchase.</p>
            </article>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-card">
            <div>
              <span className="small-label light">Need help choosing?</span>
              <h2>Tell us what you want to drive.</h2>
            </div>
            <div className="cta-actions">
              <a className="primary-cta light" href="#contact">WhatsApp Us</a>
              <a className="ghost-cta light" href="#contact">Request Callback</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-grid">
          <div>
            <a className="logo" href="#home">
              <span className="logo-mark small">HT</span>
              <span className="logo-text">
                <span className="logo-title">Hastoh Motors</span>
                <span className="logo-sub">Kenya Auto Store</span>
              </span>
            </a>
            <p className="footer-copy">Vehicle sourcing, inspection and delivery support across Kenya.</p>
          </div>
          <div>
            <span className="footer-title">Office</span>
            <ul>
              <li>Nairobi</li>
              <li>Mombasa</li>
              <li>Kisumu</li>
            </ul>
          </div>
          <div>
            <span className="footer-title">Contact</span>
            <ul>
              <li>+254 700 000 000</li>
              <li>hello@hastohmotors.co.ke</li>
            </ul>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <ul>
              <li>Inventory</li>
              <li>Financing</li>
              <li>Import sourcing</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
