
var config = {
    URLS: {
        QUOTE: 'https://creditkolibre-dev-carinsurance.chinacloudsites.cn/api/Shengda/Quote'
    },
    COOKIES: {
        AUTH: 'X-KC-SID'
    },
    REGEX: {
        CELLPHONE: /^(13|14|15|16|17|18)\d{9}$/,
        PASSWORD: /^[a-zA-Z\d~!@#$%^&*_]{6,18}$/,
        PAYMENT_PASSWORD: /^(?![^a-zA-Z~!@#$%^&*_]+$)(?!\D+$).{8,18}$/,
        URL: /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[:?\d]*)\S*$/,
        CREDENTIALNO: /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/,
        BANKCARDNO: /^\d{15,19}$/,
        CHECKCODE: /^\d{6}$/,
        FLOOR: /^\d{1,5}$/,
        AMOUNT: /^\d{1,7}(\.\d{1,2})?$/
    },
    MSGINFO: {
        LICENSENO: '车牌号不能为空',
        INSUREDNAME: '车主名称不能为空',
        IDENTIFYNUMBER: '证件号码不能为空',
        IDENTIFYNUMBERERR: '证件号码格式错误',
        PHONE: '手机号码不能为空',
        PHONEERR: '手机号码格式错误',
        ENGINE: '发动机号不能为空',
        VIN: '车架号不能为空',
        BRANDNAME: '品牌型号不能为空',
        MODELCODE: '车型编码不能为空',
    }
};

module.exports = config;