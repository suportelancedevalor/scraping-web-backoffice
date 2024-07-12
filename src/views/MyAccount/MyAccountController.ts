import { store } from "@/store";
import { isNameValid } from "@/utils/FormValidators";
import useVuelidate from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyAccount",
  mounted() {
    this.loadingItems = true;
    this.getData();
  },
  data() {
    return {
      v$: useVuelidate(),
      item: {} as any,
      loadingItems: false,
      isEditing: false,
      submitting: false,
      errorMessage: "",
      form: {
        name: "",
        email: "",
      } as any,
    };
  },
  computed: {
    userSession() {
      return store.state.session;
    },
  },
  validations: {
    form: {
      name: {
        required: helpers.withMessage("Informe um nome e um sobrenome", required),
        isNameValid: helpers.withMessage('Informe um nome e um sobrenome', (value: string) => isNameValid(value)),
      },
      email: {},
    },
  },
  methods: {
    async getData() {
      try {
        let data = this.userSession;

        const form = {
          name: data?.name,
          email: data?.email,

        };

        this.form = form
        this.item = data
      } catch (e) {
        console.log(e);
      } finally {
        this.loadingItems = false;
      }
    },
    async handleEdit() {
      try {
        this.errorMessage = ''
        this.submitting = true;

        // IMPLEMENTAR

      } catch (error: any) {
        console.log(error);
        this.errorMessage = error.message
      } finally {
        this.isEditing = false;
        this.submitting = false;
      }
    },
    handleDelete() {
      this.$eventBus.$emit("showConfirmationAlert", {
        title: "Deseja deletar sua conta?",
        message:
          "Ao deletar sua conta, você irá perder acesso ao aplicativo e todas a suas configurações. Deseja realmente deletar sua conta",
        confirmCallback: async () => {
          try {

            // IMPPLEMENTAR

            this.$eventBus.$emit("showToast", {
              title: "Conta deletada",
              msg: `Conta deletada com sucesso`,
            });
            // this.$store.commit("clearSession");
            this.$router.push({ path: `${this.$paths.login}` });
          } catch (e) {
            console.log(e);
          } finally {
            // this.$set(this, `loadingDelete`, false);
          }
        },
      });
    },
  },
});
