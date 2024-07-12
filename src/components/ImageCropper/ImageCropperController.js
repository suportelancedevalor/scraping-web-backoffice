import ModalComponent from "@/components/ModalComponent";
import { dataURLtoFile } from '@/utils/Helper';
import "cropperjs/dist/cropper.css";
import VueCropper from "vue-cropperjs";
import { toggleModal } from '@/components/ModalComponent.vue';

export default {
    props: {
        accept: {
            type: String,
            default: 'image/*,.pdf'
        },
        customFileInputWidth: {
            type: Number,
            default: 100,
        },
        aspectRatio: {
            type: Number,
            default: 1,
        },
        inputId: {
            type: String,
            default: `def-${new Date().getTime()}`,
        },
        hiddenInput: {
            type: Boolean,
            default: false,
        },
        modalId: {
            type: String,
            default: `${new Date().getTime()}`,
        },
        maxImgSize: {
            type: Number,
            default: 1.5,
        }
    },
    computed: {
        modal_id() {
            return `image-modal-${this.modalId}`
        },
        fileName() {
            return this.originalFile ? `${this.originalFile.name}` : ``
        },
        cropper_ref() {
            return `${this.modalId}-cropper`
        },
        input_name() {
            return `${this.inputId}-name`
        },

    },
    mounted() {
        this.$eventBus.$on("clearImageCropper", () => {
            this.imgSrc = null
            this.cropImg = ""
            this.fileImage = ''
        });
    },
    created() {
    },
    data() {
        return {
            imgSrc: null,
            cropImg: "",
            fileImage: '',
            percentage: 0,
            uploading: false,
            counter: null,
            eventLabel: 'Selecione a imagem',
            originalFile: null
        }
    },
    components: {
        VueCropper,
        ModalComponent
    },
    methods: {
        cropImage() {
            this.cropImg = this.$refs[this.cropper_ref].getCroppedCanvas().toDataURL();
            this.fileImage = dataURLtoFile(this.$refs[this.cropper_ref].getCroppedCanvas().toDataURL('image/jpeg'), 'text.jpeg')
            if (this.fileImage.size > this.maxImgSize * 1024) {
                this.fileImage = dataURLtoFile(this.$refs[this.cropper_ref].getCroppedCanvas().toDataURL('image/jpeg', 0.7), 'text.jpeg')
            }
            toggleModal(this.modal_id)
            this.upload()
        },
        isImageSizeValid(value, maxSizeInMb = 1.5) {
            if (!value) { return true }
            return value.size / 1024 <= (maxSizeInMb * 1024)
        },
        setImage(e) {
            this.originalFile = e.target.files[0];
            if (!this.isImageSizeValid(this.originalFile, this.maxImgSize)) {
                alert(`Sua imagem tem ${(this.originalFile.size / 1024 / 1020).toFixed(2)}MB. Selecione uma imagem com no máximo ${this.maxImgSize}MB`)
                return
            }
            toggleModal(this.modal_id)
            if (this.originalFile.type.indexOf("image/") === -1) {
                alert("Por favor selecione uma imagem");
                return;
            }
            if (typeof FileReader === "function") {
                const reader = new FileReader();
                reader.onload = (event) => {
                    this.imgSrc = event.target.result;
                    // rebuild cropperjs with the updated source
                    this.$refs[this.cropper_ref].replace(event.target.result);
                };
                reader.readAsDataURL(this.originalFile);
            } else {
                alert("Sorry, FileReader API not supported");
            }
        },
        upload() {
            this.uploading = true
            let timer = Math.floor(Math.random() * (500)) + 500;
            this.percentage = 100
            timer = 1
            this.counter = setTimeout(() => {
                this.setCounter()
            }, timer)
        },
        cancelUpload() {
            this.uploading = false
            this.percentage = 0
            this.cropImg = ''
            clearTimeout(this.counter)
        },
        setCounter() {
            if (this.percentage < 100) {
                let max = 100
                let p = Math.floor(Math.random() * (max - this.percentage + 1)) + this.percentage;
                this.percentage = p >= 100 ? 100 : p
                this.upload()
            } else {
                this.uploading = false
                this.percentage = 0
                clearTimeout(this.counter)
                let result = { file: this.fileImage, base64: this.cropImg }
                this.$emit('cropEnd', result)
                this.cropClosed()
            }
        },
        cropClosed() {
            if (this.$refs[this.input_name]) {
                this.$refs[this.input_name].value = ''
            }
        },
    }
}