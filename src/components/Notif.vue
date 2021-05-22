<template>
  <div class="row m-0 p-0">
    <div class="col m-0 p-0">
      <div class="input-group shadow-sm" style="width: 20%">
        <div class="input-group-prepend">
          <span
            class="input-group-text pr-1 border-0"
            style="background: #ffffff"
            ><i class="fas fa-search" style="color: rgba(0, 0, 0, 0.3)"></i
          ></span>
        </div>
        <input
          type="text"
          class="form-control form-control-sm border-0 pt-2 pb-2 pl-1"
          placeholder="Search..."
        />
      </div>
    </div>
    <div class="col-auto">
      <span
        class="material-icons text-muted button"
        data-toggle="modal"
        data-target="#modalnotif"
      >
        notifications
      </span>
      <NotifModal ref="modalnotif" id="modalnotif" />
    </div>
  </div>
</template>

<script>
import NotifModal from "./NotifModal.vue";
export default {
  components: {
    NotifModal,
  },
};
</script>

<style scoped>
.button:hover {
  cursor: pointer;
}
</style>
