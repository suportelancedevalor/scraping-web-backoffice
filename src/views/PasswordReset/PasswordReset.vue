<template>
  <div
    class="d-flex align-items-center bg-white border-top border-top-2 border-primary vh-100"
  >
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-12 col-md-5 order-md-1 mb-5">
          <div class="text-center mb-5">
            <router-link :to="$paths.home">
              <img
                src="@/assets/logo.png"
                alt="LDV-logo"
                height="100"
                class="mb-5 rounded"
              />
            </router-link>
            <div class="h1 text-pagetitle">
              {{ texts.title }}
            </div>
          </div>
          <form>
            <PasswordInput
              :label="texts.password.label"
              :model="v$.form.password"
              :errorMsg="v$.form.password.required?.$message"
              :placeholder="texts.password.placeholder"
            />

            <PasswordInput
              :label="texts.confirmPassword.label"
              :model="v$.form.passwordConfirmation"
              :errorMsg="v$.form.passwordConfirmation.required?.$message"
              :placeholder="texts.confirmPassword.placeholder"
            />

            <div class="text-danger text-center">
              <small>{{ errorMessage }}</small>
            </div>

            <FormButton
              label="Concluir"
              :loading="submitting"
              :disabled="v$.$invalid"
              class="mb-3"
              @onClick="resetPassword"
              :form="v$.form"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PasswordResetController from "./PasswordResetController";
export default PasswordResetController;
</script>

<style scoped></style>
