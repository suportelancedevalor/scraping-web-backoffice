<template>
  <div id="main-row" class="row align-items-center text-center ps-0">
    <div class="col">
      <span

        class="spinner-border spinner-border text-primary"
        role="status"
        aria-hidden="true"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingContainer'
}
</script>

<style lang="scss" scoped>
#main-row {
    height: calc(50vh);
    padding-left: 150px;
}
</style>
