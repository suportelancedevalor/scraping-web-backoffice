import { MUTATIONS, store } from '@/store';
import useVuelidate from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    store.commit(MUTATIONS.CLEAR_SESSION);
  },
  data() {
    return {
      v$: useVuelidate(),
      errorMessage: "",
      submitting: false,
      form: {
        email: "",
      },
    };
  },
  validations() {
    return {
      form: {
        email: {
          required: helpers.withMessage('Informe um email válido', required),
          email: helpers.withMessage('Informe um email válido', email),
        },
      },
    }
  },
  methods: {
    async passwordRecovery() {
      try {
        this.errorMessage = "";
        this.submitting = true;

        // IMPLEMENTAR 

        this.$eventBus.$emit("showToast", {
          title: "Email de recuperação enviado",
          msg: `Um link de recuperação foi enviado para seu email, verifique seu email.`,
        });
        this.$router.push(this.$paths.login);
      } catch (e: any) {
        console.log(e);
        this.errorMessage = e.message;
      } finally {
        this.submitting = false;
      }
    },
  },
});
