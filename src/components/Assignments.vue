<template>
  <div class="card border-0 shadow-sm">
    <div class="card-header border-0 h6">
      <b> {{ type == 0 ? "UPCOMING ASSIGNMENTS" : "PAST ASSIGNMENTS" }} </b>
    </div>
    <div class="card-body p-0 pl-2 pr-3 pb-2">
      <div
        :class="['card border-bottom-0 border-left-0 border-right-0 p-3 pl-4 pr-4', {'border-top-0' : item.id == 0}]"
        style="border-radius: 0px; border-width: 1.5px !important; border-color: #B7BBBC !important"
        v-for="item in assignments"
        :key="item.id"
      >
        <div class="row m-0 p-0 lead">
          {{ item.title }}
        </div>
        <div class="row m-0 p-0 pt-1">
          <span class="boldM text-muted pr-2 border border-top-0 border-bottom-0 border-left-0 border-muted" style="border-width: 2px !important; border-color: #B7BBBC !important"> {{ type == 0 ? "Available" : "Closed" }} </span>
          <!-- <span class="mr-2 ml-2 text-muted"> I </span> -->
          <span class="regularM text-muted pl-2 pr-2 border border-top-0 border-bottom-0 border-left-0" style="border-width: 2px !important; border-color: #B7BBBC !important"> Due {{ item.availableUntil }} </span>
          <!-- <span class="mr-2 ml-2 text-muted"> I </span> -->
          <span :class="[{ 'text-success': item.status == 'Submitted'}, 
          {'text-danger': item.status == 'Missing' || item.status == 'Late' },
          {'text-muted': item.status == 'Missing' || item.status == 'Incomplete' },
          'boldM pl-2'
          ]"> {{ item.status }} </span>
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
