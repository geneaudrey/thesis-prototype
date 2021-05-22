<template>
  <div class="ChatSidebar p-3">
    <div class="sidebar" />
    <div class="sidebarContent">
      <div class="btn-group-vertical w-100">
        <button
          v-for="(chat, index) in chatList"
          :key="index"
          type="button"
          :class="[
            { activatedItem: active == index },
            { boldM: chat.unreadMessages.length > 0 },
            { regularM: chat.unreadMessages.length == 0 },
            'btn sidebarItem pl-2',
          ]"
          style="padding-top: 5%; padding-bottom: 5%"
        >
          {{ chat.name }}
        </button>
        <!-- <button type="button" :class="[{'activatedItem' : active==4},'btn sidebarItem pl-2']" @click="move(4)">Discussions</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatSidebar",
  // components: {
  //     logo
  // },
  props: {
    active: Number,
  },
  data() {
    return {
      chatList: [],
      // pages: ['/announcements', '/modules', '/assignments']
    };
  },
  created() {
    // this.activated = this.myCourses;
    this.chatList = this.$store.state.inbox;
  },
  methods: {
    move(index) {
      var pages = this.tab == "myCourses" ? this.pages : this.pages2;
      this.$router.push("/" + this.tab + "/" + this.id + pages[index]);
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
