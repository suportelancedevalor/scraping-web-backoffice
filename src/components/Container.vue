<template>
  <div class="main-content pb-5">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div :class="col">
          <slot></slot>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    col: {
      type: String,
      default: 'col-12'
    }
  }
}
</script>

<style></style>
