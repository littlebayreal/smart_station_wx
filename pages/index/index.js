//index.js
//获取应用实例
const app = getApp()
var isCheckRecord
Page({
  data: {
    isCheckRecord:true,
    MenuList: null
    // MenuList: [{
    //   "MenuName": "巡查",
    //   "MenuUri": "//",
    //   "MenuIcon": null,
    //   "ShowInMenu": true,
    //   "SubMenuList": [{
    //     "MenuName": "现场巡查",
    //     "MenuUri": "///",
    //     "MenuIcon": null,
    //     "ShowInMenu": true,
    //     "SubMenuList": [],
    //     "IsCurrentMenu": false
    //   }],
    //   "IsCurrentMenu": false
    // }, {
    //   "MenuName": "通讯录",
    //   "MenuUri": "//",
    //   "MenuIcon": null,
    //   "ShowInMenu": true,
    //   "SubMenuList": [],
    //   "IsCurrentMenu": false
    // }, {
    //   "MenuName": "联系",
    //   "MenuUri": "//",
    //   "MenuIcon": null,
    //   "ShowInMenu": true,
    //   "SubMenuList": [{
    //     "MenuName": "通讯录",
    //     "MenuUri": "/",
    //     "MenuIcon": null,
    //     "ShowInMenu": true,
    //     "SubMenuList": [],
    //     "IsCurrentMenu": false
    //   }],
    //   "IsCurrentMenu": false
    // }, {
    //   "MenuName": "员工监管",
    //   "MenuUri": "/",
    //   "MenuIcon": null,
    //   "ShowInMenu": true,
    //   "SubMenuList": [{
    //     "MenuName": "在线状态",
    //     "MenuUri": "/",
    //     "MenuIcon": null,
    //     "ShowInMenu": true,
    //     "SubMenuList": [],
    //     "IsCurrentMenu": false
    //   }, {
    //     "MenuName": "员工分布",
    //     "MenuUri": "/",
    //     "MenuIcon": null,
    //     "ShowInMenu": true,
    //     "SubMenuList": [],
    //     "IsCurrentMenu": false
    //   }, {
    //     "MenuName": "员工轨迹",
    //     "MenuUri": "/",
    //     "MenuIcon": null,
    //     "ShowInMenu": true,
    //     "SubMenuList": [],
    //     "IsCurrentMenu": false
    //   }],
    //   "IsCurrentMenu": false
    // }, {
    //   "MenuName": "维修",
    //   "MenuUri": "/",
    //   "MenuIcon": null,
    //   "ShowInMenu": true,
    //   "SubMenuList": [{
    //     "MenuName": "维修上报管理",
    //     "MenuUri": "//",
    //     "MenuIcon": null,
    //     "ShowInMenu": true,
    //     "SubMenuList": [],
    //     "IsCurrentMenu": false
    //   }],
    //   "IsCurrentMenu": false
    // }, {
    //   "MenuName": "审核",
    //   "MenuUri": "//",
    //   "MenuIcon": null,
    //   "ShowInMenu": true,
    //   "SubMenuList": [{
    //     "MenuName": "问题上报管理",
    //     "MenuUri": "/",
    //     "MenuIcon": null,
    //     "ShowInMenu": true,
    //     "SubMenuList": [],
    //     "IsCurrentMenu": false
    //   }, {
    //     "MenuName": "维修审核管理",
    //     "MenuUri": "//",
    //     "MenuIcon": null,
    //     "ShowInMenu": true,
    //     "SubMenuList": [],
    //     "IsCurrentMenu": false
    //   }, {
    //     "MenuName": "报修计划分配",
    //     "MenuUri": "//",
    //     "MenuIcon": null,
    //     "ShowInMenu": true,
    //     "SubMenuList": [],
    //     "IsCurrentMenu": false
    //   }],
    //   "IsCurrentMenu": false
    // }, {
    //   "MenuName": "我的待办事项",
    //   "MenuUri": "/",
    //   "MenuIcon": "#",
    //   "ShowInMenu": true,
    //   "SubMenuList": [],
    //   "IsCurrentMenu": false
    // }],
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  clickListener:function(e){
    var name = e.currentTarget.dataset.name;
    switch (name) {
      case "问题审核":
        wx.showModal({
          title: '提示',
          content: '点击了问题审核',
        })
        break;
      case "计划分配":
        wx.showModal({
          title: '提示',
          content: '点击了计划分配',
        })
        break;
      case "维修上报":
        wx.showModal({
          title: '提示',
          content: '点击了维修上报',
        })
        break;
      case "维修审核":
        wx.showModal({
          title: '提示',
          content: '点击了维修审核',
        })
        break;
      case "巡检计划":
        wx.showModal({
          title: '提示',
          content: '点击了巡检计划',
        })
        break; 
    }
  },
  onLoad: function (options){
    this.setData({
      MenuList: app.globalData.loginData.MenuList
    })
  }
})
