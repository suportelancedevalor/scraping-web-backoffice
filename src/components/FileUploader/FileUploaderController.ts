import { defineComponent } from 'vue';
import "cropperjs/dist/cropper.css";

import VueCropper from "vue-cropperjs";

export default defineComponent({
    props: {
        accept: {
            type: String,
            default: 'image/*,.pdf'
        },
        customFileInputWidth: {
            type: Number,
            default: 100,
        },
        inputId: {
            type: String,
            default: `def-${new Date().getTime()}`,
        },
        hiddenInput: {
            type: Boolean,
            default: false,
        },
        maxFileSize: {
            type: Number,
            default: 15,
        },
        multiple: {
            type: Boolean,
            default: false,
        }

    },
    computed: {
        fileName(): string {
            return this.originalFile ? `${this.originalFile.name}` : ``
        },
        input_name(): string {
            return `${this.inputId}-name`
        },
    },
    mounted() {
        this.$eventBus.$on("clearFileUploader", () => {
            this.originalFile = null
        });
    },
    data() {
        return {
            originalFile: null as File | null
        }
    },
    components: {
        VueCropper,
    },
    methods: {
        isFileSizeValid(value: File, maxSizeInMb = 1.5) {
            if (!value) { return true }
            return value.size / 1024 <= (maxSizeInMb * 1024)
        },
        inputChanged(e: any) {
            this.originalFile = e.target.files[0];
            let result = { file: this.originalFile }
            this.$emit('fileUploaded', result)
        },
    }
})