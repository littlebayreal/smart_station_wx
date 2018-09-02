// pages/find/findAndPost.js
var that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    img:[],
    casArray: ['站牌缺损', '实时损坏', '广告画面', '卫生状况'],
    uploadClassValue:""
  },
  uploadImg:function(e){
    wx.chooseImage({
      count:5,
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
  previewImg:function(e){
    var index = e.currentTarget.dataset.index;
    wx.previewImage({
      current:that.data.img[index],
      urls: that.data.img,
    })
  },
  deleteImg:function(e){
    var index = e.currentTarget.dataset.index;
    console.log("索引："+ index);
    that.data.img.splice(index,1);
    that.setData({
      img:that.data.img
    })
  },
  bindCasPickerChange:function(e){
    that.setData({
      uploadClassValue: that.data.casArray[e.detail.value]
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     that = this;
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