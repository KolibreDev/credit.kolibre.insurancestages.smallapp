const util = require('../../utils/util');
Page({
	data: {
		startDate: util.formatTime2(new Date()),

		// insCode: null,
        // insName: null,
        // modelCode: "",
        // premium: null,
        isXianOpening: false,
    	isRenOpening: false,
        jqxList: ['不投保', '投保'],
        jqxIndex: 0,
		insurances: {
			CLSSX: {
	          code: "CLSSX",
	          name: "车辆损失险",
	          list: ['不投保', '投保'],
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
	          list: ['不投保', '5', '10', '15', '20', '30', '50', '100', '200', '300', '500'],
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
	          list: ['不投保', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '15', '20', '25', '30', '35', '40', '45', '50'],
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
	          list: ['不投保', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '15', '20', '25', '30', '35', '40', '45', '50'],
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
	          list: ['不投保', '5000', '10000', '20000'],
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
	          index: 0
	       },
	       SFTYX: {
	       	  code: "SFTYX",
	          name: "机动车损失保险无法找到第三方特约险",
	          list: ['不投保', '投保'],
	          index: 0
	       },
	       JSSHX: {
	       	  code: "JSSHX",
	          name: "精神损害抚慰金责任险",
	          list: ['不投保', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
	          index: 0,
	          amount: 0
	       },
	       JSSHX_MP: {
	       	  code: "JSSHX_MP",
	          name: "精神损害抚慰金责任险不计免赔",
	          isIns: false
	       }
		},
	},
	bindStartDateChange: function(e) {
		this.setData({
	    	startDate:  e.detail.value
	    })
	},
	bindPickerChange: function(e) {
		var id = e.currentTarget.id;
		switch(id) {
			case 'CLSSX': 
				this.setData({
			      "insurances.CLSSX.index": e.detail.value
			    });
				break;
			case 'QCDQX': 
				this.setData({
			      "insurances.QCDQX.index": e.detail.value
			    });
				break;
			case 'DSZZRX': 
				this.setData({
			      "insurances.DSZZRX.index": e.detail.value
			    });
				break;
			case 'JSYZRX': 
				this.setData({
			      "insurances.JSYZRX.index": e.detail.value
			    });
				break;
			case 'CSCKX': 
				this.setData({
			      "insurances.CSCKX.index": e.detail.value
			    });
				break;
			case 'CSHHX': 
				this.setData({
			      "insurances.CSHHX.index": e.detail.value
			    });
				break;
			case 'BLX': 
				this.setData({
			      "insurances.BLX.index": e.detail.value
			    });
				break;
			case 'CLZRX': 
				this.setData({
			      "insurances.CLZRX.index": e.detail.value
			    });
				break;
			case 'SSX': 
				this.setData({
			      "insurances.SSX.index": e.detail.value
			    });
				break;
			case 'ZXCX': 
				this.setData({
			      "insurances.ZXCX.index": e.detail.value
			    });
				break;
			case 'SFTYX': 
				this.setData({
			      "insurances.SFTYX.index": e.detail.value
			    });
				break;
			case 'JSSHX': 
				this.setData({
			      "insurances.JSSHX.index": e.detail.value
			    });
				break;
		}
	},
	mpChange: function(e) {
		var id = e.currentTarget.id;
		switch(id) {
			case 'CLSSX_MP': 
				this.setData({
			      "insurances.CLSSX_MP.isIns": !this.data.insurances.CLSSX_MP.isIns
			    });
				break;
			case 'QCDQX_MP': 
				this.setData({
			      "insurances.QCDQX_MP.isIns": !this.data.insurances.QCDQX_MP.isIns
			    });
				break;
			case 'DSZZRX_MP': 
				this.setData({
			      "insurances.DSZZRX_MP.isIns": !this.data.insurances.DSZZRX_MP.isIns
			    });
				break;
			case 'JSYZRX_MP': 
				this.setData({
			      "insurances.JSYZRX_MP.isIns": !this.data.insurances.JSYZRX_MP.isIns
			    });
				break;
			case 'CSCKX_MP': 
				this.setData({
			      "insurances.CSCKX_MP.isIns": !this.data.insurances.CSCKX_MP.isIns
			    });
				break;
			case 'CSHHX_MP': 
				this.setData({
			      "insurances.CSHHX_MP.isIns": !this.data.insurances.CSHHX_MP.isIns
			    });
				break;
			case 'CLZRX_MP': 
				this.setData({
			      "insurances.CLZRX_MP.isIns": !this.data.insurances.CLZRX_MP.isIns
			    });
				break;
			case 'SSX_MP': 
				this.setData({
			      "insurances.SSX_MP.isIns": !this.data.insurances.SSX_MP.isIns
			    });
				break;
			case 'JSSHX_MP': 
				this.setData({
			      "insurances.JSSHX_MP.isIns": !this.data.insurances.JSSHX_MP.isIns
			    });
				break;
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
	  }
})