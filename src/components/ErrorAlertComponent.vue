<template>
  <div role="alert" aria-live="assertive" aria-atomic="true" class="toast toast-error position-fixed" id="error-toast"
    data-bs-autohide="false">
    <div class="toast-header border-0 rounded bg-danger text-white">
      <span class="fas fa-exclamation-circle"></span>
      <strong class="me-auto ms-2">{{ msg }}</strong>
      <button type="button" class="btn-close text-white" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'bootstrap'
import * as $ from '@/assets/theme/js/jquery.min.js'
export default {
  mounted() {
    this.$eventBus.$on('showErrorToast', this.handleToast)
    this.$eventBus.$on('hideErrorToast', this.hideToast)
    // this.handleToast({
    //   msg: 'Falha ao salvar PDF do exame, já existe um arquivo com o nome Diag_receita_Vinnie_Paciente_15022024.pdf'
    // })
  },
  name: 'ErrorAlert',
  data() {
    return {
      toast: null,
      title: '',
      msg: ''
    }
  },
  methods: {
    handleToast(data) {
      console.log('aqui', data)
      const $this = this
      this.toast = new Toast(document.getElementById('error-toast'))
      // this.title = data.title || 'Ocorreu um erro'
      this.msg = data.msg
      this.toast.show()
      // setTimeout(() => {
      //   $this.hideToast()
      // }, 6000)
    },
    hideToast() {
      this.toast = new Toast(document.getElementById('error-toast'))
      this.toast.hide()
    }
  }
}
</script>
<style scoped>
.toast-error {
  z-index: 99999999;
  top: 60px;
  left: calc(50% - 60px);
}
.toast-error.show {
  display: flex;
}
</style>
