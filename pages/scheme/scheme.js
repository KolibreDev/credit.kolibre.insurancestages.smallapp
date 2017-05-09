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
    	} 
    	else {
    		app.globalData.quoteRequest.Type = app.globalData.upmarket.type;
    		app.globalData.quoteRequest.Insurances = app.globalData.upmarket.insurances;
    	}
    	app.postRequest(app.config.URLS.QUOTE, app.globalData.quoteRequest,
            function(res) {
            	var resTest = res;
                // if (res.succeeded) {
                //     feedbackApi.showToast({
                //         title: '认证成功',
                //         icon: '/images/success.png',
                //         mask: false,
                //         duration: 1000,
                //         cb: function() {
                //             wx.redirectTo({ url: 'apply2' });
                //         }
                //     });

                // } else {
                //     waitCount = waitCount + 1;
                //     feedbackApi.showToast({
                //         title: waitCount < 2 ? "认证失败\n请重新认证" : "申请月付失败\n请联系客服",
                //         icon: '/images/fail.png',
                //         mask: false,
                //         duration: 2000,
                //         cb: function() {
                //             if (waitCount >= 2) {
                //                 wx.redirectTo({ url: 'bill' });
                //             }
                //         }
                //     });
                // }
            }, function(err) {
            	var errTest = res;
                // feedbackApi.showToast({
                //     title: err.message,
                //     icon: '/images/fail.png',
                //     mask: false,
                //     duration: 2000
                // });
            });
    }
});