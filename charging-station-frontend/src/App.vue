<template>
  <div id="app">
    <Navbar :isLoggedIn="isLoggedIn" @logout="handleLogout" />
    <router-view @login-success="handleLoginSuccess" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar },
  data() {
    return { isLoggedIn: false };
  },
  methods: {
    handleLoginSuccess() {
      this.isLoggedIn = true;
    },
    handleLogout() {
      this.isLoggedIn = false;
      this.$router.push('/');
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9f9;
}
</style>
