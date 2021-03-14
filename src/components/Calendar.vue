<template>
    <div class="card border-0 shadow-sm calendar bg-primary text-white pt-4 pb-4">
        <div class="row m-0 p-0 pr-3 pl-3">
            <div class="col-auto">
                <i class="fas fa-chevron-left h6"></i>
            </div>
            <div class="col text-center h5">
                March
            </div>
            <div class="col-auto">
                <i class="fas fa-chevron-right h6"></i>
            </div>
        </div>
        <div class="row m-0 p-0 mt-4 mb-3">
            <div :class="[{'pl-4' : index == 0}, {'pr-4' : index == 6}, 'col text-center text-lightgray']" v-for="(day, index) in daysOfTheWeek" :key="index">
                <p class="h6"> {{day}} </p>
            </div>
        </div>
        <div class="row m-0 p-0 mt-1" v-for="(week, index) in daysOfTheMonth" :key="index">
            <div :class="[{'pl-4' : index == 0}, {'pr-4' : index == 6}, {'text-white' : (day.selected || index < 5) && !day.prevNext }, {'text-lightgray' : (!day.selected && index >= 5) || day.prevNext}, {'font-weight-bold selected' : day.selected}, {'selectedFront' : day.selected == 1}, {'selectedEnd' : day.selected == 10}, 'col text-center pt-2 pb-2']" v-for="(day, index) in week" :key="index">
                {{day.date}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Todo",
    data() {
        return {
            daysOfTheWeek: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
            daysOfTheMonth: [
                [ {date: 29, selected: false, prevNext: true},
                {date: 30, selected: false, prevNext: true},
                {date: 31, selected: false, prevNext: true},
                {date: 1, selected: false},
                {date: 2, selected: false},
                {date: 3, selected: false},
                {date: 4, selected: false},
                ],
                [ {date: 5, selected: false},
                {date: 6, selected: false},
                {date: 7, selected: false},
                {date: 8, selected: false},
                {date: 9, selected: false},
                {date: 10, selected: false},
                {date: 11, selected: false},
                ],
                [ {date: 12, selected: false},
                {date: 13, selected: false},
                {date: 14, selected: 1},
                {date: 15, selected: 2},
                {date: 16, selected: 3},
                {date: 17, selected: 4},
                {date: 18, selected: 5},
                ],
                [ {date: 19, selected: 6},
                {date: 20, selected: 7},
                {date: 21, selected: 8},
                {date: 22, selected: 9},
                {date: 23, selected: 10},
                {date: 24, selected: false},
                {date: 25, selected: false},
                ],
                [ {date: 26, selected: false},
                {date: 27, selected: false},
                {date: 28, selected: false},
                {date: 29, selected: false},
                {date: 30, selected: false},
                {date: 1, selected: false, prevNext: true},
                {date: 2, selected: false, prevNext: true},
                ]
            ]
        }
    },
    created() {
    },
}
</script>

<style scoped>
.selected {
    background: rgb(43,122,120,1);
}

.selectedFront {
    border-radius: 100px 0px 0px 100px;
}

.selectedEnd {
    border-radius: 0 100px 100px 0;
}

</style>