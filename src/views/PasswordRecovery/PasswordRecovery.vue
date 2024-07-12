<template>
  <div>
    <div
      class="d-flex align-items-center border-top border-top-2 border-primary vh-100"
    >
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-12 col-md-5 order-md-1 mb-5">
            <div class="text-center mb-5">
              <router-link :to="$paths.home">
                <img
                  src="@/assets/logo.png"
                  alt="LDV-logo"
                  height="50"
                  class="mb-5 rounded"
                />
              </router-link>
              <div class="h1 text-pagetitle">Esqueci minha senha</div>
              <div class="text-paragraph text-muted">
                Insira um email válido para a recuperação de senha
              </div>
            </div>
            <form>
              <TextInput
                label="Email"
                :model="v$.form.email"
                type="email"
                placeholder="exemplo@email.com.br"
              />

              <div class="text-danger text-center">
                <small>{{ errorMessage }}</small>
              </div>

              <FormButton
                label="Recuperar"
                :loading="submitting"
                :disabled="v$.$invalid"
                class=""
                @onClick="passwordRecovery"
                :form="v$.form"
              />

              <div class="text-center text-muted text-caption">
                Lembrou da senha?
                <router-link tag="a" :to="$paths.login"> Acesse.</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PasswordRecoveryController from "./PasswordRecoveryController";
export default PasswordRecoveryController;
</script>
