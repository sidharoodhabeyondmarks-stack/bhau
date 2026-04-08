import React from 'react';

export default function ReviewPage() {
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
        <div className="container" style={{ maxWidth: '600px' }}>
          <h1 style={{ marginBottom: '40px', textAlign: 'center', color: '#006491' }}>Your Feedback Matters</h1>
          
          <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: 'var(--card-shadow)' }}>
            <p style={{ marginBottom: '30px', textAlign: 'center', fontSize: '18px' }}>How was your experience at Bhau's Pizza?</p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Your Name</label>
                <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Your Rating</label>
                <div style={{ fontSize: '32px', color: '#FFD700', cursor: 'pointer', display: 'flex', gap: '5px' }}>
                  <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Review Details</label>
                <textarea placeholder="Tell us what you loved..." style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', minHeight: '150px' }}></textarea>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Would you recommend us?</label>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <label><input type="radio" name="recommend" /> Yes</label>
                  <label><input type="radio" name="recommend" /> No</label>
                </div>
              </div>

              <button className="cta-button" style={{ width: '100%', padding: '18px', fontSize: '18px' }}>Submit Review</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="copyright">
            <p>&copy; 2026 Bhau's Pizza Bidar. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
