<template>
  <div class="SubSidebar p-3">
    <div class="sidebar" />
    <div class="sidebarContent">
      <div class="btn-group-vertical w-100">
        <button
          type="button"
          :class="[{ activatedItem: active == 0 }, 'btn sidebarItem pl-2 regularM']"
          style="padding-top:5%; padding-bottom:5%"
          @click="move(0)"
        >
          Announcements
        </button>
        <button
          type="button"
          :class="[{ activatedItem: active == 1 }, 'btn sidebarItem pl-2 regularM']"
          style="padding-top:5%; padding-bottom:5%"
          @click="move(1)"
        >
          {{ tab == "myCourses" ? 'Modules' : 'Milestones'}}
        </button>
        <!-- <button type="button" :class="[{'activatedItem' : active==2},'btn sidebarItem pl-2']" @click="move(2)">Files</button> -->
        <button
          type="button"
          :class="[{ activatedItem: active == 3 }, 'btn sidebarItem pl-2 regularM']"
          style="padding-top:5%; padding-bottom:5%"
          @click="move(3)"
        >
          {{ tab == "myCourses" ? 'Assignments' : 'Discussions'}}
        </button>
        <!-- <button type="button" :class="[{'activatedItem' : active==4},'btn sidebarItem pl-2']" @click="move(4)">Discussions</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubSidebar",
  // components: {
  //     logo
  // },
  props: {
    id: String,
    active: Number,
    tab: String
  },
  data() {
    return {
      pages: [
        "/announcements",
        "/modules",
        "/files",
        "/assignments",
        "/discussions",
      ],
      pages2: [
        "/announcements",
        "/milestones",
        "/files",
        "/discussions",
        "/discussions",
      ],
      // pages: ['/announcements', '/modules', '/assignments']
    };
  },
  created() {
    // this.activated = this.myCourses;
  },
  methods: {
    move(index) {
      var pages = this.tab == 'myCourses' ? this.pages : this.pages2
      this.$router.push("/"+this.tab+"/" + this.id + pages[index]);
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
  watch: {},
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
  background: white;
  /* Shadow / Small */
  max-width: 240px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
}
.sidebarContent {
  position: fixed;
  /* top: 0; */
  width: 14%;
}
.sidebarItem {
  text-align: left;
  color: black;
  border-radius: 3px !important;
}
.sidebarItem:hover {
  background: rgba(222, 242, 241, 1);
  color: black;
}
.activatedItem {
  background: rgba(222, 242, 241, 1);
}
</style>
