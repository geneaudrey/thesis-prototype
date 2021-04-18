<template>
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content p-4">
      <div class="modal-header row m-0 p-0 border-0 p-2 mb-2 pb-2">
        <div class="col-auto bg-primary" style="width: 72px; height: 72px; border-radius: 100px" />
        <span class="modal-title col d-flex flex-column mb-auto mt-auto lead text-primary" id="exampleModalLongTitle">
          {{step.toUpperCase()}}
        </span>
        <button type="button" class="close col-auto mb-auto mt-auto text-close m-0 p-0" data-dismiss="modal" aria-label="Close">
          <!-- <span aria-hidden="true" class="lead">&times;</span> -->
          <span class="material-icons">
            close
          </span>
        </button>
      </div>
      <div v-if="step == 'assessment'" class="modal-body m-0 p-2">
        <p class="regularDefault">
          Assessments are a way to measure skills and abilities that generally do not emerge from interviews. These assessments a way for the employers to see if you are fitted to be a part of the company. This will also help you practice and prepare yourself when you are planning to find a full-time employment in a company. After your application, you may take an online assessment by the company. 
        </p>
        <p class="regularDefault">
          Each company has their own types of assessments for different types of roles and depending on the nature of the company. Many of the assessments will require substantial amount of time from you, so you must be able to complete it without any distractions so that you may concentrate on it.
        </p>
        <p class="regularDefault">
          In order to proceed to the company’s assessment, you will be redirected to their own site and their own assessment here:
        </p>

        <button class="btn btn-primary rounded-pill boldS mb-3" data-dismiss="modal" @click="$router.push($router.currentRoute._rawValue.path +'/assessment/completed')">
          PROCEED TO ASSESSMENT
        </button>

        <p class="boldDefault text-primary">
          ADDITIONAL IMPORTANT INFORMATION:
        </p>

        <ul class="regularDefault pl-3">
            <li> 
                The assessments are delivered online, which allows access 24/7 and allows social distancing in these turbulent times
            </li>
            <li> 
                If you feel that your disability may hinder you to complete certain assessments, please feel free to contact us at xxx@gmail.com
            </li>
            <li> 
                Please take the assessments seriously
            </li>
            <li> 
                The assessments the company made can take anywhere from 10-60 minutes total to complete, depending on which company and position you are applying for
            </li>
        </ul>
      </div>
      <div v-if="step == 'interviews'" class="modal-body m-0 p-2">
        <p class="regularDefault">
          Each interview would be different based on the company that you are applying for. Some basic questions you may receive are in relation to you accomplishments, your background and some situational questions. You may also practice some questions through a mock interview or review some common interview questions from your self-advocacy course. These companies are looking to see how you relate to, compare with, and connect with their mission, vision and goals. This is also your opportunity to find out more about the company. 
        </p>
        <p class="regularDefault">
          You can expect to have one-on-one interviews or a panel interview which will be conducted online, via phone call or Zoom. Based on the requirements of the role you are applying for, you may also be asked some additional questions specific to the type of work you may be doing.
        </p>

        <button class="btn btn-primary rounded-pill boldS" data-dismiss="modal" @click="$router.push($router.currentRoute._rawValue.path +'/interviews/completed')">
          SCHEDULE AN INTERVIEW
        </button>
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
    </div>
  </div>
</div>
</template>

<script>
 export default {
    props: {
        step: String
    },
   data() {
     return {
      showModal: false
     }
   },
   methods: {
     show() {
      this.showModal = true
     },
     hide(){
      this.showModal = false
     }
   },
   created() {
   },
   watch: {
   }
 }
</script>