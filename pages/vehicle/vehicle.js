const util = require('../../utils/util');
Page({
    data: {
        index: 0,
        useArray: [
            {
                code: "211",
                desc: "家庭自用汽车"
            }
            , {
                code: "212",
                desc: "非营业企业客车"
            }
            , {
                code: "213",
                desc: "非营业机关事业团体客车"
            }
            , {
                code: "220",
                desc: "非营业货车"
            }
            , {
                code: "290",
                desc: "其他非营业车辆"
            }
            , {
                code: "111",
                desc: "出租租赁"
            }
            , {
                code: "112",
                desc: "城市公交"
            }
            , {
                code: "113",
                desc: "公路客运"
            }
            , {
                code: "114",
                desc: "旅游客运"
            }
            , {
                code: "120",
                desc: "营业货车"
            }
            , {
                code: "190",
                desc: "其他营业车辆"
            }],
        leaseStartTime: util.formatTime2(new Date())
    },
    bindLeaseStartTime: function(e) {
        this.setData({
            leaseStartTime: e.detail.value
        });
    },
    bindPickerChange: function(e) {
        this.setData({
            index: e.detail.value
        });
    }
});