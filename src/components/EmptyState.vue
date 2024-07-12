<template>
  <div class="container mt-5" style="max-width: 350px;">
    <div class="row justify-content-center">
      <div v-if="totalItemsRegistered === 0" class="col-12 my-5 text-center">
        <!-- empty state de qdo nao tem nada no banco  -->
        <slot name="noItemsRegistered"></slot>
      </div>
      <div v-else class="col-12 my-5">
        <div class="text-center">
          <slot v-if="$slots.icon" name="icon"></slot>
          <i v-else class="fa-solid fa-2x fa-magnifying-glass text-muted"></i>
          <h1 class="display-7 my-3 h3 mb-1">
            {{ title || "Nenhum resultado no momento" }}
          </h1>
          <p class="text-muted mb-3">
            {{ msg || `Não foram encontrados resultados.` }}
          </p>
          <slot name="button"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Emptystate',
  props: {
    title: String,
    msg: String,
    totalItemsRegistered: Number
  }
}
</script>
