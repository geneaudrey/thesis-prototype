<template>
  <div class="card dashCard mb-4 border-0">
    <div
      :class="['imageBorder mask']"
      alt="Responsive image"
      style="position: relative"
      v-if="type == 'all-internships'"
    >
      <span class="title h1 noThick p-1 pl-5 pr-5 pb-2 text-white">
        {{ internship.company }} {{ internship.position + "ship" }}
      </span>
    </div>

    <div
      :class="['imageBorder mask2']"
      alt="Responsive image"
      style="position: relative"
      v-else
    >
      <span class="title h1 noThick p-1 pl-5 pr-5 pb-2 text-white">
        {{ internship.subject }}
      </span>
    </div>
    <div class="pl-5 pr-5 pb-3 pt-3 mt-3">
      <p class="h2 text-darkPrimary" v-if="process != null">
        What is the process for application?
      </p>
      <div
        v-for="par in process == null
          ? internship.intro
          : internship.process.desc"
        :key="par"
      >
        <p class="paragraph pb-3" v-if="par.type == 'p'">{{ par.text }}</p>
        <p class="h2 text-darkPrimary pt-0" v-if="par.type == 'header'">
          {{ par.text }}
        </p>
        <ul v-if="par.type == 'list'" class="pl-3 ml-1 paragraph pb-3">
          <li v-for="item in par.text" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
      <button
        class="btn btn-primary boldM p-3 pl-5 pr-5 mb-2"
        style="border-radius: 20px"
        v-if="process == null"
        @click="apply()"
      >
        {{ type == "all-internships" ? "APPLY NOW" : "ENROLL NOW" }}
      </button>
      <p class="paragraphBold text-primary pt-3" v-if="process != null">
        Check this page and your notifications to see updates in your progress.
      </p>
    </div>
    <div
      class="row m-0 p-0 pl-4 pr-4 ml-auto mr-auto mb-4"
      v-if="process != null"
    >
      <div
        v-for="(step, index) in internship.process.steps"
        :key="index"
        class="row m-0 p-0"
      >
        <div class="col m-0 p-0">
          <div class="circle text-white mt-auto p-auto">
            <img :src="icons[index]" class="icon" />
          </div>
          <p class="text-center mt-3 boldL text-primary">
            {{ step.toUpperCase() }}
          </p>
          <p
            class="text-center mt-3 regularS mb-1"
            style="width: 128px; min-height: 101px"
          >
            {{ steps[step].desc }}
          </p>
          <button
            v-if="step == 'applications' || step == 'offer'"
            class="btn btn-primary boldS rounded-pill pt-2 pb-2 w-100"
            @click="openStep(step)"
          >
            PROCEED
          </button>
          <button
            v-else
            class="btn btn-primary boldS rounded-pill pt-2 pb-2 w-100"
            data-toggle="modal"
            data-target="#modal"
            @click="openedStep = step"
          >
            PROCEED
          </button>
          <Modal ref="modal" id="modal" :step="openedStep" />
        </div>
        <span
          class="material-icons text-primary mt-5"
          v-if="index < internship.process.steps.length - 1"
          style="font-size: 50px"
        >
          arrow_forward
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./InternshipModal.vue";
import applicationIcon from "../assets/For Gene/Icons/icon-file 2.svg";
import assessmentIcon from "../assets/For Gene/Icons/icon-checkbox-checked.svg";
import interviewIcon from "../assets/For Gene/Icons/icon-chat.svg";
import offerIcon from "../assets/For Gene/Icons/icon-calendar-available.svg";
// import coverImage from "@/assets/For Gene/Illustrations/ENABLE UPDATED-29.svg"
export default {
  components: {
    Modal,
  },
  props: ["internship", "id", "process", "type"],
  setup() {
    return {
      // coverImage
      applicationIcon,
      assessmentIcon,
      interviewIcon,
      offerIcon,
    };
  },
  data() {
    return {
      icons: [applicationIcon, assessmentIcon, interviewIcon, offerIcon],
      openedStep: "",
      steps: {
        applications: {
          desc:
            "This is the first step in the process, and gives you an opportunity to tell the company all about yourself",
        },
        assessment: {
          desc:
            "The assessments are based on the company of your choosing and helps determine if they are a good fit for you",
        },
        interviews: {
          desc:
            "Almost there! At this stage, they would like to get to know you better and gives you a chance to ask them questions",
        },
        offer: {
          desc:
            "Congratulations for getting this far! The company looks forward to welcoming you.",
        },
      },
    };
  },
  methods: {
    openStep(step) {
      if (step == "offer") {
        this.$router.push(
          "/opportunities/all-internships/" + this.id + "/process/offer/completed"
        );
      } else {
        this.$router.push(
          "/opportunities/all-internships/" + this.id + "/process/" + step
        );
      }
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    apply() {
      if (this.type == "all-internships") {
        this.$router.push(
          this.$router.currentRoute._rawValue.path + "/process"
        );
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    },
  },
};
</script>

<style scoped>
.title {
  position: absolute;
  bottom: 0;
  left: 0;
  text-shadow: 0px 4px 4px rgba(35, 88, 89, 0.5),
    0px 4px 4px rgba(35, 88, 89, 0.5), 0px 4px 4px rgba(35, 88, 89, 0.5);
}

.circle {
  width: 129px;
  height: 129px;
  border-radius: 100px;
  background: #3aafa9;
  line-height: 129px;
  text-align: center;
}

.mask {
  height: 251px;
  background-image: url("../assets/For Gene/Illustrations/ENABLE UPDATED-29.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* mask-image: url(https://image.flaticon.com/icons/png/512/1/1346.png); */
  mask-size: 100% 225px;
  mask-repeat: no-repeat;
  mask-position: center;
}

.mask2 {
  height: 251px;
  background-image: url("../assets/For Gene/Illustrations/ENABLE UPDATED-14.svg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  mask-size: 100% 225px;
  mask-repeat: no-repeat;
  mask-position: center;
}
</style>
