<template>
  <div>
    <div
      class="d-flex align-items-center border-top border-top-2 border-primary pt-5"
    >
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-12 col-md-8 order-md-1 mb-5">
            <div class="text-center mb-5">
              <router-link :to="$paths.home">
                <img
                  src="@/assets/logo.png"
                  alt="LDV-logo"
                  height="100"
                  class="mb-5 rounded"
                />
              </router-link>
              <h1 class="text-pagetitle">Vamos criar um conta</h1>
            </div>
            <div class="card">
              <div class="card-header">
                <p class="text-subtitle mb-0">Informações de acesso</p>
              </div>
              <div class="card-body">
                <TextInput
                  label="Nome e sobrenome"
                  :model="v$.form.name"
                  type="text"
                  placeholder="Nome e sobrenome"
                  :errorMsg="v$.form.name.required?.$message"
                />

                <TextInput
                  label="Email"
                  :model="v$.form.email"
                  type="text"
                  placeholder="nome@email.com"
                  :errorMsg="v$.form.email.required?.$message"
                />

                <PasswordInput
                  label="Senha (mínimo de 8 caracteres)"
                  :model="v$.form.password"
                  placeholder="Mínimo de 8 caracteres"
                  :errorMsg="v$.form.password.required?.$message"
                />

                <PasswordInput
                  label="Confirme sua senha"
                  :model="v$.form.password_confirmation"
                  placeholder="Senha"
                  :errorMsg="v$.form.password_confirmation.required?.$message"
                />

                <div class="text-danger text-center">
                  <small>{{ errorMessage }}</small>
                </div>

                <div class="row">
                  <div class="col-12 col-md-6">
                    <button
                      @click="handleLogin"
                      class="btn w-100 btn-outline-primary my-3"
                    >
                      Já possui conta? Faça login
                    </button>
                  </div>
                  <div class="col-12 col-md-6">
                    <FormButton
                      label="Continuar"
                      :loading="submitting"
                      :disabled="v$.$invalid"
                      :form="v$.form"
                      class="mb-3"
                      @onClick="register"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterController from "./RegisterController";
export default RegisterController;
</script>
