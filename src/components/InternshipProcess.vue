<template>
  <div class="Process">
    <div class="row m-0 p-0" style="width: 100%">
        <div class="col-2 m-0 p-0" style="max-width: 240px;">
            <Sidebar :active='1'/>
        </div>
        
        <div class="col-10 m-0 p-0 pl-4 pt-3">
            <div class="input-group shadow-sm" style="width: 20%">
                <div class="input-group-prepend">
                    <span class="input-group-text pr-1 border-0" style="background: #ffffff"><i class="fas fa-search" style="color:rgba(0,0,0,0.3)"></i></span>
                </div>
                <input type="text" class="form-control form-control-sm border-0 pt-2 pb-2 pl-1" placeholder="Search..." >
            </div>
            <p class="pt-4 h1 text-titleBlack"> PROCESS </p>
            <div class="row m-0 p-0">
                <div class="col-9 ml-0 pl-0">
                    <div class="card dashCard mb-4">
                        <div class=" imageBorder" style="background: #C4C4C4; height: 225px; position: relative;"> 
                            <span class="title h1 noThick p-1 pl-5 pr-5 text-white"> 
                                {{ internship.company }} {{ internship.position + "ship"}}
                            </span>
                        </div>
                        <div class="pl-5 pr-5 pb-3 pt-3 mt-3"> 
                            <p class="h2 text-darkPrimary"> What is the process for application? </p>
                            <p v-for="par in internship.process.desc" :key="par" class="paragraph pt-3">
                                {{ par }}
                            </p>
                            <p class="paragraphBold text-primary pt-3"> Check this page and your notifications to see updates in your progress. </p>
                        </div>
                        <div class="row m-0 p-0 pl-4 pr-4 ml-auto mr-auto mb-4">
                            <div v-for="(step, index) in internship.process.steps" :key="index" class="row m-0 p-0"> 
                                <div class="col m-0 p-0">
                                    <div class="circle text-white mt-auto" />
                                    <p class="text-center mt-3 boldL text-primary"> {{step.toUpperCase()}} </p>
                                    <p class="text-center mt-3 regularS" style="width: 128px; min-height: 101px"> {{ steps[step].desc }} </p>
                                    <button class="btn btn-primary boldS rounded-pill pt-2pb-2 w-100"> PROCEED </button>
                                </div>
                                <span class="material-icons text-primary mt-5" v-if="index < internship.process.steps.length -1" style="font-size: 50px">
                                    arrow_forward
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card border-0 dashCard row m-0 p-4 mb-3">
                        <div class="row m-0 p-0">
                            <div class="row m-0 p-0 profilePic ml-auto mr-auto" />
                            <p class="w-100 text-center m-0 p-0 h4 mb-0 mt-3"> Praise Lam </p>
                            <p class="w-100 text-center m-0 pb-4 regularM border border-top-0 border-left-0 border-right-0"> Designer </p>
                        </div>
                        <div class="row m-0 p-0 ml-1 mr-auto mt-4">
                            <span class="material-icons p-2 border text-primary" style="border-radius: 100px">
                                call
                            </span>
                            <span class="mt-auto mb-auto regularM ml-3"> +639 xx xxx xxxx </span>
                        </div>
                        <div class="row m-0 p-0 ml-1 mr-auto mt-3">
                            <span class="material-icons p-2 border text-primary" style="border-radius: 100px">
                                mail
                            </span>
                            <span class="mt-auto mb-auto regularM ml-3"> xxx.gmail.com </span>
                        </div>
                    </div>
                    <div class="card border-0 dashCard row m-0 p-0 mb-3 p-4">
                        <div class="row m-0 p-0 w-100">
                        <p class="col ml-0 p-0 h4 mb-3"> Portfolios </p>
                        <span class="material-icons d-flex flex-row-reverse">
                            more_vert
                        </span>
                        </div>
                        <div class="row m-0 p-0 mb-3" style="border-radius:100px; background: #FBFBFB">
                            <div class="col-auto m-0 p-0 socMed" style="background: #3D6AD6"> </div>
                            <div class="col regularM mt-auto mb-auto"> /presu.me </div>
                        </div>
                        <div class="row m-0 p-0 mb-3" style="border-radius:100px; background: #FBFBFB">
                            <div class="col-auto m-0 p-0 socMed" style="background: #EA518D"> </div>
                            <div class="col regularM mt-auto mb-auto"> /presu.png </div>
                        </div>
                        <div class="row m-0 p-0 mb-3" style="border-radius:100px; background: #FBFBFB">
                            <div class="col-auto m-0 p-0 socMed" style="background: #0073B1"> </div>
                            <div class="col regularM mt-auto mb-auto"> /presu.works </div>
                        </div>
                        <div class="row m-0 p-0" style="border-radius:100px; background: #FBFBFB">
                            <div class="col-auto m-0 p-0 socMed" style="background: #FF0000"> </div>
                            <div class="col regularM mt-auto mb-auto"> /presu.films </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        
        
        <!-- {{ type }} -->
        
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue"
export default {
  name: "Process",
  components: {
      Sidebar,
  },
  props: {
    id: String,
  },
  data() {
    return {
        internship: {},
        steps: {
            applications: {
                desc: "This is the first step in the process, and gives you an opportunity to tell the company all about yourself"
            },
            assessment: {
                desc: "The assessments are based on the company of your choosing and helps determine if they are a good fit for you"
            },
            interviews: {
                desc: "Almost there! At this stage, they would like to get to know you better and gives you a chance to ask them questions"
            },
            offer: {
                desc: "Congratulations for getting this far! The company looks forward to welcoming you."
            }
        }
    }
},
  created() {
      this.internship = this.$store.state.allInternships[this.id];
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
    position: absolute;
  bottom: 0;
  left: 0;
}
.circle {
    width: 129px;
    height: 129px;
    border-radius: 100px;
    background: #3AAFA9;

}

.profilePic {
    width: 116.08px;
    height: 116.08px;
    border-radius: 100px;
    background: #C4C4C4;
}

.socMed {
    height: 38.49px;
    width: 38.49px;
    border-radius: 100px;
}
</style>
