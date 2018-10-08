// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //转到个人资料
  to_personal: function(e) {
    wx.navigateTo({
      url: './personal/index',
    })
  },

  //转到我的客户
  tocustormer: function(e) {
    wx.navigateTo({
      url: '/pages/my/customerPerson/index',
    })
  },

  //转到我的收藏
  tomycollect: function (e) {
    wx.navigateTo({
      url: '/pages/my/mycollection/index',
    })
  },
  //转到我的产品
  tomyproduce: function (e) {
    wx.navigateTo({
      url: '/pages/my/myprosuce/index',
    })
  },
  //转到我的需求
  tomydemand: function (e) {
    wx.navigateTo({
      url: '/pages/my/mydemand/index',
    })
  },
  //转到我的推荐
  tomyrecommend: function (e) {
    wx.navigateTo({
      url: '/pages/my/myrecommend/index',
    })
  },
  //我的发票
  tomyreinvoice: function(e) {
    wx.navigateTo({
      url: '/pages/my/myinvoice/index',
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