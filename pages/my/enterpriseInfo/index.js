// pages/my/enterpriseInfo/index.js
Page({

  data: {
    isedit: true,
    edit: '编辑'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //点击编辑
  edit: function (e) {
    let that = this;
    if (that.data.isedit) {
      let isedit = that.data.isedit;
      that.setData({
        isedit: !isedit,
        edit: '保存'
      })
    } else {
      let isedit = that.data.isedit;
      that.setData({
        isedit: !isedit,
        edit: '编辑'
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