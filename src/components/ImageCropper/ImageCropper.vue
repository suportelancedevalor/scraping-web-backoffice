<template>
  <div>
    <div v-if="uploading && !hiddenInput" class="border border-start-0 border-end-0 d-flex align-items-center py-3">
      <i class="fas fa-file-image text-primary display-3"></i>
      <div class="w-100 mx-4">
        <div class="d-flex justify-content-between">
          <strong> {{ fileName }} </strong>
          <strong class="text-primary">{{ percentage }}%</strong>
        </div>
        <div class="progress">
          <div class="progress-bar" role="progressbar" :style="`width: ${percentage}%`" aria-valuenow="25"
            aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <i class="fas fa-times display-4 text-light" @click="cancelUpload"></i>
    </div>
    <template v-else>
      <div class="" v-if="hiddenInput">
        <input :id="inputId" :ref="input_name" type="file" :name="input_name" :accept="accept" @change="setImage"
          :style="{ width: customFileInputWidth + 'px' }" />
      </div>
      <div v-else class="form-control-custom mb-3">
        <input :id="inputId" :ref="input_name" type="file" :name="input_name" :accept="accept" @change="setImage"
          :style="{ width: customFileInputWidth + 'px' }" />
        <div class="text" v-if="!cropImg">
          <i class="fas fa-file-image display-4 mb-3"></i>
          <h2 class="h2 mb-1">
            <span> Clique ou arraste uma imagem </span>
          </h2>
          <small>Tamanho máximo: {{ maxImgSize }}mb</small>
        </div>
        <img :src="cropImg" v-if="cropImg" width="200" :height="aspectRatio == 1 ? 200 : 300" class="rounded"
          style="object-fit: contain" />
      </div>
    </template>
    <ModalComponent title="Crop Imagem" :id="modal_id" v-on:modalClosed="cropClosed">
      <template v-slot:body>
        <vue-cropper :modal="false" :movable="false" :zoomable="false" :ref="cropper_ref" :src="imgSrc" alt="Crop Imagem"
          :aspect-ratio="aspectRatio" :minContainerWidth="550" :minContainerHeight="350">
        </vue-cropper>
      </template>
      <template v-slot:footer>
        <button type="button" @click="cropImage" class="btn btn-primary">
          Concluir
        </button>
      </template>
    </ModalComponent>
  </div>
</template>

<script>
import { maxImageSize } from '@/utils/FormValidators';
import ImageCropperController from "./ImageCropperController";
export default ImageCropperController;
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
