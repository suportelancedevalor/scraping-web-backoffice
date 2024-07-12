<template>
  <div class="position-relative justify-content-center d-flex" @mouseover="onMouseOver($event)"
    @mouseleave="onMouseLeave($event)">
    <button @click.prevent="clicked()" :disabled="loading" class="btn w-100 btn-primary my-3">
      <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      {{ label }}
    </button>
    <div v-if="showError && fieldError" class="position-absolute shadow-lg bg-danger-soft rounded" style="top: -50px">
      <p class="popover-header text-danger p-3 mb-0 fw-bold">
        <i class="fa-solid fa-exclamation-circle"></i>
        {{ fieldError }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Field name'
    },
    form: {
      required: false,
      // type: {} as any,
      default: () => null as any
    },
  },
  computed: {
    fieldError() {
      if (!this.form) return
      let msg = ''
      try {

        // const messages = this.form.$silentErrors?.map((r: any) => typeof r.$message == 'object' ? r.$message[0] : r.$message)
        console.log(JSON.stringify(this.form.$silentErrors))
        const messages = this.form.$silentErrors?.map((r: any) => r.$message)
        msg = messages.length ? messages[0] : ''
        console.log(msg)
      } catch (e) {
        console.log(e)
        msg = ''
      } finally {
        return msg
      }
    }
  },
  data() {
    return {
      showError: false
    }
  },
  methods: {
    clicked() {
      if (this.disabled) return
      this.$emit('onClick')
    },
    onMouseOver($event: any) {
      this.showError = true

    },
    onMouseLeave($event: any) {
      this.showError = false
    }
  }
})
</script>
