<template>
  <div>
    <Navbar />
    <Sidebar />
    <Container>
      <Header title="Home" />
      <div v-if="items.length" class="card">
        <div class="card-body">
          <div v-for="item in items" :key="item.id" class="card mb-3">
            <img :src="item.card_image" class="card-img-top" alt="Item Image">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.size }}</p>
              <p class="card-text"><strong>Localidade:</strong> {{ item.card_locality }}</p>
              <p class="card-text"><strong>Preço:</strong> {{ item.price }}</p>
              <p class="card-text"><strong>Status:</strong> {{ item.status }}</p>
              <p class="card-text"><strong>Latitude:</strong> {{ item.lat }}</p>
              <p class="card-text"><strong>Longitude:</strong> {{ item.lng }}</p>
              <!-- Botão visível apenas se lat ou lng forem "não informado" -->
              <button
                v-if="item.lat === 'não informado' || item.lng === 'não informado'"
                class="btn btn-primary"
                @click="updateGeolocation(item.id)"
              >
                Atualizar Geolocalização
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Nenhum item disponível no momento.</p>
      </div>
    </Container>
  </div>
</template>

<script lang="ts">
import HomeController from "./HomeController";
export default HomeController;
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}

.card-img-top {
  max-height: 200px;
  object-fit: cover;
}
</style>
