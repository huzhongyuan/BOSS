var app = getApp();
Page({
  data: {
    movies: [{
      url: '/images/index1.png',
      id: 1
    }, {
      url: '/images/index2.png',
      id: 2
    }, {
      url: '/images/index3.png',
      id: 3
    }],
    opacity: 0
  },
  onLoad: function() {

  },
  swiperChange: function(e) {
    let that = this;
    //console.log(e);
    if(e.detail.current === 2) {
      console.log(2222);
      let interval = setInterval(function() {
        let opacity = that.data.opacity;
        that.setData({
          opacity: opacity + 0.1
        })
        if (that.data.opacity >= 1) {
          clearInterval(interval)
        }
        console.log(that.data.opacity)
      },100)
    } else {
      if (that.data.opacity >= 1) {
        let interval = setInterval(function () {
          let opacity = that.data.opacity;
          that.setData({
            opacity: opacity - 0.1
          })
          if (that.data.opacity <= 0) {
            clearInterval(interval)
          }
          console.log(that.data.opacity)
        }, 20)
      }
    }
  },
  login:function(e) {
    console.log('login');
  },
  rejest: function(e) {
    console.log('rejest');
    wx.redirectTo({
      url: '/pages/relationPhone/index'
    })
  }
})