<template>
    <div class="card border-0 shadow-sm p-4 dashCard">
        <div class="row p-0 m-0">
            <button type="button" :class="[{'text-black' : active == 0}, {'text-deselected' : active !=0}, 'btn btn-outline-primary border-0 p-1 m-1 h3']"  @click="active=0">  My Courses </button>
            <button type="button" :class="[{'text-black' : active == 1}, {'text-deselected' : active !=1}, 'btn btn-outline-primary border-0 p-1 m-1 h3']"  @click="active=1"> My Internships </button>
            <button type="button" :class="[{'text-black' : active == 2}, {'text-deselected' : active !=2}, 'btn btn-outline-primary border-0 p-1 m-1 h3']"  @click="active=2">  All Courses </button>
            <button type="button" :class="[{'text-black' : active == 3}, {'text-deselected' : active !=3}, 'btn btn-outline-primary border-0 p-1 m-1 h3']"  @click="active=3">  All Internships </button>
        </div>
        <div class="row p-0 m-0">
            <div class="card bg-secondary border-0 p-2 w-100 mt-3 dashCardItem" v-for="item in activated" :key="item.id">
                <div class="row p-0 m-0">
                    <div class="col-flex">
                        <div class="card border-0 dashDP" style="width: 80px; height: 80px">
                        </div>
                    </div>
                    <div class="col-3 mt-auto mb-auto">
                        <p class="mb-1"> <b> {{item.subject}} </b> </p>
                        <p class="mb-0"> by {{item.prof}} </p>
                    </div>
                    <div class="col mt-auto mb-auto pl-0 text-primary">
                        <div v-if="active==0 || active==1">
                            <i class="fas fa-bullhorn fa-lg p-3"></i>
                            <i class="far fa-file-alt fa-lg p-3"></i>
                            <i class="far fa-comment-alt fa-lg p-3"></i>
                        </div>
                        <div class="text-primary pl-3" v-if="active==2"> {{item.length}} 

                        </div>
                    </div>
                    <div class="col-flex ml-auto mt-auto mb-auto mr-3">
                        <button type="button" class="btn btn-primary mr-3" v-if="active == 0"> @ </button>
                        <button type="button" class="btn btn-primary" v-if="active == 0 || active == 1"> Continue </button>
                        <button type="button" class="btn btn-outline-primary border-2" v-if="active == 2"> View Course </button>
                        <button type="button" class="btn btn-outline-primary border-2" v-if="active == 3"> View Internship </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DashCard",
    data() {
        return {
            myCourses: [
            { id: 1, subject: 'Self-Advocacy', prof:'Lorem Ipsum' },
            { id: 2, subject: 'Lorem Ipsum', prof:'Lorem Ipsum' },
            { id: 3, subject: 'Lorem Ipsum', prof:'Lorem Ipsum' },
            ],
            myInternships: [
            { id: 1, subject: 'Booky', prof:'Lorem Ipsum' },
            { id: 2, subject: 'Lorem Ipsum', prof:'Lorem Ipsum' },
            { id: 3, subject: 'Lorem Ipsum', prof:'Lorem Ipsum' },
            ],
            allCourses: [
            { id: 1, subject: 'Lorem Ipsum', prof:'Lorem Ipsum', length: "6h 30min" },
            { id: 2, subject: 'Lorem Ipsum', prof:'Lorem Ipsum', length: "6h 30min" },
            { id: 3, subject: 'Lorem Ipsum', prof:'Lorem Ipsum', length: "6h 30min" },
            { id: 4, subject: 'Lorem Ipsum', prof:'Lorem Ipsum', length: "6h 30min" },
            { id: 5, subject: 'Lorem Ipsum', prof:'Lorem Ipsum', length: "6h 30min" },
            ],
            allInternships: [
            { id: 1, subject: 'Lorem Ipsum', prof:'Lorem Ipsum' },
            { id: 2, subject: 'Lorem Ipsum', prof:'Lorem Ipsum' },
            { id: 3, subject: 'Lorem Ipsum', prof:'Lorem Ipsum' },
            { id: 4, subject: 'Lorem Ipsum', prof:'Lorem Ipsum' },
            { id: 5, subject: 'Lorem Ipsum', prof:'Lorem Ipsum' },
            ],
            activated: [],
            active: 0
        }
    },
    created() {
      this.activated = this.myCourses;  
    },
    watch: {
        active(){
            if (this.active == 0) {
                this.activated = this.myCourses
            }
            else if (this.active == 1) {
                this.activated = this.myInternships
            }
            else if (this.active == 2) {
                this.activated = this.allCourses
            }
            else if (this.active == 3) {
                this.activated = this.allInternships
            }
        }
    }
}
</script>

<style scoped>

</style>