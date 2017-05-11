
var config = {
    URLS: {
        QUOTE: 'https://server-xiangfenqi.dev.kolibre.credit/api/Insurance/Quote',
        RENEWAL: 'https://server-xiangfenqi.dev.kolibre.credit/api/Insurance/Renewal'
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
        AMOUNT: /^\d{1,7}(\.\d{1,2})?$/,
        LICENSENO: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
    },
    MSGINFO: {
        LICENSENO: '车牌号不能为空',
        INSUREDNAME: '车主名称不能为空',
        INSUREDNAME1: '投保人名称不能为空',
        INSUREDNAME2: '被保险人名称不能为空',
        IDENTIFYNUMBER: '证件号码不能为空',
        IDENTIFYNUMBER1: '投保人证件号码不能为空',
        IDENTIFYNUMBER2: '被保险人证件号码不能为空',
        IDENTIFYNUMBERERR: '证件号码格式错误',
        IDENTIFYNUMBERERR1: '投保人证件号码格式错误',
        IDENTIFYNUMBERERR2: '被保险人证件号码格式错误',
        PHONE: '手机号码不能为空',
        PHONE1: '投保人手机号码不能为空',
        PHONE2: '被保险人手机号码不能为空',
        PHONEERR: '手机号码格式错误',
        PHONEERR1: '投保人手机号码格式错误',
        PHONEERR2: '被保险人手机号码格式错误',
        ENGINE: '发动机号不能为空',
        VIN: '车架号不能为空',
        BRANDNAME: '品牌型号不能为空',
        MODELCODE: '车型编码不能为空',
        TIMEMORETHANYEAR: '商业险最长支持1年及以内',
        TIMEERROR: '商业险结束时间应大于起始时间',
        NOINSURERR: '请至少选择一种险种',
        MPFIRST: '请先投保该险种'
    }
};

module.exports = config;