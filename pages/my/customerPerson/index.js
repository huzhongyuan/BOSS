// pages/customer/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noCustomer: 'none',//没有客户的时候显示
    result: [{
      img: '/images/index1.png',
      name: 'huzhongyuan',
      show: 'none'
    },
    {
      img: '/images/index1.png',
      name: 'huzhongyuan',
      show: 'none'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //展示客户更多信息
  showInfo: function (e) {
    console.log(e.currentTarget.dataset.index);
    let that = this;
    let isshow = that.data.result[e.currentTarget.dataset.index].show;
    console.log(isshow);
    if (isshow == "none") {
      let isw = 'result[' + e.currentTarget.dataset.index + '].show';
      that.setData({
        [isw]: 'flex'
      })
    } else {
      let isw = 'result[' + e.currentTarget.dataset.index + '].show';
      that.setData({
        [isw]: 'none'
      })
    }
  },

  //转到客户详情
  to_leaveMeassage: function (e) {
    wx.navigateTo({
      url: './../../customer/customerPerson/index',
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