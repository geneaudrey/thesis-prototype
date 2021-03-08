<template>
  <div class="Sidebar">
      <div class="sidebar" />
  </div>
</template>

<script>
export default {
  name: "Sidebar",
//   props: {
//     msg: String
//   }
};
</script>

<style scoped>
.sidebar {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    min-height: 100vh;
    background: #2B7A78;
    /* Shadow / Small */

    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
