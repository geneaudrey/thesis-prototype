<template>
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
        <div class="row p-0 m-0 mt-3 lead">
            {{ announcement.title.toUpperCase() }}
        </div>
        <div class="row p-0 m-0 mt-3 regularL">
            {{ announcement.body}}
        </div>
        <div class="row p-0 m-0 mt-4" style="height: 161px; width: 100%; background: #C4C4C4">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursesAnnouncements",
  props: {
    id: String
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
