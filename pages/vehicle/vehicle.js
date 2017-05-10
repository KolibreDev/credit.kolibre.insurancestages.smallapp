const util = require('../../utils/util');
var app = getApp();
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
        form: {
            vin: '',
            engine: '',
            leaseStartTime: util.formatTime2(new Date()),
            brandName: '',
            carKindCode: '02',
            modelCode: '',
            carUsedType: '211'
        }
    },
    onLoad: function(options) {
        this.WxValidate = app.WxValidate({
              vin: {
                  required: true
              },
              engine: {
                  required: true
              },
              brandName: {
                  required: true
              },
              modelCode: {
                  required: true
              }
          }, {
            vin: {
              required: app.config.MSGINFO.VIN
            },
            engine: {
              required: app.config.MSGINFO.ENGINE
            },
            brandName: {
              required: app.config.MSGINFO.BRANDNAME
            },
            modelCode: {
              required: app.config.MSGINFO.MODELCODE
            }
          });
    },
    toggle: function(e) {
        let val = e.currentTarget.id;
        this.setData({
            'form.carKindCode': val
        });
    },
    bindLeaseStartTime: function(e) {
        this.setData({
            'form.leaseStartTime': e.detail.value
        });
    },
    bindPickerChange: function(e) {
        this.setData({
            index: e.detail.value,
            'form.carUsedType': this.data.useArray[e.detail.value].code
        });
    },
    apply: function(e) {
        let _this = this;
        const params = e.detail.value;
        if (!_this.WxValidate.checkForm(e)) {
            const error = _this.WxValidate.errorList[0];
            wx.showToast({
              title: `${error.msg}`,
              image: '../../images/err.png',
              duration: 2000
            });
            return false;
        }
        app.globalData.quoteRequest.Vin = params.vin;
        app.globalData.quoteRequest.Engine = params.engine;
        app.globalData.quoteRequest.BrandName = params.brandName;
        app.globalData.quoteRequest.EnrollDate = params.leaseStartTime;
        app.globalData.quoteRequest.ModelCode = params.modelCode;
        app.globalData.quoteRequest.CarUsedType = this.data.form.carUsedType;
        app.globalData.quoteRequest.CarKindCode = this.data.form.carKindCode;

        wx.navigateTo({
          url: '../scheme/scheme'
        })
    }
});