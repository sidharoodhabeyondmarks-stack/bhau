import Image from "next/image";
import Head from 'next/head';

export default function Home() {
  const menuItems = [
    { id: 1, name: "Classic Pepperoni", price: "₹499", image: "/pizza-hero.png", description: "Melted mozzarella with smoky pepperoni on a crispy thin crust." },
    { id: 2, name: "Garden Fresh Veggie", price: "₹399", image: "/pizza-veggie.png", description: "Bell peppers, mushrooms, olives and onions with fresh mozzarella." },
    { id: 3, name: "Bidar Special Chicken", price: "₹599", image: "/pizza-hero.png", description: "Spicy Bidar style chicken tikka with onions and green chilies." },
    { id: 4, name: "Margherita Supreme", price: "₹349", image: "/pizza-veggie.png", description: "Classic tomato basil pizza with extra buffalo mozzarella." },
    { id: 5, name: "Paneer Peppery", price: "₹449", image: "/pizza-hero.png", description: "Marinated paneer chunks with capsicum and red paprika." },
    { id: 6, name: "Double Cheese Burst", price: "₹549", image: "/pizza-veggie.png", description: "Loaded with triple blend of mozzarella, cheddar and gouda." },
  ];

  return (
    <main>
      <header>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className="logo-container">
            <div className="logo-icon">B</div>
            <div className="logo-text">Bhau's<span>Pizza</span></div>
          </div>
          <nav>
            <ul>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#location">Location</a></li>
              <li><a href="/reviews">Reviews</a></li>
            </ul>
          </nav>
          <a href="/order" className="cta-button">Order Online</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
          <div className="hero-content">
            <h1>Hot & Fresh <span>Pizza</span> Delivered to Your Door!</h1>
            <p>From the heart of Bidar to your plate. Experience the authentic taste of wood-fired oven pizzas crafted with passion by Bhau.</p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="#menu" className="cta-button">View Menu</a>
              <a href="/order" className="cta-button" style={{ backgroundColor: 'transparent', border: '2px solid white' }}>Track Order</a>
            </div>
          </div>
          <img src="/pizza-hero.png" alt="Delicious Pizza" className="hero-image" />
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <span style={{ fontSize: '48px', display: 'block', marginBottom: '15px' }}>🚀</span>
              <h3>Fastest Delivery</h3>
              <p>Hot pizza at your doorstep within 30 minutes, or it's free.</p>
            </div>
            <div className="feature-item">
              <span style={{ fontSize: '48px', display: 'block', marginBottom: '15px' }}>🍕</span>
              <h3>Fresh Ingredients</h3>
              <p>We use only the finest, locally sourced organic ingredients from Bidar farms.</p>
            </div>
            <div className="feature-item">
              <span style={{ fontSize: '48px', display: 'block', marginBottom: '15px' }}>💎</span>
              <h3>Premium Quality</h3>
              <p>Traditional Italian techniques meet Bidar's vibrant spice profile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Signature Pizzas</h2>
            <p className="subtitle">Hand-tossed and baked to perfection</p>
          </div>
          <div className="menu-grid">
            {menuItems.map(item => (
              <div key={item.id} className="menu-card">
                <Image src={item.image} alt={item.name} width={400} height={250} className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{item.name}</h3>
                  <p style={{ fontSize: '14px', marginBottom: '15px', minHeight: '40px' }}>{item.description}</p>
                  <div className="card-price">{item.price}</div>
                  <a href="/order" className="add-to-cart" style={{ display: 'block', textAlign: 'center' }}>Add to Cart</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section" style={{ padding: '100px 0', backgroundColor: '#006491', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '60px', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '48px', marginBottom: '30px' }}>Meet Bhau from Bidar</h2>
              <p style={{ color: '#fff', fontSize: '18px', marginBottom: '20px' }}>With over 15 years of experience in the culinary arts, Bhau brought the authentic taste of pizza to Bidar. Our journey began with a small stone oven and a passion for creating the perfect crust.</p>
              <p style={{ color: '#fff', fontSize: '18px' }}>Today, we are proud to be the locals' favorite pizza spot, known for our unique fusion of traditional Italian recipes and bold Indian flavors.</p>
            </div>
            <div style={{ flex: 1 }}>
              <img src="/pizza-veggie.png" alt="Bhau's Kitchen" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section" style={{ padding: '100px 0', background: '#f8f9fa' }}>
        <div className="container">
          <div className="section-header">
            <h2>Customer Reviews</h2>
            <p className="subtitle">What our happy foodies say about us</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            <div style={{ padding: '30px', background: 'white', borderRadius: '16px', border: '1px solid #eee' }}>
              <div style={{ color: '#FFD700', marginBottom: '10px' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>"The Chicken Special is definitely the best in the city. The crust is just perfect!"</p>
              <div style={{ fontWeight: 'bold' }}>- Rahul Sharma</div>
            </div>
            <div style={{ padding: '30px', background: 'white', borderRadius: '16px', border: '1px solid #eee' }}>
              <div style={{ color: '#FFD700', marginBottom: '10px' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>"Fast delivery and piping hot! Bhau's Pizza never disappoints."</p>
              <div style={{ fontWeight: 'bold' }}>- Anita P.</div>
            </div>
            <div style={{ padding: '30px', background: 'white', borderRadius: '16px', border: '1px solid #eee' }}>
              <div style={{ color: '#FFD700', marginBottom: '10px' }}>★★★★☆</div>
              <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>"Grest taste. I love the veggie supreme. Very consistent quality."</p>
              <div style={{ fontWeight: 'bold' }}>- Mohammad Aziz</div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="location" style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '60px' }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ marginBottom: '30px' }}>Visit Our Shop</h2>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#006491' }}>Address</h4>
                <p>Main Market Road, Opp. Bidar Fort Entrance,<br />Bidar, Karnataka 585401</p>
              </div>
              <div id="contact" style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#006491' }}>Contact Us</h4>
                <p>Phone: +91 98XXX XXXXX<br />Email: hello@bhauspizza.com</p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#006491' }}>Opening Hours</h4>
                <p>Mon - Sun: 11:00 AM - 11:00 PM</p>
              </div>
            </div>
            <div style={{ flex: 1, height: '400px', backgroundColor: '#eee', borderRadius: '16px', overflow: 'hidden', position: 'relative' }}>
               <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ddd' }}>
                 {/* Placeholder for Map */}
                 <p style={{ fontWeight: 'bold', color: '#666' }}>Google Maps Interactive View</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">Bhau's<span>Pizza</span></div>
              <p style={{ color: '#ccc', marginBottom: '20px' }}>Serving the best pizzas in Bidar with love and fresh ingredients since 2010.</p>
              <div style={{ display: 'flex', gap: '15px' }}>
                <span style={{ fontSize: '24px' }}>📱</span>
                <span style={{ fontSize: '24px' }}>📘</span>
                <span style={{ fontSize: '24px' }}>📸</span>
                <span style={{ fontSize: '24px' }}>🐦</span>
              </div>
            </div>
            <div className="footer-links">
              <h4>Explore</h4>
              <ul>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About Bhau</a></li>
                <li><a href="/reviews">Reviews</a></li>
                <li><a href="/order">Order Now</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help & FAQs</a></li>
                <li><a href="#">Contact Support</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Download App</h4>
              <div style={{ background: '#333', padding: '10px', borderRadius: '8px', marginBottom: '10px', textAlign: 'center', fontSize: '12px' }}>App Store</div>
              <div style={{ background: '#333', padding: '10px', borderRadius: '8px', textAlign: 'center', fontSize: '12px' }}>Google Play</div>
            </div>
          </div>
          <div className="copyright">
            <a href="#" className="cta-button" style={{ display: 'inline-block', marginBottom: '40px', backgroundColor: 'transparent', border: '2px solid white' }}>Back to Top ↑</a>
            <p>&copy; 2026 Bhau's Pizza Bidar. All Rights Reserved. Designed with ❤️ for Bhau.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
