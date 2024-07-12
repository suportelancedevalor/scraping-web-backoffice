<template>
  <div>
    <Navbar />
    <Sidebar />
    <Container col="col-12 col-md-10">
      <Header title="Alterar Senha" />
      <div class="card">
        <div class="card-body">
          <h2 class="text-header">Informações</h2>
          <form>
            <PasswordInput
              label="Senha"
              :model="v$.form.old_password"
              placeholder="Senha atual"
            />
            <PasswordInput
              label="Nova senha"
              :model="v$.form.password"
              placeholder="Mínimo de 8 caracteres"
            />
            <PasswordInput
              label="Confirme a senha"
              :model="v$.form.passwordConfirmation"
              placeholder="Confirme sua senha"
              errorMsg="As senhas nao coincidem"
            />
            <div class="row">
              <div class="col-12 text-center">
                <span class="text-danger text-center">{{ errorMessage }}</span>
              </div>
            </div>
            <FormButton
              label="Alterar senha"
              :loading="submitting"
              :disabled="v$.$invalid"
              @onClick="submit"
            />
          </form>
        </div>
      </div>
    </Container>
  </div>
</template>
<script>
import PasswordUpdateController from "./PasswordUpdateController";
export default PasswordUpdateController;
</script>
<style scoped></style>
