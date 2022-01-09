module.exports = function toReadable (number) {
    let base = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    base[30] = 'thirty';
    base[40] = 'forty';
    base[50] = 'fifty';
    base[60] = 'sixty';
    base[70] = 'seventy';
    base[80] = 'eighty';
    base[90] = 'ninety';
    let result = '';
    let hundred = Math.trunc(number / 100);
    let tenth = Math.trunc((number % 100) / 10);
    let unit = number % 10;
    let tenthUnit = number % 100;
    if (number >= 100) {
        result = `${result}${base[hundred]} hundred`;
        if (tenthUnit === 0) {
            return result;
        } else if (tenthUnit < 20 || unit === 0) {
            result = `${result} ${base[tenthUnit]}`;
            return result;
        }
        result = `${result} ${base[tenth * 10]} ${base[unit]}`;
        return result;
    } else if (tenthUnit < 20 || unit === 0) {
        result = `${base[tenthUnit]}`;
        return result;
    }
    result = `${base[tenth * 10]} ${base[unit]}`;
    return result;
}
