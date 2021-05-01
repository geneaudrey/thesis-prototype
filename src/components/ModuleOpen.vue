<template>
  <div class="col-2 pr-0 pl-0 w-40" style="max-width: 240px">
    <SubSidebar :id="id" :active="1" />
  </div>
  <div class="col-8 pl-4 pt-3">
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
    <h1 class="pt-4 h2 textPrimary">
      {{
        moduleID != null
          ? course.modules[parseInt(moduleID)].title.toUpperCase()
          : course.subject.toUpperCase()
      }}
    </h1>
    <div class="row m-0 p-0 pt-1 pb-5">
      <div class="col pl-0 pr-0">
        <div class="ModuleOpen">
          <div class="card m-0">
            <div class="card-header h6" v-if="openedModule.type == 'lesson'">
              LESSON: PART {{ openedModule.lessonNum }}
            </div>
            <div
              class="card-header h6"
              v-if="openedModule.type == 'discussion'"
            >
              DISCUSSIONS
            </div>
            <div class="card-header h6" v-if="openedModule.type == 'activity' ||
            openedModule.type == 'activity-submit'||
            openedModule.type == 'activity-interview'">
              ACTIVITY
            </div>
            <div class="card-header h6" v-if="openedModule.type == 'exercise'">
              EXERCISE
            </div>

            <div class="pt-4 pr-4 pl-4">
              <div
                :class="[ 'text-darkPrimary',
                  'h1 mb-3',
                ]"
              >
                {{ openedModule.title }}
              </div>
              <!-- {{ openedModule.body }} -->
              <div v-for="section in openedModule.body" :key="section.id">
                <!-- <p> {{ section.title }} </p>
                            <p> {{ section.body }} </p> -->
                <p v-if="section.type == 'title'" class="h1 text-darkPrimary pt-2 pb-3">{{ section.text }}</p>
                <p v-if="section.type == 'p'" class="paragraph pb-3">{{ section.text }}</p>
                <p v-if="section.type == 'listHeader'" class="paragraph mb-0 pb-0">
                  {{ section.text }}
                </p>
                <p v-if="section.type == 'header'" class="lead mb-0 p-0">
                  {{ section.text }}
                </p>
                <p v-if="section.type == 'p-bold'" class="paragraphBold mb-0 p-0">
                  {{ section.text }}
                </p>
                <ul v-if="section.type == 'list'" class="pl-3 ml-1 paragraph pb-3">
                  <li v-for="item in section.text" :key="item">
                    {{ item }}
                  </li>
                </ul>
                <ul v-if="section.type == 'listOrdered'" class="paragraph pb-3 pl-3 ml-1" style="list-style-type: none">
                  <li v-for="item in section.text" :key="item">
                    {{ item }}
                  </li>
                </ul>
                <p v-if="section.type == 'ref'" class="regularS pb-0 mb-0" >
                  {{ section.text }}
                </p>
                <p v-if="section.type == 'section'" v-html="section.text" class="paragraph pb-3" />
                <p v-if="section.type == 'in-line-link'" v-html="section.text" class="paragraph pb-3" />
                <p
                  v-if="section.type == 'link'"
                  class="row m-0 p-0 text-primary h5"
                >
                  <span class="h5 mt-auto mb-auto"> {{ section.text }} </span>
                  <span class="material-icons m-0 p-0" style="font-size: 36px">
                    navigate_next
                  </span>
                </p>
                <p
                  v-if="section.type == 'link2'"
                  class="text-primary h4"
                >
                  <a :href="section.link"> {{ section.text }} </a>
                </p>
                <p
                  v-if="section.type == 'video'"
                  class="pb-4 h4"
                >
                  <a :href="section.link" class="text-black"> {{ section.text }} </a>
                </p>
                <div v-if="section.type == 'img'">
                  <img 
                    :src="require('../assets/For Gene/Illustrations/' + section.img)"
                    class="img-fluid pt-1 pb-3"
                    alt="Responsive image"
                  />
                </div>
              </div>

            </div>
            <div
              v-if="
                openedModule.type == 'activity-interview'
              "
              class="row m-0 p-4"
            >
              <button type="button" class="btn btn-primary rounded-pill boldS w-auto p-2 pl-3 pr-3">
                SCHEDULE A MOCK INTERVIEW
              </button>
            </div>

            <div
              v-if="
                openedModule.type == 'discussion' ||
                openedModule.type == 'activity' ||
                openedModule.type == 'exercise'
              "
              class="row p-3 mb-2 ml-3 mr-3 mt-0 border border-3"
            >
              <span
                class="material-icons mt-auto mb-auto"
                style="color: rgb(17, 15, 36, 0.4)"
              >
                reply
              </span>
              <span class="regularDefault mt-auto mb-auto pl-2"> Reply </span>
            </div>

            <div
              v-if="
                openedModule.type == 'exercise'
              "
              class="row pt-0 pr-3 pl-3 pb-3 mb-3 ml-3 mt-0"
            >
              <div :class="[{'border-white pt-3 halfBorder' : index == openedModule.replies.length - 1}, {'border border-top-0 border-right-0 mt-3' : index < openedModule.replies.length - 1 }, 'row m-0 p-0 w-100  pb-3 border border-top-0 border-right-0']"  style="border-color: #ECECEE" v-for="(reply, index) in openedModule.replies" :key="index">
                <div class="row m-0 p-0 w-100 pl-1 ">
                  <div style="width:40px; height: 40px; background: #C4C4C4; " class="col-auto border border-3 ml-n4" />
                  <div class="col m-0 pl-2 ">
                    <div class="row m-0 p-0 pt-1 mt-2">
                      <span class="col-auto pl-0 boldM pr-1"> {{ reply.commenter }} </span>
                      <span class="col-auto pl-1 regularM text-time"> {{ reply.time }} </span>
                    </div>
                    <div class="row-m-0 p-0 regularM pt-1 mt-2">
                      {{ reply.comment }}
                    </div>
                    <div class="row-m-0 p-0 regularM pt-1 mt-2 border" style="border-color: #ECECEE" v-if="reply.files.length > 0">
                      <div v-for="(file, index) in reply.files" :key="index" :class="['border', {'border-0' : index == reply.files.length -1}, {'border-top-0 border-left-0 border-right-0' : index < reply.files.length -1},'p-3 row m-0 p-0']" style="border-color: #ECECEE">
                        <div style="width:24px; height:24px; background: #ECECEE" class="col-auto m-0 p-0"/>
                        <span class="regularM col m-0 p-0 h-auto mt-auto mb-auto pl-2"> {{ file }} </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              v-if="
                openedModule.type == 'activity-submit'
              "
              class="row p-2 mb-3 ml-3 mr-3 mt-0 border border-3"
            >
              <div class="custom-file h-auto" >
                <input
                  type="file"
                  class="custom-file-input h-auto"
                  id="customFile"
                  ref="customFile"
                  name="filename"
                  @change="changeName"
                />
                <label
                  class="custom-file-label regularDefault inline p-0 m-0 h-auto border-0"
                  for="customFile"
                >
                  <span
                    class="material-icons align-middle text-clip ml-2"
                    v-if="files.length >= -1"
                  >
                    attach_file
                  </span>
                  <span class="align-middle ml-2">
                    {{ files.length > 0 ? files[0].name : "Choose file" }}
                  </span>
                </label>
              </div>
            </div>
            <div class="row m-0 p-0 mt-2">
              <div class="col-auto d-flex m-0 p-0 pl-2 pb-3 text-primary btn pt-1"
              v-if="parseInt(moduleIDID) > 0 || parseInt(moduleID) > 0"
              @click="backModule()"
              >
                <span class="material-icons m-0 p-0" style="font-size: 36px">
                  navigate_before
                </span>
                <span class="boldDefault mt-auto mb-auto"> BACK </span>
              </div>
              <div
                class="col d-flex flex-row-reverse m-0 p-0 pr-4 pb-3 text-primary btn pt-1"
                v-if="parseInt(moduleIDID) < mod.parts.length - 1 || parseInt(moduleID) < course.modules.length -1"
                @click="nextModule()"
              >
                <span class="material-icons m-0 p-0" style="font-size: 36px">
                  navigate_next
                </span>
                <span class="boldDefault mt-auto mb-auto"> NEXT </span>
              </div>
              <div
                class="col d-flex flex-row-reverse m-0 p-0 pr-4 pb-3 text-primary btn pt-1"
                v-else
                @click="$router.push('/myCourses/module/completed')"
              >
                <span class="material-icons m-0 p-0" style="font-size: 36px">
                  navigate_next
                </span>
                <span class="boldDefault mt-auto mb-auto"> END </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="col-5 pl-0 pr-0">
            <Todo />
            <Calendar class="mt-4" />
        </div> -->
    </div>
  </div>
</template>

<script>
import SubSidebar from "./SubSidebar.vue";
// import Todo from "./Todo.vue"
// import Calendar from "./Calendar.vue"
export default {
  name: "ModuleOpen",
  components: {
    //   Todo,
    //   Calendar,
    SubSidebar,
  },
  props: {
    id: String,
    mod: Object,
    moduleID: String,
    type: String,
    moduleIDID: String,
  },
  data() {
    return {
      course: {},
      openedModule: {},
      files: {}
    };
  },
  created() {
    this.course = this.$store.state.myCourses[this.id];
    this.openedModule = this.mod.parts[this.moduleIDID];
    this.$store.commit('finishModulePart', { id: this.id, moduleID: this.moduleID, moduleIDID: this.moduleIDID});

  },
  methods: {
    backModule() {
      if (parseInt(this.moduleIDID) > 0) {
        this.$store.commit('finishModulePart', { id: this.id, moduleID: this.moduleID, moduleIDID: parseInt(this.moduleIDID) - 1});
        this.$router.push(
          "/myCourses/" +
            this.id +
            "/modules/" +
            this.moduleID +
            "/" +
            (parseInt(this.moduleIDID) - 1)
        );
      }
      else {
        var newModID = parseInt(this.moduleID) - 1;
        var newModIDID = this.course.modules[parseInt(this.moduleID) - 1].parts.length - 1;
        console.log(newModID, newModIDID);
        this.$store.commit('finishModulePart', { id: this.id, moduleID: (parseInt(this.moduleID) - 1), moduleIDID: this.course.modules[parseInt(this.moduleID) - 1].parts.length - 1});
        this.$router.push(
          "/myCourses/" +
            this.id +
            "/modules/" +
            newModID +
            "/" +
            newModIDID
        );
      }
    },
    nextModule() {
      // var moduleID = this.moduleIDl
      // var moduleIDID = this.moduleIDID
      
      if (this.moduleIDID < this.mod.parts.length -1) {
        this.$store.commit('finishModulePart', { id: this.id, moduleID: this.moduleID, moduleIDID: parseInt(this.moduleIDID) + 1});
        this.$router.push(
          "/myCourses/" +
            this.id +
            "/modules/" +
            this.moduleID +
            "/" +
            (parseInt(this.moduleIDID) + 1)
        );
      }
      else {
        this.$store.commit('finishModulePart', { id: this.id, moduleID: (parseInt(this.moduleID) + 1), moduleIDID: 0});
        this.$router.push(
          "/myCourses/" +
            this.id +
            "/modules/" +
            (parseInt(this.moduleID) + 1) +
            "/" +
            0
        );
      }
    },
    changeName(e) {
      // console.log(this.$refs.customFile);
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      console.log(files);
      this.files = files;
      console.log(files.length);
      // var fileName = this.$refs.customFile.val().split("\\").pop();
      // console.log(fileName);
      // $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    },
  },
  watch: {
    moduleIDID() {
      this.openedModule = this.mod.parts[this.moduleIDID];
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label.custom-file-label.regularDefault::after {
  visibility: hidden;
}

.halfBorder {
  position: relative;
}


.halfBorder::after {
  content: "";
  position: absolute;
  width: 0.5px;
  left: -1px;
  height: 19%;
  background: #DEE2E6;
  z-index: 0;
  top: 0%;
  /* transform: translate(-50%, -50%); */
}
</style>
