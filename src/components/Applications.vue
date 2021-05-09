<template>
  <div class="card dashCard mb-4 p-3 pt-4 pb-4">
    <div class="row m-0 p-0">
      <p class="col-auto mt-auto mb-auto h2 mb-0 pb-0">Edit Profile</p>
      <div class="col d-flex flex-row-reverse">
        <button
          class="boldM btn btn-primary rounded-pill align-middle"
          @click="
            $router.push($router.currentRoute._rawValue.path + '/completed')
          "
        >
          Save Changes
        </button>
        <button
          class="boldM btn btn-secondary mr-2 rounded-pill text-primary align-middle"
        >
          Cancel
        </button>

        <div class="material-switch pull-right mt-auto mb-auto mr-5 pr-2">
          <input
            id="someSwitchOptionDefault"
            name="someSwitchOption001"
            type="checkbox"
          />
          <label for="someSwitchOptionDefault" class="bg-darkPrimary"></label>
        </div>

        <p class="boldM mt-auto mb-auto text-primary mr-4">
          Available for hire?
        </p>
      </div>
    </div>

    <div class="row m-0 p-0 mt-4 pt-2">
      <p class="col boldL mb-0 pb-0">GENERALS</p>
    </div>

    <div class="row m-0 p-0 mt-4">
      <div class="col">
        <div class="form-group">
          <label for="firstname" class="control-label boldL mb-4"
            >First Name</label
          >
          <input
            type="text"
            class="form-control pl-0 pr-0 regularM"
            id="firstname"
            placeholder="Type here"
            value="Praise"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="middlename" class="control-label boldL mb-4"
            >Middle Name</label
          >
          <input
            type="text"
            class="form-control pl-0 pr-0 regularM"
            id="middlename"
            placeholder="Type here"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="lastname" class="control-label boldL mb-4"
            >Last Name</label
          >
          <input
            type="text"
            class="form-control pl-0 pr-0 regularM"
            id="lastname"
            placeholder="Type here"
            value="Lam"
          />
        </div>
      </div>
    </div>

    <div class="row m-0 p-0 mt-3">
      <div class="col">
        <div class="form-group">
          <label for="username" class="control-label boldL mb-4"
            >Username</label
          >
          <input
            type="text"
            class="form-control pl-0 pr-0 regularM"
            id="username"
            placeholder="Type here"
            value="praiseee"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="password" class="control-label boldL mb-4"
            >Password</label
          >
          <div class="input-group input-group-seamless-append">
            <input
              :type="[passwordShow ? 'text' : 'password']"
              class="form-control pl-0 regularM"
              style="padding-left: 120px"
              id="password"
              placeholder="Type here"
              value="temporarypassword"
            />

            <div
              class="input-group-append text-primary btn m-0 p-0 boldM"
              @click="passwordShow = !passwordShow"
            >
              SHOW
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="confirmpassword" class="control-label boldL mb-4"
            >Confirm Password</label
          >
          <div class="input-group input-group-seamless-append">
            <input
              :type="[confirmPasswordShow ? 'text' : 'password']"
              class="form-control pl-0 regularM"
              style="padding-left: 120px"
              id="confirmpassword"
              placeholder="Type here"
              value="temporarypassword"
            />

            <div
              class="input-group-append text-primary btn m-0 p-0 boldM"
              @click="confirmPasswordShow = !confirmPasswordShow"
            >
              SHOW
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row m-0 p-0 mt-4 pt-2">
      <p class="col boldL mb-0 pb-0">CONTACTS</p>
    </div>

    <div class="row m-0 p-0 mt-4">
      <div class="col">
        <div class="form-group">
          <label
            for="mobile"
            class="control-label boldL mb-4"
            style="color: #515151"
            >Mobile Phone</label
          >
          <div class="input-group input-group-seamless-prepend">
            <div class="input-group-prepend text-primary btn m-0 p-0 boldM">
              <span class="material-icons text-primary"> call </span>
            </div>
            <input
              type="text"
              class="form-control pr-0 regularM input"
              style="padding-left: 50px"
              id="mobile"
              placeholder="Type here"
              value="+63 9xx xxx xxxx"
            />
          </div>
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label
            for="email"
            class="control-label boldL mb-4"
            style="color: #515151"
            >Email</label
          >
          <div class="input-group input-group-seamless-prepend">
            <div class="input-group-prepend text-primary btn m-0 p-0 boldM">
              <span class="material-icons text-primary"> mail </span>
            </div>
            <input
              type="text"
              class="form-control pr-0 regularM input"
              style="padding-left: 50px"
              id="email"
              placeholder="Type here"
              value="xxx.gmail.com"
            />
          </div>
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label
            for="country"
            class="control-label boldL mb-4"
            style="color: #515151"
            >Country</label
          >
          <div class="input-group input-group-seamless-append">
            <select class="custom-select p-0 regularM">
              <option value="0">Philippines</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div class="input-group-append text-primary btn m-0 p-0 boldM">
              <span class="material-icons"> expand_more </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row m-0 p-0 mt-3">
      <div class="col-8">
        <div class="form-group">
          <label
            for="address"
            class="control-label boldL mb-4"
            style="color: #515151"
            >Address</label
          >
          <input
            type="text"
            class="form-control pl-0 pr-0 regularM"
            id="address"
            placeholder="Type here"
            value="Some place idk where"
          />
        </div>
      </div>
      <div class="col-4">
        <div class="form-group">
          <label class="control-label boldL mb-4" style="color: #515151"
            >City</label
          >
          <div class="input-group input-group-seamless-append">
            <select class="custom-select p-0 regularM">
              <option value="0">Quezon City</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div class="input-group-append text-primary btn m-0 p-0 boldM">
              <span class="material-icons"> expand_more </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row m-0 p-0 mt-4 pt-2">
      <p class="col boldL mb-0 pb-0">ABOUT ME</p>
    </div>

    <div class="row m-0 p-0 mt-4">
      <div class="col">
        <label
          for="exampleFormControlTextarea1"
          class="regularL"
          style="color: #515151"
          >Talk About Yourself</label
        >
        <textarea
          class="form-control regularM p-3"
          id="exampleFormControlTextarea1"
          rows="4"
          placeholder="Type here"
          style="background: #fbfbfb; border-radius: 20px"
        >
                    I am highly motivated, adaptable, and eager to learn. I can
                    work well with other people but can also lead when people need guidance. I am well-versed in both design and management skills, such as
                    marketing,operations and client services
                    , thus I am able to provide outputs in bothfields. By doing so I am able to utilize the skills I developed fromorganizational and competition experience.
                </textarea
        >
      </div>
    </div>

    <div class="row m-0 p-0 mt-4">
      <div class="col">
        <p class="regularL" style="color: #515151">Attach Resume</p>
        <div class="custom-file mb-3">
          <input
            type="file"
            class="custom-file-input"
            id="customFile"
            ref="customFile"
            name="filename"
            @change="changeName"
          />
          <label
            class="custom-file-label regularDefault inline p-2 m-0 h-auto"
            style="border-radius: 10px"
            for="customFile"
          >
            <span
              class="material-icons align-middle text-clip ml-2"
              v-if="files.length >= -1"
            >
              attach_file
            </span>
            <span class="align-middle ml-2">
              {{ files.length > 0 ? files[0].name : "Choose file" }}
            </span>
          </label>
        </div>
      </div>
    </div>

    <div class="row m-0 p-0 mt-3">
      <p class="col boldL mb-0 pb-0">SKILLS</p>
    </div>

    <div class="row m-0 p-0 mt-3">
      <div
        class="row m-0 p-0 w-100 mt-3"
        v-for="row in Math.ceil(userSkills.length / 2)"
        :key="row"
      >
        <div class="col-6" v-for="col in 2" :key="col">
          <div class="row m-0 p-0">
            <div class="col-auto m-0 pr-2 pl-0 boldDefault text-primary">
              <div class="p-4" style="position: relative">
                <div style="padding-top: 100%" />
                <div
                  class="p-4 border test"
                  style="border-radius: 100px; border-color: #f3eff9"
                >
                  <span
                    class=""
                    style="position: absolute; left: 40%; top: 25%"
                  >
                    {{ (row - 1) * 2 + (col - 1) + 1 }}
                  </span>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row w-100 m-0 p-1 boldL">
                {{ userSkills[(row - 1) * 2 + (col - 1)].skill }}
              </div>
              <div
                class="row w-100 m-0 p-0 border h-auto"
                style="border-radius: 10px; border-color: #c4c4c4"
              >
                <div class="dropdown w-100">
                  <button
                    class="btn pl-2 pt-0 pb-0 dropdown-toggle boldDefault w-100 regularS d-flex justify-content-between"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="mt-auto mb-auto">
                      {{ userSkills[(row - 1) * 2 + (col - 1)].level }}
                    </span>
                    <span class="material-icons align-middle">
                      expand_more
                    </span>
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a
                      class="dropdown-item regularS"
                      @click="
                        userSkills[(row - 1) * 2 + (col - 1)].level = 'Beginner'
                      "
                      >Beginner</a
                    >
                    <a
                      class="dropdown-item regularS"
                      @click="
                        userSkills[(row - 1) * 2 + (col - 1)].level = 'Advanced'
                      "
                      >Advanced</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: {},
      passwordShow: false,
      confirmPasswordShow: false,
      internship: {},
      userSkills: [
        { skill: "Programming", level: "Beginner" },
        { skill: "Prototyping", level: "Advanced" },
        { skill: "UI Design", level: "Advanced" },
        { skill: "Researching", level: "Advanced" },
      ],
    };
  },
  methods: {
    changeName(e) {
      // console.log(this.$refs.customFile);
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.files = files;
      // var fileName = this.$refs.customFile.val().split("\\").pop();
      // console.log(fileName);
      // $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    },
  },
};
</script>

<style scoped>
input[type="text"],
select.form-control.notSearch {
  background: transparent;
  border: none;
  border-bottom: 2px solid #c2c2c2;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 0;
}

input[type="text"]:focus,
select.form-control.notSearch:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 2px solid #3aafa9;
}

input[type="password"],
select.form-control {
  background: transparent;
  border: none;
  border-bottom: 2px solid #c2c2c2;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 0;
}

input[type="password"]:focus,
select.form-control:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 2px solid #3aafa9;
}

select {
  background: transparent;
  border: none;
  border-bottom: 2px solid #c2c2c2;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 0;
}

select:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 2px solid #3aafa9;
}

input {
  caret-color: #3aafa9;
}

::placeholder {
  color: #bbbbbb;
}

label.custom-file-label.regularDefault::after {
  visibility: hidden;
}

.dropdown-toggle::after {
  display: none;
}

.test {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.material-switch > input[type="checkbox"] {
  display: none;
}

.material-switch > label {
  cursor: pointer;
  height: 0px;
  position: relative;
  width: 40px;
}

.material-switch > label::before {
  background: rgb(0, 0, 0);
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  content: "";
  height: 16px;
  margin-top: -8px;
  position: absolute;
  opacity: 0.3;
  transition: all 0.4s ease-in-out;
  width: 40px;
}
.material-switch > label::after {
  background: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  content: "";
  height: 24px;
  left: -4px;
  margin-top: -8px;
  position: absolute;
  top: -4px;
  transition: all 0.3s ease-in-out;
  width: 24px;
}
.material-switch > input[type="checkbox"]:checked + label::before {
  background: inherit;
  opacity: 0.5;
}
.material-switch > input[type="checkbox"]:checked + label::after {
  background: inherit;
  left: 20px;
}
</style>
