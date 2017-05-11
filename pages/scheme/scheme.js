var app = getApp();
Page({
    data: {
        currentIndex: 0,
    },
    swpierChange: function(e) {
        this.setData({
            currentIndex: e.detail.current
        });
    },
    apply: function(e) {
    	if (this.data.currentIndex == 0) {
    		app.globalData.quoteRequest.Type = app.globalData.selling.type;
    		app.globalData.quoteRequest.Insurances = app.globalData.selling.insurances;
    		app.globalData.modifyingType = 'selling';
    	} 
    	else {
    		app.globalData.quoteRequest.Type = app.globalData.upmarket.type;
    		app.globalData.quoteRequest.Insurances = app.globalData.upmarket.insurances;
    		app.globalData.modifyingType = 'upmarket';
    	}
        wx.showLoading({
          title: '数据提交中...'
        });
    	app.postRequest(app.config.URLS.QUOTE, app.globalData.quoteRequest,
            function(res) {
            	var resTest = res;
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
             //    wx.hideLoading();
            	// var errTest = err;
             //    wx.showToast({
             //      title: '内部错误，请稍后再试',
             //      image: '../../images/err.png',
             //      duration: 2000
             //    });
            });
    },
    toggleSwpier(e) {
    	var id = e.currentTarget.id;
    	if (id == 'first') {
    		this.setData({
	            currentIndex: 0
	        });
    	}
    	else {
    		this.setData({
	            currentIndex: 1
	        });
    	}

    	
    },
    modifyType: function() {
    	if (this.data.currentIndex == 0) {
    		app.globalData.quoteRequest.Type = app.globalData.selling.type;
    		app.globalData.quoteRequest.Insurances = app.globalData.selling.insurances;
    		app.globalData.modifyingType = 'selling';
    	} 
    	else {
    		app.globalData.quoteRequest.Type = app.globalData.upmarket.type;
    		app.globalData.quoteRequest.Insurances = app.globalData.upmarket.insurances;
    		app.globalData.modifyingType = 'upmarket';
    	}
    	wx.navigateTo({ url: '../modification/modification' });
    }
});