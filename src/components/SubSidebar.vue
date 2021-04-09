<template>
  <div class="SubSidebar p-3">
      <div class="sidebar" />
        <div class="">
          <div class="btn-group-vertical w-100">
            <button type="button" :class="[{'activatedItem' : active==0},'btn sidebarItem pl-2']" @click="move(0)">Announcements</button>
            <button type="button" :class="[{'activatedItem' : active==1},'btn sidebarItem pl-2']" @click="move(1)">Modules</button>
            <button type="button" :class="[{'activatedItem' : active==2},'btn sidebarItem pl-2']" @click="move(2)">Files</button>
            <button type="button" :class="[{'activatedItem' : active==3},'btn sidebarItem pl-2']" @click="move(3)">Assignments</button>
            <button type="button" :class="[{'activatedItem' : active==4},'btn sidebarItem pl-2']" @click="move(4)">Discussions</button>
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
    active: Number
  },
  data() {
      return {
        pages: ['/announcements', '/modules', '/files', '/assignments', '/discussions']
      }
    },
    created() {
      // this.activated = this.myCourses;  
    },
    methods: {
      move(index) {
        this.$router.push('/myCourses/'+this.id+this.pages[index]);
      }
    },
    watch: {
    }
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
  width: 216px;
}
.sidebarItem {
  text-align: left;
  color: black;
  border-radius: 3px !important;
}
.sidebarItem:hover {
  background: rgba(222,242,241,1);
  color: black;
}
.activatedItem {
  background: rgba(222,242,241,1);
}
</style>
