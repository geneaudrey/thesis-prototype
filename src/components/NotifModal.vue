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
        <div class="modal-header border-0 pt-2 pl-0 mb-2 pb-2">
          <span
            class="modal-title h4 p-1 pl-2 pr-2 bg-primary text-white"
            id="exampleModalLongTitle2"
            style="border-radius: 9px"
          >
            NOTIFICATIONS
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
        <div class="modal-body m-0 p-0 mt-n4">
          <div class="p-0" v-for="(notif, index) in notifs" :key="index">
            <p
              :class="[
                'mt-3 pt-3 border border-bottom-0 border-left-0 border-right-0 regularM text-primary mb-0',
                { 'border-top-0': index == 0 },
              ]"
            >
              {{ notif.class }}
            </p>
            <p class="mb-0 boldDefault">{{ notif.message }}</p>
            <p class="mb-0 regularS">{{ notif.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notifs: [
        {
          class: "CLASS A",
          message: "New Message",
          date: "03/03/23",
        },
        {
          class: "CLASS A",
          message: "New Activity",
          date: "03/03/23",
        },
        {
          class: "CLASS A",
          message: "New Assignment",
          date: "03/03/23",
        },
        {
          class: "CLASS A",
          message: "New Message",
          date: "03/03/23",
        },
        {
          class: "CLASS A",
          message: "New Activity",
          date: "03/03/23",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
