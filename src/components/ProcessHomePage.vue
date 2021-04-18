<template>
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
                    <button v-if="step == 'applications' || step == 'offer'" class="btn btn-primary boldS rounded-pill pt-2pb-2 w-100" @click="openStep(step)"> PROCEED </button>
                    <button v-else class="btn btn-primary boldS rounded-pill pt-2pb-2 w-100" data-toggle="modal" data-target="#modal" @click="openedStep = step"> PROCEED </button>
                    <Modal ref="modal" id="modal" :step="openedStep"/>

                </div>
                <span class="material-icons text-primary mt-5" v-if="index < internship.process.steps.length -1" style="font-size: 50px">
                    arrow_forward
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from "./InternshipModal.vue"
export default {
    components: {
        Modal
    },
    props: [
        "internship",
        "id"
    ],
    data() {
     return {
      openedStep: "",
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
    methods: {
        openStep(step) {
            this.$router.push("/allInternships/"+this.id+"/"+step);
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            
        },
    }
}
</script>

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
</style>