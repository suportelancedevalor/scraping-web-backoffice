<template>
  <div>
    <Navbar />
    <Sidebar />
    <Container>
      <Header title="Home" />
      <div v-if="items.length" class="card">
        <div class="card-body">
          <div v-for="item in items" :key="item.id" class="card mb-3">
            <img :src="item.auction_data.images[0]" class="card-img-top" alt="Item Image">
            <div class="card-body">
              <h5 class="card-title">{{ item.auction_data.title }}</h5>
              <p class="card-text"><strong>Localização:</strong> {{ item.auction_data.location }}</p>
              <p class="card-text"><strong>Descrição:</strong> {{ item.auction_data.description }}</p>
              <p class="card-text"><strong>Valor de Avaliação:</strong> {{ item.auction_data.valuation }}</p>
              <p class="card-text"><strong>Status:</strong> {{ item.auction_data.status }}</p>
              <p class="card-text"><strong>Primeiro Leilão:</strong> {{ item.auction_data.auction_dates.first_auction }}</p>
              <p class="card-text"><strong>Segundo Leilão:</strong> {{ item.auction_data.auction_dates.second_auction }}</p>
              <p class="card-text"><strong>Latitude:</strong> {{ item.auction_data.lat }}</p>
              <p class="card-text"><strong>Longitude:</strong> {{ item.auction_data.lng }}</p>
              <!-- Botão visível apenas se lat ou lng forem "não informado" -->
              <button
                v-if="item.auction_data.lat === 'não informado' || item.auction_data.lng === 'não informado'"
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
