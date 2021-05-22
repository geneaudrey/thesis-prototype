<template>
  <div class="d-flex flex-column" style="min-height: 100vh">
    <nav
      class="navbar navbar-expand-lg bg-primary justify-content-center mt-n4"
      style="height: 80px"
    >
      <a class="navbar-brand" href="/about">
        <img :src="logo" class="mt-4" height="70" style="position: relative" />
      </a>
    </nav>
    <div
      class="row m-0 pl-4 pr-4 pb-0 w-100 flex-grow-1 justify-content-between"
    >
      <div
        class="col-7 pl-4 pt-4 d-flex justify-content-center align-items-center"
        style="min-height: 390.364px"
      >
        <div class="">
          <p class="titleText text-primary">
            Connect with your inner self and gain job experiences you need.
          </p>
          <div class="row m-0 p-0 ml-n4 mt-2">
            <img :src="one" class="icon col-2 p-0" style="max-width: 104px" />
            <span class="paragraph mt-auto mb-auto ml-1">
              <b> Learn to advocate yourself. </b>
              Gain knowledge from available courses
            </span>
          </div>
          <div class="row m-0 p-0 ml-n4 mt-n3">
            <img :src="two" class="icon col-2 p-0" style="max-width: 104px" />
            <span class="paragraph mt-auto mb-auto ml-2">
              <b> Land on available internships. </b>
              Fill up your resume with experiences
            </span>
          </div>
          <div class="row m-0 p-0 ml-n4 mt-n3">
            <img :src="three" class="icon col-2 p-0" style="max-width: 104px" />
            <span class="paragraph mt-auto mb-auto ml-2">
              <b> Find a safe haven for PWDs. </b>
              Interact with fellow PWDs
            </span>
          </div>
        </div>
      </div>
      <div
        class="col-4 p-4 m-2 d-flex justify-content-center align-items-center"
      >
        <div class="w-100">
          <div class="card bg-white p-4 border-0 w-100" style="width: 100%">
            <p class="h6">
              {{
                type == "signup"
                  ? "Welcome!"
                  : type == "login"
                  ? "Welcome back."
                  : "Forgot password?"
              }}
            </p>
            <p class="lead">
              {{
                type == "signup"
                  ? "Enter your details to create an account."
                  : type == "login"
                  ? "Enter your details below."
                  : "We'll send you an email with reset instructions"
              }}
            </p>

            <form>
              <div class="form-group regularDefault" v-if="type == 'signup'">
                <label class="pb-1">Name:</label>
                <input type="name" class="form-control" placeholder="" />
                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
              </div>
              <div class="form-group regularDefault">
                <label class="pb-1">Email:</label>
                <input type="email" class="form-control" placeholder="" />
              </div>
              <div
                class="form-group regularDefault"
                v-if="type != 'forgotPassword'"
              >
                <div class="d-flex justify-content-between">
                  <label class="pb-1"> Password:</label>
                  <label class="pb-1">
                    <a href="/forgotPassword" class="ml-auto">
                      Forgot Password?
                    </a></label
                  >
                </div>
                <input type="password" class="form-control" placeholder="" />
              </div>
              <div class="form-check" v-if="type == 'login'">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label regularM" for="exampleCheck1"
                  >Remember me</label
                >
              </div>

              <button
                type="submit"
                class="btn btn-primary boldDefault pt-2 mt-3 pb-2 w-100 border-0"
                style="border-radius: 3px"
                @click="$router.push('/home/')"
              >
                {{
                  type == "signup"
                    ? "Create Account"
                    : type == "login"
                    ? "Log In"
                    : "Forgot Password"
                }}
              </button>
            </form>
          </div>
          <div class="mt-3">
            <p class="regularDefault m-0 text-center" v-if="type == 'signup'">
              By creating an account, you agree to our
              <a href="#" class="text-primary"> Terms </a>.
            </p>
            <p class="regularDefault text-center" v-if="type != 'login'">
              Already have an account?
              <a href="/login" class="text-primary"> Log In </a>
            </p>
            <p class="regularDefault text-center" v-if="type == 'login'">
              Don't have an account?
              <a href="/signup" class="text-primary"> Sign Up </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import one from "../assets/For Gene/Icons/ENABLE UPDATED-38.svg";
import two from "../assets/For Gene/Icons/Suitcase.svg";
import three from "../assets/For Gene/Icons/ENABLE UPDATED-34.svg";
import logo from "../assets/For Gene/Logo/ENABLE UPDATED-41.svg";
export default {
  data() {
    return {};
  },
  props: ["type"],
  setup() {
    return {
      logo,
      one,
      two,
      three,
    };
  },
};
</script>

<style scoped>
input {
  /* caret-color: #3aafa9; */
  border-radius: 0px;
  background: #f6f6f9;
  border: 0;
}
/* .form-check-input {
    color: #F6F6F9;
  border: 0;
  width: 24px;
  height: 24px;
} */
</style>
