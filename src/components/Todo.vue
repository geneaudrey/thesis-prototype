<template>
    <div class="card border-0 shadow-sm">
        <div class="card-header border-0"> <b> To-do </b></div>
        <div class="card-body p-0">
            <div class="card" v-for="item in todolist" :key="item.id">
                <div class="row m-0 p-2">
                    <div class="col-2 mt-auto mb-auto">
                        <button type="button" class="btn btn-outline-primary text-light bg-secondary"> <i class="fas fa-star"></i> </button>
                    </div>
                    <div class="col-7 mt-auto mb-auto">
                        <p class="mb-1"> {{item.task}} </p>
                        <p class="mb-0"> {{item.subj}} </p>
                    </div>
                    <div class="col-3 mt-auto mb-auto">
                        <p class="mb-0"> Deadline: </p>
                        <p class="mb-0"> {{item.deadline}} </p>
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
                {id: 1, task: "Lorem Ipsum", subj:"Class A", deadline: "03/03/21"},
                {id: 2, task: "Lorem Ipsum", subj:"Class B", deadline: "03/03/21"},
                {id: 3, task: "Lorem Ipsum", subj:"Class C", deadline: "03/03/21"},
            ]
        }
    },
    created() {
    },
}
</script>

<style scoped>

</style>