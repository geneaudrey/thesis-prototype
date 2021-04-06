<template>
  <div class="Courses">
    <div class="row" style="width: 100%">
        <div class="col-2 pr-0">
            <Sidebar :active='1'/>
        </div>
        <Announcements :id='id' :moduleID="moduleID" :type="type" v-if="type == null || type == 'announcements'"/>
        
        <Modules :id='id' :type="type" v-if="type == 'modules' && moduleID == null"/>
        <ModuleOpen :id='id' v-if="moduleID != null" :moduleID="moduleID" :type="type" :moduleIDID="moduleIDID" :mod='course.modules[parseInt(moduleID)]' />
        <Assignments v-if="type == 'assignments'" :id='id' :moduleID="moduleID" :type="type"/>
        <!-- {{ type }} -->
        
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue"
// import SubSidebar from "./SubSidebar.vue"
// import Todo from "./Todo.vue"
// import Calendar from "./Calendar.vue"
import Announcements from "./CoursesAnnouncements.vue"
import Modules from "./CoursesModules.vue"
import ModuleOpen from "./ModuleOpen.vue"
import Assignments from "./CoursesAssignments.vue"
export default {
  name: "Courses",
  components: {
      Sidebar,
    //   Todo,
    //   Calendar,
    //   SubSidebar,
      Announcements,
      Modules,
      ModuleOpen,
      Assignments
  },
  props: {
    id: String,
    type: String,
    moduleID: String,
    moduleIDID: String
  },
  data() {
    return {
        course: {},
        announcements: [],
        modules: [],
        files: [],
        assignments: [],
        discussions: []
    }
},
  created() {
      this.course = this.$store.state.myCourses[this.id];
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
