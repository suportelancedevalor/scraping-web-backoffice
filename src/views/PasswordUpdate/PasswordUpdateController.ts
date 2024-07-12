import { store } from "@/store";
import useVuelidate from "@vuelidate/core";
import { helpers, minLength, required, sameAs } from "@vuelidate/validators";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PasswordUpdate",
  data() {
    return {
      v$: useVuelidate(),
      errorMessage: "",
      submitting: false,
      form: {
        old_password: "",
        password: "",
        passwordConfirmation: "",
      } as any,
    };
  },
  computed: {
    userSession() {
      return store.state.session;
    },
  },
  validations() {
    return {
      form: {
        old_password: {
          required: helpers.withMessage("Informe uma senha com no mínimo 8 caractéres", required),
          minLength: helpers.withMessage('Informe uma senha com no mínimo 8 caractéres', minLength(8)),
        },
        password: {
          required: helpers.withMessage("Informe uma senha com no mínimo 8 caractéres", required),
          minLength: helpers.withMessage('Informe uma senha com no mínimo 8 caractéres', minLength(8)),
        },
        passwordConfirmation: {
          required: helpers.withMessage('As senhas não correspondem', required),
          sameAsPassword: helpers.withMessage('As senhas não correspondem', sameAs(this.form.password)),
        },
      },
    }
  },
  methods: {
    async submit() {
      try {
        this.submitting = true;
        this.errorMessage = "";

        // IMPLEMENTAR

        this.$eventBus.$emit("showToast", {
          title: "Senha alterada",
          msg: `Sua senha foi alterada com sucesso`,
        });
        this.$router.back();
      } catch (error: any) {
        this.errorMessage = error.message;
      } finally {
        this.submitting = false;
      }
    },
  },
});
