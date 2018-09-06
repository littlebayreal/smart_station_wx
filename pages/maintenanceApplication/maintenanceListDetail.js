// pages/maintenanceApplication/maintenanceListDetail.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: ["../../image/delete.png", "../../image/delete.png","../../image/delete.png"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    var bean = JSON.parse(options.bean);
    that.setData({
      maintenanceDetailBean: bean
    })
    wx.request({
      header: {
        'token': getApp().globalData.loginData.Token,
        'applicationID': getApp().globalData.ApplicationID,
        'userID': getApp().globalData.loginData.UserID
      },
      method: 'GET',
      url: getApp().globalData.baseurl+'api/Maintenance/GetMaintenanceApplicationVM',
      data:{
        'maintenanceApplicationID': that.data.maintenanceDetailBean.MaintenanceApplicationID
      },
      success:function(res){
        
      },
      fail:function(res){
        
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