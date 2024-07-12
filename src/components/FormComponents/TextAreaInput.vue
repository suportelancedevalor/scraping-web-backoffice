<template>
  <div class="form-group">
    <label class="form-label text-muted"> {{ label }} <i v-if="required" class="text-danger">*</i></label>
    <textarea style="resize: none" v-if="readOnly" :rows="rows" class="form-control form-disabled" :value="value"
      disabled />
    <textarea v-else class="form-control" v-model.trim="model.$model" :class="{ 'is-invalid': model.$error }" :type="type"
      :rows="rows" :placeholder="placeholder" :maxlength="maxLength" />
    <template v-if="showCharsLeft && !readOnly">
      <div class="text-end">
        <small class="text-muted" style="font-size: 0.7rem">{{ maxLength - model?.$model?.length || 0 }} caracteres
          restantes</small>
      </div>
    </template>
    <slot name="content"></slot>
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
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: 'Field name'
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
      type: String,
      default: ''
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 6
    },
    maxLength: {
      type: Number,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    showCharsLeft: {
      type: Boolean,
      default: true
    },
  }
}
</script>
