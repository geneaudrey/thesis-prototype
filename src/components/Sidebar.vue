<template>
  <div class="Sidebar p-3">
    <div class="sidebar" />
    <div class="sidebarContent">
      <div class="btn-group-vertical w-100">
        <div class="w-50">
          <img :src="logo" class="icon" />
        </div>
        <p class="mb-1 text-lightgray pl-2 boldS">MAIN</p>
        <button
          type="button"
          :class="[{ activatedItem: active == 0 }, 'btn sidebarItem pl-2 regularM']"
          @click="move(0)"
        >
          Home
        </button>
        <button
          type="button"
          :class="[{ activatedItem: active == 2 }, 'btn sidebarItem pl-2 regularM']"
          @click="move(2)"
        >
          Opportunities
        </button>
        <button
          type="button"
          :class="[{ activatedItem: active == 1 }, 'btn sidebarItem pl-2 regularM']"
          @click="move(1)"
        >
          Dashboard
        </button>
        <button
          type="button"
          :class="[{ activatedItem: active == 3 }, 'btn sidebarItem pl-2 regularM']"
          @click="move(3)"
        >
          Calendar
        </button>
        <button
          type="button"
          :class="[{ activatedItem: active == 4 }, 'btn sidebarItem pl-2 regularM']"
          @click="move(4)"
        >
          Inbox
        </button>
      </div>
      <div class="btn-group-vertical w-100">
        <p class="mb-1 text-lightgray boldS">ACCOUNT</p>
        <button
          type="button"
          :class="[{ activatedItem: active == 5 }, 'btn sidebarItem pl-2 regularM']"
          @click="move(5)"
        >
          User
        </button>
        <button
          type="button"
          :class="[{ activatedItem: active == 6 }, 'btn sidebarItem pl-2 regularM']"
          @click="move(6)"
        >
          Log Out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../assets/For Gene/Logo/ENABLE UPDATED-41.svg";

import { mapActions } from "vuex";
export default {
  name: "Sidebar",
  // components: {
  //     logo
  // },
  setup() {
    return {
      logo,
    };
  },
  props: {
    active: Number,
  },
  data() {
    return {
      pages: ["/home", "/dashboard", "/opportunities", "/calendar", "/inbox"],
    };
  },
  created() {
    // this.active = 0;
    // this.active = this.$router
    // this.active = this.$store.state.sidebarActive1;
    // this.activated = this.myCourses;
  },
  watch: {},
  methods: {
    ...mapActions(["sidebarActive1"]),
    move(index) {
      console.log(index);
      // this.active = index;
      this.sidebarActive1(index);
      this.$router.push({ path: this.pages[index] });
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
};
</script>

<style scoped>
.sidebar {
  position: absolute;
  /* width: 240px; */
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  min-height: 100vh;
  background: #2b7a78;
  /* Shadow / Small */

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
}
.sidebarContent {
  position: fixed;
  top: 0;
  width: 14%;
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
