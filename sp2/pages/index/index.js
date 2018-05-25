//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    ifa:false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    //判断是用户是否绑定了
    console.log(3333333333333) 
    if (app.globalData.openid && app.globalData.openid != '') {
      if (app.globalData.openid == 'ocQ_H5TmVKPqjZlQgoacElVsawfU') {
        console.log(4444444444) 
        this.setData({
          ifa: true
        });
      }
    } else {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      console.log(555555555) 
      app.loginCallback = opid => {
        console.log(666666666) 
        if (opid != '') {
          if (opid == 'ocQ_H5TmVKPqjZlQgoacElVsawfU') {
            this.setData({
              ifa: true
            });
          }
        }
      }
    }



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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  click2: function () {
    wx.startSoterAuthentication({
      requestAuthModes: ['fingerPrint'],
      challenge: '123456',
      authContent: '请用指纹解锁',
      success(res) {
        console.log('ggggggggggggggggggggggg')
      }
    })
  },

  click1: function () {
    wx.navigateTo({
      url:'../index/manage/manageIndex' //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
    })

    // wx.getUserInfo({
    //   success: res => {
    //     var riv = res.iv

    //     wx.getWeRunData({
    //       success(res) {
    //         const encryptedData = res.encryptedData
    //         wx.request({
    //           url: 'https://jwb0352.cn/Wechat/ReqServlet',
    //           data: {
    //             'transId': 'jiemi',
    //             'mi': res.encryptedData,
    //             'session_key': getApp().globalData.sessionkey,
    //             'iv': getApp().globalData.iv
    //           },
    //           header: {
    //             'content-type': 'application/json' // 默认值
    //           },
    //           success: function (res) {
    //             console.log('解密信息-----------------------')
    //             console.log(res)


    //           }
    //         })
    //       }
    //     })
    //   }
    // })
  }
})
