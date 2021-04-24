<template>
<div class="col-2 pr-0 pl-0 w-40" style="max-width: 240px;">
  <SubSidebar :id="id" :active="0"/>
</div>
<div class="col-8 pl-4 pt-3 pr-0">
    <div class="input-group shadow-sm" style="width: 20%">
        <div class="input-group-prepend">
            <span class="input-group-text pr-1 border-0" style="background: #ffffff"><i class="fas fa-search" style="color:rgba(0,0,0,0.3)"></i></span>
        </div>
        <input type="text" class="form-control form-control-sm border-0 pt-2 pb-2 pl-1" placeholder="Search..." >
    </div>
    <h1 class="pt-4 h1">ANNOUNCEMENTS</h1>
    <h6 class="h6">{{ moduleID != null ? course.modules[parseInt(moduleID)].title.toUpperCase() : course.subject.toUpperCase() }} </h6>
    <div class="row m-0 p-0 pt-2 pb-5">
        <div class="col-7 pl-0 pr-4">
          <div class="CoursesAnnouncements">
            <div class="card P-0 mb-4" style="padding:7%" v-for="announcement in announcements" :key="announcement.id">
                <div class="row p-0 m-0">
                    <div class="col-auto" style="width:80px; height:80px; border-radius: 100px; background: #C4C4C4">
                    </div>
                    <div class="col-auto">
                        <div class="row m-0 mt-1 p-0">
                          <span class="mt-auto mb-auto"> {{ announcement.poster }} </span>
                          <span class="material-icons mt-auto mb-auto"> arrow_right </span>
                          <span class="mt-auto mb-auto"> {{ course.subject }} </span>
                        </div>
                        <div class="row m-0 mt-1 p-0 text-time">
                          {{ announcement.time }}
                        </div>
                    </div>
                </div>
                <div class="row p-0 m-0 mt-3 h2">
                    {{ announcement.title.toUpperCase() }}
                </div>
                <div class="row p-0 m-0 mt-3 regularL">
                  <div v-for="item in announcement.body" :key="item">
                    <p v-if="item.type == 'p'" class="regularL"> {{ item.text }} </p>
                    <img v-if ="item.type == 'img'" :src="require('../assets/For Gene/Pictures/'+item.img)" class="img-fluid" alt="Responsive image"/>
                  </div>
                </div>
            </div>
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
import SubSidebar from "./SubSidebar.vue"
import Todo from "./Todo.vue"
import Calendar from "./Calendar.vue"
export default {
  name: "CoursesAnnouncements",
  components: {
      Todo,
      Calendar,
      SubSidebar,
  },
  props: {
    id: String,
    moduleID: String,
    type: String
  },
  data() {
    return {
        course: {},
        announcements: [],
    }
},
  created() {
      this.course = this.$store.state.myCourses[this.id];
      this.announcements = this.course.announcements;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
