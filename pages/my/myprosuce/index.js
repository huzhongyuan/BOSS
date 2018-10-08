// pages/my/myprosuce/index.js
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
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //添加产品
  addproduce: function(e) {
    wx.navigateTo({
      url: '/pages/index/addproduce/index',
    })
  },

//转到产品详情
  to_detail: function(e) {
    wx.navigateTo({
      url: './../prosuceinfo/index',
    })
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