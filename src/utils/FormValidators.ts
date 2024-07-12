import moment from 'moment';

export function isNameValid(value: string) {
    var ok = true
    var pattern = new RegExp('^(?=.*[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF])([a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+)$');
    try {
        const fullName = value.trim().split(' ')
        if (fullName.length < 2) {
            return false
        }
        if (fullName[0].length < 2) return false
        fullName.map(r => {
            if (!pattern.test(r) || r.length < 2) {
                console.log(r, pattern.test(r))
                ok = false
            }
        })
        return ok
    } catch (e) {
        return false
    }
}
export function isDateFuture(value: string) {
    if (!value) return true
    try {
        const date = moment(value)
        if (!date.isValid()) return false
        return date.isAfter(moment(), 'minute')
    } catch (e) {
        return false
    }
}
export function isYoutubeLinkValid(value: string) {
    if (!value) { return true }
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
    return !!(match && match[7].length == 11)
}
export function maxImageSize(value: File, maxSizeInMb = 1.5) {
    if (!value) { return true }
    return value.size / 1024 <= (maxSizeInMb * 1024)
}
export function isCPFValid(strCPF: any) {
    if (!strCPF) return false;
    var Soma;
    var Resto;
    var i;

    strCPF = strCPF.replace(/[^\w\s]/gi, "").replace(" ", "");

    Soma = 0;
    if (strCPF == "00000000000") return false;
    if (strCPF == "11111111111") return false;
    if (strCPF == "22222222222") return false;
    if (strCPF == "33333333333") return false;
    if (strCPF == "44444444444") return false;
    if (strCPF == "55555555555") return false;
    if (strCPF == "66666666666") return false;
    if (strCPF == "77777777777") return false;
    if (strCPF == "88888888888") return false;
    if (strCPF == "99999999999") return false;

    for (i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}