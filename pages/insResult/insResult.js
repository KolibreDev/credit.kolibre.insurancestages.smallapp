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
		// 商业险
		biStartTime: null,
        biEndTime: null,
        // 交强险
        ciStartTime: null,
        isXianOpening: false,
    	isRenOpening: false,
    	companyText: '太平洋保险',  // 中国平安保险 中国人民保险
    	companyUrl: '',
    	relationUser: [],

    	type: 0,

    	insurancesLists: [],

    	responseInfo: null
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
			biStartTime: util.formatTime2(new Date(app.globalData.quoteRequest.BiStartTime)),
			biEndTime: util.formatTime2(new Date(app.globalData.quoteRequest.BiEndTime)),
			ciStartTime: util.formatTime2(new Date(app.globalData.quoteRequest.CiStartTime)),
			responseInfo: app.globalData.quoteReponse,
			type: app.globalData.quoteRequest.Type,
			relationUser:  app.globalData.quoteRequest.RelationUser
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
		var insurancesList = [];
		var curList = this.data.responseInfo.data.insurances;
		for (var i = 0; i < curList.length; i++) {
			var insItem = curList[i];
			if (insItem.insCode.indexOf('_MP') > 0) {
				insItem.isMP = true;
			}
			if (parseInt(insItem.amount) > 0 && parseInt(insItem.amount) < 10000) {
				insItem.amount = insItem.amount;
			}
			else {
				insItem.amount = (insItem.amount / 10000).toFixed(0) + '万';
			}
			insurancesList.push(insItem);
		}
		this.setData({
			insurancesLists: insurancesList
		});
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
	apply: function(e) {
		wx.redirectTo({ url: '../orderInfo/orderInfo' });
	}
})