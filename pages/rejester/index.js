// pages/rejester/index.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber: '',
    userInfo: {
      avatarUrl: "", //用户头像
      nickName: "", //用户昵称
    },
    addr: '未设置',
    address: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log(app.globalData.phoneNumber);
    let that = this;
    that.setData({
      phoneNumber: app.globalData.phoneNumber
    })
  },

  //身份证明
  upload: function(e) {
    wx.chooseImage({
      success(res) {
        // const tempFilePaths = res.tempFilePaths
        // wx.uploadFile({
        //   url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
        //   filePath: tempFilePaths[0],
        //   name: 'file',
        //   formData: {
        //     'user': 'test'
        //   },
        //   success(res) {
        //     const data = res.data
        //     //do something
        //   }
        // })
      }
    })
  },

  //地址选择
  choisemap: function(e) {
    var that = this;
    var address = this.data.address;
    console.log(e);
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userLocation']) {
          that.setData({
            open: ''
          })
          wx.chooseLocation({
            success: function (res) {
              console.log(res)
              address.name = res.name
              address.address = res.address
              address.latitude = res.latitude
              address.longitude = res.longitude
              that.setData({
                address: address
              });

            },
            fail: function (e) {
            }
          })
        } else {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              that.setData({
                open: ''
              })
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              wx.chooseLocation({
                success: function (res) {
                  console.log(res)
                  address.name = res.name
                  address.address = res.address
                  address.latitude = res.latitude
                  address.longitude = res.longitude
                  that.setData({
                    address: address
                  });
                },
                fail: function (e) {
                  console.log(e)
                }
              })
            },
            fail: function (e) {
              that.setData({
                open: 'openSetting'
              })
            }
          })
        }
      }
    })

  },
  next: function(e) {
    wx.navigateTo({
      url: './personal2/index',
    })
  }
})