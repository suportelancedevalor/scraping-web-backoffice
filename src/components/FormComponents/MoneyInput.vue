<template>
  <div class="form-group">
    <div class="d-flex justify-content-between">
      <label v-if="label" class="form-label text-muted"> {{ label }} <i v-if="required" class="text-danger">*</i>
      </label>
      <slot name="labelContentEnd"></slot>
    </div>
    <input class="form-control" v-model.lazy="model.$model" v-model.number="model.$model" v-money3="config"
      :class="{ 'is-invalid': model.$error }" type="text" :placeholder="placeholder" :style="inputStyle" />
    <div class="invalid-feedback">
      <small>{{ errorMsg }}</small>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'MoneyInput',
  props: {
    model: {
      required: false,
      default: () => { }
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
    inputStyle: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      config: {
        prefix: 'R$ ',
        thousands: '',
        decimal: ',',
        precision: 2,
        disableNegative: true,
        minimumNumberOfCharacters: 1,
        modelModifiers: {
          number: true
        }
      }
    }
  }
}
</script>
