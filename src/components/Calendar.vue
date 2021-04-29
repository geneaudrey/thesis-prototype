<template>
  <div class="card border-0 shadow-sm calendar bg-primary text-white pt-4 pb-5">
    <div class="row m-0 p-0 pr-4 pl-4">
      <div class="col-auto h6">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="col text-center h6">March</div>
      <div class="col-auto h6">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
    <div class="row m-0 p-0 mt-4 mb-3">
      <div
        :class="[
          { paddingLeft: index == 0 },
          { paddingRight: index == 6 },
          'col text-center text-lightgray',
        ]"
        v-for="(day, index) in daysOfTheWeek"
        :key="index"
      >
        <p class="regularS">{{ day }}</p>
      </div>
    </div>
    <div
      class="row m-0 p-0 mt-2"
      v-for="(week, index) in daysOfTheMonth"
      :key="index"
    >
      <div
        :class="[
          { paddingLeft: index == 0 },
          { paddingRight: index == 6 },
          { 'text-white': (day.selected || index < 5) && !day.prevNext },
          { 'text-lightgray': (!day.selected && index >= 5) || day.prevNext },
          { 'font-weight-bold selected': day.selected },
          { selectedFront: day.selected == 1 },
          { selectedEnd: day.selected == 10 },
          'col text-center paddingCal regularM',
        ]"
        v-for="(day, index) in week"
        :key="index"
      >
        {{ day.date }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      daysOfTheWeek: ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"],
      daysOfTheMonth: [
        [
          { date: 29, selected: false, prevNext: true },
          { date: 30, selected: false, prevNext: true },
          { date: 31, selected: false, prevNext: true },
          { date: 1, selected: false },
          { date: 2, selected: false },
          { date: 3, selected: false },
          { date: 4, selected: false },
        ],
        [
          { date: 5, selected: false },
          { date: 6, selected: false },
          { date: 7, selected: false },
          { date: 8, selected: false },
          { date: 9, selected: false },
          { date: 10, selected: false },
          { date: 11, selected: false },
        ],
        [
          { date: 12, selected: false },
          { date: 13, selected: false },
          { date: 14, selected: 1 },
          { date: 15, selected: 2 },
          { date: 16, selected: 3 },
          { date: 17, selected: 4 },
          { date: 18, selected: 5 },
        ],
        [
          { date: 19, selected: 6 },
          { date: 20, selected: 7 },
          { date: 21, selected: 8 },
          { date: 22, selected: 9 },
          { date: 23, selected: 10 },
          { date: 24, selected: false },
          { date: 25, selected: false },
        ],
        [
          { date: 26, selected: false },
          { date: 27, selected: false },
          { date: 28, selected: false },
          { date: 29, selected: false },
          { date: 30, selected: false },
          { date: 1, selected: false, prevNext: true },
          { date: 2, selected: false, prevNext: true },
        ],
      ],
    };
  },
  created() {},
};
</script>

<style scoped>
.selected {
  background: rgb(43, 122, 120, 1);
}

.selectedFront {
  border-radius: 100px 0px 0px 100px;
}

.selectedEnd {
  border-radius: 0 100px 100px 0;
}

.paddingLeft {
  padding-left: 8%;
}

.paddingRight {
  padding-right: 8%;
}

.paddingCal {
  padding-top: 3%;
  padding-bottom: 3%;
}
</style>
