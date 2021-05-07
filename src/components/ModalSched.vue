<template>
  <div
    class="modal fade"
    id="exampleModalCenter2"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle2"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content p-4">
        <div class="modal-header border-0 p-2 mb-2 pb-2">
          <span
            class="modal-title h4"
            id="exampleModalLongTitle2"
          >
            New Schedule
          </span>
          <button
            type="button"
            class="close col-auto mb-auto mt-auto text-close m-0 p-0"
            data-dismiss="modal"
            aria-label="Close"
          >
            <!-- <span aria-hidden="true" class="lead">&times;</span> -->
            <span class="material-icons"> close </span>
          </button>
        </div>
        <div class="row m-0 p-0">
            <div class="col-6 m-0 pl-2 pr-2">
                <p class="mb-0 boldDefault"> START DATE </p>
                <datepicker
                    v-model="startDate"
                    :value="startDate2"
                    :class="['p-2 pl-3 form-control bg-white pr-3 border w-100 m-0 regularM test']"
                    style="border-radius: 14px;"
                    @focus="start_focus = true"
                    @blur="start_focus = false"
                />
            </div>
            <div class="col-6 m-0 pr-2 pl-2">
                <p class="mb-0 boldDefault"> END DATE </p>
                <datepicker
                    v-model="endDate"
                    :value="endDate2"
                    class="test p-2 pl-3 pr-3 form-control bg-white border w-100 m-0 regularM"
                    style="border-radius: 14px"
                />
            </div>
        </div>
        <div class="row m-0 p-0 mt-2">
            <div class="col-6 m-0 pl-2 pr-2">
                <p class="mb-0 boldDefault"> START TIME </p>
                <input type="text"
                v-model="startTime"
                
                class="form-control test p-2 pl-3 pr-3 border w-100 m-0 regularM"
                style="border-radius: 14px">
            </div>
            <div class="col-6 m-0 pl-2 pr-2">
                <p class="mb-0 boldDefault"> END TIME </p>
                <input type="text"
                v-model="endTime"
                class="form-control p-2 pl-3 pr-3 border w-100 m-0 regularM"
                style="border-radius: 14px">
            </div>
        </div>
        <div class="row m-0 p-1 mt-2">
            <p class="mb-0 boldDefault"> EVENT NAME </p>
            <input type="text" placeholder="Enter event name"
            v-model="eventTitle"
            class="form-control p-2 pl-3 pr-3 border w-100 m-0 regularM"
            style="border-radius: 14px">
        </div>

        <div class="row m-0 p-1 mt-2">
            <p class="mb-0 boldDefault"> DESCRIPTION </p>
            <textarea rows="4"
            type="text"
            v-model="eventDesc"
            class="form-control p-2 pl-3 pr-3 border w-100 m-0 regularM"
            style="border-radius: 14px"></textarea>
        </div>
        <div class="row m-0 p-1 mt-4">
            <button class="btn btn-outline-primary p-2 pl-3 pr-3 boldM mr-2"
            style="border-radius: 14px"> ADD ATTACHMENT </button>
            <button class="btn btn-primary p-2 pl-3 pr-3 boldM"
            style="border-radius: 14px" @click="addSched" data-dismiss="modal"> SAVE </button>
        </div>
      </div>
        
    </div>
  </div>
</template>

<script>
import Datepicker from 'vue3-datepicker'

// import Datepicker from 'vuejs-datepicker';
export default {
  props: [
    "curryear",
    "currmonth",
    "currday"
  ],
  components: {
    Datepicker,
  },
  data() {
    return {
      showModal: false,
      start_focus: false,
      startDate: new Date(),
      months: [
          "January",
          "Feburary",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
      ],
      startDate2: "",
      endDate2: "",
      endDate: new Date(),
      startTime: "10 : 40 AM",
      endTime: "11 : 40 AM",
      eventTitle: "Meeting with the Team",
      eventDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
    //   options: {
    //       format: 'DD/MM/YYYY',
    //       useCurrent: false,
    //     }   
    };
  },
  methods: {
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    },
    addSched() {
        var month = this.startDate.getMonth();
        var date = this.startDate.getDate();
        var year = this.startDate.getFullYear();
        var startDate = year+this.months[month]+date;
        var startTime = this.startTime.split(" ")
        startTime = startTime[0] + " " + startTime[3];
        this.$emit('addSched', startDate, startTime, this.eventTitle)
    }
  },
  mounted() {
        console.log("bruh")
        this.startDate = new Date();
        var month = this.startDate.getMonth();
        var date = this.startDate.getDate();
        var year = this.startDate.getFullYear();
        console.log(month, date, year);
        this.startDate2 = this.months[month] + " " + date + ", " + year;
        this.endDate2 = this.months[month] + " " + date + ", " + year;
  },
  watch: {
      startDate() {
        var month = this.startDate.getMonth();
        var date = this.startDate.getDate();
        var year = this.startDate.getFullYear();
        // console.log(month, date, year);
        this.startDate2 = this.months[month] + " " + date + ", " + year;
      },
      endDate() {
        var month = this.startDate.getMonth();
        var date = this.startDate.getDate();
        var year = this.startDate.getFullYear();
        // console.log(month, date, year);
        this.endDate2 = this.months[month] + " " + date + ", " + year;
      }
  },
};
</script>

<style scoped>
/* .inputBox {
    border-radius: 14px !important;
    padding: 15px !important;
} */

/* input[type="text"],
select.form-control {
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid #3aafa9;
  border-radius: 14px !important;
} */

input[type="text"]:focus,
select.form-control:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 2.5px solid #3aafa9 !important;
  border-radius: 14px !important;
}


textarea[type="text"]:focus,
select.form-control:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 2.5px solid #3aafa9 !important;
  border-radius: 14px !important;
}
/* 
form-control:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 2px solid #3aafa9 !important;
  border-radius: 14px !important;
} */



/* input[type="text"]:focus,
select.form-control.notSearch:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 2px solid #3aafa9;
} */


</style>