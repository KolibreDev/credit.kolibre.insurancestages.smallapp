function formatTime(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}

function formatTime2(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return [year, month, day].map(formatNumber).join('-');
}

function addOneYear(val) {
    var gaga = new Date(val),
    _y = gaga.getFullYear(),
    _m = gaga.getMonth(),
    _d = gaga.getDate();
    var new_gaga = new Date(_y+1,_m,_d-1),
    new_y = new_gaga.getFullYear(),
    new_m = new_gaga.getMonth()+1,
    new_d = new_gaga.getDate();
    return [new_y, new_m, new_d].map(formatNumber).join('-');
    // console.log(new_y+'-'+new_m+'-'+new_d)
}

function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
}

module.exports = {
    formatTime: formatTime,
    formatTime2: formatTime2,
    addOneYear: addOneYear
};
