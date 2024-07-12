<template>
  <QuillEditor theme="snow" v-model:content="model.$model" contentType="html" />
  <!-- <quill-editor
    v-model="model.$model"
    ref="refQuillEditor"
    :options="quillOptions"
  ></quill-editor> -->
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
export default defineComponent({
  props: {
    model: {
      type: Object,
      required: false,
      default: () => { }
    }
  },
  data() {
    return {
      quillOptions: {
        placeholder: '',
        readonly: false,
        bold: false,
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike', 'list'],
            [{ list: 'ordered' }, { list: 'bullet' }]
          ]
        }
      }
    }
  },
  components: {
    QuillEditor
  }
})
</script>

<style scoped>
.navbar {
  /* padding-top: 100px; */
  z-index: 1031;
}

.navbar-heading {
  text-align: left;
  font-weight: 700;
}

.sidebar-icon {
  width: 25px;
  text-align: left;
}

.nav-link {
  padding: 0.7rem 1.5rem;
}

.navbar-vertical.navbar-expand-md {
  padding-right: 1em;
  padding-left: 1em;
}
</style>
