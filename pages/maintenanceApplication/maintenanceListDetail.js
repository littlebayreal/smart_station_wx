// pages/maintenanceApplication/maintenanceListDetail.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: ["../../image/delete.png", "../../image/delete.png", "../../image/delete.png"],
    animation: '',
    isOpen: false,
    fixNameList: null,
    fixs: [],
    fixName:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this;
    that.setData({
      //初始化页面的长宽以及px的换算比例
      windowHeight: wx.getSystemInfoSync().windowHeight,
      windowWidth: wx.getSystemInfoSync().windowWidth,
      pixelRatio: wx.getSystemInfoSync().pixelRatio
    })
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
      url: getApp().globalData.baseurl + 'api/Maintenance/GetMaintenanceApplicationVM',
      data: {
        'maintenanceApplicationID': that.data.maintenanceDetailBean.MaintenanceApplicationID
      },
      success: function(res) {

      },
      fail: function(res) {

      }
    })
    wx.request({
      header: {
        'token': getApp().globalData.loginData.Token,
        'applicationID': getApp().globalData.ApplicationID,
        'userID': getApp().globalData.loginData.UserID
      },
      method: 'GET',
      url: getApp().globalData.baseurl + 'api/Organization/GetOrganizationList',
      data: {
        'OrganizationName': ''
      },
      success: function(res) {
        var temp = [];
        for (let i = 0; i < res.data.length; i++) {
          temp.push(res.data[i].OrganizationName);
        }
        that.setData({
          unitList: res.data,
          unitShowList: temp,
        })
      },
      fail: function(res) {}
    })
  },
  bindUnitPickerChange: function(e) {
    var index = e.detail.value;
    that.setData({
      unitIndex: index,
      unitValue: that.data.unitShowList[index]
    })
    //  that.refreshFixNameList();
  },
  refreshFixNameList: function() {
    wx.request({
      header: {
        'token': getApp().globalData.loginData.Token,
        'applicationID': getApp().globalData.ApplicationID,
        'userID': getApp().globalData.loginData.UserID
      },
      method: 'GET',
      data: {
        'OrganizationID': that.data.unitList[that.data.unitIndex].OrganizationID,
        'DepartmentID': '',
        'EmployeeName': ''
      },
      url: getApp().globalData.baseurl + 'api/Organization/GetEmployeeList',
      success: function(res) {
        var temp = [];
        for (let i = 0; i < res.data.length; i++) {
          temp.push(res.data[i].EmployeeName);
        };
        console.log(temp);
        that.setData({
          fixNameList: res.data,
          fixNameShowList: temp
        })
      },
      fail: function(res) {

      }
    })
  },
  fixClickListner: function(e) {
    console.log("开关:" + that.data.isOpen);
    that.setData({
        isOpen: !that.data.isOpen,
      }),
      that.refreshFixNameList();
  },
  modalListener: function(e) {
    var id = e.currentTarget.id;
    var fixInfo='';
    console.log("fixs:" + that.data.fixs);
    for (let i = 0; i < that.data.fixs.length; i++) {
      fixInfo = fixInfo + that.data.fixs[i] + ","
      console.log("fixInfo:" + fixInfo);
    }
    switch (id) {
      case 'modal_true':
        that.setData({
          fixName:fixInfo,
          isOpen:!that.data.isOpen
        });
        break;
      case 'modal_cancel':

        break;
    }
  },
  checkboxChange: function(e) {
    var name = e.detail.value;
    console.log("name"+ name);
    that.data.fixs.push(name);
    that.setData({
      fixs: that.data.fixs
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // 页面渲染完成
    //实例化一个动画
    this.animation = wx.createAnimation({
      // 动画持续时间，单位ms，默认值 400
      duration: 1000,
      /**
       * http://cubic-bezier.com/#0,0,.58,1  
       *  linear  动画一直较为均匀
       *  ease    从匀速到加速在到匀速
       *  ease-in 缓慢到匀速
       *  ease-in-out 从缓慢到匀速再到缓慢
       * 
       *  http://www.tuicool.com/articles/neqMVr
       *  step-start 动画一开始就跳到 100% 直到动画持续时间结束 一闪而过
       *  step-end   保持 0% 的样式直到动画持续时间结束        一闪而过
       */
      timingFunction: 'linear',
      // 延迟多长时间开始
      delay: 100,
      /**
       * 以什么为基点做动画  效果自己演示
       * left,center right是水平方向取值，对应的百分值为left=0%;center=50%;right=100%
       * top center bottom是垂直方向的取值，其中top=0%;center=50%;bottom=100%
       */
      transformOrigin: 'left top',
      success: function(res) {
        console.log(res)
      }
    })
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