<template>
  <div class="Courses">
    <div class="row" style="width: 100%">
        <div class="col-2 pr-0">
            <Sidebar />
        </div>
        <div class="col-2 pr-0 pl-0 w-40">
            <SubSidebar />
        </div>
        <div class="col-8 pl-4 pt-3">
            <div class="input-group shadow-sm" style="width: 20%">
                <div class="input-group-prepend">
                    <span class="input-group-text pr-1 border-0" style="background: #ffffff"><i class="fas fa-search" style="color:rgba(0,0,0,0.3)"></i></span>
                </div>
                <input type="text" class="form-control form-control-sm border-0 pt-2 pb-2 pl-1" placeholder="Search..." >
            </div>
            <h1 class="pt-4 h2">{{ course.subject }} </h1>
            <div class="row m-0 p-0 pt-2 pb-5">
                <div class="col-7 pl-0 pr-4">
                    <Announcements :id='id' v-if="type == null || type == 'announcements'"/>
                    <div class="lineBreak mt-1" v-if="type == 'modules'"> </div>
                    <Modules :id='id' v-if="type == 'modules'"/>
                </div>
                <div class="col-5 pl-0 pr-0">
                    <Todo />
                    <Calendar class="mt-4" />
                </div>
            </div>
        </div>
        
        
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue"
import SubSidebar from "./SubSidebar.vue"
import Todo from "./Todo.vue"
import Calendar from "./Calendar.vue"
import Announcements from "./CoursesAnnouncements.vue"
import Modules from "./CoursesModules.vue"
export default {
  name: "Courses",
  components: {
      Sidebar,
      Todo,
      Calendar,
      SubSidebar,
      Announcements,
      Modules
  },
  props: {
    id: String,
    type: String
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
.lineBreak {
  width: 100%;
  height: 3px;
  left: 496px;
  top: 121px;

  background: #17252A;
  opacity: 0.5;
}
</style>
