<template>
  <div class="form-group">
    <div class="row">
      <div class="col">
        <label class="form-label text-muted"> {{ label }} <i v-if="required" class="text-danger">*</i> </label>
      </div>
    </div>

    <div class="input-group input-group-merge">
      <input v-model.trim="model.$model" :maxlength="30" :class="{ 'is-invalid': model.$error }"
        class="form-control border-right-0" :placeholder="placeholder" :type="passwordFieldType" />
      <span class="input-group-text  cursor-pointer rounded-end" :class="{ 'border-danger': model.$error }">
        <i @click="togglePassword()" class="fas" :class="{
          'fa-eye': passwordFieldType == 'text',
          'fa-eye-slash': passwordFieldType == 'password',
        }"></i>
      </span>
      <div class="invalid-feedback">
        <small>{{ errorMsg }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PasswordInput',
  props: {
    model: {
      default: {}
    },
    label: {
      type: String,
      default: 'Password'
    },
    placeholder: {
      type: String,
      default: 'Enter your password'
    },
    errorMsg: {
      type: String,
      default: 'Por favor, preencha este campo corretamente'
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      passwordFieldType: 'password'
    }
  },
  methods: {
    togglePassword() {
      this.passwordFieldType =
        this.passwordFieldType == 'password' ? 'text' : 'password'
    }
  }
}
</script>
