<template>
  <div>
    <p>
      <span v-if="item.specialties.includes(sp.id)"
        class="fa-solid fa-circle-check fa-medium-size mb-0 text-muted"></span>
      <span v-else class="far fa-circle fa-medium-size mb-0 text-muted"></span>
      {{sp.title}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'FormButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Field name'
    }
  },
  methods: {
    clicked () {
      this.$emit('onClick')
    }
  }
}
</script>
