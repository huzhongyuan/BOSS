// pages/index/addproduce/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['美国', '中国', '巴西', '日本'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },


//保存
  save: function(e) {
    wx.navigateTo({
      url: '/pages/my/mydemand/index',
    })
  },
  //点击上传图片
  upload: function (e) {
    let that = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        console.log(res);
        that.setData({
          photoList: res.tempFilePaths
        })
        console.log(that.data.photoList);
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        wx.showLoading({
          title: '上传中'
        })
        // 上传至服务器\
        var asd = '';
        var length = res.tempFilePaths.length;
        var count = 0;
        for (let t = 0; t < length; t++) {
          asd = res.tempFilePaths[t];
          console.log(asd);
          wx.uploadFile({
            url: app.globalData.url + '/attachment/uploadImages',
            filePath: asd,
            name: 'file',
            formData: {
              'user': 'test'
            },
            success: function (e) {
              console.log(e)
              var imagesid = that.data.imagesid;
              // console.log(e.data)
              // console.log(e.data.result[0].attachemId)
              var jsonStr = e.data;
              jsonStr = jsonStr.replace(" ", "");
              jsonStr = jsonStr.replace(/\ufeff/g, "");
              var jj = JSON.parse(jsonStr);
              e.data = jj;
              if (e.data.success == true) {
                imagesid = imagesid + ',' + e.data.result[0].attachemId.toString();
                console.log('---------------------------');
                console.log(imagesid);
                that.setData({
                  imagesid: imagesid,
                })
                // img = res.tempFilePaths[0]
                // // console.log(img[i])
                // that.setData({
                //   img: img,
                // })
                /*setTimeout(function () {
                  that.asdaasda()
                }, 1000);*/
              } else {
                wx.hideLoading();
                console.log(res.data.msg);
                wx.showModal({
                  title: '提示',
                  content: e.data.msg,
                  showCancel: false
                })
                wx.hideLoading();
              }
            },
            fail: function (res) {
              wx.hideLoading();
              console.log(res);
              console.log(res.data.msg);
            },
            complete: function () {
              count++;
              if (count == length) {
                wx.hideLoading();
                that.asdaasda()
              }
            }
          })
        }
      }
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