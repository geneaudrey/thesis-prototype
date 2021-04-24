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
                <input type="text" class="form-control form-control-sm border-0 pt-2 pb-2 pl-1 searchTextBoxSpecial" placeholder="Search..." >
            </div>
            <p class="pt-4 h1 text-titleBlack"> {{ process ? "APPLICATIONS" : "PROCESS"}} </p>
            <div class="row m-0 p-0">
                <div class="col-9 ml-0 pl-0" v-if="process == null">
                    <ProcessHomePage :internship="internship" :id="id" v-if="process == null" />
                </div>

                <div class="col-9 ml-0 pl-0" v-if="process == 'applications'">
                    <Applications />
                    
                </div>

                <div class="col-3" v-if="process != 'offer'">
                    <div class="card border-0 dashCard row m-0 p-4 mb-3">
                        <div class="row m-0 p-0">
                            <div class="row m-0 p-0 profilePic ml-auto mr-auto" />
                            <p class="w-100 text-center m-0 p-0 h4 mb-0 mt-3"> Praise Lam </p>
                            <p class="w-100 text-center m-0 pb-4 regularM border border-top-0 border-left-0 border-right-0"> Designer </p>
                        </div>
                        <div class="row m-0 p-0 ml-1 mr-auto mt-4">
                            <!-- <span class="material-icons p-2 border text-primary" style="border-radius: 100px">
                                call
                            </span> -->
                            <img :src="phone" class="p-2 border text-primary" style="border-radius: 100px"/>
                            <span class="mt-auto mb-auto regularM ml-3"> +639 xx xxx xxxx </span>
                        </div>
                        <div class="row m-0 p-0 ml-1 mr-auto mt-3">
                            <!-- <span class="material-icons p-2 border text-primary" style="border-radius: 100px">
                                mail
                            </span> -->
                            <img :src="email" class="p-2 border text-primary" style="border-radius: 100px"/>
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
                            <!-- <div class="col-auto m-0 p-0 socMed" style="background: #3D6AD6"> -->
                                <img :src="facebook" class="icon p-2 border-0 col-auto m-0 p-0" style="background: #3D6AD6; border-radius:100px"/>
                            <!-- </div> -->
                            <div class="col regularM mt-auto mb-auto"> /presu.me </div>
                        </div>
                        <div class="row m-0 p-0 mb-3" style="border-radius:100px; background: #FBFBFB">
                            <!-- <div class="col-auto m-0 p-0 socMed" style="background: #EA518D">  -->
                                <img :src="dribbble" class="icon p-2 border-0 col-auto m-0 p-0" style="background: #EA518D; border-radius:100px"/>
                            <!-- </div> -->
                            <div class="col regularM mt-auto mb-auto"> /presu.png </div>
                        </div>
                        <div class="row m-0 p-0 mb-3" style="border-radius:100px; background: #FBFBFB">
                            <!-- <div class="col-auto m-0 p-0 socMed" style="background: #0073B1">  -->
                                <img :src="linkedIn" class="icon p-2 border-0 col-auto m-0 p-0" style="background: #0073B1; border-radius:100px"/>
                            <!-- </div> -->
                            <div class="col regularM mt-auto mb-auto"> /presu.works </div>
                        </div>
                        <div class="row m-0 p-0" style="border-radius:100px; background: #FBFBFB">
                            <!-- <div class="col-auto m-0 p-0 socMed" style="background: #FF0000">  -->
                                <img :src="youTube" class="icon p-2 border-0 col-auto m-0 p-0" style="background: #FF0000; border-radius:100px"/>
                            <!-- </div> -->
                            <div class="col regularM mt-auto mb-auto"> /presu.films </div>
                        </div>
                    </div>
                </div>
                <Offer class="col-12" v-if="process =='offer'" />
            </div>
        </div>
    
        
        <!-- {{ type }} -->
        
    </div>
  </div>
</template>

<script>
import facebook from "../assets/For Gene/Icons/facebook 1.svg"
import dribbble from "../assets/For Gene/Icons/dribbble 1.svg"
import linkedIn from "../assets/For Gene/Icons/linkedin 1.svg"
import youTube from "../assets/For Gene/Icons/youtube 1.svg"

import phone from "../assets/For Gene/Icons/telephone 1.svg"
import email from "../assets/For Gene/Icons/email (1) 1.svg"
import Sidebar from "./Sidebar.vue"
// import Modal from "./InternshipModal.vue"
import ProcessHomePage from "./ProcessHomePage"
import Applications from "./Applications.vue"
import Offer from "./Offer.vue"
export default {
  name: "Process",
  components: {
      Sidebar,
    //   Modal,
      ProcessHomePage,
      Applications,
      Offer
  },
  setup() {
      return {
          facebook,
          dribbble,
          linkedIn,
          youTube,
          phone,
          email
      }
  },
  props: {
    id: String,
    process: String
  },
  data() {
    return {
        
        
    }
},
  created() {
      this.internship = this.$store.state.allInternships[this.id];
  },
  mounted() {
    
},
  methods: {
      
      
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



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
    line-height: 35.49px;
    text-align: center;
}

.searchTextBoxSpecial {
    background: white;
    caret-color: black;
}


</style>
