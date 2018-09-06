// pages/maintenanceApplication/maintenanceApplicationList.js
var that
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  itemListener: function(e) {
    var itemview = e.currentTarget.dataset.itemview
    var bean = JSON.stringify(itemview);
    wx.navigateTo({
      url: 'maintenanceListDetail?bean=' + bean,
    })
  },
  http: function(e) {
    wx.request({
      header: {
        'token': getApp().globalData.loginData.Token,
        'applicationID': getApp().globalData.ApplicationID,
        'userID': getApp().globalData.loginData.UserID
      },
      method: 'GET',
      url: getApp().globalData.baseurl + 'api/Maintenance/QueryMaintenanceApplicationList',
      success: function(res) {
        that.setData({
          maintenanceList: res.data
        })
      },
      fail: function(res) {

      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this;
    that.http();
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})