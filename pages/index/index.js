// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [{ url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' }, { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' }, { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' }, { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }],
    photolist: ['/images/index1.png', '/images/index1.png','/images/index1.png','/images/index1.png']

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  to_detail: function(e) {
    wx.navigateTo({
      url: './demand/index',
    })
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


})