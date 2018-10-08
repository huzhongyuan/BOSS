// pages/rejester/searchCompany/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notfind: 'none',//未搜索到相应的企业
    list: [
      {
        title: '有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司',
        name: 'hzyfjdaslfd有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限',
        prove: 'fdalfjdaslfd有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司s',
        place: '放大范德萨分fjdaslfd有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限'
      },
      {
        title: '有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司',
        name: 'hzyfjdaslfd有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限',
        prove: 'fdalfjdaslfd有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司s',
        place: '放大范德萨分fjdaslfd有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //转到公司详情
  to_detal: function(e) {
    wx.navigateTo({
      url: '/pages/rejester/autoAddCompany/index',
    })
  },
  addConpany: function(e) {
    wx.navigateTo({
      url: '/pages/rejester/handAddCompany/index',
    })
  }
})