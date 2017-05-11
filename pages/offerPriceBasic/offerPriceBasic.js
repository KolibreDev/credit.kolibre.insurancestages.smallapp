const util = require('../../utils/util');
var app = getApp();
Page({
  data: {
    identifyNumberPh: '请输入身份证号码',
  	isTransferInfosShow: false,
  	isTransfered: false,
  	companyUrl: '',
    isPersonal: true,
  	startDate: util.getDateStr(1),
  	transferDate: util.formatTime2(new Date()),
    citySelectIndex: 0,
    cityList: [{desc: '上海', code: '310100'}, {desc: '南京', code: '320100'}, {desc: '苏州', code: '320500'}, {desc: '无锡', code: '320200'}],
    form: {
      cityCode: '310100',
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
              required: true,
              licenseno: true
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
    var placeholder = (val == 1) ? '请输入身份证号码' : '请输入组织机构代码';
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
    });
  },
  bindTransferDateChange: function(e) {
	  this.setData({
    	transferDate:  e.detail.value
    })
  },
  bindPickerChange: function(e) {
      this.setData({
          citySelectIndex: e.detail.value,
          'form.cityCode': this.data.cityList[e.detail.value].code
      });
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
    var currentDate = new Date();
    var startDateTest = new Date(this.data.startDate);
    if (currentDate >= startDateTest) {
        wx.showToast({
          title: '投保起始日期应从明天开始',
          image: '../../images/err.png',
          duration: 2000
        })
        return false;
    }
    wx.showLoading({
      title: '数据提交中...'
    });
    app.globalData.startTime = this.data.startDate;
    app.globalData.quoteRequest.TransferDate = null;
    if (this.data.isTransfered) {
      app.globalData.quoteRequest.TransferDate = this.data.transferDate;
    }
    app.globalData.quoteRequest.CityCode = this.data.form.cityCode;
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

    app.postRequest(app.config.URLS.RENEWAL, {licenseNo:  app.globalData.quoteRequest.LicenseNo, cityCode: app.globalData.quoteRequest.CityCode },
        function(res) {
          
          var resTest = res;
          if (res.succeeded ) {
            wx.hideLoading();
            if (res.data.isGetData == 1) {
              app.globalData.quoteRequest.IsGetData = 1;
              app.globalData.quoteRequest.BrandName = res.data.brandName;
              wx.navigateTo({
                url: '../scheme/scheme'
              });
            }
            else {
              app.globalData.quoteRequest.IsGetData = 0;
              wx.navigateTo({
                url: '../vehicle/vehicle'
              });
            }
          }
          else {
            wx.showToast({
              title: res.message,
              image: '../../images/err.png',
              duration: 2000
            });
          }
        }, function(err) {
          // wx.hideLoading();
          // var errTest = err;
          // wx.showToast({
          //       title: '内部错误，请稍后再试',
          //       image: '../../images/err.png',
          //       duration: 2000
          //     });
        });
  }
})

