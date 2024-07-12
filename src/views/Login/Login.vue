<template>
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
                class="mb-5 rounded"
                height="100"
              />
            </router-link>
            <div class="h1 text-pagetitle">Entrar</div>
          </div>
          <form>
            <TextInput
              label="Email"
              :model="v$.form.email"
              type="text"
              placeholder="Informe seu email"
            />

            <PasswordInput
              label="Senha"
              :model="v$.form.password"
              placeholder="Informe sua senha"
            />

            <div class="text-danger text-center">
              <small>{{ errorMessage }}</small>
            </div>

            <FormButton
              label="Entrar"
              :loading="submitting"
              :disabled="v$.$invalid"
              class="mb-3"
              @onClick="login"
              :form="v$.form"
            />

            <div class="text-caption text-muted text-center mb-3">
              Ainda não possui uma conta?
              <router-link tag="a" :to="$paths.register" class="fw-bold">
                Crie uma aqui.
              </router-link>
            </div>
            <div class="text-caption text-center text-muted">
              Esqueceu sua senha?
              <router-link
                tag="a"
                :to="$paths.passwordRecovery"
                class="fw-bold"
              >
                Cadastre uma nova.
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LoginController from "./LoginController";
export default LoginController;
</script>
