<template>
  <div class="CoursesAnnouncements">
    <div class="card p-4 mb-4" v-for="announcement in announcements" :key="announcement.id">
        <div class="row p-0 m-0">
            <div class="col-auto" style="width:80px; height:80px; border-radius: 100px; background: #C4C4C4">
            </div>
            <div class="col-auto">
                <p> {{ announcement.poster }} </p>
                <p> {{ announcement.time }} </p>
            </div>
        </div>
        <div class="row p-0 m-0 mt-3">
            {{ announcement.title.toUpperCase() }}
        </div>
        <div class="row p-0 m-0 mt-3">
            {{ announcement.body}}
        </div>
        <div class="row p-0 m-0 mt-3" style="height: 161px; width: 100%; background: #C4C4C4">
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
