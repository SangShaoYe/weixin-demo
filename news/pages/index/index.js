var tool = require("../../utils/tool.js")//引入tool.js， require 暂时不支持绝对路径
//获取应用实例
const app = getApp()
console.log(app.a)//调用全局的数据
console.log(tool.add(1,2))//调用tool.js里面的方法。
App({
  onLaunch: function (options) {
    // Do something initial when launch.
  },
  onShow: function (options) {
    var appInstance = getApp()
    console.log(appInstance.globalData)//？？？？？？？？？
  },
  onHide: function () {
    // Do something when hide.
  },
  onError: function (msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})
Page({//开发者可以添加任意的函数或数据到 object 参数中，在页面的函数中用 this 可以访问
  data: {//页面的初始数据
    motto: 'My Name Is SangJingRui',
    message:123,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //修改数据
  viewTap: function () {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
    })
  },
  onLoad: function () {//生命周期函数--监听页面加载
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady: function () {//生命周期函数--监听页面初次渲染完成
    // Do something when page ready.
  },
  onShow: function () {//生命周期函数--监听页面显示
    // Do something when page show.
  },
  onHide: function () {//生命周期函数--监听页面隐藏
    // Do something when page hide.
  },
  onUnload: function () {//生命周期函数--监听页面卸载
    // Do something when page close.
  },
  onPullDownRefresh: function () {//页面相关事件处理函数--监听用户下拉动作
    // Do something when pull down.
  },
  onReachBottom: function () {//页面上拉触底事件的处理函数
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {//用户点击右上角转发
    // return custom share data when user share.
  },
  onPageScroll: function () {//页面滚动触发事件的处理函数
    // Do something when page scroll
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
