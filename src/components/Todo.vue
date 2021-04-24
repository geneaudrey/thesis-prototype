<template>
    <div class="card border-0 shadow-sm">
        <div class="card-header border-0 h6"> <b> To-Do </b></div>
        <div class="card-body p-0">
            <div class="card border-bottom-0 border-left-0 border-right-0" v-for="item in todolist" :key="item.id">
                <div class="row m-0 p-2 pt-3 pb-3">
                    <div class="col-1 mt-auto mb-auto p-1">
                        <button type="button" :class="[{'selected' : item.done == 1}, {'deselected' :item.done == 0}, 'btn text-white p-0 pl-1 pr-1']" @click="item.done = !item.done"> <i class="fas fa-star"></i> </button>
                    </div>
                    <div class="col-7 mt-auto mb-auto">
                        <p class="mb-1 regularDefault text-black"> {{item.task}} </p>
                        <p class="mb-0 text-textSecondary regularM"> {{item.subj}} </p>
                    </div>
                    <div class="col-4 mt-auto mb-auto pr-1 pl-4">
                        <p class="mb-0 pb-1 text-textSecondary regularM"> Deadline: </p>
                        <p class="mb-0 regularM"> {{item.deadline}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Todo",
    data() {
        return {
            todolist: [
                {id: 1, task: "Submit Assignments", subj:"Class A", deadline: "03/03/2021", done: 0},
                {id: 2, task: "Discuss with Company A", subj:"Class B", deadline: "03/03/2021", done: 0},
                {id: 3, task: "Presentation with Daryll", subj:"Class C", deadline: "03/03/2021", done: 0},
            ]
        }
    },
    created() {
    },
}
</script>

<style scoped>
.selected {
    background: rgb(58,175,169,1);
}
.deselected {
    background: rgb(245,245,247,1);
}
</style>