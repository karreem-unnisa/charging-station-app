<template>
  <div class="register-container">
    <div class="register-card">
      <h2>Register for ⚡ ChargeUp</h2>
      <form @submit.prevent="register">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?
        <router-link to="/login" class="login-link">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import api from '../services/api'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      if (!this.email || !this.password) {
        alert('Please fill out all fields');
        return;
      }
      try {
        const res = await api.post('/api/auth/register', {
          email: this.email,
          password: this.password
        });
        alert('Registration successful! Please login.');
        this.$router.push('/login');
      } catch (err) {
        alert('Registration failed: ' + (err.response?.data?.message || err.message));
      }
    }
  }
}
</script>

<style scoped>
.register-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #eef2f3, #8e9eab);
}

.register-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.register-card h2 {
  margin-bottom: 1.5rem;
}

.register-card form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.register-card button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.register-card button:hover {
  background-color: #0056b3;
}

.register-card p {
  margin-top: 1rem;
  font-size: 0.9rem;
}

.login-link {
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
}

.login-link:hover {
  text-decoration: underline;
}
</style>
