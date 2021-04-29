<template>
  <div class="AllInternships w-100">
    <div class="card border-0 shadow-sm p-0 dashCard m-0 boldDefault" style="max-width: 113px">
          <button
            type="button"
            class="btn text-primary"
            @click="$router.push('/opportunities')"
          >
              <span class="material-icons m-0 p-0 align-middle ml-n3" style="font-size: 50px">
                  navigate_before
              </span>
              <span class="align-middle m-0 p-0 ml-n2">
                  BACK
              </span>
          </button>
        </div>
    <div class="card w-100 p-3 dashCard shadow border-0 mt-3">
      <div class="row m-0 p-0">
        <div
          class="col-auto p-0 m-0 pr-2 mr-2 border border-left-0 border-top-0 border-bottom-0"
        >
          <img :src="search2" class="icon mt-auto mr-1" v-if="active == 2" />
          <div class="dropdown" v-if="active == 3">
            <button
              class="btn dropdown-toggle boldDefault ml-0 pl-0"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img :src="location" class="icon align-middle mr-1" />
              Around you
              <span class="material-icons align-middle"> expand_more </span>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Other Options</a>
            </div>
          </div>
        </div>
        <div class="col d-flex flex-column m-0 p-0">
          <input
            type="text"
            class="form-control border-0 pt-2 pb-2 pl-1 regularDefault"
            placeholder="Search by Title, Company, or any jobs keyword..."
          />
        </div>
        <div class="col-auto m-0 p-0 ml-2 mt-auto mb-auto">
          <button
            class="btn btn-secondary rounded-pill text-primary pl-3 pr-3"
            style="line-height: 0px"
          >
            <!-- <span class="material-icons align-middle" style="font-size:16px"> filter_alt </span> -->
            <img :src="filter" class="icon align-middle mr-2" />
            <span class="align-middle boldM"> FILTER </span>
          </button>
        </div>
        <div class="col-auto m-0 p-0 ml-2 mt-auto mb-auto">
          <button
            class="btn btn-primary rounded-pill pl-3 pr-3"
            style="line-height: 0px"
          >
            <img :src="search" class="icon align-middle mr-2" />
            <span class="align-middle boldM"> FIND </span>
          </button>
        </div>
      </div>
    </div>
    <div class="row m-0 p-0 mt-5">
      <div class="col">
        <p class="boldDefault mb-0">Showing 15 results</p>
        <p class="regularM text-gray3">Based on your preferences</p>
      </div>
      <div class="d-flex flex-row-reverse">
        <div
          class="btn btn-primary rounded-circle m-auto boldM pl-2"
          style="height: 38.66px; width: 38.66px"
        >
          <img :src="grid" class="icon align-middle" style="" />
        </div>
        <div
          class="btn btn-outline-primary rounded-circle mt-auto mb-auto mr-2 boldM pl-2"
          style="height: 38.66px; width: 38.66px"
        >
          <img :src="list" class="icon align-middle" />
        </div>
        <div class="dropdown mt-auto mb-auto mr-4">
          <div
            class="btn btn-outline-primary rounded-pill boldM dropdown-toggle"
            type="button"
            id="dropdownNewest"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img :src="sort" class="icon" />
            Newest
            <span class="material-icons align-middle"> expand_more </span>
          </div>
          <div class="dropdown-menu" aria-labelledby="dropdownNewest">
            <a class="dropdown-item" href="#">Oldest</a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="row m-0 p-0"
      v-for="row in Math.ceil(allInternships.length / 3)"
      :key="row"
    >
      <div
        :class="['col p-0 mb-4 pb-1', { 'pr-3 mr-3': col < 3 }]"
        v-for="col in 3"
        :key="col"
      >
        <div
          class="card dashCard border-0 shadow m-0 p-4"
          v-if="(row - 1) * 3 + (col - 1) < allInternships.length"
        >
          <div class="row m-0 p-0">
            <div class="col p-0 m-0" v-if="active == 3">
              <p class="boldDefault mb-0 text-primary">
                {{ allInternships[(row - 1) * 3 + (col - 1)].company }}
              </p>
              <p class="lead mb-0">
                {{ allInternships[(row - 1) * 3 + (col - 1)].position }}
              </p>
            </div>
            <div class="col p-0 m-0" v-if="active == 2">
              <p class="boldDefault mb-0 text-primary">
                {{ allInternships[(row - 1) * 3 + (col - 1)].prof }}
              </p>
              <p class="lead mb-0">
                {{ allInternships[(row - 1) * 3 + (col - 1)].subject }}
              </p>
              <img
                :src="require('@/assets/For Gene/Icons/Group 14.svg')"
                class="icon mr-2"
              />
              <span class="text-primary regularS mt-auto mb-auto">
                {{ allInternships[(row - 1) * 3 + (col - 1)].length }}
              </span>
            </div>
            <div class="d-flex flex-row-reverse">
              <div
                style="
                  width: 47.69px;
                  height: 47.34px;
                  background: white;
                  border-radius: 20px;
                "
                v-if="active == 3"
              >
                <img
                  v-if="
                    allInternships[(row - 1) * 3 + (col - 1)].img != null &&
                    allInternships[(row - 1) * 3 + (col - 1)].img != ''
                  "
                  :src="
                    require('@/assets/For Gene/Icons/' +
                      allInternships[(row - 1) * 3 + (col - 1)].img)
                  "
                  class="img-fluid"
                  alt="Responsive image"
                  style="border-radius: 8px"
                />
              </div>
              <div
                style="
                  width: 73px;
                  height: 72px;
                  background: white;
                  border-radius: 20px;
                "
                v-if="active == 2"
              >
                <img
                  v-if="
                    allInternships[(row - 1) * 3 + (col - 1)].img != null &&
                    allInternships[(row - 1) * 3 + (col - 1)].img != ''
                  "
                  :src="
                    require('@/assets/For Gene/Icons/' +
                      allInternships[(row - 1) * 3 + (col - 1)].img)
                  "
                  class="img-fluid"
                  alt="Responsive image"
                  style="border-radius: 8px"
                />
              </div>
            </div>
          </div>
          <div class="row m-0 p-0 mt-3">
            <p class="regularM text-desc">
              {{ allInternships[(row - 1) * 3 + (col - 1)].desc }}
            </p>
          </div>

          <div class="row m-0 p-0 mt-2">
            <button
              class="btn btn-primary rounded-pill boldS pt-2 pb-2 pr-3 pl-3"
              @click="openInternship((row - 1) * 3 + (col - 1))"
            >
              {{ active == 2 ? "View Course" : "More Information" }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0 p-0">
      <div class="col m-0 p-0 regularM d-flex align-items-center">
        <span class=""> Showing 9 from 15 </span>
      </div>
      <div class="col-auto m-0 p-0">
        <button
          class="btn bg-white rounded-pill boldM text-primary p-2 pl-4 pr-4"
        >
          Previous
        </button>
      </div>
      <div
        class="col-auto m-0 p-0 rounded-pill ml-2 pl-1 pr-1"
        style="background: #def2f1"
      >
        <button
          class="btn rounded-pill boldM text-primary p-2 pr-3 pl-3"
          v-for="page in 4"
          :key="page"
        >
          {{ page }}
        </button>
      </div>
      <div class="col-auto m-0 p-0">
        <button
          class="btn bg-white rounded-pill boldM text-primary p-2 pl-4 pr-4 ml-2"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import list from "../assets/For Gene/Icons/ic_list.svg";
import grid from "../assets/For Gene/Icons/ic_grid.svg";
import sort from "../assets/For Gene/Icons/ic_sort.svg";
import search from "../assets/For Gene/Icons/ic_search.svg";
import filter from "../assets/For Gene/Icons/filter 1.svg";
import location from "../assets/For Gene/Icons/place 1.svg";
import search2 from "../assets/For Gene/Icons/Icon 3.svg";
export default {
  name: "AllInternships",
  props: ["active"],
  components: {},
  setup() {
    return {
      list,
      grid,
      sort,
      search,
      filter,
      location,
      search2,
    };
  },
  data() {
    return {
      allInternships: [],
    };
  },
  created() {
    if (this.active == 2) {
      this.allInternships = this.$store.state.allCourses;
    }
    if (this.active == 3) {
      this.allInternships = this.$store.state.allInternships;
    }
  },
  methods: {
    openInternship(index) {
      this.$router.push("/allInternships/" + index);
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
  watch: {
    active() {
      if (this.active == 2) {
        this.allInternships = this.$store.state.allCourses;
      }
      if (this.active == 3) {
        this.allInternships = this.$store.state.allInternships;
      }
    },
  },
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
