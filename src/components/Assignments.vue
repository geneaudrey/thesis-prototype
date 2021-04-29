<template>
  <div class="card border-0 shadow-sm">
    <div class="card-header border-0 h6">
      <b> {{ type == 0 ? "Upcoming Assignments" : "Past Assignments" }} </b>
    </div>
    <div class="card-body p-0">
      <div
        class="card border-bottom-0 border-left-0 border-right-0 p-4"
        v-for="item in assignments"
        :key="item.id"
      >
        <div class="row m-0 p-0">
          {{ item.title }}
        </div>
        <div class="row m-0 p-0">
          <span> Available until {{ item.availableUntil }} </span>
          <span class="mr-2 ml-2"> I </span>
          <span> Due {{ item.deadline }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    type: Number,
    assignments: Array,
  },
  data() {
    return {
      todolist: [
        {
          id: 1,
          task: "Lorem Ipsum",
          subj: "Class A",
          deadline: "03/03/2021",
          done: 0,
        },
        {
          id: 2,
          task: "Lorem Ipsum",
          subj: "Class B",
          deadline: "03/03/2021",
          done: 0,
        },
        {
          id: 3,
          task: "Lorem Ipsum",
          subj: "Class C",
          deadline: "03/03/2021",
          done: 0,
        },
      ],
    };
  },
  created() {},
};
</script>

<style scoped>
.selected {
  background: rgb(58, 175, 169, 1);
}
.deselected {
  background: rgb(245, 245, 247, 1);
}
</style>
