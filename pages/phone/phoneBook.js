// pages/phone/phoneBook.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: null,
    windowWidth: null,
    pixelRatio: null,
    lettersPosition:null,
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    groups: [{
        groupName: 'A',
        users: [{
          name: '阿码',
          avatar: '../../image/icon_user_head.png'
        }]
      },
      {
        groupName: 'B',
        users: [{
            name: '白娘子',
            avatar: '../../image/icon_user_head.png'
          },
          {
            name: '包天齐',
            avatar: '../../image/icon_user_head.png'
          }
        ]
      },
      {
        groupName: 'C',
        users: [{
            name: '陈大年',
            avatar: '../../image/icon_user_head.png'
          },
          {
            name: '丛云山',
            avatar: '../../image/icon_user_head.png'
          },
          {
            name: '崔鸣贵',
            avatar: '../../image/icon_user_head.png'
          }
        ]
      },
      {
        groupName: 'D',
        users: [{
            name: '邓牛牛',
            avatar: '../../image/icon_user_head.png'
          },
          {
            name: '刁仁衣',
            avatar: '../../image/icon_user_head.png'
          },
          {
            name: '杜长城',
            avatar: '../../image/icon_user_head.png'
          }
        ]
      },
      {
        groupName: 'F',
        users: [{
            name: '范长龙',
            avatar: '../../image/icon_user_head.png'
          },
          {
            name: '冯肖晓',
            avatar: '../../image/icon_user_head.png'
          }
        ]
      },
      {
        groupName: 'G',
        users: [{
            name: '甘地',
            avatar: '../../image/icon_user_head.png'
          },
          {
            name: '高墙',
            avatar: '../../image/icon_user_head.png'
          },
          {
            name: '宫都举',
            avatar: '../../image/icon_user_head.png'
          }
        ]
      },
      {
        groupName: 'H',
        users: [{
            name: '何芸',
            avatar: '../../image/icon_user_head.png'
          },
          {
            name: '胡坨坨',
            avatar: '../../image/icon_user_head.png'
          },
          {
            name: '黄坨坨',
            avatar: '../../image/icon_user_head.png'
          }
        ]
      },
      {
        groupName: 'T',
        users: [{
            name: '谭老头儿',
            avatar: '../../image/icon_user_head.png'
          },
          {
            name: '汤云西',
            avatar: '../../image/icon_user_head.png'
          },
          {
            name: '图图',
            avatar: '../../image/icon_user_head.png'
          }
        ]
      },
      {
        groupName: 'X',
        users: [{
            name: '夏一天',
            avatar: '../../image/icon_user_head.png'
          },
          {
            name: '鲜轰轰',
            avatar: '../../image/icon_user_head.png'
          },
          {
            name: '谢大佩',
            avatar: '../../image/icon_user_head.png'
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this;
    console.log(wx.getSystemInfoSync().pixelRatio);
    that.setData({
      scrollHeight: wx.getSystemInfoSync().windowHeight * 0.9,
      //初始化页面的长宽以及px的换算比例
      windowHeight: wx.getSystemInfoSync().windowHeight,
      windowWidth: wx.getSystemInfoSync().windowWidth,
      pixelRatio: wx.getSystemInfoSync().pixelRatio
    })
    const navHeight = that.data.windowHeight * 0.8,
    //计算每个item的大小
    eachLetterHeight = navHeight / 26,
    //sidebar跟顶部的距离
    comTop = (that.data.windowHeight - navHeight) / 2,
    temp = [];
    that.setData({
      eachLetterHeight: eachLetterHeight
    });
    // 求各字母在屏幕上的坐标
    for (let i = 0, len = that.data.letters.length; i < len; i++) {
      const x = that.data.windowWidth - (10 + that.data.windowWidth * 0.1) / that.data.pixelRatio,
        y = comTop + (i * eachLetterHeight);
      temp.push([x, y]);
    }
    console.log(temp.length);
    that.setData({
      lettersPosition: temp
    })
  },
  touchSideBar: function(e) {
    console.log("符合条件:");
    //手指的位置
    const x = e.touches[0].clientX,
      y = e.touches[0].clientY,
    //字母的位置坐标
      lettersPosition = that.data.lettersPosition,
      eachLetterHeight = that.data.eachLetterHeight,
      letters = that.data.letters;
    for (let i = 0, len = lettersPosition.length; i < len; i++) {
      const _y = lettersPosition[i][1], // 单个字母所处高度
        __y = _y + eachLetterHeight; // 单个字母最大高度取值范围
      if (y >= _y && y <= __y) {
        that.setData({
          scrollIndex: that.data.letters[i]
        });
        break;
      }
    }
    // let letterIndex = (e.changedTouches["0"].pageY - 50 / that.data.pixelRatio) / (36 / that.data.pixelRatio);
    // console.log(letterIndex);
    // let letter = that.data.letters[letterIndex - 1];
    // console.log("字母:"+ that.data.letters[letterIndex - 1]);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

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