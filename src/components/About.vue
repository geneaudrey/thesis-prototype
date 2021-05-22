<template>
  <div class="bg-white">
    <nav
      :class="[
        'navbar navbar-expand-lg fixed-top navbar-light justify-content-between mt-n1 p-0 pl-3 pr-3',
        { scrolled: scroll },
        { '': !scroll },
      ]"
      style="background-color: rgb(0, 0, 0, 0)"
    >
      <a class="navbar-brand" href="#">
        <img
          :src="logo"
          :class="['', { resize: scroll }, { 'mt-n4': !scroll }]"
          height="170"
        />
      </a>
      <div>
        <!-- <button class="btn"> ABOUT </button> -->
        <button
          :class="[
            'btn h5 text-white',
            { 'h6 mt-auto mb-auto': scroll },
            { 'mt-n4': !scroll },
          ]"
          @click="open('login')"
        >
          LOG IN
        </button>
      </div>
    </nav>
    <div class="w-100 mask" style="position: relative">
      <button
        class="btn bg-white text-primary title ml-4 p-3 pl-5 pr-5 mb-4 boldL"
        style="border-radius: 20px; min-width: 260px"
        @click="open('signup')"
      >
        GET STARTED
      </button>
    </div>
    <div>
      <div class="row m-0 p-0 mt-4 w-100">
        <div class="col-3 m-0 p-0 p-3 pr-4">
          <img :src="girl" class="icon mt-5 pt-3" />
        </div>
        <div class="col-6 p-0 text-center pt-5">
          <span
            class="mt-4 h1 p-2 pl-3 pr-3 bg-primary text-white w-auto"
            style="border-radius: 20px"
          >
            WHAT IS ENABLE?
          </span>
          <p class="paragraph mt-5">
            We are a community, a safe space, devoted to help all types of
            people with disabilities to find confidence in their own selves by
            honing their crafts through available classes and internships. The
            PWD community will be able to gain experience through our available
            services, and in turn, our partner companies will also learn how to
            cater to the needs of those with disabilities. By doing so, they
            will be able to find jobs that would be more than willing to hire
            them. The best thing about this community is that it is free and
            open for all!
          </p>
        </div>
      </div>
      <div class="row m-0 p-0 mt-3 w-100">
        <div class="col-6 offset-3 p-0 text-center pt-2">
          <span
            class="h1 p-2 pl-3 pr-3 bg-primary text-white w-auto"
            style="border-radius: 20px"
          >
            WHAT CAN PWD EXPECT?
          </span>
          <p class="paragraph mt-5">
            We have partnered up with organizations and companies who are
            willing to guide you through your journey of self-advocacy and
            attaining the job you want to get into. We have curated lessons for
            you to learn and experience from, and you also get to communicate
            with experts from respective fields to learn more about the
            companies and jobs you will be interning at. At the end of each
            class and internships you enrolled in, we hope you are able to take
            away some form of wisdom and make your experience worthwhile.
          </p>
        </div>
        <div class="col-3 m-0 p-0 p-3 pr-4">
          <img :src="girl" class="icon mt-4" />
        </div>
      </div>
      <div
        class="row m-3 mr-4 ml-4 bg-primary"
        style="height: 0.06510416666666667vw"
      />
      <div class="row m-0 p-0 m-3 mr-4 ml-4">
        <div class="col m-0 p-0">Black enable logo</div>
        <div class="col-auto m-0 p-0 text-primary regularM">PRIVACY POLICY</div>
      </div>
    </div>
  </div>
</template>

<script>
import girl from "../assets/For Gene/Illustrations/ENABLE UPDATED-31.svg";
import boy from "../assets/For Gene/Illustrations/ENABLE UPDATED-31.svg";
import logo from "../assets/For Gene/Logo/ENABLE UPDATED-41.svg";
export default {
  data() {
    return {
      scroll: false,
    };
  },
  setup() {
    return {
      girl,
      boy,
      logo,
    };
  },
  mounted: function () {
    window.addEventListener("scroll", this.updateScroll);
  },
  unmounted: function () {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scroll = window.scrollY > 200;
      //    this.scrollPosition = window.scrollY
    },
    open(type) {
      this.$router.push("/" + type);
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
};
</script>

<style scoped>
.mask {
  height: 477px;
  background-image: url("../assets/For Gene/Illustrations/ENABLE UPDATED-19.svg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  /* mask-image: url(https://image.flaticon.com/icons/png/512/1/1346.png); */
  mask-size: 100% 477px;
  mask-repeat: no-repeat;
  mask-position: center;
  background-attachment: fixed;
}

.scrolled {
  background-color: #2b7a78 !important;
  /* height: 100px; */
  transition: background-color 400ms linear;
  /* transition: height 200ms linear; */
}
.resize {
  height: 60px !important;
  transition: height 200ms linear;
}
/* .resize {
  height: 170px !important;
  transition: height 200ms linear;
} */

.title {
  position: absolute;
  bottom: 0;
  left: 0;
  /* text-shadow: 0px 4px 4px rgba(35, 88, 89, 0.5),
    0px 4px 4px rgba(35, 88, 89, 0.5), 0px 4px 4px rgba(35, 88, 89, 0.5); */
}
</style>
