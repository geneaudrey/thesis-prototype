<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <Dashboard />
</template>

<script>
import Dashboard from "./components/Dashboard.vue";

export default {
  name: "App",
  components: {
    Dashboard
  }
};
</script>

<style>
#app {
  font-family: 'Brandon Grotesque Medium';
  -webkit-font-smoothing: antialiased;
  background: #F2F2F2;
  min-height: 100vh;
  /* -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

@font-face {
  font-family: 'Brandon Grotesque Bold';
  src: url('./assets/fonts/BrandonGrotesque-Bold.eot');
  src: url('./assets/fonts/BrandonGrotesque-Bold.eot?#iefix') format('embedded-opentype'),
  url('./assets/fonts/BrandonGrotesque-Bold.woff') format('woff'),
  url('./assets/fonts/BrandonGrotesque-Bold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  }

@font-face {
  font-family: 'Brandon Grotesque Medium';
  src: url('./assets/fonts/BrandonGrotesque-Medium.eot');
  src: url('./assets/fonts/BrandonGrotesque-Medium.eot?#iefix') format('embedded-opentype'),
  url('./assets/fonts/BrandonGrotesque-Medium.woff') format('woff'),
  url('./assets/fonts/BrandonGrotesque-Medium.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  }
</style>
