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
    uploadClassValue: "",
    uploadIndex:0,
    SavedFileInfos:"",
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
      url: getApp().globalData.baseurl+'api/Facility/GetStopListWithinTheRadiusByPosition',
      success: function(res) {
        if (res.data != null) {
          console.log("刷新页面" + res.data[0].StopDisplayName);
          var temp = [];
          for(var i=0;i<res.data.length;i++){
            temp.push(res.data[i].StopDisplayName);
          }
          that.setData({
            stationArray:temp,
            stationDataArray:res.data
          })
        }
      },
      fail: function(res) {
        console.log("调用API失败");
      }
    })
  },
  bindCasPickerStation: function(e) {
    that.setData({
      stationIndex: e.detail.value,
      uploadStationValue:that.data.stationArray[e.detail.value]
    })
  },
  bindCasPickerChange: function(e) {
    that.setData({
      uploadClassValue:that.data.casArray[e.detail.value]
    })
  },
  submitForm:function(){
    wx.showModal({
      title: '提示',
      content: '确认提交当前内容吗？',
      success:function(res){
        that.up();
      },
      fail:function(res){

      }
    })
  },
  up:function(){
    wx.uploadFile({
      url: getApp().globalData.baseurl+'api/FileUpload',
      filePath: that.data.img[that.data.uploadIndex],
      name: 'img',
      header: {
        'token': app.globalData.loginData.Token,
        'applicationID': app.globalData.ApplicationID,
        'userID': app.globalData.loginData.UserID
      },
      success:function(res){
        // console.log(res);
        that.data.uploadIndex++;
        //拼接图片信息
        that.setData({
          SavedFileInfos: that.data.SavedFileInfos+JSON.parse(res.data).SavedFileInfo
        });
        console.log(that.data.SavedFileInfos);
        //所有图片上传完成
        if (that.data.uploadIndex == that.data.img.length) {
          //上传表单数据
          that.upForm();
        } else {
          that.up();
        }
      },
      complete: function (complete){
        
      }
    })
  },
  upForm:function(){
    // console.log("MaintenanceCategory:" + that.data.uploadClassValue
    //   + "MaintenanceContent:" + that.data.uploadcontent
    //   + "UploadAttachmentInfo:" + that.data.SavedFileInfos
    //   + "MaintenanceObjectID:" + that.data.stationArray[that.data.stationIndex]
    //   + "ApplicationDescription:" + that.data.contentcomplain
    //   + "Suggestion:" + that.data.advance + "RequestedBy:" + getApp().globalData.loginData.UserID);
    console.log(that.data.stationIndex);
     wx.request({
       url: getApp().globalData.baseurl +'api/Maintenance/SubmitMaintenanceApplicationFromApp',
       header: {
         'token': app.globalData.loginData.Token,
         'applicationID': app.globalData.ApplicationID,
         'userID': app.globalData.loginData.UserID
       },
       data: {
         'MaintenanceCategory': that.data.uploadClassValue,
         'MaintenanceContent': that.data.uploadcontent,
         'UploadAttachmentInfo':that.data.SavedFileInfos,
         'MaintenanceObjectID': that.data.stationDataArray[that.data.stationIndex].StopID,
         'ApplicationDescription': that.data.contentcomplain,
         'Suggestion':that.data.advance,
         'RequestedBy':getApp().globalData.loginData.UserID
       },
       method: 'POST',
     })
  },
  inputListener:function(e){
    var id = e.currentTarget.id;
    switch(id){
      case 'uploadcontent':
       that.setData({
         uploadcontent:e.detail.value
       })
      break;
      case 'contentcomplain':
        that.setData({
          contentcomplain:e.detail.value
        })
        break;
      case 'advance':
        that.setData({
          advance:e.detail.value
        })
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this;
    that.initStationArray();
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
    console.log("onpulldownrefresh stationArray");
    wx.stopPullDownRefresh();
    that.initStationArray();
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