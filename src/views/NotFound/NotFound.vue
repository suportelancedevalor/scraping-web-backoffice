<template>
  <div class="container">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-12 col-md-6 col-xl-6 my-5">
        <div class="text-center">
          <!-- Preheading -->
          <h6 class="text-uppercase text-muted mb-4">404 error</h6>

          <!-- Heading -->
          <h1 class="display-4 mb-3">Pagina não encontrada 😭</h1>

          <!-- Subheading -->
          <p class="text-muted mb-4">
            Parece que você acessou esta pagina por engano
          </p>

          <!-- Button -->
          <router-link :to="$paths.home" class="btn btn-lg btn-primary">
            Voltar para o início
          </router-link>
        </div>
      </div>
    </div>
    <!-- / .row -->
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>
<style scoped></style>
