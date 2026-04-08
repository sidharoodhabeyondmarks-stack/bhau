import React from 'react';

export default function OrderPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <header>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className="logo-container">
            <div className="logo-icon">B</div>
            <div className="logo-text">Bhau's<span>Pizza</span></div>
          </div>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/#menu">Menu</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ marginBottom: '40px', textAlign: 'center', color: '#006491' }}>Complete Your Order</h1>
          
          <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: 'var(--card-shadow)' }}>
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ marginBottom: '20px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>1. Delivery Address</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>First Name</label>
                  <input type="text" placeholder="Bhau" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Last Name</label>
                  <input type="text" placeholder="Bidar" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Street Address</label>
                  <input type="text" placeholder="House #, Street name" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>City</label>
                  <input type="text" value="Bidar" disabled style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', background: '#f5f5f5' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Phone Number</label>
                  <input type="tel" placeholder="+91 XXXX XXXXXX" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ marginBottom: '20px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>2. Payment Method</h3>
              <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', marginBottom: '15px', color: '#006491', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <input type="radio" name="payment" defaultChecked /> <span>Cash on Delivery (COD)</span>
              </div>
              <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', color: '#666', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '15px', background: '#f9f9f9', cursor: 'not-allowed' }}>
                <input type="radio" name="payment" disabled /> <span>Online Payment (Coming Soon)</span>
              </div>
            </div>

            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
              <h3 style={{ marginBottom: '15px' }}>Order Summary</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Classic Pepperoni (Large)</span>
                <span>₹499</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Delivery Charge</span>
                <span>₹0 (FREE)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <span>Taxes & Fees</span>
                <span>₹25</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px solid #ddd', paddingTop: '15px', fontWeight: '800', fontSize: '20px' }}>
                <span>Total</span>
                <span>₹524</span>
              </div>
            </div>

            <button className="cta-button" style={{ width: '100%', padding: '18px', fontSize: '18px', marginBottom: '20px' }}>Place Order Now</button>
            
            <a href="/" style={{ 
              display: 'block', 
              textAlign: 'center', 
              color: '#006491', 
              fontWeight: '700', 
              textDecoration: 'underline',
              marginTop: '10px'
            }}>← Back to Home</a>
          </div>
        </div>
      </section>

      <footer style={{ background: '#0b0d10', color: 'white', padding: '60px 0 20px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="footer-logo" style={{ marginBottom: '30px' }}>Bhau's<span>Pizza</span></div>
          <a href="/" className="cta-button" style={{ display: 'inline-block', marginBottom: '40px' }}>Back to Home Page</a>
          <div className="copyright" style={{ borderTop: '1px solid #333', paddingTop: '20px' }}>
            <p>&copy; 2026 Bhau's Pizza Bidar. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
