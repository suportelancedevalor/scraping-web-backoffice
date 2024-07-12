<template>
  <div class="card " v-if="isPrimary">
    <div class="card-body">
      <h2 class="text-gray-700">
        <!-- <span class="fe fe-dollar-sign text-primary"></span> -->
        <i :class="iconClass" class="text-primary"></i>
        <span class="ms-2">
          {{ title }}
        </span>
      </h2>
      <h1 class="display-4 fw-bold mb-2">
        {{ qtd }}
      </h1>
      <!-- <p class="font-weight-bold text-primary fw-bold mb-0">.</p> -->
    </div>
  </div>
  <router-link v-else class="card lift" :to="path">
    <div class="card-body">
      <h2 class="text-gray-700">
        <i :class="iconClass" class="text-primary"></i>
        <span class="ms-2">
          {{ title }}
        </span>
      </h2>
      <h1 class="display-4 text-dark fw-bold mb-2">
        {{ qtd }}
      </h1>
      <!-- <p v-if="path" class="font-weight-bold text-muted fw-bold mb-0">Ver mais</p> -->
    </div>

  </router-link>
<!-- </router-link> --></template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      default: ''
    },
    qtd: {
      default: 0
    },
    path: {
      type: String,
      default: ''
    },
    isPrimary: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style></style>
