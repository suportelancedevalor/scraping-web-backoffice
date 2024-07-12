import { Modal } from "bootstrap";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ConfirmationAlert",
  mounted() {
    this.$eventBus.$on(
      "showConfirmationAlert",
      ({
        title,
        message,
        confirmCallback,
        cancelCallback,
        confirmationButtonLabel,
      }) => {
        this.confirmCallback = confirmCallback;
        this.cancelCallback = cancelCallback;
        this.message = message;
        this.title = title;
        this.confirmationButtonLabel = confirmationButtonLabel;
        this.confirmAlertModal = new Modal(
          document.getElementById("confirmAlertModal"),
          {
            backdrop: "static",
            keyboard: false,
          }
        );
        this.confirmAlertModal.toggle();
      }
    );
  },
  data() {
    return {
      confirmAlertModal: null,
      confirmCallback: () => {},
      cancelCallback: () => {},
      title: null,
      message: null,
      confirmationButtonLabel: "Sim",
    };
  },
  methods: {
    alertClosed() {
      this.cancelAction();
    },
    confirmAction() {
      this.confirmCallback();
      this.confirmAlertModal.toggle();
    },
    cancelAction() {
      if (this.cancelCallback) {
        this.cancelCallback();
      }
      this.confirmAlertModal.toggle();
    },
  },
  destroyed() {},
});
