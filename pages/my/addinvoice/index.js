// pages/my/addinvoice/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    personal: '',
    click: 'background-color:rgba(73,140,232,1);color:rgba(255,255,255,1);border:2rpx solid rgba(73,140,232,1);',
    noclick: 'color:rgba(73,140,232,1);border:2rpx solid rgba(73,140,232,1);background-color:white;border:2rpx solid rgba(73,140,232,1);',
    company: '',
    isclick: 0,
    iscompany: 'none'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let click = that.data.click;
    let noclick = that.data.noclick;
    that.setData({
      personal: click,
      company: noclick,
    })
  },

  //保存
  save: function(e) {
    wx.navigateBack({
      delta: 1
    })
  },

//个人
  personal: function(e) {
    let that = this;
    let click = that.data.click;
    let noclick = that.data.noclick;
    that.setData({
      personal: click,
      company: noclick,
      isclick: 0,
      iscompany: 'none'
    })
  },
  //公司
  company: function(e) {
    let that = this;
    let click = that.data.click;
    let noclick = that.data.noclick;
    that.setData({
      personal: noclick,
      company: click,
      isclick: 1,
      iscompany: 'flex'
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