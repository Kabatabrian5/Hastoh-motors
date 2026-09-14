import './App.css'

const inventory = [
  {
    make: 'Toyota',
    name: 'Toyota Prado TX',
    year: '2021',
    price: 'KES 7.8M',
    status: 'New arrival',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=88',
    details: 'SUV · 4x4 · Auto',
  },
  {
    make: 'Nissan',
    name: 'Nissan X-Trail',
    year: '2020',
    price: 'KES 4.9M',
    status: 'Verified',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=88',
    details: 'SUV · Hybrid · Auto',
  },
  {
    make: 'Mercedes-Benz',
    name: 'Mercedes C200',
    year: '2019',
    price: 'KES 3.6M',
    status: 'Executive',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=88',
    details: 'Sedan · Auto · Premium',
  },
  {
    make: 'Honda',
    name: 'Honda Fit RS',
    year: '2018',
    price: 'KES 2.1M',
    status: 'Budget pick',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=88',
    details: 'Hatchback · Auto · City',
  },
]

const features = [
  { title: 'Quality Checked', text: 'Every vehicle receives a practical inspection before it reaches our showroom floor.' },
  { title: 'Kenya Trade Ready', text: 'Flexible sourcing, import guidance, and vehicle matching for everyday Kenyan roads.' },
  { title: 'Hassle-Free Buying', text: 'From shortlist to paperwork, our team helps you move quickly and clearly.' },
]

function App() {
  return (
    <div className="motors-page">
      <header className="site-header">
        <div className="topbar">
          <a className="brand" href="#home">
            <span className="brand-mark">HT</span>
            <span>
              <span className="brand-name">Hastoh Motors</span>
              <span className="brand-tag">Kenya Auto Store</span>
            </span>
          </a>

          <nav className="main-nav">
            <a href="#inventory">Inventory</a>
            <a href="#process">Buying Process</a>
            <a href="#services">Services</a>
            <a href="#why-us">Why Hastoh</a>
            <a className="nav-call" href="#contact">Book a Viewing</a>
          </nav>

          <a className="mobile-menu" href="#contact">
            <span />
            <span />
            <span />
          </a>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <span className="intro-label">Hastoh Motors</span>
            <h1>Drive beyond the ordinary.</h1>
            <p className="hero-text">
              Smart vehicles, straight pricing, and a buying experience built for modern Kenyan drivers.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#inventory">Explore inventory</a>
              <a className="secondary-button" href="#services">Our services</a>
            </div>

            <div className="hero-proof">
              <div>
                <span className="proof-number">350+</span>
                <span className="proof-label">Verified vehicles</span>
              </div>
              <div>
                <span className="proof-number">24/7</span>
                <span className="proof-label">WhatsApp support</span>
              </div>
              <div>
                <span className="proof-number">01</span>
                <span className="proof-label">Duty-free sourcing</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-image-wrap">
              <div className="hero-image" />
              <div className="floating-card top-card">
                <span className="floating-label">Today’s focus</span>
                <span className="floating-title">Urban SUV deals</span>
              </div>
              <div className="floating-card bottom-card">
                <span className="floating-price">KES 2.7M+</span>
                <span className="floating-title">From curated stock</span>
              </div>
            </div>
          </div>
        </section>

        <section className="service-strip">
          <div>
            <span className="service-icon">01</span>
            <span>Import sourcing</span>
          </div>
          <div>
            <span className="service-icon">02</span>
            <span>Vehicle checks</span>
          </div>
          <div>
            <span className="service-icon">03</span>
            <span>Financing support</span>
          </div>
          <div>
            <span className="service-icon">04</span>
            <span>Delivery</span>
          </div>
        </section>

        <section className="inventory-section" id="inventory">
          <div className="section-heading centered">
            <span className="section-kicker">Featured stock</span>
            <h2>Latest arrivals</h2>
            <p>Handpicked vehicles ready for Kenyan roads and everyday ambition.</p>
          </div>

          <div className="inventory-grid">
            {inventory.map((car) => (
              <article className="car-card" key={car.name}>
                <div className="car-image">
                  <img src={car.image} alt={car.name} />
                  <span className="car-status">{car.status}</span>
                </div>
                <div className="car-info">
                  <div className="car-title-row">
                    <span className="car-brand">{car.make}</span>
                    <span className="car-price">{car.price}</span>
                  </div>
                  <h3>{car.name}</h3>
                  <p className="car-details">{car.details}</p>
                  <div className="car-meta">
                    <span>{car.year}</span>
                    <span className="dot" />
                    <span>Kenya ready</span>
                  </div>
                  <a className="car-button" href="#contact">Inspect vehicle</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="section-heading">
            <span className="section-kicker">How it works</span>
            <h2>From shortlist to road.</h2>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <span className="process-step">01</span>
              <h3>Choose your drive</h3>
              <p>Tell us your budget, usage, family needs, and preferred fuel or body type.</p>
            </div>
            <div className="process-card">
              <span className="process-step">02</span>
              <h3>Inspect and verify</h3>
              <p>We shortlist clear options and coordinate inspection, mileage, and paperwork checks.</p>
            </div>
            <div className="process-card">
              <span className="process-step">03</span>
              <h3>Drive away</h3>
              <p>Our team handles delivery, paperwork, and final handover for a smooth handoff.</p>
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="services-image">
            <div className="services-image-card">
              <span className="section-kicker light">Hastoh Care</span>
              <h2>Vehicle buying that feels simple.</h2>
              <p>
                We handle the import planning and local market matching so your next car is easier to choose, inspect, and own.
              </p>
              <ul className="service-list">
                <li>Inspection and valuation support</li>
                <li>Financing and payment guidance</li>
                <li>Delivery scheduling and handover</li>
              </ul>
            </div>
          </div>
          <div className="service-content">
            {features.map((feature, idx) => (
              <div className="feature-row" key={feature.title}>
                <span className="feature-number">0{idx + 1}</span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="why-section" id="why-us">
          <div className="section-heading centered">
            <span className="section-kicker">Why Hastoh</span>
            <h2>Built around confidence.</h2>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <span className="why-icon">01</span>
              <h3>Clear sourcing</h3>
              <p>We do not hide the process. We explain the vehicle, the price band, and the buyer journey.</p>
            </div>
            <div className="why-card">
              <span className="why-icon">02</span>
              <h3>Real market data</h3>
              <p>Our stock is selected around pricing, mileage, condition, and buyer confidence.</p>
            </div>
            <div className="why-card">
              <span className="why-icon">03</span>
              <h3>Reliable handover</h3>
              <p>From the first call to final documentation, we make the pathway practical and calm.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-panel">
            <div>
              <span className="section-kicker light">Need help choosing?</span>
              <h2>Tell us what you want to drive.</h2>
              <p>We’ll guide you toward the right body type, price range, and availability.</p>
            </div>
            <div className="cta-actions">
              <a className="primary-button light-button" href="https://wa.me/254700000000" target="_blank">WhatsApp us</a>
              <a className="secondary-button dark-button" href="#contact">Request a callback</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-grid">
          <div>
            <a className="brand footer-brand" href="#home">
              <span className="brand-mark">HT</span>
              <span>
                <span className="brand-name">Hastoh Motors</span>
                <span className="brand-tag">Kenya Auto Store</span>
              </span>
            </a>
            <p className="footer-copy">Premium vehicle sales, sourcing, and buying support across Kenya.</p>
          </div>
          <div>
            <span className="footer-title">Inspection</span>
            <ul>
              <li>Nairobi</li>
              <li>Mombasa</li>
              <li>Kisumu</li>
            </ul>
          </div>
          <div>
            <span className="footer-title">Speak with us</span>
            <ul>
              <li>+254 700 000 000</li>
              <li>hello@hastohmotors.co.ke</li>
              <li>Mon - Sat / 8AM - 6PM</li>
            </ul>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <ul>
              <li>Inventory</li>
              <li>Financing</li>
              <li>Export & sourcing</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Hastoh Motors. All rights reserved.</span>
          <span>Terms · Privacy</span>
        </div>
      </footer>
    </div>
  )
}

export default App
