const util = require('../../utils/util');
var app = getApp();
Page({
  data: {
    vin: null,
    isGetData: 0,
    enrollDate: null,
    engine: null,
    brandName: null,
    insuredName: null,
    identifyNumber: null,
    phone: null,
    licenseNo: null,
    isXianOpening: false,
    isRenOpening: false,
    companyText: '太平洋保险',  // 中国平安保险 中国人民保险
    companyUrl: '',
    relationUser: [],
    responseInfo: null,
    perPayment: 0,
  },
  onLoad: function(options) {
    this.setData({
      isGetData: app.globalData.quoteRequest.IsGetData,
      vin: app.globalData.quoteRequest.Vin,
      enrollDate: app.globalData.quoteRequest.EnrollDate,
      engine: app.globalData.quoteRequest.Engine,
      brandName: app.globalData.quoteRequest.BrandName,
      licenseNo: app.globalData.quoteRequest.LicenseNo,
      insuredName: app.globalData.quoteRequest.RelationUser[0].insuredName,
      identifyNumber: app.globalData.quoteRequest.RelationUser[0].identifyNumber,
      phone: app.globalData.quoteRequest.RelationUser[0].phone,
      responseInfo: app.globalData.quoteReponse,
      relationUser:  app.globalData.quoteRequest.RelationUser
    });
    var perPayment = ((parseFloat(this.data.responseInfo.data.biPremium) + parseFloat(this.data.responseInfo.data.ciPremium) + parseFloat(this.data.responseInfo.data.tax)) / 12).toFixed(2);
    this.setData({
      perPayment: perPayment
    });
    if (app.globalData.quoteRequest.Company == 'PICC') {
      this.setData({
        companyText: '中国人民保险',
          companyUrl: '../../images/lsic_picc.png'
      });
    }
    else if (app.globalData.quoteRequest.Company == 'CPIC') {
      this.setData({
        companyText: '太平洋保险',
          companyUrl: '../../images/lsic_cpic.png'
      });
    }
    else {
      this.setData({
        companyText: '中国平安保险', 
          companyUrl: '../../images/lsic_paic.png'
      });
    }
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id;
    if (id == 'xian') {
    	this.setData({
	      isXianOpening: !this.data.isXianOpening
	    });
    }
    else if (id == 'ren') {
    	this.setData({
	      isRenOpening: !this.data.isRenOpening
	    });
    }
    else if (id == 'bei') {
    	this.setData({
	      isBeiOpening: !this.data.isBeiOpening
	    });
    }
  },
  reminder: function(e) {
    wx.showToast({
      title: '工程师正在玩命上线中...',
      image: '../../images/err.png',
      duration: 2000
    })
  }
})
