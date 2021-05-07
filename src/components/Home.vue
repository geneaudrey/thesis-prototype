<template>
  <div class="Dashboard">
    <div class="row m-0 p-0" style="width: 100%">
      <div class="col-2 m-0 p-0" style="max-width: 240px">
        <Sidebar :active="0" />
      </div>
      <div class="col-10 pl-4 pt-3">
        <div class="input-group shadow-sm" style="width: 20%">
          <div class="input-group-prepend">
            <span
              class="input-group-text pr-1 border-0"
              style="background: #ffffff"
              ><i class="fas fa-search" style="color: rgba(0, 0, 0, 0.3)"></i
            ></span>
          </div>
          <input
            type="text"
            class="form-control form-control-sm border-0 pt-2 pb-2 pl-1"
            placeholder="Search..."
          />
        </div>
        <h1 class="pt-4 h1 text-textPrimary">HOME</h1>
        <div class="row m-0 p-0 pt-2 pb-5">
            <div class="col-8 pr-4 pl-0">
                <div v-for="(course, index) in courses" :key="index">
                    <div
                        class="card m-0 mb-4 border-0 w-100"
                        style="padding: 5%; border-radius: 8px"
                        v-for="(announcement, index) in course.announcements"
                        :key="index"
                    >
                        <div class="row p-0 m-0">
                        <div
                            class="col-auto"
                            style="
                            width: 80px;
                            height: 80px;
                            border-radius: 100px;
                            background: #c4c4c4;
                            "
                        ></div>
                        <div class="col">
                            <div class="row m-0 mt-1 p-0">
                            <span class="boldL col-auto m-0 p-0 mt-auto mb-auto">
                                {{ announcement.poster }}
                            </span>
                            <span class="material-icons col-auto m-0 p-0 mt-auto mb-auto">
                                arrow_right
                            </span>
                            <span class="mt-auto mb-auto col m-0 p-0 boldL" style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;"> {{ course.subject }} </span>
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
                            <p v-if="item.type == 'p'" class="regularL">{{ item.text }}</p>
                            <img
                            v-if="item.type == 'img'"
                            :src="require('../assets/For Gene/Pictures/' + item.img)"
                            class="img-fluid"
                            alt="Responsive image"
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4 m-0 p-0">
                <Todo />
                <Calendar class="mt-4" />
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Todo from "./Todo.vue";
import Calendar from "./Calendar.vue";
export default {
  name: "Dashboard",
  components: {
    Sidebar,
    Todo,
    Calendar,
  },
  data() {
    return {
      announcements: [],
      courses: []
    };
  },
  methods: {
    // changedActive(newActive) {
    //   this.active = newActive;
    //   this.dashboardTitle = this.dashboard[newActive];
    // },
  },
  created() {
      this.courses.push(this.$store.state.myCourses[0]);
      this.courses.push(this.$store.state.myInternships[0]);

    //   for (course of this.$store.state.myCourses) {
    //   this.announcements = this.announcements.concat(course.announcements);
    //   this.announcements = this.announcements.concat(internship.announcements);
    //   console.log(this.announcements)
    //   }
    //   for (announcement in this.$store.state.myInternships.announcements) {
    //       this.announcements.push(announcement);
    //   }
  }
  //   props: {
  //     msg: String
  //   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
