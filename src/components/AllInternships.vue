<template>
  <div class="AllInternships w-100">
    <div class="card w-100 p-3 dashCard shadow border-0">
        <div class="row m-0 p-0 ">
            <div class="col-auto p-0 m-0 pr-2 mr-2 border border-left-0 border-top-0 border-bottom-0">
                <div class="dropdown">
                    <button class="btn dropdown-toggle boldDefault" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Around you
                        <span class="material-icons align-middle">
                            expand_more
                        </span>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Other Options</a>
                    </div>
                </div>
            </div>
            <div class="col d-flex flex-column m-0 p-0">
                <input type="text" class="form-control border-0 pt-2 pb-2 pl-1 regularDefault" placeholder="Search by Title, Company, or any jobs keyword..." >
            </div>
            <div class="col-auto m-0 p-0 ml-2">
                <button class="btn btn-secondary rounded-pill text-primary"> 
                    <span class="material-icons align-middle" style="font-size:16px"> filter_alt </span>
                    <span class="align-middle boldM"> FILTER </span> 
                </button>
            </div>
            <div class="col-auto m-0 p-0 ml-2">
                <button class="btn btn-primary rounded-pill"> 
                    <span class="material-icons align-middle" style="font-size:16px"> search </span>
                    <span class="align-middle boldM"> FIND </span> 
                </button> 
            </div>
        </div>
    </div>
    <div class="row m-0 p-0 mt-5">
        <div class="col">
            <p class="boldDefault mb-0"> Showing 15 results </p>
            <p> Based on your preferences </p>
        </div>
        <div class="d-flex flex-row-reverse">
            <div class="btn btn-primary rounded-circle m-auto boldM" style="height:38.66px; width: 38.66px">
                <span class="material-icons align-middle" style="font-size:16px"> search </span>
            </div>
            <div class="btn btn-outline-primary rounded-circle mt-auto mb-auto mr-2 boldM" style="height:38.66px; width: 38.66px">
                <span class="material-icons align-middle" style="font-size:16px"> search </span>
            </div>
            <div class="dropdown mt-auto mb-auto mr-4">
                <div class="btn btn-outline-primary rounded-pill boldM dropdown-toggle" type="button" id="dropdownNewest" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="material-icons align-middle">
                        sort
                    </span>
                    Newest
                    <span class="material-icons align-middle">
                        expand_more
                    </span>
                </div>
                <div class="dropdown-menu" aria-labelledby="dropdownNewest">
                    <a class="dropdown-item" href="#">Oldest</a>
                </div>
            </div>
        </div>
    </div>

    <div class="row m-0 p-0" v-for="row in Math.ceil(allInternships.length/3)" :key=row>
        <div :class="['col p-0 mb-4 pb-1', {'pr-3 mr-3' : col < 3}]" v-for="col in 3" :key="col">
            <div class="card dashCard border-0 shadow m-0 p-3" v-if="(row-1)*3+(col-1) < allInternships.length">
                <div class="row m-0 p-0">
                    <div class="col p-0 m-0">
                        <p class="boldDefault mb-0 text-primary"> {{ allInternships[(row-1)*3+(col-1)].company }} </p>
                        <p class="lead mb-0"> {{ allInternships[(row-1)*3+(col-1)].position }} </p>
                    </div>
                    <div class="d-flex flex-row-reverse">
                        <div style="width: 47.69px; height: 47.34px; background: black" />
                    </div>
                </div>
                <div class="row m-0 p-0 mt-4">
                    <p class="regularM text-desc"> {{ allInternships[(row-1)*3+(col-1)].desc }} </p>
                </div>

                <div class="row m-0 p-0 mt-3">
                    <button class="btn btn-primary rounded-pill boldS pt-2 pb-2 pr-3 pl-3" @click="openInternship((row-1)*3+(col-1))"> More Information </button>
                </div>
            </div>
        </div>
    
    </div>
    
  </div>
</template>

<script>
export default {
  name: "AllInternships",
  components: {
  },
  data() {
    return {
        allInternships: []
    }
},
created() {
    this.allInternships = this.$store.state.allInternships
},
methods: {
    openInternship(index) {
        this.$router.push("/allInternships/"+ index);
    }
}
//   props: {
//     msg: String
//   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .divider {
    width: 0.79px;
    height: 100%;
    background: #E5E5E5;
} */

.dropdown-toggle::after {
    display: none;
}
</style>
