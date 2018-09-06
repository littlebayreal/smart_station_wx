//index.js
//获取应用实例
const app = getApp();
var that;
Page({
  onLoad:function(){
    that = this;
  },
  data: {
    imageurl:"../../image/logo.png",
    userAccount:null,
    userPassword:null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //输入监听（实时的）
  inputListener: function (e) {
    if (e.detail.value != '') {
      this.setData({ userAccount: e.detail.value });//把获取到的密码赋值给全局变量Date中的password
    }
  },
  passwordListener:function(e){
    if (e.detail.value != '') {
      this.setData({ userPassword: e.detail.value });//把获取到的密码赋值给全局变量Date中的password
    }
  },
  login: function (e) {
      wx.request({
        data:{
          ApplicationID:app.globalData.ApplicationID,
          UserAccount:that.data.userAccount,
          UserPassword:that.data.userPassword
        },
        url: getApp().globalData.baseurl+'api/Login',
        method:'get',
        success:function(res){
          if (res.data.Success == true) {
            wx.showToast({
              title: '登陆成功',
              duration:2000
            })
            app.globalData.loginData=res.data;
            wx.switchTab({
              url: '../index/index',
            })
          }
          else {
            wx.showModal({
              title: '提示',
              content: '用户名或者密码错误',
              showCancel: false
            })
          }
        },
        fail: function (res) {
          console.log("调用API失败");
        }
      })
  }
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
