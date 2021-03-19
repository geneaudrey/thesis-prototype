<template>
<div class="col-2 pr-0 pl-0 w-40">
    <SubSidebar :id="id" :active="1"/>
</div>
<div class="col-8 pl-4 pt-3">
    <div class="input-group shadow-sm" style="width: 20%">
        <div class="input-group-prepend">
            <span class="input-group-text pr-1 border-0" style="background: #ffffff"><i class="fas fa-search" style="color:rgba(0,0,0,0.3)"></i></span>
        </div>
        <input type="text" class="form-control form-control-sm border-0 pt-2 pb-2 pl-1" placeholder="Search..." >
    </div>
    <h1 class="pt-4 h2">{{ moduleID != null ? course.modules[parseInt(moduleID)].title : course.subject }} </h1>
    <div class="row m-0 p-0 pt-1 pb-5">
        <div class="col pl-0 pr-4">
            <div class="ModuleOpen">
                <div class="card m-0">
                    <div class="card-header h6"> {{ openedModule.title }} </div>
                    <div class="pl-5 pr-5 pt-4 pb-4">
                        <div class="h1 mb-4"> {{ openedModule.title }} </div>

                        <div v-for="section in openedModule.sections" :key="section.id">
                            <p> {{ section.title }} </p>
                            <p> {{ section.body }} </p>
                        </div>

                        <div style="width: 852px; height: 86.39px; background: rgb(196,196,196,1);" />
                    </div>
                    <div class="d-flex flex-row-reverse m-0 p-0 pr-5 pb-3 text-primary">
                            <span class="material-icons m-0 p-0" style="font-size: 36px">
                                navigate_next
                            </span>
                            <span class="boldS mt-auto mb-auto"> Next </span>
                            
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
import SubSidebar from "./SubSidebar.vue"
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
    moduleIDID: String
  },
  data() {
    return {
        course: {},
        openedModule: {}
        }
    },
  created() {
      this.course = this.$store.state.myCourses[this.id];
      this.openedModule = this.mod.parts[this.moduleIDID]
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
