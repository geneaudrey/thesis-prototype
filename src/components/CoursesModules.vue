<template>
  <div class="col-2 pr-0 pl-0 w-40" style="max-width: 240px">
    <SubSidebar :id="id" :active="1" :tab="tab"/>
  </div>
  <div class="col-8 pl-3 pt-3">
    <div class="input-group shadow-sm" style="width: 20%">
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
    </div>
    <h1 class="pt-3 h1 mb-0 textPrimary">
      MODULES
    </h1>
    <h6 class="h6 textPrimary">
      {{
        moduleID != null
          ? course.modules[parseInt(moduleID)].title.toUpperCase()
          : course.subject.toUpperCase()
      }}
    </h6>
    <div class="row m-0 p-0 pt-2 pb-5">
      <div class="col-7 pl-0 pr-3">
        <div
          class="lineBreak mt-1"
          :moduleID="moduleID"
          v-if="(type == 'modules' || type=='milestones') && moduleID == null"
        ></div>
        <div class="CoursesModules">
          <div class="row m-0 p-0" v-for="mod in modules" :key="mod.id">
            <div class="row m-0 p-0 mt-4 w-100 h4">
              {{ mod.title }}
            </div>
            <div
              class="row m-0 p-0 mt-3 w-100"
              v-for="(part, index) in mod.parts"
              :key="part.id"
            >
              <div class="col-1 m-0 p-0">
                <div
                  :class="['ml-auto', {'bar' : parseInt(part.id) < mod.parts.length - 1 }, {'' : parseInt(part.id) == mod.parts.length - 1 }]"
                  v-if="part.status == 2 && mod.parts.length > 1"
                ></div>
                <div
                  :class="[
                    { circleActive: part.status > 0 },
                    { circleInactive: part.status == 0 },
                    'mt-2 regularS',
                  ]"
                >
                  <div class="text-center" style="line-height: 20px">
                    {{ part.status === 2 ? "" : index + 1 }}
                    <span
                      class="material-icons"
                      style="font-size: 13px; line-height: 20px"
                      v-if="part.status == 2"
                    >
                      done
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-11 m-0 p-0">
                <div
                  class="card w-100 p-3 border-0 shadow-sm module"
                  @click="openModule(mod.id, index)"
                >
                  <p class="boldL">{{ part.title }}</p>
                  <p class="regularS">{{ part.desc }}</p>
                </div>
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
import SubSidebar from "./SubSidebar.vue";
import Todo from "./Todo.vue";
import Calendar from "./Calendar.vue";
export default {
  name: "CoursesModules",
  components: {
    Todo,
    Calendar,
    SubSidebar,
  },
  props: {
    id: String,
    moduleID: String,
    type: String,
    tab: String
  },
  data() {
    return {
      course: {},
      modules: [],
    };
  },
  created() {
    if (this.tab=="myCourses") {
      this.course = this.$store.state.myCourses[this.id];
      this.modules = this.course.modules;
    }
    else {
      this.course = this.$store.state.myInternships[this.id];
      this.modules = this.course.milestones;
    }
  },
  methods: {
    openModule(modid, modidid) {
      if (this.tab == "myCourses") {
        // console.log(modid, modidid);
        // this.$store.commit('finishModulePart', { id: this.id, moduleID: modid, moduleIDID: modidid});
        this.$router.push(
          "/"+this.tab+"/" + this.id + "/modules/" + modid + "/" + modidid
        );
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.module {
  border-radius: 8px !important;
}
.module:hover {
  cursor: pointer;
}
.bar {
  position: absolute;
  z-index: 0;
  left: 25%;
  width: 4px;
  height: 160px;

  background: #ffffff;
  border-radius: 2px;
}

.circleActive {
  position: absolute;
  width: 26px;
  height: 26px;
  z-index: 1;
  background: #3aafa9;
  border: solid;
  border-color: #ffffff;
  border-width: 3px;
  border-radius: 100px;
  /* border-radius: 100px !important; */
  /* Dropshadow 1 */
  color: #ffffff;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
}

.circleInactive {
  width: 26px;
  height: 26px;

  background: #ffffff;
  border: solid;
  border-color: #ffffff;
  border-width: 3px;
  border-radius: 100px;
  color: rgb(208, 201, 214, 1);
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
}

.lineBreak {
  width: 100%;
  height: 3px;
  left: 496px;
  top: 121px;

  background: #17252a;
  opacity: 0.5;
}
</style>
