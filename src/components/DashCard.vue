<template>
  <div class="card border-0 shadow-sm p-3 dashCard">
    <div class="row p-0 m-0 boldDefault">
      <button
        type="button"
        :class="[
          { 'text-black': active == 0 },
          { 'text-deselected': active != 0 },
          'btn p-1 m-1 boldDefault',
        ]"
        @click="active = 0"
      >
        My Courses
      </button>
      <button
        type="button"
        :class="[
          { 'text-black': active == 1 },
          { 'text-deselected': active != 1 },
          'btn p-1 m-1 boldDefault',
        ]"
        @click="active = 1"
      >
        My Internships
      </button>
      <!-- <button
        type="button"
        :class="[
          { 'text-black': active == 2 },
          { 'text-deselected': active != 2 },
          'btn p-1 m-1 boldDefault',
        ]"
        @click="active = 2"
      >
        All Courses
      </button>
      <button
        type="button"
        :class="[
          { 'text-black': active == 3 },
          { 'text-deselected': active != 3 },
          'btn p-1 m-1 boldDefault',
        ]"
        @click="active = 3"
      >
        All Internships
      </button> -->
    </div>
    <!-- if my courses, my internships -->
    <div class="row p-0 m-0 p-2 mb-2" v-if="active < 2">
      <div
        class="card bg-secondary border-0 p-2 w-100 mt-2 dashCardItem"
        v-for="item in activated"
        :key="item.id"
      >
        <div class="row p-0 m-0">
          <div class="col-flex">
            <div
              class="card border-0 dashDP"
              style="width: 71.23px; height: 71.23px"
            >
              <img
                v-if="item.img != null && item.img != ''"
                :src="require('../assets/For Gene/Icons/' + item.img)"
                class="img-fluid"
                alt="Responsive image"
                style="border-radius: 12px"
              />
            </div>
          </div>
          <div class="col-5 mt-auto mb-auto ml-0 mr-0 pr-0">
            <p class="mb-0 boldDefault">
              <b> {{ item.subject }} </b>
            </p>

            <div class="row m-0 p-0 p-0 h-90">
              <div class="col-5 regularS mt-auto mb-0 p-0">
                by {{ item.prof }}
              </div>
              <div
                class="col-auto text-primary pr-0 pl-0"
                :style="{
                  visibility: active == 0 || active == 1 ? 'visible' : 'hidden',
                }"
              >
                <!-- <i class="fas fa-bullhorn p-0 pr-3 regularS"></i>
                                <i class="far fa-file-alt p-0 pr-3 regularS"></i>
                                <i class="far fa-comment-alt p-0 pr-3 regularS"></i> -->
                <img :src="announce" class="icon p-0 pr-2 regularS" />
                <img :src="note" class="icon p-0 pr-3 regularS" />
                <img :src="comment" class="icon p-0 pr-3 regularS" />
              </div>
            </div>
          </div>

          <!-- <div class="col mt-auto mb-auto text-primary " v-if="active==2">
                        {{item.length}} 
                    </div> -->
          <div class="col-auto mt-auto mb-auto ml-auto">
            <img :src="ellipse" class="icon" v-if="active == 0" />
          </div>
          <div class="col-3 mt-auto mb-auto mr-1 pl-4 pr-3">
            <button
              class="btn btn-primary text-white pr-0 pl-0 w-100 boldS dashButton"
              v-if="active == 0 || active == 1"
              @click="
                $router.push({
                  path: '/'+ tabs[active]+'/' + item.id + '/announcements',
                })
              "
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row p-0 m-0" v-if="active == 3 || active == 2">
    <AllInternships :active="active" />
  </div>
</template>

<script>
import AllInternships from "./AllInternships";

import announce from "../assets/For Gene/Icons/volume.svg";
import note from "../assets/For Gene/Icons/note-text.svg";
import comment from "../assets/For Gene/Icons/comment.svg";
import ellipse from "../assets/For Gene/Icons/Ellipse 1.svg";
export default {
  name: "DashCard",
  components: {
    AllInternships,
  },
  setup() {
    return {
      announce,
      note,
      comment,
      ellipse,
    };
  },
  emits: ["changedActive"],
  data() {
    return {
      myCourses: [],
      myInternships: [],
      allCourses: [],
      allInternships: [],
      activated: [],
      active: 0,
      tabs: ["myCourses", "myInternships"]
    };
  },
  created() {
    this.myCourses = this.$store.state.myCourses;
    this.myInternships = this.$store.state.myInternships;
    this.allCourses = this.$store.state.allCourses;
    this.allInternships = this.$store.state.allInternships;
    this.activated = this.myCourses;
  },
  watch: {
    active() {
      console.log(this.active);
      this.$emit("changedActive", this.active);
      if (this.active == 0) {
        this.activated = this.myCourses;
      } else if (this.active == 1) {
        this.activated = this.myInternships;
      } else if (this.active == 2) {
        this.activated = this.allCourses;
      } else if (this.active == 3) {
        this.activated = this.allInternships;
      }
    },
  },
};
</script>

<style scoped>
</style>
