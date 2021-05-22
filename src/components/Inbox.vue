<template>
  <div class="Inbox">
    <div class="row m-0 p-0" style="width: 100%">
      <div class="col-2 m-0 p-0" style="max-width: 240px">
        <Sidebar :active="4" />
      </div>
      <div class="col-2 pr-0 pl-0 w-40" style="max-width: 240px">
        <ChatSidebar :active="active" />
      </div>
      <div class="col">
        <div class="card border-0 shadow-sm" style="height: 98vh">
          <div
            class="card-body m-0 p-0"
            style="
              overflow-y: scroll;
              display: flex;
              flex-direction: column-reverse;
              height: 95%;
            "
          >
            <div
              class="row m-0 p-0 w-100"
              v-for="(message, index) in chat.unreadMessages"
              :key="index"
            >
              <div class="row m-0 p-3 w-100">
                <div
                  style="width: 40px; height: 40px; background: #c4c4c4"
                  class="col-auto border border-3"
                />
                <div class="col m-0 pl-2">
                  <div class="row m-0 p-0 pt-1 mt-2">
                    <span class="col-auto pl-0 boldM pr-1">
                      {{ message.name }}
                    </span>
                    <span class="col-auto pl-1 regularM text-time">
                      {{ message.time }}
                    </span>
                  </div>
                  <div
                    v-if="message.message != null"
                    class="row-m-0 p-0 regularM pt-1 mt-1"
                  >
                    {{ message.message }}
                  </div>
                  <img
                    v-if="message.picture != null"
                    :src="
                      require('../assets/For Gene/Pictures/' + message.picture)
                    "
                    class="img-fluid pt-1 mt-1"
                    alt="Responsive image"
                    style="max-width: 320px"
                  />

                  <div
                    class="row m-0 p-0 regularM p-3 mt-2 border"
                    style="border-color: #ececee"
                    v-if="message.file != null"
                  >
                    <!-- <div v-for="(file, index) in reply.files" :key="index" :class="['border', {'border-0' : index == reply.files.length -1}, {'border-top-0 border-left-0 border-right-0' : index < reply.files.length -1},'p-3 row m-0 p-0']" style="border-color: #ECECEE"> -->
                    <div
                      style="width: 24px; height: 24px; background: #ececee"
                      class="col-auto m-0 p-0"
                    />
                    <span
                      class="regularM col m-0 p-0 h-auto mt-auto mb-auto pl-2"
                    >
                      {{ message.file }}
                    </span>
                    <!-- </div> -->
                  </div>
                </div>
              </div>
            </div>

            <div
              v-if="chat.unreadMessages.length > 0"
              class="row m-0 p-0 mt-3 mb-3 w-100 border border-bottom-0 border-right-0 border-left-0 d-flex justify-content-center"
            >
              <span class="bg-white mt-n2 pl-2 pr-2 regularS text-muted">
                New Messages
              </span>
            </div>

            <div
              class="row m-0 p-0 w-100"
              v-for="(message, index) in chat.readMessages"
              :key="index"
            >
              <div class="row m-0 p-3 w-100">
                <div
                  style="width: 40px; height: 40px; background: #c4c4c4"
                  class="col-auto border border-3"
                />
                <div class="col m-0 pl-2">
                  <div class="row m-0 p-0 pt-1 mt-2">
                    <span class="col-auto pl-0 boldM pr-1">
                      {{ message.name }}
                    </span>
                    <span class="col-auto pl-1 regularM text-time">
                      {{ message.time }}
                    </span>
                  </div>
                  <div
                    v-if="message.message != null"
                    class="row-m-0 p-0 regularM pt-1 mt-1"
                  >
                    {{ message.message }}
                  </div>
                  <img
                    v-if="message.picture != null"
                    :src="
                      require('../assets/For Gene/Pictures/' + message.picture)
                    "
                    class="img-fluid pt-1 mt-1"
                    alt="Responsive image"
                    style="max-width: 320px"
                  />
                  <div
                    class="row m-0 p-0 regularM p-3 mt-2 border"
                    style="border-color: #ececee"
                    v-if="message.file != null"
                  >
                    <!-- <div v-for="(file, index) in reply.files" :key="index" :class="['border', {'border-0' : index == reply.files.length -1}, {'border-top-0 border-left-0 border-right-0' : index < reply.files.length -1},'p-3 row m-0 p-0']" style="border-color: #ECECEE"> -->
                    <div
                      style="width: 24px; height: 24px; background: #ececee"
                      class="col-auto m-0 p-0"
                    />
                    <span
                      class="regularM col m-0 p-0 h-auto mt-auto mb-auto pl-2"
                    >
                      {{ message.file }}
                    </span>
                    <!-- </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="card-body bg-white pt-3 border border-bottom-0 border-left-0 border-right-0"
            style="height: 72px"
          >
            <div class="row m-0 p-0 mt-auto mb-auto bg-white">
              <input
                v-model="chatMessage"
                v-on:keyup.enter="submit"
                class="mt-auto mb-auto col form-control border-0 bg-secondary regularDefault"
                placeholder="Message..."
              />
              <span
                class="mt-auto mb-auto material-icons col-auto p-0 text-muted pl-1"
              >
                add
              </span>
              <span
                class="mt-auto mb-auto material-icons col-auto p-0 text-muted pl-1"
              >
                sentiment_very_satisfied
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import ChatSidebar from "@/components/ChatSidebar.vue";
export default {
  name: "Inbox",
  components: {
    Sidebar,
    ChatSidebar,
  },
  props: {
    tab: String,
  },
  data() {
    return {
      chatList: [],
      chat: [],
      active: 3,
      chatMessage: "",
    };
  },
  created() {
    this.chatList = this.$store.state.inbox;
    this.chat = this.chatList[this.active];
    //   this.chat.readMessages = this.chat.readMessages.slice().reverse();
    //   this.chat.unreadMessages = this.chat.unreadMessages.slice().reverse();
    //   console.log(this.chat)
  },
  methods: {
    submit() {
      if (this.chatMessage != "") {
        this.$store.commit("sendMessage", { message: this.chatMessage });
        this.chatMessage = "";
      }
    },
  },
  watch: {
    chatMessage() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
