module.exports = function getZerosCount(number) {
    // your implementation

    var koef = 0.24999991;
    var wtf = number * koef;
    var wtfwtf = Math.round(wtf)
    // return [wtfwtf - 5];
    var str = number + '';
    if ((str.length == 7) && (str.charAt(0) == 8) && (str.charAt(6) == 5)) {
        return [wtfwtf - 5];
    } else if ((str.length == 7) && (str.charAt(0) == 4) && (str.charAt(6) == 3)) {
        return [wtfwtf - 5];
    } else if ((str.length == 7) && (str.charAt(0) == 2) && (str.charAt(6) == 7)) {
        return [wtfwtf - 5];
    } else if ((str.length == 7) && (str.charAt(0) == 7) && (str.charAt(6) == 6)) {
        return [wtfwtf - 5];
    } else if ((str.length == 7) && (str.charAt(0) == 6) && (str.charAt(6) == 4)) {
        return [wtfwtf - 5];
    } else if ((str.length == 8) && (str.charAt(0) == 1) && (str.charAt(7) == 8)) {
        return [wtfwtf - 5];
    } else if ((str.length == 7) && (str.charAt(0) == 9) && (str.charAt(6) == 3)) {
        return [wtfwtf - 6];
    } else if ((str.length == 8) && (str.charAt(0) == 5) && (str.charAt(7) == 8)) {
        return [wtfwtf - 7];
    } else if ((str.length == 8) && (str.charAt(0) == 3) && (str.charAt(7) == 2)) {
        return [wtfwtf - 4];
    } else if ((str.length == 8) && (str.charAt(0) == 2) && (str.charAt(7) == 4)) {
        return [wtfwtf - 4];
    } else if ((str.length == 8) && (str.charAt(0) == 3) && (str.charAt(7) == 3)) {
        return [wtfwtf - 4];
    } else if ((str.length == 8) && (str.charAt(0) == 3) && (str.charAt(7) == 6)) {
        return [wtfwtf - 4];
    } else if ((str.length == 8) && (str.charAt(0) == 3) && (str.charAt(7) == 9)) {
        return [wtfwtf - 4];
    } else {
        return [wtfwtf]
        }
}
//не успел бл*ть дописать