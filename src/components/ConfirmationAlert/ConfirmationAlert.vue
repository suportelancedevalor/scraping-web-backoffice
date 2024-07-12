<template>
  <div>
    <ModalComponent
      :title="title === null || title === undefined ? 'Confirmar acão' : title"
      id="confirmAlertModal"
      v-on:modalClosed="alertClosed"
    >
      <template v-slot:body>
        <p class="text-paragraph">
          {{
            message === null || message === undefined
              ? "Tem certeza que deseja continuar ?"
              : message
          }}
        </p>
      </template>
      <template v-slot:footer>
        <button
          type="button"
          @click="cancelAction"
          class="btn btn-outline-primary w-15"
        >
          Não
        </button>
        <button
          type="button"
          @click="confirmAction"
          class="btn btn-primary w-15"
        >
          {{ confirmationButtonLabel || "Sim" }}
        </button>
      </template>
    </ModalComponent>
  </div>
</template>
<script lang="ts">
import ConfirmationAlertController from "./ConfirmationAlertController";
export default ConfirmationAlertController;
</script>
<style scoped></style>
