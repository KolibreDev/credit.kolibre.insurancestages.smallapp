Page({
  data: {
    isXianOpening: false,
    isRenOpening: false,
    isBeiOpening: false,
    // isPosOpening: false,
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
