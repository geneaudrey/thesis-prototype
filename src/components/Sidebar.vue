<template>
  <div class="Sidebar p-3">
      <div class="sidebar" />
        <div class="btn-group-vertical w-100">
          <div class="w-50">
            <img :src="logo" class="icon" />
          </div>
          <p class="mb-1 text-lightgray pl-2"> MAIN </p>
          <button type="button" :class="[{'activatedItem' : active==0},'btn sidebarItem pl-2']" @click="active=0">Home</button>
          <button type="button" :class="[{'activatedItem' : active==1},'btn sidebarItem pl-2']" @click="active=1">Dashboard</button>
          <button type="button" :class="[{'activatedItem' : active==2},'btn sidebarItem pl-2']" @click="active=2">Courses</button>
          <button type="button" :class="[{'activatedItem' : active==3},'btn sidebarItem pl-2']" @click="active=3">Calendar</button>
          <button type="button" :class="[{'activatedItem' : active==4},'btn sidebarItem pl-2']" @click="active=4">Inbox</button>
        </div>
        <div class="btn-group-vertical w-100">
          <p class="mb-1 text-lightgray"> ACCOUNT </p>
          <button type="button" :class="[{'activatedItem' : active==5},'btn sidebarItem pl-2']" @click="active=5">User</button>
          <button type="button" :class="[{'activatedItem' : active==6},'btn sidebarItem pl-2']" @click="active=6">Log Out</button>
        </div>
  </div>
</template>

<script>
import logo from "../assets/icons/sample.svg"
export default {
  name: "Sidebar",
  // components: {
  //     logo
  // },
  setup() {
    return {
      logo
    }
  },
  data() {
      return {
        active: 0
      }
    },
    created() {
      // this.activated = this.myCourses;  
    },
    watch: {
    }
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
.sidebarItem {
  text-align: left;
  color: white;
  border-radius: 3px !important;
}
.sidebarItem:hover {
  background: rgba(23, 37, 42, 0.4);
  color: white;
}
.activatedItem {
  background: rgba(23, 37, 42, 0.4);
}
</style>
