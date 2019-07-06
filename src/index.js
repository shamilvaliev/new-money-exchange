// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        };
    }

    let result = {};
    let banknotes = new Array(4);
    banknotes[0] = Math.floor(currency / 50);
    currency = currency - banknotes[0] * 50;

    banknotes[1] = Math.floor(currency / 25);
    currency = currency - banknotes[1] * 25;

    banknotes[2] = Math.floor(currency / 10);
    currency = currency - banknotes[2] * 10;

    banknotes[3] = Math.floor(currency / 5);
    currency = currency - banknotes[3] * 5;

    banknotes[4] = Math.floor(currency / 1);
    currency = currency - banknotes[4] * 1;

    let types = ["H", "Q", "D", "N", "P"];
    for (let i = 0; i < types.length; i++) {
        if (banknotes[i] > 0) {
            result[types[i]] = banknotes[i];
        }
    }

    return result;
}