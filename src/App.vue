<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- <Dashboard /> -->
  <router-view  ref="loadingContainer"/>
</template>

<script>
// import Dashboard from "./components/Dashboard.vue";
// import Courses from "./components/Courses.vue";
export default {
  name: "App",
  components: {
    // Dashboard
  },

  mounted() {
    let loader = this.$loading.show({
      // Optional parameters
      container: this.fullPage ? null : this.$refs.formContainer,
      canCancel: true,
      onCancel: this.onCancel,
      color: '#3AAFA9'
    });
    window.addEventListener('load', () => {
         // run after everything is in-place
         loader.hide();
    })
  },
  watch:{
      // $route (){
      //   let loader = this.$loading.show({
      //     // Optional parameters
      //     container: this.fullPage ? null : this.$refs.formContainer,
      //     canCancel: true,
      //     onCancel: this.onCancel,
      //     color: '#3AAFA9'
      //   });
      //   this.$nextTick(this.hideLoader(loader));
      //     // this.show = false;
      // }
  },
  methods: {
    hideLoader(loader) {
      loader.hide();
    }
  }

};

</script>

<style>
#app {
  /* font-family: 'Brandon Grotesque Medium'; */
  -webkit-font-smoothing: antialiased;
  background: #f2f2f2;
  min-height: 100vh;
  /* -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
