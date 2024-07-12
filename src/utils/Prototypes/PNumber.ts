interface Number {
    toCurrency(amount: Number): String;
}
Number.prototype.toCurrency = function (amount: Number): String {
    if (!amount) { amount = this; }
    let res = String(amount)
    try {
        res = `R$${Number(amount)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')
            .replace(/,/g, '*')
            .replace(/\./g, ',')
            .replace(/\*/g, '.')}`

    } catch (e) {
        console.log(e)
    } finally {
        return res
    }

}

