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
      modifyingType: 'selling',
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
      },

      quoteReponse: null,

      // quoteReponse: {
      //   "succeeded": true,
      //   "message": "ok",
      //   "code": 0,
      //   "data": {
      //     "accountId": null,
      //     "plateNo": null,
      //     "biPremium": 0,
      //     "ciPremium": 0,
      //     "tax": 0,
      //     "order": "CB201704241137YF7F",
      //     "isManual": 0,
      //     "insDiscount": 0.9482812,
      //     "quoteRequestId": null,
      //     "quoteTime": "0001-01-01T00:00:00",
      //     "quoteTimeStamp": null,
      //     "rateJsonString": null,
      //     "rates": [
      //       {
      //         "pcondition": "",
      //         "profitName": "渠道系数",
      //         "profitRate": 85
      //       },
      //       {
      //         "pcondition": "",
      //         "profitName": "自主核保系数",
      //         "profitRate": 85
      //       },
      //       {
      //         "pcondition": "上年发生2次赔款",
      //         "profitName": "以往保险年度索赔记录",
      //         "profitRate": 125
      //       },
      //       {
      //         "pcondition": "交通违法系数",
      //         "profitName": "交通违法记录",
      //         "profitRate": 105
      //       }
      //     ],
      //     "insuranceJsonString": null,
      //     "insurances": [
      //       {
      //         "insCode": "CLSSX",
      //         "code": null,
      //         "insName": "车辆损失险",
      //         "name": null,
      //         "amount": "218108.8",
      //         "modelCode": "",
      //         "premium": "4587.23"
      //       },
      //       {
      //         "insCode": "DSZZRX",
      //         "code": null,
      //         "insName": "第三者责任险",
      //         "name": null,
      //         "amount": "1000000.0",
      //         "modelCode": "",
      //         "premium": "1873.84"
      //       },
      //       {
      //         "insCode": "QCDQX",
      //         "code": null,
      //         "insName": "全车盗抢险",
      //         "name": null,
      //         "amount": "218108.8",
      //         "modelCode": "",
      //         "premium": "961.81"
      //       },
      //       {
      //         "insCode": "CLSSX_MP",
      //         "code": null,
      //         "insName": "车辆损失险不计免赔",
      //         "name": null,
      //         "amount": "0.0",
      //         "modelCode": "",
      //         "premium": "688.09"
      //       },
      //       {
      //         "insCode": "DSZZRX_MP",
      //         "code": null,
      //         "insName": "第三者责任险不计免赔",
      //         "name": null,
      //         "amount": "0.0",
      //         "modelCode": "",
      //         "premium": "281.08"
      //       },
      //       {
      //         "insCode": "QCDQX_MP",
      //         "code": null,
      //         "insName": "全车盗抢险不计免赔",
      //         "name": null,
      //         "amount": "0.0",
      //         "modelCode": "",
      //         "premium": "192.36"
      //       }
      //     ],
      //     "isVerified": false,
      //     "isPaid": false,
      //     "code": "QUOTED_ERROR",
      //     "desc": "申请报价出错:交强险保费计算 ,C51保费计算失败,报价流水号： 92021704243916166623,保费计算失败! 错误原因：-400,平台返回信息:0101010019_本保险起期不能早于当前日期－0天，不能晚于当前日期＋30天。 && 成功"
      //   }
      // },

      // quoteRequest: {
      //     "IsNew": 0,
      //     "IsGetData": 1,
      //     "Type": 3,
      //     "Company": "CPIC",
      //     "LicenseNo": "沪A430K8",
      //     "CarKindCode": null,
      //     "BrandName": null,
      //     "ModelCode": null,
      //     "CarUsedType": null,
      //     "Engine": "123123123",
      //     "EnrollDate": "2016-12-01",
      //     "Vin": "vin13412341324",
      //     "Insurances": [
      //       {
      //         "insCode": null,
      //         "code": "CLSSX",
      //         "insName": "车辆损失险",
      //         "name": null,
      //         "amount": "0",
      //         "modelCode": "",
      //         "premium": "0.0"
      //       },
      //       {
      //         "insCode": null,
      //         "code": "DSZZRX",
      //         "insName": "第三者责任险",
      //         "name": null,
      //         "amount": "1000000.0",
      //         "modelCode": "",
      //         "premium": "0.0"
      //       },
      //       {
      //         "insCode": null,
      //         "code": "QCDQX",
      //         "insName": "全车盗抢险",
      //         "name": null,
      //         "amount": "0",
      //         "modelCode": "",
      //         "premium": "0.0"
      //       },
      //       {
      //         "insCode": null,
      //         "code": "CLSSX_MP",
      //         "insName": "车辆损失险不计免赔",
      //         "name": null,
      //         "amount": "0.0",
      //         "modelCode": "",
      //         "premium": "0.0"
      //       },
      //       {
      //         "insCode": null,
      //         "code": "DSZZRX_MP",
      //         "insName": "第三者责任险不计免赔",
      //         "name": null,
      //         "amount": "0.0",
      //         "modelCode": "",
      //         "premium": "0.0"
      //       },
      //       {
      //         "insCode": null,
      //         "code": "QCDQX_MP",
      //         "insName": "全车盗抢险不计免赔",
      //         "name": null,
      //         "amount": "0.0",
      //         "modelCode": "",
      //         "premium": "0.0"
      //       }
      //     ],
      //     "TransferDate": null,
      //     "RelationUser": [
      //       {
      //         "identifyNumber": "320382199002289060",
      //         "identifyType": "1",
      //         "insuredAddress": "上海市",
      //         "insuredName": "马领领",
      //         "insuredType": "1",
      //         "phone": "13211111111",
      //         "role": "1"
      //       },
      //       {
      //         "identifyNumber": "320382199002289060",
      //         "identifyType": "1",
      //         "insuredAddress": "上海市",
      //         "insuredName": "马领领1",
      //         "insuredType": "1",
      //         "phone": "13211111111",
      //         "role": "2"
      //       },
      //       {
      //         "identifyNumber": "320382199002289060",
      //         "identifyType": "1",
      //         "insuredAddress": "上海市2",
      //         "insuredName": "马领领",
      //         "insuredType": "1",
      //         "phone": "13211111111",
      //         "role": "3"
      //       }
      //     ],
      //     "CiStartTime": "2017-05-11 00:00",
      //     "CiEndTime": "2018-05-10 23:59:59",
      //     "BiStartTime": "2017-05-11 00:00:00",
      //     "BiEndTime": "2018-05-10 23:59:59",
      //     "Token": null,
      //     "Timestamp": null,
      //     "Sign": null
      // }


  }
})