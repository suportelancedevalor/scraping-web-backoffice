<template>
  <div>
    <div class="" v-if="hiddenInput">
      <input :id="inputId" :ref="input_name" type="file" :name="input_name" :accept="accept" @change="inputChanged"
        :style="{ width: customFileInputWidth + 'px' }" />
    </div>
    <div v-else class="form-control-custom mb-3">
      <input :id="inputId" :ref="input_name" type="file" :name="input_name" :accept="accept" @change="inputChanged"
        :style="{ width: customFileInputWidth + 'px' }" />
      <div class="text" v-if="!originalFile || multiple">
        <i class="fas fa-file-pdf display-4 mb-3"></i>
        <h2 class="h2 mb-1">
          <span> Clique ou arraste um arquivo </span>
        </h2>
        <small>Tamanho máximo: {{ maxFileSize }}mb</small>
      </div>
      <div v-else class="d-flex flex-column justify-content-center align-items-center">
        <span class="fas fa-7x fa-file-pdf text-danger"></span>
        <p class="text-muted small pt-3">{{ fileName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import FileUploaderController from "./FileUploaderController";
export default FileUploaderController;
</script>

<style scoped>
input[type="file"] {
  opacity: 0;
  height: 200px;
  position: absolute;
  z-index: 1;
  cursor: pointer;
}

.form-control-custom {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  opacity: 0.9;
  transition: 0.2s;
  width: 100%;
  height: 250px;
  border: 2px #ecebeb dashed;
}

.form-control-custom .text {
  position: absolute;
  color: #a19f9f;
  text-align: center;
}

.btn-white:hover,
.btn-white:focus {
  background-color: #fff;
  border-color: #ed6125 !important;
}
</style>
