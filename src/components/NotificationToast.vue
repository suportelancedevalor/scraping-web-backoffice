<template>
  <div style="z-index: 99999999; bottom: 50px" role="alert" aria-live="assertive" aria-atomic="true"
    class="toast position-fixed ms-5" id="main-toast" data-bs-autohide="false">
    <div class="toast-header border-0 pb-1">
      <span class="fas fa-check-circle text-primary"></span>
      <strong class="me-auto ms-2">{{ title }}</strong>

      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body pt-0 pb-4 text-muted">
      <small>{{ msg }}</small>
    </div>
    <div class="progress progress-sm">
      <div ref="filledProgressToast" id="filled-progress-toast" class="progress-bar" role="progressbar"
        style="width: 100%" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'bootstrap'
import * as $ from '@/assets/theme/js/jquery.min.js'
export default {
  mounted() {
    this.$eventBus.$on('showToast', this.handleToast)
  },
  name: 'NotificationToast',
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
      this.toast = new Toast(document.getElementById('main-toast'))
      this.title = data.title
      this.msg = data.msg
      this.toast.show()
      $(this.$refs.filledProgressToast).animate(
        { width: '0%' },
        3500,
        function () {
          setTimeout(() => {
            $(this).css('width', '100%')
          }, 500)
          $this.toast.hide()
        }
      )
    }
  }
}
</script>
