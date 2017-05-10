const util = require('../../utils/util');
var app = getApp();
Page({
  data: {
    identifyNumberPh: '请输入身份证号码',
  	isTransferInfosShow: false,
  	isTransfered: false,
  	companyUrl: '',
    isPersonal: true,
  	startDate: util.formatTime2(new Date()),
  	transferDate: util.formatTime2(new Date()),
    form: {
      city: '上海',
      companyCode: '',
      licenseNo: '',
      insuredName: '',
      insuredType: 1,
      identifyNumber: '',
      phone: ''
    }
  },
  onLoad: function(options) {
  	var imgUrl = '../../images/sic_';
  	switch(options.company) {
  		case 'PICC':
  			imgUrl += 'picc.png';
  			break;
  		case 'CPIC':
  			imgUrl += 'cpic.png';
  			break
  		case 'PAIC':
  			imgUrl += 'paic.png';
  			break;
  	}
    this.setData({
    	'form.companyCode': options.company,
      companyUrl: imgUrl
    })
    app.globalData.quoteRequest.Company = options.company;
    this.WxValidate = app.WxValidate({
          licenseNo: {
              required: true
          },
          insuredName: {
              required: true
          },
          identifyNumber: {
              required: true
          },
          phone: {
              required: true,
              tel: true
          },
      }, {
          licenseNo: {
              required: app.config.MSGINFO.LICENSENO
          },
          insuredName: {
              required: app.config.MSGINFO.INSUREDNAME
          },
          identifyNumber: {
              required: app.config.MSGINFO.IDENTIFYNUMBER
          },
          phone: {
              required: app.config.MSGINFO.PHONE,
              tel: app.config.MSGINFO.PHONEERR
          }
      });
  },
  toggle: function(e) {
    let val = e.currentTarget.id;
    var value = (val == 1) ? true : false;
    var placeholder = (val == 1) ? '请输入身份证号码' : '请输入公司代码';
    var insuredType = (val == 1) ? 1 : 2;
    this.setData({
      isPersonal: value,
      identifyNumberPh: placeholder,
      'form.insuredType': insuredType
    })
  },
  showDescribleInfos: function(e) {
  	var that = this;
  	that.setData({
    	isTransferInfosShow:  true
    })
    setTimeout(function() {
    	that.setData({
	    	isTransferInfosShow:  false
	    })
    }, 2000);
  },
  switchChange: function (e){
    this.setData({
    	isTransfered:  e.detail.value
    })
  },
  bindStartDateChange: function(e) {
	  this.setData({
    	startDate:  e.detail.value
    })
  },
  bindTransferDateChange: function(e) {
	  this.setData({
    	transferDate:  e.detail.value
    })
  },
  kindToggle: function (e) {
  },
  saveInfosAndNext: function(e) {
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
    if (this.data.form.insuredType == 1) {
      if (!app.config.REGEX.CREDENTIALNO.test(params.identifyNumber)) {
        wx.showToast({
          title: app.config.MSGINFO.IDENTIFYNUMBERERR,
          image: '../../images/err.png',
          duration: 2000
        })
        return false;
      }
    }
    app.globalData.startTime = this.data.startDate;
    app.globalData.quoteRequest.TransferDate = null;
    if (this.data.isTransfered) {
      app.globalData.quoteRequest.TransferDate = this.data.transferDate;
    }
    app.globalData.quoteRequest.CiStartTime = this.data.startDate + ' 00:00:00';
    app.globalData.quoteRequest.CiEndTime = util.addOneYear(this.data.startDate) + ' 23:59:59';
    app.globalData.quoteRequest.BiStartTime = this.data.startDate + ' 00:00:00';
    app.globalData.quoteRequest.BiEndTime = util.addOneYear(this.data.startDate) + ' 23:59:59';
    app.globalData.quoteRequest.LicenseNo = params.licenseNo;
    var relationUser = {
        identifyNumber: params.identifyNumber,
        identifyType: this.data.form.insuredType,
        insuredAddress: "上海市",
        insuredName: params.insuredName,
        insuredType: this.data.form.insuredType,
        phone: params.phone,
        role: "1"
    };
    app.globalData.quoteRequest.RelationUser = [];
    app.globalData.quoteRequest.RelationUser.push(relationUser);
   var relationUser1 = {
        identifyNumber: params.identifyNumber,
        identifyType: this.data.form.insuredType,
        insuredAddress: "上海市",
        insuredName: params.insuredName,
        insuredType: this.data.form.insuredType,
        phone: params.phone,
        role: "2"
    };
    app.globalData.quoteRequest.RelationUser.push(relationUser1);
    var relationUser2 = {
        identifyNumber: params.identifyNumber,
        identifyType: this.data.form.insuredType,
        insuredAddress: "上海市",
        insuredName: params.insuredName,
        insuredType: this.data.form.insuredType,
        phone: params.phone,
        role: "3"
    };
    app.globalData.quoteRequest.RelationUser.push(relationUser2);


  	wx.navigateTo({
  	  url: '../vehicle/vehicle'
  	})
  }
})

