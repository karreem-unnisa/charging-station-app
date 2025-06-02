<template>
  <main class="homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>⚡ Power Your Journey with ChargeUp</h1>
        <p>Your one-stop platform to find, manage, and optimize EV charging stations nearby.</p>
        <router-link to="/register" class="btn-primary">Get Started</router-link>
      </div>
      <div class="hero-image">
        <!-- You can replace this with your own SVG or image -->
        <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Electric Vehicle" />
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Why Choose ChargeUp?</h2>
      <div class="feature-cards">
        <div class="feature-card">
          <div class="icon">🔍</div>
          <h3>Find Stations</h3>
          <p>Quickly locate nearby charging stations with real-time availability info.</p>
        </div>
        <div class="feature-card">
          <div class="icon">⚙️</div>
          <h3>Manage Easily</h3>
          <p>Add, edit, and monitor your charging stations with a simple dashboard.</p>
        </div>
        <div class="feature-card">
          <div class="icon">📈</div>
          <h3>Optimize Usage</h3>
          <p>Analyze station usage and pricing to maximize efficiency and earnings.</p>
        </div>
      </div>
    </section>

    <!-- Get Started Section -->
    <section class="get-started">
      <h2>Ready to electrify your experience?</h2>
      <p>Create an account or log in to manage your charging stations today.</p>
      <div class="btn-group">
        <router-link to="/login" class="btn-secondary">Login</router-link>
        <router-link to="/register" class="btn-primary">Register</router-link>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>© 2025 ChargeUp. All rights reserved.</p>
    </footer>
  </main>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
/* Reset basics */
* {
  box-sizing: border-box;
}

/* Layout & colors */
.homepage {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
  background-color: #f5f7fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Hero */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 6rem;
  background: linear-gradient(135deg, #004080 0%, #0073e6 100%);
  color: white;
  border-radius: 0 0 50px 50px;
  flex-wrap: wrap;
  gap: 2rem;
}

.hero-content {
  max-width: 600px;
}

.hero h1 {
  font-size: 3.2rem;
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  font-weight: 500;
  opacity: 0.9;
}

.hero-image img {
  max-width: 350px;
  width: 100%;
  height: auto;
  filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.3));
}

/* Buttons */
.btn-primary,
.btn-secondary {
  text-decoration: none;
  padding: 12px 28px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  user-select: none;
}

.btn-primary {
  background-color: #00aaff;
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #008fcc;
}

.btn-secondary {
  background-color: #e0e0e0;
  color: #333;
  border: none;
  margin-right: 1rem;
}

.btn-secondary:hover {
  background-color: #cacaca;
}

/* Features */
.features {
  padding: 4rem 6rem;
  text-align: center;
  background: white;
  border-radius: 30px;
  margin: 3rem auto;
  max-width: 1200px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.1);
}

.features h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #004080;
  font-weight: 800;
}

.feature-cards {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.feature-card {
  background: #f0f8ff;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  width: 280px;
  box-shadow: 0 8px 20px rgba(0, 115, 230, 0.1);
  transition: transform 0.3s ease;
  cursor: default;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 14px 32px rgba(0, 115, 230, 0.2);
}

.feature-card .icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-weight: 700;
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  color: #003366;
}

.feature-card p {
  font-weight: 500;
  font-size: 1rem;
  color: #555;
}

/* Get Started */
.get-started {
  background: #0073e6;
  color: white;
  text-align: center;
  padding: 4rem 2rem;
  border-radius: 0 0 50px 50px;
  margin-top: auto;
}

.get-started h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 800;
}

.get-started p {
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.btn-group {
  display: inline-flex;
  justify-content: center;
  gap: 1rem;
}

/* Footer */
.footer {
  padding: 1rem 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
  background-color: #e0e0e0;
  margin-top: 3rem;
  user-select: none;
  border-radius: 0 0 15px 15px;
}

/* Responsive */
@media (max-width: 900px) {
  .hero {
    padding: 2rem 3rem;
    flex-direction: column-reverse;
    text-align: center;
    border-radius: 0 0 40px 40px;
  }

  .hero-content h1 {
    font-size: 2.4rem;
  }

  .hero-image img {
    max-width: 260px;
  }

  .features {
    padding: 2rem 3rem;
    margin: 2rem 1rem;
  }

  .feature-cards {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 1.8rem;
  }

  .btn-primary,
  .btn-secondary {
    padding: 10px 22px;
    font-size: 1rem;
  }

  .get-started {
    padding: 3rem 1rem;
  }
}
</style>
