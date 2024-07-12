export function sortCols(columns: Array<any>, colIndex: string | number) {
    try {
        return columns.map((r, index) => {
            let order = null
            let loading = false
            if (colIndex == index) {
                loading = true
                order = r.order == null ? 'ASC' : r.order == 'ASC' ? 'DESC' : null
            }
            const l = {
                ...r,
                order,
                loading

            }
            return l
        })
    } catch (e) {
        console.log(e)
        return columns
    }

}
export function dataURLtoFile(dataurl: string, filename: string): File {

    var arr = dataurl.split(',')
    var type
    var mime: any = arr[0].match(/:(.*?);/)
    type = mime[1]
    var bstr = atob(arr[1])
    var n = bstr.length
    var u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type });

}

export function randomString(length = 15) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let stringAleatoria = '';
    for (let i = 0; i < length; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        stringAleatoria += caracteres.charAt(indiceAleatorio);
    }
    return stringAleatoria;
}
