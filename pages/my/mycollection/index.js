// pages/my/mycollection/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: [{
      title: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
      content: 'hahahhahahahhahahahhahahahhahahahhahahahhahahahhahahahhahahahhahahahhahahahhahahahha'
    },
    {
      title: '啦啦啦啦',
      content: '啦啦啦啦啦'
    }, {
      title: '啦啦啦啦',
      content: '啦啦啦啦啦'
    }],
    tabs: [
      { title: '产品' },
      { title: '需求' }
    ],
    tab: 0
  },
  onClick: function (e) {

    console.log(e.detail.key);
    this.setData({
      tab: e.detail.key
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //产品详情
  to_detail: function(e) {
    if(this.data.tab == 0) {
      wx.navigateTo({
        url: './../prosuceinfo/index'
      })
    } else {
      wx.navigateTo({
        url: '/pages/index/demand/index'
      })
    }

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})