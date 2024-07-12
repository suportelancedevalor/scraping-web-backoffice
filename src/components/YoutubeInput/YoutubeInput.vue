<template>
  <template v-if="!readOnly">
    <TextInput :label="label" :model="model" type="text" placeholder="https://www.youtube.com/watch?v=6iFbuIpe68k&t=7s"
      :errorMsg="errorMsg" />
  </template>
  <div>
    <label v-if="readOnly" class="form-label text-muted"> {{ label }}</label>
    <p>
      <iframe class="my-2" :class="{ 'thumb-video': thumbnail, 'full-size-video': !thumbnail }" v-if="videoLink"
        :src="videoLink" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen
        style="border-radius: 15px"></iframe>
    </p>
  </div>
</template>
<script>
import YoutubeInputController from "./YoutubeInputController";
export default YoutubeInputController;
</script>
<style scoped>
.thumb-video {
  width: 300px;
  height: 200px;
}

.full-size-video {
  width: 100%;
  height: 500px;
}
</style>