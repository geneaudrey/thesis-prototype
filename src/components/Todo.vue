<template>
    <div class="card border-0 shadow-sm">
        <div class="card-header border-0"> <b> To-Do </b></div>
        <div class="card-body p-0">
            <div class="card border-bottom-0 border-left-0 border-right-0" v-for="item in todolist" :key="item.id">
                <div class="row m-0 p-2">
                    <div class="col-1 mt-auto mb-auto p-1">
                        <button type="button" class="btn text-white bg-gray p-0 pl-1 pr-1"> <i class="fas fa-star"></i> </button>
                    </div>
                    <div class="col-8 mt-auto mb-auto">
                        <p class="mb-1"> {{item.task}} </p>
                        <p class="mb-0 text-textSecondary"> {{item.subj}} </p>
                    </div>
                    <div class="col-3 mt-auto mb-auto">
                        <p class="mb-0 text-textSecondary"> Deadline: </p>
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