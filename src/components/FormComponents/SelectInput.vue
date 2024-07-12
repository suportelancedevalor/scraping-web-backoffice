<template>
  <div class="form-group">
    <label v-if="label" class="form-label text-muted"> {{ label }} <i v-if="required" class="text-danger">*</i> </label>
    <select :disabled="readOnly" class="form-select" v-model="model.$model" :class="{ 'is-invalid': model.$error }"
      @change="onChange($event)">
      <option v-if="placeholder" disabled value="">{{ placeholder }}</option>
      <option v-for="(item, index) in options" v-bind:key="'option_' + index" :value="item[propertyForValue]">
        {{ item[propertyForText] }}
      </option>
    </select>
    <div class="invalid-feedback">
      <small>{{ errorMsg }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    model: {
      required: false,
      default: () => { }
    },
    options: {
      type: Array,
      default: () => []
    },
    propertyForValue: {
      type: String,
      default: 'id'
    },
    propertyForText: {
      type: String,
      default: 'title'
    },
    label: {
      type: String,
      default: ''
    },
    errorMsg: {
      type: String,
      default: 'Por favor, selecione uma opção'
    },
    placeholder: {
      type: String,
      default: 'Escolha uma opção'
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onChange (event) {
      this.$emit('selectChanged', event.target.value)
    }
  }
}
</script>
