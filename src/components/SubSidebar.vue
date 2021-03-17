<template>
  <div class="SubSidebar p-2">
      <div class="sidebar" />
        <div class="btn-group-vertical w-100">
          <button type="button" :class="[{'activatedItem' : active==0},'btn sidebarItem pl-2']" @click="active=0">Announcements</button>
          <button type="button" :class="[{'activatedItem' : active==1},'btn sidebarItem pl-2']" @click="active=1">Modules</button>
          <button type="button" :class="[{'activatedItem' : active==2},'btn sidebarItem pl-2']" @click="active=2">Files</button>
          <button type="button" :class="[{'activatedItem' : active==3},'btn sidebarItem pl-2']" @click="active=3">Assignments</button>
          <button type="button" :class="[{'activatedItem' : active==4},'btn sidebarItem pl-2']" @click="active=4">Discussions</button>
        </div>
  </div>
</template>

<script>
export default {
  name: "SubSidebar",
  // components: {
  //     logo
  // },
  data() {
      return {
        active: 0
      }
    },
    created() {
      // this.activated = this.myCourses;  
    },
    watch: {
        active(){
            if (this.active == 0) {
                this.$router.push('./announcements')
            }
            if (this.active == 1) {
                this.$router.push('./modules')
            }
        }
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
    background: white;
    /* Shadow / Small */

    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
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
