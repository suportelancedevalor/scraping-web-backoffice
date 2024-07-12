import { isCPFValid, isNameValid } from '@/utils/FormValidators';
import useVuelidate from '@vuelidate/core';
import {
  email,
  helpers,
  minLength,
  required,
  sameAs
} from '@vuelidate/validators';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      id: this.$route.params.id as string,
      v$: useVuelidate(),
      errorMessage: "",
      submitting: false,
      loading: false,
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  validations() {
    return {
      form: {
        name: {
          required: helpers.withMessage("Informe um nome e um sobrenome", required),
          isNameValid: helpers.withMessage('Informe um nome e um sobrenome', (value: string) => isNameValid(value)),
        },
        email: {
          required: helpers.withMessage("Informe um email válido", required),
          email: helpers.withMessage("Informe um email válido", email),
        },
        password: {
          required: helpers.withMessage("Informe uma senha com no mínimo 8 caractéres", required),
          minLength: helpers.withMessage('Informe uma senha com no mínimo 8 caractéres', minLength(8)),
        },
        password_confirmation: {
          required: helpers.withMessage('As senhas não correspondem', required),
          sameAsPassword: helpers.withMessage('As senhas não correspondem', sameAs(this.form.password)),
        },
      },
    }
  },
  methods: {
    handleLogin() {
      this.$router.push(this.$paths.login)
    },
    async register() {
      try {
        this.errorMessage = "";
        this.submitting = true;
        // IMPLEMENTAR

        this.$eventBus.$emit("showToast", {
          title: "Conta criada",
          msg: `Você já pode começar a usufruir dos benefícios do Diag.`,
        });

        this.$router.push(this.$paths.home);
      } catch (e: any) {
        console.log(e);
        this.errorMessage = e.message;
      } finally {
        this.submitting = false;
      }
    },
  },
});