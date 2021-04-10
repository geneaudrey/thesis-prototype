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
            <p class="pt-4 h1 text-titleBlack"> {{ process ? "APPLICATIONS" : "PROCESS"}} </p>
            <div class="row m-0 p-0">
                <div class="col-9 ml-0 pl-0" v-if="process == null">
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
                                    <button class="btn btn-primary boldS rounded-pill pt-2pb-2 w-100" @click="openStep(step)"> PROCEED </button>
                                </div>
                                <span class="material-icons text-primary mt-5" v-if="index < internship.process.steps.length -1" style="font-size: 50px">
                                    arrow_forward
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-9 ml-0 pl-0" v-if="process == 'applications'">
                    <div class="card dashCard mb-4 p-3 pt-4 pb-4">
                        <div class="row m-0 p-0">
                            <p class="col-auto mt-auto mb-auto h2">
                                Edit Profile
                            </p>
                            <div class="col d-flex flex-row-reverse">
                                <button class="boldM btn btn-primary rounded-pill align-middle"> 
                                    Save Changes
                                </button>
                                <button class="boldM btn btn-secondary mr-2 rounded-pill text-primary align-middle"> 
                                    Cancel
                                </button>

                            

                                <p class="boldM mt-auto mb-auto text-primary mr-4"> Available for hire? </p>
                            </div>
                        </div>

                        <div class="row m-0 p-0">
                            <p class="col boldL"> GENERALS </p>
                        </div>

                        <div class="row m-0 p-0">
                            <div class="col">
                                <div class="form-group">
                                    <label for="firstname" class="control-label boldL">First Name</label>
                                    <input type="text" name="name" class="form-control pl-0 pr-0 regularM" id="firstname" placeholder="Type here" value="Praise">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="middlename" class="control-label boldL">Middle Name</label>
                                    <input type="text" name="name" class="form-control pl-0 pr-0 regularM" id="middlename" placeholder="Type here">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="lastname" class="control-label boldL">Last Name</label>
                                    <input type="text" name="name" class="form-control pl-0 pr-0 regularM" id="lastname" placeholder="Type here" value="Lam">
                                </div>
                            </div>
                        </div>

                        <div class="row m-0 p-0">
                            <div class="col">
                                <div class="form-group">
                                    <label for="firstname" class="control-label boldL">Username</label>
                                    <input type="text" name="name" class="form-control pl-0 pr-0 regularM" id="firstname" placeholder="Type here" value="praiseee">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="password" class="control-label boldL">Password</label>
                                    <div class="input-group input-group-seamless-append">
                                        <input :type="[passwordShow ? 'text' : 'password']" name="name" class="form-control pl-0 regularM" style="padding-left: 120px" id="password" placeholder="Type here" value="temporarypassword">

                                        <div class="input-group-append text-primary btn m-0 p-0 boldM" @click="passwordShow = !passwordShow">
                                            SHOW
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="confirmpassword" class="control-label boldL">Confirm Password</label>
                                    <div class="input-group input-group-seamless-append">
                                        <input :type="[confirmPasswordShow ? 'text' : 'password']" name="name" class="form-control pl-0 regularM" style="padding-left: 120px" id="confirmpassword" placeholder="Type here" value="temporarypassword">

                                        <div class="input-group-append text-primary btn m-0 p-0 boldM" @click="confirmPasswordShow = !confirmPasswordShow">
                                            SHOW
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row m-0 p-0">
                            <p class="col boldL"> CONTACTS </p>
                        </div>

                        <div class="row m-0 p-0">
                            <div class="col">
                                <div class="form-group">
                                    <label for="mobile" class="control-label boldL" style="color: #515151">Mobile Phone</label>
                                    <div class="input-group input-group-seamless-prepend">
                                        <div class="input-group-prepend text-primary btn m-0 p-0 boldM">
                                            <span class="material-icons text-primary">
                                                call
                                            </span>
                                        </div>
                                        <input type="text" name="name" class="form-control pr-0 regularM input" style="padding-left: 50px" id="mobile" placeholder="Type here" value="+63 9xx xxx xxxx">
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="email" class="control-label boldL" style="color: #515151">Email</label>
                                    <div class="input-group input-group-seamless-prepend">
                                        <div class="input-group-prepend text-primary btn m-0 p-0 boldM">
                                            <span class="material-icons text-primary">
                                                mail
                                            </span>
                                        </div>
                                        <input type="text" name="name" class="form-control pr-0 regularM input" style="padding-left: 50px" id="email" placeholder="Type here" value="xxx.gmail.com">
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="country" class="control-label boldL" style="color: #515151">Country</label>
                                    <div class="input-group input-group-seamless-append">
                                        <select class="custom-select p-0 regularM">
                                            <option value="0">Philippines</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <div class="input-group-append text-primary btn m-0 p-0 boldM">
                                            <span class="material-icons">
                                                expand_more
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row m-0 p-0">
                            <div class="col-8">
                                <div class="form-group">
                                    <label for="address" class="control-label boldL" style="color: #515151">Address</label>
                                    <input type="text" name="name" class="form-control pl-0 pr-0 regularM" id="address" placeholder="Type here" value="Some place idk where">
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label class="control-label boldL" style="color: #515151">City</label>
                                    <div class="input-group input-group-seamless-append">
                                        <select class="custom-select p-0 regularM">
                                            <option value="0">Quezon City</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <div class="input-group-append text-primary btn m-0 p-0 boldM">
                                            <span class="material-icons">
                                                expand_more
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row m-0 p-0">
                            <p class="col boldL"> ABOUT ME </p>
                        </div>

                        <div class="row m-0 p-0">
                            <div class="col">
                                <label for="exampleFormControlTextarea1" class="regularL" style="color: #515151">Talk About Yourself</label>
                                <textarea class="form-control regularM p-3" id="exampleFormControlTextarea1" rows="4" placeholder="Type here" style="background: #FBFBFB; border-radius: 20px">
                                    I am highly motivated, adaptable, and eager to learn. I can
                                    work well with other people but can also lead when people need guidance. I am well-versed in both design and management skills, such as
                                    marketing,operations and client services
                                    , thus I am able to provide outputs in bothfields. By doing so I am able to utilize the skills I developed fromorganizational and competition experience.
                                </textarea>
                            </div>
                        </div>

                        <div class="row m-0 p-0" >
                            <div class="col">
                                <p class="regularL" style="color: #515151">Attach Resume</p>
                                <div class="custom-file mb-3">
                                    <input type="file" class="custom-file-input " id="customFile" ref="customFile" name="filename" @change="changeName" >
                                    <label class="custom-file-label regularDefault inline p-2 m-0 h-auto" style="border-radius: 10px" for="customFile"> 
                                        <span class="material-icons align-middle text-clip ml-2" v-if="files.length >= -1"> attach_file </span> 
                                        <span class="align-middle ml-2"> {{files.length > 0 ? files[0].name : "Choose file"}} </span>
                                    </label>
                                </div>
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
    process: String
  },
  data() {
    return {
        openedStep: "",
        files: {},
        passwordShow: false,
        confirmPasswordShow: false,
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
  mounted() {
    
},
  methods: {
      openStep(step) {
          this.$router.push("/allInternships/"+this.id+"/"+step);
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      },
      changeName(e) {
        // console.log(this.$refs.customFile);
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        console.log(files)
        this.files = files;
        console.log(files.length)
        // var fileName = this.$refs.customFile.val().split("\\").pop();
        // console.log(fileName);
        // $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
      }
  }
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

input[type="text"],
select.form-control {
  background: transparent;
  border: none;
  border-bottom: 2px solid #C2C2C2;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 0;
}

input[type="text"]:focus,
select.form-control:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 2px solid #3AAFA9;
}

input[type="password"],
select.form-control {
  background: transparent;
  border: none;
  border-bottom: 2px solid #C2C2C2;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 0;
}

input[type="password"]:focus,
select.form-control:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 2px solid #3AAFA9;
}

select {
  background: transparent;
  border: none;
  border-bottom: 2px solid #C2C2C2;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 0;
}

select:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 2px solid #3AAFA9;
}


input {
  caret-color: #3AAFA9;
}

::placeholder {
    color: #BBBBBB
}

label.custom-file-label.regularDefault::after {
 visibility: hidden;
}
</style>
