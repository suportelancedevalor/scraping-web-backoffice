<template>
  <div>
    <button
      hidden
      :id="`${id}_modal_button`"
      type="button"
      data-bs-toggle="modal"
      :data-bs-target="`#${id}`"
    ></button>
    <div
      class="modal fade"
      :id="id"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        :class="size"
      >
        <div class="modal-content">
          <div class="modal-header border-0">
            <h2 class="text-header mb-0">{{ title }}</h2>
            <i
              v-if="hasCloseButton"
              type="button"
              class="fas fa-times text-muted"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="modalClosed"
            ></i>
          </div>
          <div class="modal-body border-0">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer border-0" v-if="this.$slots.footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export function toggleModal(id) {
  const button = document.getElementById(`${id}-modal-btn`);
  if (button) {
    button?.click();
  }
}
export default {
  props: {
    id: String,
    title: String,
    size: String,
    hasCloseButton: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    modalClosed() {
      this.$emit("modalClosed");
    },
  },
};
</script>

<style></style>
