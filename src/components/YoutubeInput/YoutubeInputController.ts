import "cropperjs/dist/cropper.css";
import { defineComponent } from 'vue';
export function youtubeUrlParser(value: string) {
    // https://www.youtube.com/shorts/5jzvxifYejg
    // https://youtu.be/-MeFJTxGpfU
    // http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index
    // http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o
    // http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0
    // http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s
    // http://www.youtube.com/embed/0zM3nApSvMg?rel=0
    // http://www.youtube.com/watch?v=0zM3nApSvMg
    // http://youtu.be/0zM3nApSvMg
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/|shorts\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = value.match(regExp);
    return (match && match[7].length == 11) ? `https://youtube.com/watch?v=${match[7]}` : '';
}
export function getYoutubeVideoId(videoLink: string) {
    const uriParts = youtubeUrlParser(videoLink).split('v=')
    return uriParts[1]
}
export function prepareYoutubeLink(value: string): String | Boolean {
    if (!value) return false
    let parsedUrl = youtubeUrlParser(value);
    let url = parsedUrl.replace("watch?v=", "embed/").split("&")[0];
    if (url != undefined || url != "") {
        var regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            return url
        } else {
            return false;
        }
    }
    return false
}
export default defineComponent({
    props: {
        readOnly: {
            type: Boolean,
            default: false
        },
        thumbnail: {
            type: Boolean,
            default: false
        },
        errorMsg: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        model: {
            required: false,
            default: (): any => { }
        },
        value: {
            required: false,
            default: ''
        },
    },
    computed: {
        videoLink(): String | Boolean {
            return this.readOnly ? this.value : prepareYoutubeLink(this.model.$model)
        },
    },
    data() {
        return {
        }
    },
    components: {
    },
    methods: {
    }
})