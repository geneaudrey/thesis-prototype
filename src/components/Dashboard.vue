<template>
  <div class="Dashboard">
    <div class="row" style="width: 100%">
        <div class="col-2 pr-0">
            <Sidebar />
        </div>
        <div class="col-10 pl-4 pt-3">
            <div class="input-group shadow-sm" style="width: 20%">
                <div class="input-group-prepend">
                    <span class="input-group-text pr-1 border-0" style="background: #ffffff"><i class="fas fa-search" style="color:rgba(0,0,0,0.3)"></i></span>
                </div>
                <input type="text" class="form-control form-control-sm border-0 pt-2 pb-2 pl-1" placeholder="Search..." >
            </div>
            <h1 class="pt-4"> <b> Dashboard </b> </h1>
            <div class="row m-0 p-0 pt-2 pb-5">
                <div class="col-8 pl-0 pr-4">
                    <DashCard />
                </div>
                <div class="col-4 pl-0 pr-0">
                    <Todo />
                    <Calendar class="mt-4" />
                </div>
            </div>
        </div>
        
        
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue"
import DashCard from "./DashCard.vue"
import Todo from "./Todo.vue"
import Calendar from "./Calendar.vue"
export default {
  name: "Dashboard",
  components: {
      Sidebar,
      DashCard,
      Todo,
      Calendar
  }
//   props: {
//     msg: String
//   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
