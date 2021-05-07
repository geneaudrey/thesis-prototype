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
                    :locale="locale"
                    :upperLimit="to"
                    :lowerLimit="from"
                    class="p-2 pl-3 pr-3 border w-100 m-0 regularM"
                    style="border-radius: 14px"
                />
            </div>
            <div class="col-6 m-0 pr-2 pl-2">
                <p class="mb-0 boldDefault"> END DATE </p>
                <datepicker
                    v-model="endDate"
                    :locale="locale"
                    :upperLimit="to"
                    :lowerLimit="from"
                    class="p-2 pl-3 pr-3 border w-100 m-0 regularM"
                    style="border-radius: 14px"
                />
            </div>
        </div>
        <div class="row m-0 p-0 mt-2">
            <div class="col-6 m-0 pl-2 pr-2">
                <p class="mb-0 boldDefault"> START DATE </p>
                <datepicker
                    v-model="startDate"
                    :locale="locale"
                    :upperLimit="to"
                    :lowerLimit="from"
                    class="p-2 pl-3 pr-3 border w-100 m-0 regularM"
                    style="border-radius: 14px"
                />
            </div>
            <div class="col-6 m-0 pl-2 pr-2">
                <p class="mb-0 boldDefault"> END DATE </p>
                <datepicker
                    v-model="endDate"
                    :locale="locale"
                    :upperLimit="to"
                    :lowerLimit="from"
                    class="p-2 pl-3 pr-3 border w-100 m-0 regularM"
                    style="border-radius: 14px"
                />
            </div>
        </div>
        <div class="row m-0 p-1 mt-2">
            <p class="mb-0 boldDefault"> EVENT NAME </p>
            <input type="text" placeholder="Enter event name"
            v-model="eventTitle"
            class="p-2 pl-3 pr-3 border w-100 m-0 regularM"
            style="border-radius: 14px">
        </div>

        <div class="row m-0 p-1 mt-2">
            <p class="mb-0 boldDefault"> DESCRIPTION </p>
            <textarea rows="4"
            v-model="eventDesc"
            class="p-2 pl-3 pr-3 border w-100 m-0 regularM"
            style="border-radius: 14px"></textarea>
        </div>
        <div class="row m-0 p-1 mt-4">
            <button class="btn btn-outline-primary p-2 pl-3 pr-3 boldM mr-2"
            style="border-radius: 14px"> ADD ATTACHMENT </button>
            <button class="btn btn-primary p-2 pl-3 pr-3 boldM"
            style="border-radius: 14px"> SAVE </button>
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
    Datepicker
  },
  data() {
    return {
      showModal: false,
      startDate: new Date(),
      endDate: new Date(),
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
  },
  created() {
      console.log("bruh")
  },
  watch: {},
};
</script>

<style scoped>
.inputBox {
    border-radius: 14px !important;
    padding: 15px !important;
}

input[type="text"] {
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 2px solid #3aafa9;
  border-radius: 14px !important;
}

</style>