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
          :class="[
            { activatedItem: active == 0 },
            'btn sidebarItem pl-2 regularM',
          ]"
          @click="move(0)"
        >
          <img
            :src="homeIcon"
            class="icon align-middle"
            style="padding-left: 1px; padding-right: 5px"
          />
          <span class="align-middle ml-1"> Home </span>
        </button>
        <button
          type="button"
          :class="[
            { activatedItem: active == 2 },
            'btn sidebarItem pl-2 regularM',
          ]"
          @click="move(2)"
        >
          <img
            :src="opportunitiesIcon"
            class="icon align-middle"
            style="padding-left: 1px; padding-right: 3px"
          />
          <span class="align-middle ml-1"> Opportunities </span>
        </button>
        <button
          type="button"
          :class="[
            { activatedItem: active == 1 },
            'btn sidebarItem pl-2 regularM',
          ]"
          @click="move(1)"
        >
          <img :src="dashboardIcon" class="icon align-middle" />
          <span class="align-middle ml-1"> Dashboard </span>
        </button>
        <button
          type="button"
          :class="[
            { activatedItem: active == 3 },
            'btn sidebarItem pl-2 regularM',
          ]"
          @click="move(3)"
        >
          <img :src="calendarIcon" class="icon align-middle" />
          <span class="align-middle ml-1"> Calendar </span>
        </button>
        <button
          type="button"
          :class="[
            { activatedItem: active == 4 },
            'btn sidebarItem pl-2 regularM',
          ]"
          @click="move(4)"
        >
          <img :src="inboxIcon" class="icon align-middle" />
          <span class="align-middle ml-1"> Inbox </span>
        </button>
      </div>
      <div class="btn-group-vertical w-100 mt-2">
        <p class="mb-1 text-lightgray boldS">ACCOUNT</p>
        <button
          type="button"
          :class="[
            { activatedItem: active == 5 },
            'btn sidebarItem pl-2 regularM',
          ]"
          @click="openNav()"
        >
          <img :src="userIcon" class="icon align-middle" />
          <span class="align-middle ml-1"> User </span>
        </button>
        <button
          type="button"
          :class="[
            { activatedItem: active == 6 },
            'btn sidebarItem pl-2 regularM',
          ]"
          @click="move(6)"
        >
          <img
            :src="logoutIcon"
            class="icon align-middle"
            style="padding-left: 1px; padding-right: 3px"
          />
          <span class="align-middle ml-1"> Log Out </span>
        </button>
      </div>
    </div>
  </div>
  <div class="UserSidebar p-3">
    <div ref="mySidebar" class="sidebarOVERLAY" style="width: 0; z-index: 0">
      <div class="sidebarContentOVERLAY" style="z-index: 1">
        <div class="row m-0 p-0" style="z-index: 2">
          <div class="row m-0 p-0 profilePic ml-auto mr-auto" />
          <p class="w-100 text-center m-0 p-0 h4 mb-0 mt-3 text-black">
            Praise Lam
          </p>
          <p class="w-100 text-center m-0 pb-3 regularM pt-1">
            someaddress@gmail.com
          </p>
        </div>
        <p class="m-0 p-0 regularM text-center">Account Settings</p>
        <p
          class="logout m-0 p-0 ml-auto mr-auto boldM text-center pt-2"
          @click="$router.push('/')"
          ref="sidebar"
        >
          Log Out
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import ClickOutside from "vue-click-outside";
// import VueClickAway from "vue3-click-away";
import logo from "../assets/For Gene/Logo/ENABLE UPDATED-41.svg";
import calendarIcon from "../assets/For Gene/Sidebar/calendar-dates.svg";
import logoutIcon from "../assets/For Gene/Sidebar/Group 1.svg";
import inboxIcon from "../assets/For Gene/Sidebar/Icon-1.svg";
import dashboardIcon from "../assets/For Gene/Sidebar/Icon-2.svg";
import opportunitiesIcon from "../assets/For Gene/Sidebar/Icon.svg";
import homeIcon from "../assets/For Gene/Sidebar/Mask.svg";
import userIcon from "../assets/For Gene/Sidebar/User.svg";
import { mapActions } from "vuex";

export default {
  name: "Sidebar",
  // components: {
  //     logo
  // },
  setup() {
    return {
      logo,
      calendarIcon,
      dashboardIcon,
      opportunitiesIcon,
      inboxIcon,
      logoutIcon,
      homeIcon,
      userIcon,
    };
  },

  mounted() {
    var container = this.$refs.sidebar;
    document.addEventListener("mousedown", (event) => {
      if (
        container !== event.target &&
        !container.contains(event.target) &&
        this.$refs.mySidebar
      ) {
        this.$refs.mySidebar.style.width = "0px";
      }
    });
  },
  props: {
    active: Number,
  },
  data() {
    return {
      pages: [
        "/home",
        "/dashboard",
        "/opportunities",
        "/calendar",
        "/inbox",
        "/user",
        "/",
      ],
    };
  },
  created() {},
  watch: {},
  methods: {
    ...mapActions(["sidebarActive1"]),
    move(index) {
      // this.active = index;
      this.sidebarActive1(index);
      this.$router.push({ path: this.pages[index] });
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    openNav() {
      let $ref = this.$refs.mySidebar;
      $ref.style.width = "232.716px";
      // document.getElementById("main").style.marginLeft = "250px";
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
  background: #235859;
  color: white;
}
.activatedItem {
  background: rgba(23, 37, 42, 0.4);
}

.sidebarOVERLAY {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0;
  left: 0;
  background-color: white; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
}
.sidebarContentOVERLAY {
  transition: 0.3s;
}
.profilePic {
  width: 116.08px;
  height: 116.08px;
  border-radius: 100px;
  background: #c4c4c4;
}
.logout:hover {
  cursor: pointer;
}
</style>
