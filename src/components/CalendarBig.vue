<template>
  <div class="Dashboard">
    <div class="row m-0 p-0" style="width: 100%">
      <div class="col-2 m-0 p-0" style="max-width: 240px">
        <Sidebar :active="3" />
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
        <h1 class="pt-4 h1 text-textPrimary"> CALENDAR </h1>
        <div class="row m-0 p-0 pt-2 pb-5">
            <div class="card w-100 dashCard border-0 p-3 pt-4 pb-4">
                <div class="row m-0 p-0 mt-1">
                    <div class="col-9">
                        <div class="row m-0 p-0">
                            <div class="col m-0 p-0">
                                <span class="material-icons text-primary mr-2 align-middle hov" style="font-size: 24px"
                                @click="month -= 1">
                                chevron_left
                                </span>
                                <span class="h3 mt-auto mb-auto align-middle"> {{ months[month].month.toUpperCase() }} {{ year }} </span>
                                <span class="material-icons text-primary ml-2 align-middle hov" style="font-size: 24px"
                                @click="month += 1">
                                chevron_right
                                </span>

                            </div>
                            <div class="col-auto m-0 p-0">
                                <button class="btn btn-primary boldS p-2 pl-3 pr-3 mt-auto mb-auto" style="border-radius: 16px;"
                                data-toggle="modal"
                                data-target="#modal-sched">
                                    +New Schedule
                                </button>
                                <Modal ref="modal-sched" id="modal-sched" :curryear="selectedYear" :currmonth="selectedDate" :currday="selectedDate" />
                            </div>
                        </div>
                        <div class="row m-0 p-0 pt-4 pb-4">
                            <div class="col m-0 p-0 text-center" v-for="(week, index) in weeks" :key="index">
                                <span class="h3 mt-auto mb-auto boldL" style="color: #717579"> {{week}} </span>
                            </div>
                        </div>
                        <div class="row m-0 p-0" style="height: 97.85px;" v-for="row in Math.ceil((months[month].days + months[month].startDay)/7)" :key="row">
                            <div :class="['col m-0 p-0  h4 border border-top-0 border-left-0',
                            {'text-gray4 bg-calendarGray' : 0 >= ((row-1)*7 + (col-1) - months[month].startDay + 1) || ((row-1)*7 + (col-1) - months[month].startDay + 1) > months[month].days},
                            {'text-black bg-white hov' : ((row-1)*7 + (col-1) - months[month].startDay + 1) > 0 && ((row-1)*7 + (col-1) - months[month].startDay + 1) <= months[month].days},
                            {'border-right-0' : col == 7},
                            {'border-bottom-0' : row == Math.ceil((months[month].days + months[month].startDay)/7)}
                            ]" v-for="col in 7" :key="col"
                            @click="changeSelected(year, month, ((row-1)*7 + (col-1) - months[month].startDay + 1), col)"
                            >
                                <div :class="['h-100 w-100 p-1', {'border border-darkPrimary rounded border-3' : month == selectedMonth && year == selectedYear && ((row-1)*7 + (col-1) - months[month].startDay + 1) == selectedDate}]">
                                    <div :class="['h-100 w-100 p-0 pl-2 inside', {'bg-mutedPrimary' : month == selectedMonth && year == selectedYear && ((row-1)*7 + (col-1) - months[month].startDay + 1) == selectedDate}]">
                                        <span class="h3 mt-auto mb-auto boldL"> 
                                            {{ 0 >= ((row-1)*7 + (col-1) - months[month].startDay + 1) ? ((month == 0) ? 31 + ((row-1)*7 + col-1 - months[month].startDay + 1) : (months[month-1].days + ((row-1)*7 + col-1 - months[month].startDay + 1))) : (((row-1)*7 + col-1 - months[month].startDay + 1) > months[month].days ? ((row-1)*7 + col-1 - months[month].startDay + 1 - months[month].days) : ((row-1)*7 + col-1 - months[month].startDay + 1 ))}}
                                        </span>
                                        
                                        <div class="row m-0 p-0 pt-2 mt-4" v-if="`${year}${months[month].month}${((row-1)*7 + (col-1) - months[month].startDay + 1)}` in schedules">
                                            <div class="bg-darkPrimary mr-1"
                                            style="width: 12.63px; height: 12.63px; border-radius: 100px" 
                                            v-for="index in schedules[`${year}${months[month].month}${((row-1)*7 + (col-1) - months[month].startDay + 1)}`].count" :key="index"> 
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class="col-3 p-0 border border-top-0 border-bottom-0 border-right-0">
                            <p class="h4 mb-0 ml-2 pl-2"> Schedules </p>
                            <p class="regularM text-dark4 ml-2 pl-2 mb-5"> {{months[selectedMonth].month +" "+ selectedDate+", " +weeksful[selectedWeek]}}</p>
                            <div v-if="`${selectedYear}${months[selectedMonth].month}${selectedDate}` in schedules">
                                <div class="border border-bottom-0 border-left-0 border-right-0 p-2 pt-3 pb-3 mt-4"
                                v-for="(todo, index) in schedules[`${selectedYear}${months[selectedMonth].month}${selectedDate}`].todo" :key="index">
                                    <div class="regularM m-0 mt-n4 p-0 ml-4"> <span class="pl-3 pr-3 w-auto bg-white"> {{todo.time}} </span> </div>
                                    <div v-if="todo.task" class="regularM p-4 bg-primary mt-3 ml-2 text-white" style="border-radius:16px"> {{ todo.task }} </div>
                                    <div v-if="todo.reminder" class="regularM p-4 ml-2 bg-gray mt-3" style="border-radius:16px"> {{ todo.reminder }} </div>

                                </div>
                            </div>
                            <div v-else>
                                <div class="border border-bottom-0 border-left-0 border-right-0 p-2 pt-3 pb-3 mt-4"
                                v-for="time in defaultTime" :key="time">
                                    <div class="regularM m-0 mt-n4 p-0 ml-4"> <span class="pl-3 pr-3 w-auto bg-white"> {{time}} </span> </div>
                                    <!-- <div class="regularM p-3 bg-primary mt-3 ml-2 text-white" style="border-radius:16px"> {{ todo.task }} </div>
                                    <div v-if="todo.reminder" class="regularM p-3 ml-2 bg-gray mt-3" style="border-radius:16px"> {{ todo.reminder }} </div> -->

                                </div>
                            </div>
   

                        </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Modal from "./ModalSched.vue"
export default {
  name: "CalendarBig",
  components: {
    Sidebar,
    Modal

  },
  data() {
    return {
        weeks: ["MON", "TUES", "WED", "THURS", "FRI", "SAT", "SUN"],
        defaultTime: ['5 AM', '7 AM', '9 AM', '11 AM', '1 PM', '3 PM', '5 PM', '7 PM', '9 PM', '11 PM'],
        weeksful: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        months: [ {month: "January", days: 0, startDay: 0}, 
        {month: "February", days: 0, startDay: 0},
        {month: "March", days: 0, startDay: 0},
        {month: "April", days: 0, startDay: 0},
        {month: "May", days: 0, startDay: 0},
        {month: "June", days: 0, startDay: 0},
        {month: "July", days: 0, startDay: 0},
        {month: "August", days: 0, startDay: 0},
        {month: "September", days: 0, startDay: 0},
        {month: "October", days: 0, startDay: 0},
        {month: "November", days: 0, startDay: 0},
        {month: "December", days: 0, startDay: 0}],
        currentYearInc:0, 
        year: 0,
        currentMonthInc: 0,
        month: 0,
        selectedDate: 20,
        selectedMonth: 4,
        selectedYear: 2021,
        selectedWeek: 3,
        schedules: {
            "2021May20": {
                count: 3,
                todo: [
                    {
                        time: "7 AM",
                        task: "Send Collateral"
                    },
                    {
                        time: "8 AM",
                        task: "Meeting with Ms. Lam via Zoom",
                        reminder: "Check Inbox"
                    },
                    {
                        time: "10 AM",
                    },
                    {
                        time: "12 PM",
                    },
                    {
                        time: "2 PM",
                        task: "Weekly Meeting with Ms. Lam via Hangouts"
                    }
                ]
            },
            "2021May2": {
                count: 1,
                todo: [
                    {
                        time: "7 AM",
                        task: "Send Collateral"
                    }
                ]
                        
            },
            "2021May24": {
                count: 2,
                todo: [
                    {
                        time: "7 AM",
                        task: "Send Collateral"
                    },
                    {
                        time: "2 PM",
                        task: "Weekly Meeting with Ms. Lam via Hangouts"
                    }
                ]
                        
            }
        }
    }
  },
  methods: {
      changeSelected(year, month, date, week) {
          week -= 1;
          if (date > 0 && date <= this.months[month].days) {
            this.selectedYear = year;
            this.selectedMonth = month;
            this.selectedDate = date;
            this.selectedWeek = week;
          }
      }
  },
  created() {
    var dt = new Date();
 	this.month = dt.getMonth();
 	this.year = dt.getFullYear();
     var year = this.year;
     var month;
     var week;
    for (month in this.months) {
        month = parseInt(month) + 1
        this.months[month-1].days = new Date(year, month, 0).getDate();
        week = new Date(year, month-1, 1).getDay();
        week = (week===0) ? 6 : week - 1
        this.months[month-1].startDay = week;

    }

  },
  watch: {
      year() {

        console.log("bruh", this.year)
        var year = this.year;
        var month;
        var week;
        for (month in this.months) {
            month = parseInt(month) + 1
            this.months[month-1].days = new Date(year, month, 0).getDate();
            week = new Date(year, month-1, 1).getDay();
            week = (week===0) ? 6 : week - 1
            this.months[month-1].startDay = week;

        }
    },
    month() {
        console.log(this.month)
        if (this.month == -1) {
            this.year -= 1
            this.month = 11
        }
        if (this.month == 12) {
            this.year += 1
            this.month = 0
        }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.border-3 {
    border-width:5px !important;
    border-radius: 16px !important;
}
.inside {
    border-radius: 16px !important;
}
.hov:hover {
    cursor: pointer;
}
</style>
