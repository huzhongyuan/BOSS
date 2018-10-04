// pages/relationPhone/index.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  onLaunch: function() {
    // wx.login({
    //   success: function (e) {
    //     console.log(e);
    //   }
    // })
  },


  getPhoneNumber: function(e) {
    let that = this;
    console.log(e);
    if (e.detail.errMsg != 'getPhoneNumber:fail user deny') {
      console.log('success');
      // app.globalData.phoneNumber = e.detail.phoneNumber;
      // console.log(app.globalData.phoneNumber);
      that.createUser();
    } else {
      console.log('error');
    }
  },
  //创建用户
  createUser: function() {
    console.log('createUser');
    wx.navigateTo({
      url: '/pages/rejester/index'
    })
  },
})