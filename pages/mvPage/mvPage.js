// pages/mvPage/mvPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isUp:false,
    bottom: 0,
    userFixed: false,
    userMsg:{
      img:"https://avatar.csdn.net/9/E/7/3_qq_41261758.jpg",
      username:"沙拉酱",//用户名
      isGuan:false,//是否关注
      isVIP: false,//是否是会员
    },
    mv:{
      url:"http://qukufile2.qianqian.com/data2/video/672f32e56fa4674b001bc5f23fc2f029/613490830/613490830.mp4",
      title:"我是不是很厉害啊111111111111111111111111111111111111111111111111111111111111111111111111111111",
      time:"00:22",
      author:"aaaa",
      isGood: true,//是否是精品
      plays: "176万",
      tips:[{
        type:0,
        name:"创意翻唱",
      },{
          type: 1,
          name: "国内音乐人",
        }, {
          type: 2,
          name: "翻唱",
        }, {
          type: 3,
          name: "中文翻唱",
        }, {
          type: 4,
          name: "音乐",
        }, {
          type: 5,
          name: "流行",
        }],
        musicMsg:["2018-12-02发布","《可不可以》#音乐人动态推荐计划#","原唱：张紫豪","词曲：刘伟庭","填词：专治各种不服","仅供娱乐，如有雷同，纯属巧合"],
      praise: 20142,//点赞
      collection: 12849,//收藏
      comment: 1635,//评论数
      share:8765,//分享数，
      bg:"http://p1.music.126.net/caHQD6rNA1LpppssN21HRw==/109951163572655936.jpg"//封面图
    },
    moreMV: [{
      url: "",
      title: "我是不是很厉害啊111111111111111111111111111111111111111111111111111111111111111111111111111111",
      time: "00:22",
      author: "沙拉酱",
      isGood: true,//是否是精品
      plays: "176万",
      tips: [{
        type: 0,
        name: "创意翻唱",
      }, {
        type: 1,
        name: "国内音乐人",
      }, {
        type: 2,
        name: "翻唱",
      }, {
        type: 3,
        name: "中文翻唱",
      }, {
        type: 4,
        name: "音乐",
      }, {
        type: 5,
        name: "流行",
      }],
      musicMsg: ["2018-12-02发布", "《可不可以》#音乐人动态推荐计划#", "原唱：张紫豪", "词曲：刘伟庭", "填词：专治各种不服", "仅供娱乐，如有雷同，纯属巧合"],
      praise: 20142,//点赞
      collection: 12849,//收藏
      comment: 1635,//评论数
      share: 8765,//分享数，
      bg: "http://p1.music.126.net/caHQD6rNA1LpppssN21HRw==/109951163572655936.jpg"//封面图
    }, {
        url: "",
        title: "我是不是很厉害啊",
        time: "00:22",
        author: "沙拉酱",
        isGood: true,//是否是精品
        plays: "176万",
        tips: [{
          type: 0,
          name: "创意翻唱",
        }, {
          type: 1,
          name: "国内音乐人",
        }, {
          type: 2,
          name: "翻唱",
        }, {
          type: 3,
          name: "中文翻唱",
        }, {
          type: 4,
          name: "音乐",
        }, {
          type: 5,
          name: "流行",
        }],
        musicMsg: ["2018-12-02发布", "《可不可以》#音乐人动态推荐计划#", "原唱：张紫豪", "词曲：刘伟庭", "填词：专治各种不服", "仅供娱乐，如有雷同，纯属巧合"],
        praise: 20142,//点赞
        collection: 12849,//收藏
        comment: 1635,//评论数
        share: 8765,//分享数，
        bg: "http://p1.music.126.net/caHQD6rNA1LpppssN21HRw==/109951163572655936.jpg"//封面图
      }],
      pingList:[{
        userId:1,
        userImg:"https://avatar.csdn.net/9/E/7/3_qq_41261758.jpg",
        username:"沙拉酱",
        praise:330,//点赞数
        msg:"评论的内容哈哈哈哈哈哈哈哈哈哈或或哈哈哈哈哈哈哈哈哈哈或或哈哈哈哈哈哈哈哈哈哈或或哈哈哈哈哈哈哈哈哈哈或或哈哈哈哈哈哈哈哈哈哈或或哈哈哈哈",
        huifu: 3,//回复数
        pingDate:"2月8日"
      }]
  },
  showMore(){//展开收起多的信息
    this.setData({
      isUp: !this.data.isUp
    })
  },
  foucus(e){
    
    this.setData({
      bottom: e.detail.height
    })
  },
  blur(e) {
    console.log(e.detail);
    this.setData({
      bottom: 0
    })
  },
  onPageScroll(e){
    if (this.data.isUp){
      if (e.scrollTop > 340) {
        this.setData({
          userFixed: true
        })
      } else {
        this.setData({
          userFixed: false
        })
      }
    }else{
      if (e.scrollTop > 158) {
        this.setData({
          userFixed: true
        })
      } else {
        this.setData({
          userFixed: false
        })
      }
    }
  },
  goToPingPage(){
    wx.navigateTo({
      url: '../pingPage/pingPage',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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