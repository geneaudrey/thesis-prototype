<template>
  <div class="Dashboard">
    <div class="row m-0 p-0" style="width: 100%">
      <div class="col-2 m-0 p-0" style="max-width: 240px">
        <Sidebar :active="2" />
      </div>
      <div class="col-10 pl-4 pt-3 d-flex flex-column" style="min-height: 100vh">
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
        <h1 class="pt-4 h1 text-textPrimary" v-if="type == null">CLASSES AND INTERNSHIPS</h1>
        <h1 class="pt-4 h1 text-textPrimary" v-if="type == 'all-courses'">ALL COURSES</h1>
        <h1 class="pt-4 h1 text-textPrimary" v-if="type == 'all-internships'">ALL INTERNSHIPS</h1>
        <div
            class="row m-0 p-0 border-0 w-100 flex-grow-1 m-0 p-0 d-flex  align-items-stretch text-center"
            v-if="type == null"
        >
            <div class="col m-2 mb-3 card border-0 bg-primary justify-content-center align-items-center" style="border-radius: 20px">
                <img :src="courses" class="icon" style="max-width: 502px"/>
                <p class="text-white h1">AVAILABLE CLASSES</p>
                <button class="btn btn-light boldL rounded-pill pl-4 pr-4 text-primary mt-3 mb-5" @click="open('all-courses')"> ENROLL NOW </button>
            </div>
            <div class="col m-2 mb-3 card border-0 bg-primary justify-content-center align-items-center" style="border-radius: 20px">
                <img :src="internships" class="icon" style="max-width: 502px"/>
                <p class="text-white h1">AVAILABLE INTERNSHIPS</p>
                <button class="btn btn-light boldL rounded-pill pl-4 pr-4 text-primary mt-3 mb-5" @click="open('all-internships')"> APPLY NOW </button>
            </div>
        </div>
        <AllInternships v-if="active > 0" :active="active" :type="type" class="mb-4 pb-1"/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import AllInternships from "./AllInternships.vue";
import courses from "../assets/For Gene/Illustrations/ENABLE UPDATED-32.svg"
import internships from "../assets/For Gene/Illustrations/ENABLE UPDATED-33.svg"
export default {
  name: "Dashboard",
  components: {
    Sidebar,
    AllInternships,
  },
  setup() {
      return {
          courses,
          internships
      }
  },
  props: ["type"],
  data() {
    return {
        active: 0
    };
  },
  methods: {
    open(roooute) {
        this.$router.push("/opportunities/" + roooute);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  },
  created() {
      if (this.type == 'all-courses') {
          this.active = 2;
      }
      if (this.type == 'all-internships') {
          this.active = 3;
      }
      if (this.type == null) {
          this.active = 0;
      }
  },
  watch: {
      type() {
          console.log(this.type)
        if (this.type == 'all-courses') {
            this.active = 2;
        }
        if (this.type == 'all-internships') {
            this.active = 3;
        }
        if (this.type == null) {
          this.active = 0;
      }
      }
  }
  //   props: {
  //     msg: String
  //   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
