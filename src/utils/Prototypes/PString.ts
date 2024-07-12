
interface String {
    capitalizeFirst(): String;
    limitString(): String;
    clear(): String;
    currencyToNumber(): number;
    toPattern(mode: 'cpf' | 'rg' | 'landline' | 'zipcode'): String;
}
String.prototype.capitalizeFirst = function () {
    let res = this
    try {
        res = this.charAt(0).toUpperCase() + this.slice(1);
    } catch (e) {
        console.log(e)
    } finally {
        return res
    }
}
String.prototype.limitString = function (limit = 40) {
    let res = this
    try {
        res = this.length >= limit ? `${this.substr(0, limit - 1)}...` : this
    } catch (e) {
        console.log('erro', e)
        return res
    }
    finally {
        return res
    }
}
String.prototype.clear = function () {
    let res = this
    try {
        res = this.replace(/[^\w\s]/gi, '').replace(' ', '').replace(/[_-]/g, "")
    } catch (e) {
        return res
    }
    finally {
        return res
    }
}
String.prototype.currencyToNumber = function () {
    let res = this
    try {
        res = this.replace('R$ ', '').replace(',', '.')
        return Number(res).valueOf()
    } catch (e) {
        return 0
    }
}

String.prototype.toPattern = function (mode = 'cpf') {
    let res = this
    let newString = ''
    let stringIndex = 0
    try {
        let pattern = Array(this.length).fill('#').join()
        switch (mode) {
            case 'cpf':
                pattern = '###.###.###-##'
                break;
            case 'rg':
                pattern = '##.###.###-##'
                break;
            case 'landline':
                pattern = '(##) ####-#####'
                break;
            case 'zipcode':
                pattern = '#####-###'
                break;
        }
        const patternCount = pattern.length
        for (var i = 0; i < patternCount; i++) {
            if (this[stringIndex]) {
                if (pattern[i] == '#') {
                    newString = `${newString}${this[stringIndex]}`
                    stringIndex++

                } else {
                    newString = `${newString}${pattern[i]}`
                }
            }
        }
    } catch (e) {
        return res
    } finally {
        return newString
    }
}


