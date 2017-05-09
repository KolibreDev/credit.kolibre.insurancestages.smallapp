//app.js
import WxValidate from 'utils/WxValidate';
let config = require('config');
App({
    config: config,
    onLaunch: function () {
      //调用API从本地缓存中获取数据
      var logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)
    },
    getUserInfo:function(cb){
      var that = this
      if(this.globalData.userInfo){
        typeof cb == "function" && cb(this.globalData.userInfo)
      }else{
        //调用登录接口
        wx.login({
          success: function () {
            wx.getUserInfo({
              success: function (res) {
                that.globalData.userInfo = res.userInfo
                typeof cb == "function" && cb(that.globalData.userInfo)
              }
            })
          }
        })
      }
    },
    WxValidate: (rules, messages) => new WxValidate(rules, messages),
    postRequest: function(apiUrl, data, cbSuccess, cbfail) {
        wx.request({
            url: apiUrl,
            data: data,
            header: {
                "Content-Type": "application/json;charset=utf-8",
            },
            method: "POST",
            success: function(res) {
                if (res.statusCode == 200) {
                    typeof cbSuccess == "function" && cbSuccess(res.data);
                }
                else {
                    if (res.statusCode == 401) {
                        wx.navigateTo({ url: 'login' });
                    } else if (res.statusCode == 400) {
                        wx.showToast({
                            title: res.data.message,
                            image: "/images/err.png",
                            duration: 2000
                        });
                    }
                    else if (res.statusCode == 403) {
                        wx.showToast({
                            title: "无操作权限,请联系客服",
                            image: "/images/err.png",
                            duration: 2000
                        });
                    }
                    else {
                        wx.showToast({
                            title: "服务正在维护,请稍后",
                            image: "/images/err.png",
                            duration: 2000
                        });
                    }
                    typeof cbfail == "function" && cbfail(res);
                }
            },
            fail: function() {
                wx.showToast({
                    title: "网络链接异常,请稍后",
                    image: "/images/err.png",
                    duration: 2000
                });
            }
        });
    },
    globalData:{
      selling: {
        type: 3,
        insurances: [
          {
              insCode: null,
              code: "CLSSX",
              insName: null,
              name: "车辆损失险",
              amount: "0",
              modelCode: "",
              premium: null
          },
          {
              insCode: null,
              code: "CLSSX_MP",
              insName: null,
              name: "车辆损失险不计免赔",
              amount: "0",
              modelCode: "",
              premium: null
          },
          {
              insCode: null,
              code: "DSZZRX",
              insName: null,
              name: "第三者责任险",
              amount: "500000",
              modelCode: "",
              premium: null
          },
          {
              insCode: null,
              code: "DSZZRX_MP",
              insName: null,
              name: "第三者责任险不计免赔",
              amount: "0",
              modelCode: "",
              premium: null
          },
          {
              insCode: null,
              code: "JSYZRX",
              insName: null,
              name: "驾驶员责任险",
              amount: "10000",
              modelCode: "",
              premium: null
          },
          {
              insCode: null,
              code: "JSYZRX_MP",
              insName: null,
              name: "驾驶员责任险不计免赔",
              amount: "0",
              modelCode: "",
              premium: null
          },
          {
              insCode: null,
              code: "CSCKX",
              insName: null,
              name: "车上乘客险",
              amount: "10000",
              modelCode: "",
              premium: null
          },
          {
              insCode: null,
              code: "CSCKX_MP",
              insName: null,
              name: "车上乘客险不计免赔",
              amount: "0",
              modelCode: "",
              premium: null
          }
        ]
      },
      upmarket: {
        type: 3,
        insurances: [
          {
              insCode: null,
              code: "CLSSX",
              insName: null,
              name: "车辆损失险",
              amount: "0",
              modelCode: "",
              premium: null
          },
          {
              insCode: null,
              code: "CLSSX_MP",
              insName: null,
              name: "车辆损失险不计免赔",
              amount: "0",
              modelCode: "",
              premium: null
          },
          {
              insCode: null,
              code: "DSZZRX",
              insName: null,
              name: "第三者责任险",
              amount: "1000000",
              modelCode: "",
              premium: null
          },
          {
              insCode: null,
              code: "DSZZRX_MP",
              insName: null,
              name: "第三者责任险不计免赔",
              amount: "0",
              modelCode: "",
              premium: null
          },
          {
              insCode: null,
              code: "JSYZRX",
              insName: null,
              name: "驾驶员责任险",
              amount: "20000",
              modelCode: "",
              premium: null
          },
          {
              insCode: null,
              code: "JSYZRX_MP",
              insName: null,
              name: "驾驶员责任险不计免赔",
              amount: "0",
              modelCode: "",
              premium: null
          },
          {
              insCode: null,
              code: "CSCKX",
              insName: null,
              name: "车上乘客险",
              amount: "20000",
              modelCode: "",
              premium: null
          },
          {
              insCode: null,
              code: "CSCKX_MP",
              insName: null,
              name: "车上乘客险不计免赔",
              amount: "0",
              modelCode: "",
              premium: null
          },
          {
              insCode: null,
              code: "QCDQX",
              insName: null,
              name: "全车盗抢险",
              amount: "0",
              modelCode: "",
              premium: null
          }
        ]
      },
      startTime: null,
      quoteRequest: {
        IsNew: 0,
        IsGetData: 0,
        Type: 1,
        Company: null,
        LicenseNo: null,
        CarKindCode: null,
        BrandName: null,
        ModelCode: null,
        CarUsedType: null,
        Engine: null,
        EnrollDate: null,
        Vin: null,
        Insurances: [
            {
                insCode: null,
                code: "DSZZRX",
                insName: null,
                name: "第三者责任险",
                amount: "1000000",
                modelCode: "",
                premium: null
            }
        ],
        TransferDate: null,
        RelationUser: [
        ],
        CiStartTime: null,
        CiEndTime: null,
        BiStartTime: null,
        BiEndTime: null,
        Token: null,
        Timestamp: null,
        Sign: null
      }
  }
})