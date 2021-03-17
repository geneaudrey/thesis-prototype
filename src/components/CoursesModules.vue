<template>
  <div class="CoursesModules">
    <div class="row m-0 p-0 mt-4" v-for="mod in modules" :key="mod.id">
        <div class="row m-0 p-0 w-100">
             {{ mod.title }} 
        </div>
        <div class="row m-0 p-0 mt-4 w-100" v-for="part in mod.parts" :key="part.id">
            <div class="col-1 m-0 p-0">
            </div>
            <div class="col-11 m-0 p-0">
                <div class="card w-100 p-3">
                    <p> {{ part.title }} </p>
                    <p> {{ part.desc }} </p>
                </div>
            </div>
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursesModules",
  props: {
    id: String
  },
  data() {
    return {
        course: {},
        modules: [],
    }
},
  created() {
      this.course = this.$store.state.myCourses[this.id];
      this.modules = this.course.modules;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
