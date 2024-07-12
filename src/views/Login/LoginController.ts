
import ILogin from '@/interfaces/ILogin'
import { useVuelidate } from '@vuelidate/core'
import { email, helpers, required } from '@vuelidate/validators'
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    // this.$userService.logout()
  },
  data() {
    return {
      v$: useVuelidate(),
      errorMessage: '',
      submitting: false,
      form: {
        email: '',
        password: ''
      }
    }
  },
  validations() {
    return {
      form: {
        email: {
          required: helpers.withMessage('Informe um email válido', required),
          email: helpers.withMessage('Informe um email válido', email),
        },
        password: {
          required: helpers.withMessage('Informe a senha', required),
        }
      }
    }
  },
  methods: {
    async login() {
      this.errorMessage = ''
      this.submitting = true
      const params: ILogin = { email: this.form.email, password: this.form.password }
      try {
        // IMPLEMENTAR
      }
      catch (e: any) {
        console.log(e)
        this.errorMessage = e.message
      } finally {
        this.submitting = false
      }
    }
  }
})
