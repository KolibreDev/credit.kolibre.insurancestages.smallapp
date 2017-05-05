const util = require('../../utils/util');
Page({
  data: {
  	isTransferInfosShow: false,
  	isTransfered: false,
  	companyUrl: '',
  	companyCode: '',
  	city: '上海',
  	startDate: util.formatTime2(new Date()),
  	transferDate: util.formatTime2(new Date())
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
    	companyCode: options.company,
      	companyUrl: imgUrl
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
  	wx.navigateTo({
	  url: '../vehicle/vehicle'
	})
  }
})

