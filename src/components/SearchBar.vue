<template>
  <div class="card-header">

    <div class="input-group input-group-flush input-group-merge input-group-reverse">
      <input class="form-control list-search" type="search" id="search-input" placeholder="Pesquisar"
        @keyup.enter="onSearch" />
      <span class="input-group-text">
        <i class="fe fe-search"></i>
      </span>
    </div>

    <slot name="bulkAction"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typingTimer: null
    }
  },
  mounted() { },
  methods: {
    onSearch(event) {
      const $this = this
      clearTimeout(this.typingTimer)
      $this.typingTimer = setTimeout(() => {
        $this.$emit('onSearch', event.target.value)
      }, 200)
    }
  }
}
</script>

<style></style>
