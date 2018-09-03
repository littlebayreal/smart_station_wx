// pages/find/findAndPost.js
const app = getApp();
var that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    img: [],
    casArray: ['站牌缺损', '实时损坏', '广告画面', '卫生状况'],
    uploadClassValue: ""
  },
  uploadImg: function(e) {
    wx.chooseImage({
      count: 5,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        var imgs = that.data.img.concat(res.tempFilePaths);
        that.data.img = imgs.length <= 5 ? imgs : imgs.slice(0, 5);
        that.setData({
          img: that.data.img
        })
      },
    })
  },
  previewImg: function(e) {
    var index = e.currentTarget.dataset.index;
    wx.previewImage({
      current: that.data.img[index],
      urls: that.data.img,
    })
  },
  deleteImg: function(e) {
    var index = e.currentTarget.dataset.index;
    console.log("索引：" + index);
    that.data.img.splice(index, 1);
    that.setData({
      img: that.data.img
    })
  },
  initStationArray: function() {
    wx.request({
      header:{
        'token': app.globalData.loginData.Token,
        'applicationID': app.globalData.ApplicationID,
        'userID': app.globalData.loginData.UserID
      },
      data: {
        LongitudeOfPosition: '120.64963',
        LatitudeOfPosition: '31.281090'
      },
      method: 'GET',
      url: 'http://222.92.189.87:24031/api/Facility/GetStopListWithinTheRadiusByPosition',
      success: function(res) {
        if (res.data != null) {
          console.log("刷新页面" + res.data[0].StopName);
          var temp = [];
          for(var i=0;i<res.data.length;i++){
              temp.push(res.data[i].StopName);
          }
          that.setData({
            stationArray:temp
          })
        }
      },
      fail: function(res) {
        console.log("调用API失败");
      }
    })
  },
  bindCasPickerStation: function(e) {

  },
  bindCasPickerChange: function(e) {
    that.setData({
      uploadClassValue: that.data.casArray[e.detail.value]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this;
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