<template>
  <div class="form-group">
    <div class="d-flex justify-content-between">
      <label v-if="label" class="form-label text-muted"> {{ label }} <i v-if="required" class="text-danger">*</i>
      </label>
      <slot name="labelContentEnd"></slot>
    </div>
    <input v-if="readOnly" class="form-control form-disabled" :value="`${value || ''}`" disabled :style="inputStyle" />
    <input v-else class="form-control" v-maska :data-maska="mask" :lang='"pt-BR"' v-model.trim="model.$model"
      :class="{ 'is-invalid': model.$error }" :type="type" :maxlength="maxLength" :placeholder="placeholder"
      :min="minDate" :style="inputStyle" />
    <div class="invalid-feedback">
      <small>{{ errorMsg }}</small>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script>
import { vMaska } from "maska"
export default {
  name: 'TextInput',
  directives: {
    maska: vMaska
  },
  props: {
    model: {
      required: false,
      default: () => { }
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    errorMsg: {
      type: String,
      default: 'Por favor, preencha este campo corretamente'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: Number,
      default: null
    },
    // pra campos de data
    minDate: {
      type: String,
      default: null
    },
    inputStyle: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    mask: {
      type: String,
      default: ''
    },
  }
}
</script>
