const util = require('../../utils/util');
var app = getApp();
Page({
	data: {
		vin: null,
		isGetData: false,
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

        companyText: '太平洋保险',  // 中国平安保险 中国人民保险
    	companyUrl: '',

        isXianOpening: false,
    	isRenOpening: false,
        jqxList: ['不投保', '投保'],
        jqxIndex: 0,
		insurances: {
			CLSSX: {
	          code: "CLSSX",
	          name: "车辆损失险",
	          list: ['不投保', '投保'],
	          amountlist: ['0', '0'],
	          index: 0
	       },
	       CLSSX_MP: {
	          code: "CLSSX_MP",
	          name: "车辆损失险不计免赔",
	          isIns: false
	       },
	       QCDQX: {
	          code: "QCDQX",
	          name: "全车盗抢险",
	          list: ['不投保', '投保'],
	          amountlist: ['0', '0'],
	          index: 0
	       },
	       QCDQX_MP: {
	          code: "QCDQX_MP",
	          name: "全车盗抢险不计免赔",
	          isIns: false
	       },
	       DSZZRX: {
	       	  code: "DSZZRX",
	          name: "第三者责任险",
	          list: ['不投保', '5 万', '10 万', '15 万', '20 万', '30 万', '50 万', '100 万', '200 万', '300 万', '500 万'],
	          amountlist: ['0', '50000', '100000', '150000', '200000', '300000', '500000', '1000000', '2000000', '3000000', '5000000'],
	          index: 0,
	          amount: 0
	       },
	       DSZZRX_MP: {
	       	  code: "DSZZRX_MP",
	          name: "第三者责任险不计免赔",
	          isIns: false
	       },
	       JSYZRX: {
	       	  code: "JSYZRX",
	          name: "驾驶员责任险",
	          list: ['不投保', '1 万', '2 万', '3 万', '4 万', '5 万', '6 万', '7 万', '8 万', '9 万', '10 万', '15 万', '20 万', '25 万', '30 万', '35 万', '40 万', '45 万', '50 万'],
	          amountlist: ['0', '10000', '20000', '30000', '40000', '50000', '60000', '70000', '80000', '90000', '100000', '150000', '200000', '250000', '300000', '350000', '400000', '450000', '500000'],
	          index: 0,
	          amount: 0
	       },
	       JSYZRX_MP: {
	       	  code: "JSYZRX_MP",
	          name: "驾驶员责任险不计免赔",
	          isIns: false
	       },
	       CSCKX: {
	       	  code: "CSCKX",
	          name: "车上乘客险",
	          list: ['不投保', '1 万', '2 万', '3 万', '4 万', '5 万', '6 万', '7 万', '8 万', '9 万', '10 万', '15 万', '20 万', '25 万', '30 万', '35 万', '40 万', '45 万', '50 万'],
	          amountlist: ['0', '10000', '20000', '30000', '40000', '50000', '60000', '70000', '80000', '90000', '100000', '150000', '200000', '250000', '300000', '350000', '400000', '450000', '500000'],
	          index: 0,
	          amount: 0
	       },
	       CSCKX_MP: {
	       	  code: "CSCKX_MP",
	          name: "车上乘客险不计免赔",
	          isIns: false
	       },
	       CSHHX: {
	       	  code: "CSHHX",
	          name: "车身划痕险",
	          list: ['不投保', '5000', '1 万', '2 万'],
	          amountlist: ['0', '5000', '10000', '20000'],
	          index: 0,
	          amount: 0
	       },
	       CSHHX_MP: {
	       	  code: "CSHHX_MP",
	          name: "车身划痕险不计免赔",
	          isIns: false
	       },
	       BLX: {
	       	  code: "BLX",
	          name: "玻璃险",
	          list: ['不投保', '国产玻璃', '进口玻璃'],
	          index: 0,
	          modelCode: 0
	       },
	       CLZRX: {
	       	  code: "CLZRX",
	          name: "车辆自燃险",
	          list: ['不投保', '投保'],
	          amountlist: ['0', '0'],
	          index: 0
	       },
	       CLZRX_MP: {
	       	  code: "CLZRX_MP",
	          name: "车辆自燃险不计免赔",
	          isIns: false
	       },
	       SSX: {
	       	  code: "SSX",
	          name: "涉水险",
	          list: ['不投保', '投保'],
	          amountlist: ['0', '0'],
	          index: 0
	       },
	       SSX_MP: {
	       	  code: "SSX_MP",
	          name: "涉水险不计免赔",
	          isIns: false
	       },
	       ZXCX: {
	       	  code: "ZXCX",
	          name: "指定专修厂险",
	          list: ['不投保', '投保'],
	          amountlist: ['0', '0'],
	          index: 0
	       },
	       SFTYX: {
	       	  code: "SFTYX",
	          name: "机动车损失保险无法找到第三方特约险",
	          list: ['不投保', '投保'],
	          amountlist: ['0', '0'],
	          index: 0
	       },
	       JSSHX: {
	       	  code: "JSSHX",
	          name: "精神损害抚慰金责任险",
	          list: ['不投保', '1 万', '2 万', '3 万', '4 万', '5 万', '6 万', '7 万', '8 万', '9 万', '10 万', '11 万', '12 万', '13 万', '14 万', '15 万', '16 万', '17 万', '18 万', '19 万', '20 万'],
	          amountlist: ['0', '10000', '20000', '30000', '40000', '50000', '60000', '70000', '80000', '90000', '100000', '110000', '120000', '130000', '140000', '150000', '160000', '170000', '180000', '190000', '200000'],
	          index: 0,
	          amount: 0
	       },
	       JSSHX_MP: {
	       	  code: "JSSHX_MP",
	          name: "精神损害抚慰金责任险不计免赔",
	          isIns: false
	       }
		},
		form: {
			placeholder1: '请输入身份证号码',
			insuredName1: null,
			identifyNumber1: null,
			phone1: null,
			insuredType1: 1,
			placeholder2: '请输入身份证号码',
			insuredName2: null,
			identifyNumber2: null,
			phone2: null,
			insuredType2: 1,
		}

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
			biStartTime: app.globalData.quoteRequest.BiStartTime.substring(0, app.globalData.quoteRequest.BiStartTime.length - 9),
			biEndTime: app.globalData.quoteRequest.BiEndTime.substring(0, app.globalData.quoteRequest.BiEndTime.length - 9),
			ciStartTime: app.globalData.quoteRequest.CiStartTime.substring(0, app.globalData.quoteRequest.CiStartTime.length - 9),
			'form.insuredName1': app.globalData.quoteRequest.RelationUser[1].insuredName,
			'form.identifyNumber1': app.globalData.quoteRequest.RelationUser[1].identifyNumber,
			'form.phone1': app.globalData.quoteRequest.RelationUser[1].phone,
			'form.insuredName2': app.globalData.quoteRequest.RelationUser[2].insuredName,
			'form.identifyNumber2': app.globalData.quoteRequest.RelationUser[2].identifyNumber,
			'form.phone2': app.globalData.quoteRequest.RelationUser[2].phone,
			'form.insuredType1': app.globalData.quoteRequest.RelationUser[1].identifyType,
			'form.insuredType2': app.globalData.quoteRequest.RelationUser[2].identifyType
		});
		console.log(app.globalData.quoteRequest.CiStartTime);
		console.log(this.data.ciStartTime);
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
		//热销、高端
		if (app.globalData.modifyingType == 'selling') {
			this.data.insurances["CLSSX"].index = 1;
			this.data.insurances["CLSSX_MP"].isIns = true;
			
			this.data.insurances["DSZZRX"].index = 6;
			this.data.insurances["DSZZRX_MP"].isIns = true;

			this.data.insurances["JSYZRX"].index = 1;
			this.data.insurances["JSYZRX_MP"].isIns = true;

			this.data.insurances["CSCKX"].index = 1;
			this.data.insurances["CSCKX_MP"].isIns = true;
		}
		else {
			this.data.insurances["CLSSX"].index = 1;
			this.data.insurances["CLSSX_MP"].isIns = true;
			
			this.data.insurances["DSZZRX"].index = 7;
			this.data.insurances["DSZZRX_MP"].isIns = true;

			this.data.insurances["JSYZRX"].index = 2;
			this.data.insurances["JSYZRX_MP"].isIns = true;

			this.data.insurances["CSCKX"].index = 2;
			this.data.insurances["CSCKX_MP"].isIns = true;

			this.data.insurances["QCDQX"].index = 1;
		}
		this.setData({
			jqxIndex: 1
		});
		this.setData({
			insurances: this.data.insurances
		});
		// for (var i = 0; i < app.globalData.quoteRequest.Insurances.length; i++) {
		// 	var currentCode = app.globalData.quoteRequest.Insurances[i].code;
		// 	console.log(currentCode);
		// 	if (currentCode == 'BLX') {

		// 	}
		// 	else if (currentCode.indexOf('_MP') > 0) {
		// 		this.data.insurances[currentCode].isIns = true;
		// 	}
		// }
		
		this.WxValidate = app.WxValidate({
	          insuredName1: {
	              required: true
	          },
	          identifyNumber1: {
	              required: true
	          },
	          phone1: {
	              required1: true,
	              tel: true
	          },
	          insuredName2: {
	              required: true
	          },
	          identifyNumber2: {
	              required: true
	          },
	          phone2: {
	              required1: true,
	              tel: true
	          }
	      }, {
	          insuredName1: {
	              required: app.config.MSGINFO.INSUREDNAME1
	          },
	          identifyNumber1: {
	              required: app.config.MSGINFO.IDENTIFYNUMBER1
	          },
	          phone1: {
	              required: app.config.MSGINFO.PHONE1,
	              tel: app.config.MSGINFO.PHONEERR1
	          },
	          insuredName2: {
	              required: app.config.MSGINFO.INSUREDNAME2
	          },
	          identifyNumber2: {
	              required: app.config.MSGINFO.IDENTIFYNUMBER2
	          },
	          phone2: {
	              required: app.config.MSGINFO.PHONE2,
	              tel: app.config.MSGINFO.PHONEERR2
	          }
	      });
	},
	toggle: function(e) {
	    let val = e.currentTarget.id;
	    if (val == '11') {
	    	this.setData({
		      'form.placeholder1': '请输入身份证号码',
		      'form.insuredType1': 1
		    })
	    }
	    else if (val == '12') {
	    	this.setData({
		      'form.placeholder1': '请输入组织机构代码',
		      'form.insuredType1': 2
		    })
	    }
	    else if (val == '21') {
	    	this.setData({
		      'form.placeholder2': '请输入身份证号码',
		      'form.insuredType2': 1
		    })
	    }
	    else {
	    	this.setData({
		      'form.placeholder2': '请输入组织机构代码',
		      'form.insuredType2': 2
		    })
	    }
	    var value = (val == 1) ? true : false;
	    var placeholder = (val == 1) ? '请输入身份证号码' : '请输入组织机构代码';
	    var insuredType = (val == 1) ? 1 : 2;
	    this.setData({
	      isPersonal: value,
	      identifyNumberPh: placeholder,
	      'form.insuredType': insuredType
	    })
	},
	bindStartDateChange: function(e) {
		var id = e.currentTarget.id;
		if (id == 'bs') {
			this.setData({
		    	biStartTime:  e.detail.value
		    });
		}
		else if(id == 'be') {
			this.setData({
		    	biEndTime:  e.detail.value
		    });
		}
		else {
			this.setData({
		    	ciStartTime:  e.detail.value
		    });
		}
	},
	bindPickerChange: function(e) {
		var id = e.currentTarget.id;

		if (id == 'JQX') {
			this.setData({
		      jqxIndex: e.detail.value
		    });
		}
		else {
		    for(var key in this.data.insurances){   
        		if (key === id){ 
        			this.data.insurances[key].index = e.detail.value;
        		}
        	}
		    // 取消投保 同时取消不计免赔投保;
		    if (e.detail.value == 0) {
		    	var mpId = id +  '_MP';
		    	for(var key in this.data.insurances){   
	        		if (key === mpId){ 
	        			this.data.insurances[key].isIns = false;
	        		}
	        	}
		    }
		    this.setData({
		      	insurances: this.data.insurances
		    });
		}

		// switch(id) {
		// 	case 'CLSSX': 
		// 		this.setData({
		// 	      "insurances.CLSSX.index": e.detail.value
		// 	    });
		// 		break;
		// 	case 'QCDQX': 
		// 		this.setData({
		// 	      "insurances.QCDQX.index": e.detail.value
		// 	    });
		// 		break;
		// 	case 'DSZZRX': 
		// 		this.setData({
		// 	      "insurances.DSZZRX.index": e.detail.value
		// 	    });
		// 		break;
		// 	case 'JSYZRX': 
		// 		this.setData({
		// 	      "insurances.JSYZRX.index": e.detail.value
		// 	    });
		// 		break;
		// 	case 'CSCKX': 
		// 		this.setData({
		// 	      "insurances.CSCKX.index": e.detail.value
		// 	    });
		// 		break;
		// 	case 'CSHHX': 
		// 		this.setData({
		// 	      "insurances.CSHHX.index": e.detail.value
		// 	    });
		// 		break;
		// 	case 'BLX': 
		// 		this.setData({
		// 	      "insurances.BLX.index": e.detail.value
		// 	    });
		// 		break;
		// 	case 'CLZRX': 
		// 		this.setData({
		// 	      "insurances.CLZRX.index": e.detail.value
		// 	    });
		// 		break;
		// 	case 'SSX': 
		// 		this.setData({
		// 	      "insurances.SSX.index": e.detail.value
		// 	    });
		// 		break;
		// 	case 'ZXCX': 
		// 		this.setData({
		// 	      "insurances.ZXCX.index": e.detail.value
		// 	    });
		// 		break;
		// 	case 'SFTYX': 
		// 		this.setData({
		// 	      "insurances.SFTYX.index": e.detail.value
		// 	    });
		// 		break;
		// 	case 'JSSHX': 
		// 		this.setData({
		// 	      "insurances.JSSHX.index": e.detail.value
		// 	    });
		// 	    break;
		// 	case 'JQX': 
		// 		this.setData({
		// 	      jqxIndex: e.detail.value
		// 	    });
		// 		break;
		// }
	},
	mpChange: function(e) {
		var id = e.currentTarget.id;
		var changingKey = '';
		var wantMPIns = false;
		for(var key in this.data.insurances){   
    		if (key === id){ 
    			changingKey = key;
    			// this.data.insurances[key].isIns = !this.data.insurances[key].isIns;
    			if (!this.data.insurances[key].isIns) {
    				wantMPIns = true;
    			}
    			else {
    				this.data.insurances[key].isIns = !this.data.insurances[key].isIns;
    			}
    			break;
    		}
    	}
	    // 未投保 不计免赔投保失败;
	    if (wantMPIns) {
	    	var unMpId = id.substring(0, id.length - 3);
	    	for(var key in this.data.insurances){   
        		if (key === unMpId){ 
        			if (this.data.insurances[key].index > 0) {
        				this.data.insurances[changingKey].isIns = !this.data.insurances[changingKey].isIns;
        			}
        			else {
        				wx.showToast({
				          title: app.config.MSGINFO.MPFIRST,
				          image: '../../images/err.png',
				          duration: 2000
				        });
        			}
        			break;
        		}
        	}
	    }
	    this.setData({
	      	insurances: this.data.insurances
	    });
		// switch(id) {
		// 	case 'CLSSX_MP': 
		// 		this.setData({
		// 	      "insurances.CLSSX_MP.isIns": !this.data.insurances.CLSSX_MP.isIns
		// 	    });
		// 		break;
		// 	case 'QCDQX_MP': 
		// 		this.setData({
		// 	      "insurances.QCDQX_MP.isIns": !this.data.insurances.QCDQX_MP.isIns
		// 	    });
		// 		break;
		// 	case 'DSZZRX_MP': 
		// 		this.setData({
		// 	      "insurances.DSZZRX_MP.isIns": !this.data.insurances.DSZZRX_MP.isIns
		// 	    });
		// 		break;
		// 	case 'JSYZRX_MP': 
		// 		this.setData({
		// 	      "insurances.JSYZRX_MP.isIns": !this.data.insurances.JSYZRX_MP.isIns
		// 	    });
		// 		break;
		// 	case 'CSCKX_MP': 
		// 		this.setData({
		// 	      "insurances.CSCKX_MP.isIns": !this.data.insurances.CSCKX_MP.isIns
		// 	    });
		// 		break;
		// 	case 'CSHHX_MP': 
		// 		this.setData({
		// 	      "insurances.CSHHX_MP.isIns": !this.data.insurances.CSHHX_MP.isIns
		// 	    });
		// 		break;
		// 	case 'CLZRX_MP': 
		// 		this.setData({
		// 	      "insurances.CLZRX_MP.isIns": !this.data.insurances.CLZRX_MP.isIns
		// 	    });
		// 		break;
		// 	case 'SSX_MP': 
		// 		this.setData({
		// 	      "insurances.SSX_MP.isIns": !this.data.insurances.SSX_MP.isIns
		// 	    });
		// 		break;
		// 	case 'JSSHX_MP': 
		// 		this.setData({
		// 	      "insurances.JSSHX_MP.isIns": !this.data.insurances.JSSHX_MP.isIns
		// 	    });
		// 		break;
		// }
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
	    if (this.data.form.insuredType1 == 1) {
	      if (!app.config.REGEX.CREDENTIALNO.test(params.identifyNumber1)) {
	        wx.showToast({
	          title: app.config.MSGINFO.IDENTIFYNUMBERERR1,
	          image: '../../images/err.png',
	          duration: 2000
	        })
	        return false;
	      }
	    }
	    if (this.data.form.insuredType2 == 1) {
	      if (!app.config.REGEX.CREDENTIALNO.test(params.identifyNumber2)) {
	        wx.showToast({
	          title: app.config.MSGINFO.IDENTIFYNUMBERERR2,
	          image: '../../images/err.png',
	          duration: 2000
	        })
	        return false;
	      }
	    }
	    var eTime = new Date(this.data.biEndTime);
	    var sTime = new Date(this.data.biStartTime);
	    var distance = eTime.getTime() - sTime.getTime(); 
	    var years = distance / (365 * 24 * 3600 * 1000);
	    if (years > 1) {
	    	wx.showToast({
	          title: app.config.MSGINFO.TIMEMORETHANYEAR,
	          image: '../../images/err.png',
	          duration: 2000
	        })
	        return false;
	    }
	    else if (years <= 0) {
	    	wx.showToast({
	          title: app.config.MSGINFO.TIMEERROR,
	          image: '../../images/err.png',
	          duration: 2000
	        })
	        return false;
	    }

	    var currentDate = new Date();
	    var ciStartDateTest = new Date(this.data.ciStartTime);
	    var biStartDateTest = new Date(this.data.biStartTime);
	    if ((currentDate >= ciStartDateTest) || (currentDate >= biStartDateTest)) {
	        wx.showToast({
	          title: '投保起始日期应从明天开始',
	          image: '../../images/err.png',
	          duration: 2000
	        })
	        return false;
	    }

	    var insItem =  {
          insCode: null,
          code: "",
          insName: "",
          name: null,
          amount: "0",
          modelCode: "",
          premium: "0"
        };
        var insurancesSelectedList = [];
        for(var key in this.data.insurances){   
        	if (this.data.insurances.hasOwnProperty(key) === true){  
	            if (key == 'BLX') { // 特殊处理险种
	            	if (this.data.insurances[key].index > 0) { //投保
	            		var modelCodeValue = 0;
	            		if (this.data.insurances[key].index == 2) {
	            			modelCodeValue = 1;
	            		}
	            		// 进口为1 国产为0
	            		var addItem = {
	            			code: this.data.insurances[key].code,
					        insCode: "",
					        insName: this.data.insurances[key].name,
					        name: null,
					        amount: "0",
					        modelCode: modelCodeValue,
					        premium: "0"
	            		}
	            		insurancesSelectedList.push(addItem);
	            	}
	            }
	            else if (key.indexOf('_MP') > 0) { // MP险不需要处理金额
	            	if (this.data.insurances[key].isIns) { //投保
	            		var addItem = {
	            			code: this.data.insurances[key].code,
					        insCode: null,
					        insName: this.data.insurances[key].name,
					        name: null,
					        amount: "0",
					        modelCode: "",
					        premium: "0"
	            		}
	            		insurancesSelectedList.push(addItem);
	            	}
	            }
	            else { // 非免赔险处理金额，如果不需要处理金额 则作为金额为0处理
	            	if (this.data.insurances[key].index > 0) { //投保
	            		var addItem = {
	            			code: this.data.insurances[key].code,
					        insCode: "",
					        insName: this.data.insurances[key].name,
					        name: null,
					        amount: this.data.insurances[key].amountlist[this.data.insurances[key].index],
					        modelCode: "",
					        premium: "0"
	            		}
	            		insurancesSelectedList.push(addItem);
	            	}
	            }
            }                 
        } 
        if (this.data.jqxIndex == 0 && insurancesSelectedList.length == 0) {
        	wx.showToast({
	          title: app.config.MSGINFO.NOINSURERR,
	          image: '../../images/err.png',
	          duration: 2000
	        });
	        return false;
        }
        if (this.data.jqxIndex > 0 && insurancesSelectedList.length > 0) {
        	 app.globalData.quoteRequest.Type = 3;
        }
        else {
        	if (this.data.jqxIndex > 0) {
        		app.globalData.quoteRequest.Type = 1;
        	}
        	else {
        		app.globalData.quoteRequest.Type = 2;
        	}
        }
        app.globalData.quoteRequest.Insurances = insurancesSelectedList;
        app.globalData.quoteRequest.BiStartTime = this.data.biStartTime + ' 00:00:00';
        app.globalData.quoteRequest.BiEndTime = this.data.biEndTime + ' 23:59:59';
        app.globalData.quoteRequest.CiStartTime = this.data.ciStartTime + ' 00:00:00';
        app.globalData.quoteRequest.CiEndTime = util.addOneYear(this.data.ciStartTime) + ' 23:59:59';

        app.globalData.quoteRequest.RelationUser[1].identifyNumber = params.identifyNumber1;
        app.globalData.quoteRequest.RelationUser[1].identifyType = this.data.form.insuredType1;
        app.globalData.quoteRequest.RelationUser[1].insuredType = this.data.form.insuredType1;
        app.globalData.quoteRequest.RelationUser[1].phone = params.phone1;
        app.globalData.quoteRequest.RelationUser[1].insuredName = params.insuredName1;
        app.globalData.quoteRequest.RelationUser[2].identifyNumber = params.identifyNumber2;
        app.globalData.quoteRequest.RelationUser[2].identifyType = this.data.form.insuredType2;
        app.globalData.quoteRequest.RelationUser[2].insuredType = this.data.form.insuredType2;
        app.globalData.quoteRequest.RelationUser[2].phone = params.phone2;
        app.globalData.quoteRequest.RelationUser[2].insuredName = params.insuredName2;

        wx.showLoading({
	      title: '数据提交中...'
	    });
        app.postRequest(app.config.URLS.QUOTE, app.globalData.quoteRequest,
	        function(res) {
	        	if (res.succeeded ) {
	        		if (res.data.hasData) {
		        		wx.hideLoading();
		        		app.globalData.quoteReponse = res;
		        		wx.redirectTo({ url: '../insResult/insResult' });
		        	}
		        	else {
		        		wx.showToast({
				          title: res.data.desc,
				          image: '../../images/err.png',
				          duration: 2000
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
          //         title: '内部错误，请稍后再试',
          //         image: '../../images/err.png',
          //         duration: 2000
          //       });
	        });
	}	
})