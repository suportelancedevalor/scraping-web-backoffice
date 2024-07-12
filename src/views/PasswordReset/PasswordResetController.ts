import useVuelidate from '@vuelidate/core';
import { helpers, minLength, required, sameAs } from '@vuelidate/validators';
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            v$: useVuelidate(),
            token: this.$route?.query.token,
            email: this.$route?.query.email,
            // env: this.$route?.query.env,
            form: {
                password: '',
                passwordConfirmation: '',
            },
            errorMessage: '',
            submitting: false,
            success: false,
            texts: {
                title: 'Recuperação de senha',
                password: {
                    label: 'Senha',
                    placeholder: 'Digite a senha',
                },
                confirmPassword: {
                    label: 'Confirmar senha',
                    placeholder: 'Digite a senha novamente',
                },
            }
        }
    },
    validations() {
        return {
            form: {
                password: {
                    required: helpers.withMessage('Preencha a senha com no mínimo 8 caracteres', required),
                    minLength: helpers.withMessage('Preencha a senha com no mínimo 8 caracteres', minLength(8))
                },
                passwordConfirmation: {
                    required: helpers.withMessage('As senhas não batem', required),
                    sameAsPassword: helpers.withMessage('As senhas não batem', sameAs(this.form.password)),
                },
            }
        }
    },
    methods: {
        async resetPassword() {
            try {
                this.submitting = true
                this.errorMessage = ''

                // IMPLEMENTAR

                this.$eventBus.$emit("showToast", {
                    title: "Senha atualizada",
                    msg: `Sua senha foi atualizada com sucesso, use-a para acessar a plataforma.`,
                });
                this.$router.push(this.$paths.login);
            } catch (e: any) {
                this.errorMessage = e.message
            } finally {
                this.submitting = false
            }
        },
    },
})