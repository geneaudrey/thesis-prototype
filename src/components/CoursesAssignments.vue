<template>
  <div class="col-2 pr-0 pl-0 w-40" style="max-width: 240px">
    <SubSidebar :id="id" :active="3" :tab="tab" />
  </div>
  <div class="col-8 pl-3 pt-3">
    <Notif />
    <!-- <div class="input-group shadow-sm" style="width: 20%">
      <div class="input-group-prepend">
        <span class="input-group-text pr-1 border-0" style="background: #ffffff"
          ><i class="fas fa-search" style="color: rgba(0, 0, 0, 0.3)"></i
        ></span>
      </div>
      <input
        type="text"
        class="form-control form-control-sm border-0 pt-2 pb-2 pl-1"
        placeholder="Search..."
      />
    </div> -->
    <h1 class="pt-3 h1 textPrimary">
      {{
        moduleID != null
          ? course.modules[parseInt(moduleID)].title.toUpperCase()
          : course.subject.toUpperCase()
      }}
    </h1>
    <div class="row m-0 p-0 pt-2 pb-5">
      <div class="col-7 pl-0 pr-3">
        <div class="CoursesAssignments">
          <Assign :type="0" :assignments="upcomingAssignments" />
          <Assign class="mt-4" :type="1" :assignments="finishedAssignments" />
        </div>
      </div>
      <div class="col-5 pl-0 pr-0">
        <Todo />
        <Calendar class="mt-4" />
      </div>
    </div>
  </div>
</template>

<script>
import SubSidebar from "./SubSidebar.vue";
import Todo from "./Todo.vue";
import Calendar from "./Calendar.vue";
import Assign from "./Assignments.vue";
import Notif from "./Notif.vue";
export default {
  name: "CoursesAssignments",
  components: {
    Todo,
    Calendar,
    SubSidebar,
    Assign,
    Notif,
  },
  props: {
    id: String,
    moduleID: String,
    type: String,
    tab: String,
  },
  data() {
    return {
      course: {},
      upcomingAssignments: [],
      finishedAssignments: [],
    };
  },
  created() {
    this.course = this.$store.state.myCourses[this.id];
    this.upcomingAssignments = this.course.upcomingAssignments;
    this.finishedAssignments = this.course.finishedAssignments;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
