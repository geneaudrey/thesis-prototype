<template>
  <div class="Courses">
    <div class="row m-0 p-0" style="width: 100%">
      <div class="col-2 m-0 p-0" style="max-width: 240px">
        <Sidebar :active="1" :tab="tab" />
      </div>

      <Announcements
        :id="id"
        :moduleID="moduleID"
        :type="type"
        :tab="tab"
        v-if="type == null || type == 'announcements'"
      />

      <Modules
        :id="id"
        :type="type"
        :tab="tab"
        v-if="(type == 'modules' || type == 'milestones') && moduleID == null"
      />
      <ModuleOpen
        :id="id"
        v-if="
          moduleID != null || (tab == 'myInternships' && type == 'discussions')
        "
        :moduleID="moduleID"
        :type="type"
        :moduleIDID="moduleIDID"
        :tab="tab"
        :mod="
          tab == 'myCourses'
            ? course.modules[parseInt(moduleID)]
            : $store.state.myInternships[id].discussions[0]
        "
      />
      <Assignments
        v-if="type == 'assignments'"
        :id="id"
        :moduleID="moduleID"
        :type="type"
        :tab="tab"
      />
      <!-- {{ type }} -->
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
// import SubSidebar from "./SubSidebar.vue"
// import Todo from "./Todo.vue"
// import Calendar from "./Calendar.vue"
import Announcements from "./CoursesAnnouncements.vue";
import Modules from "./CoursesModules.vue";
import ModuleOpen from "./ModuleOpen.vue";
import Assignments from "./CoursesAssignments.vue";
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
    Assignments,
  },
  props: {
    id: String,
    type: String,
    moduleID: String,
    moduleIDID: String,
    tab: String,
  },
  data() {
    return {
      course: {},
      internship: {},
      announcements: [],
      modules: [],
      files: [],
      assignments: [],
      discussions: [],
    };
  },
  created() {
    // if (this.tab == "myCourses") {
    this.course = this.$store.state.myCourses[this.id];
    // }
    // else {
    //   this.internship = this.$store.state.myInternship[this.id];
    // }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
