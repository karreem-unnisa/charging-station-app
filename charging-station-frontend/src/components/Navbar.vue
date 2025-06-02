<template>
  <nav class="navbar">
    <div class="nav-left">
      <div class="site-name">⚡ ChargeUp</div>
      <router-link to="/" class="nav-link">Home</router-link>
      <template v-if="isLoggedIn">
        <router-link to="/dashboard" class="nav-link">Stations</router-link>
        
      </template>
    </div>
    <div class="nav-right">
      <template v-if="!isLoggedIn">
        <router-link to="/login" class="nav-link">Login</router-link>
        <router-link to="/register" class="nav-link register-link">Register</router-link>
      </template>
      <template v-else>
        <button @click="logout" class="nav-link logout-btn">Logout</button>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isLoggedIn: !!localStorage.getItem('token'), // simple check
    }
  },
  watch: {
    // Reactively watch for token changes
    '$route'(to, from) {
      this.isLoggedIn = !!localStorage.getItem('token');
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.isLoggedIn = false;
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background: #004080;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  user-select: none;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.site-name {
  font-weight: 700;
  font-size: 1.6rem;
  letter-spacing: 0.08rem;
  cursor: default;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 6px 12px;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.nav-link:hover {
  background-color: #0066cc;
  color: #e0e7ff;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.register-link {
  background-color: #008000;
  padding: 6px 14px;
}

.register-link:hover {
  background-color: #005900;
  color: #d4f4dd;
}

.logout-btn {
  background: none;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.logout-btn:hover {
  background-color: #cc0000;
  color: #ffe5e5;
}
</style>
