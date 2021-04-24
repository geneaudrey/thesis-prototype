<template>
<div class="row m-0 p-0" style="width: 100%; min-height: 100vh">
    <div class="col-2 m-0 p-0" style="max-width: 240px;">
        <Sidebar :active='1'/>
    </div>
    <div class="col-10 pl-4 pt-3 d-flex flex-column" style="min-height: 100vh">
        <div class="input-group shadow-sm" style="width: 20%">
            <div class="input-group-prepend">
                <span class="input-group-text pr-1 border-0" style="background: #ffffff"><i class="fas fa-search" style="color:rgba(0,0,0,0.3)"></i></span>
            </div>
            <input type="text" class="form-control form-control-sm border-0 pt-2 pb-2 pl-1" placeholder="Search..." >
        </div>
        <div class="card border-0 w-100 flex-grow-1 mt-3 mr-2 mb-2 d-flex justify-content-center align-items-center text-center">
            <div v-if="process == 'applications'">
                <img :src="applicationDone" class="icon" style="max-width: 374px" />
                <p class="h2 mb-4"> ALL SET UP! </p>
                <p class="regularM mb-0" style="max-width: 600px"> You have taken one small step towards your goal. Be proud of it! The company will now assess your resume before proceeding to the next step.
                </p>
                <p class="regularM mb-0"> You got this in the bag! </p>

                <button class="btn btn-primary boldDefault m-4 p-2" @click="$router.push('/dashboard')"> Back to Dashboard </button>
                <p class="regularDefault"> Want to edit your profile?  <a class="text-primary" style="cursor: pointer" @click="$router.push($router.currentRoute._rawValue.path.substring(0, $router.currentRoute._rawValue.path.length - '/complete'.length -1))"> Click here </a> </p>
            </div>
            <div v-if="process == 'assessment'">
                <img :src="assessmentDone" class="icon" style="max-width: 374px"/>
                <p class="h2 mb-4"> YOU PASSED! </p>
                <p class="regularM mb-0" style="max-width: 600px"> You just passed the assessment by your chosen company. Congrats! 

                </p>
                <p class="regularM mb-0"> Now all you need to do is schedule an interview with them.  </p>
                <p class="regularM mb-0"> Go get them, tiger!  </p>
                <button class="btn btn-primary boldDefault m-4 p-2" @click="$router.push('/dashboard')"> Back to Dashboard </button>
            </div>
            <div v-if="process == 'interviews'">
                <img :src="interviewDone" class="icon" style="max-width: 374px"/>
                <p class="h2 mb-4"> ALMOST THERE! </p>
                <p class="regularM mb-0" style="max-width: 600px"> Great job on the interview! We hope that you were able to prepare for the questions. All you need to do now is wait. Please check your notifications and the proccess page for this internship from time to time for updates about your acceptance.  
                </p>
                <button class="btn btn-primary boldDefault m-4 p-2" @click="$router.push('/dashboard')"> Back to Dashboard </button>
            </div>
        </div>
        
    </div>
        
</div>
</template>

<script>
import applicationDone from "../assets/For Gene/Illustrations/ENABLE UPDATED-07.svg"
import assessmentDone from "../assets/For Gene/Illustrations/ENABLE UPDATED-08.svg"
import interviewDone from "../assets/For Gene/Illustrations/ENABLE UPDATED-06.svg"
import Sidebar from "./Sidebar.vue"
export default {
    components: {
        Sidebar,
    },
    setup() {
        return {
            applicationDone,
            assessmentDone,
            interviewDone
        }
    },
    props: {
        process: String
    },
    created(){
    }
}
</script>

<style scoped>

</style>