// pages/home/home.js
Page({
  data:{
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    indicatorActivecolor: "#DA463E",
    indicatorColor:"#899786",
    interval: 5000,
    duration: 1000,//轮播滑动时间
    iconList:[ //Icon列表分类数组
      {
      icon:"icon",
      text:"每日推荐"
      },
      {
        icon: "icon",
        text: "每日推荐"
      },
      {
        icon: "icon",
        text: "每日推荐"
      },
      {
        icon: "icon",
        text: "每日推荐"
      },
      {
        icon: "icon",
        text: "每日推荐"
      },
    ],
    song:[//推荐歌单数组
      {
        img:'',
        text:'一周日语新歌推荐（03/30~04/05）',
      },
      {
        img: '',
        text: '魅力女生.源源不断的女子之力',
      },
      {
        img: '',
        text: '精选 | 网络热歌分享',
      },
      {
        img: '',
        text: '精选 | 网络热歌分享',
      },
      {
        img: '',
        text: '精选 | 网络热歌分享',
      },
      {
        img: '',
        text: '精选 | 网络热歌分享',
      },
    ],
    newSong:[//新歌数组
      {
        img:"",
        songName:'Kills You Slowly',
        singer:"The Chainsmokers"
      },
      {
        img: "",
        songName: 'IKIJIBIKI feat.Taka',
        singer: "RADWIMPS"
      },
      {
        img: "",
        songName: '我与青春在赛跑',
        singer: "刘惜君"
      },
    ],
    videoContent: [//视频内容数组
      {
        video: "",
        videoName: "不齐舞团邀你一起《大笑江湖》策马崩腾",
        songImg: "",
        dot: "119",
        reply: "64"

      },
      {
        video: "",
        videoName: "不齐舞团邀你一起《大笑江湖》策马崩腾",
        songImg: "",
        dot: "119",
        reply: "64"

      },
      {
        video: "",
        videoName: "不齐舞团邀你一起《大笑江湖》策马崩腾",
        songImg: "",
        dot: "119",
        reply: "64"

      },
    ]
  },
  viedeoList(){
    wx.navigateTo({
      url: '../home-videoList/videoList'
    })
  },
  songlist(){
    wx.navigateTo({
      url: '../home-songList/songList',
   
    })
  },
  goPlay() {
    wx.navigateTo({
      url: '../player/player',
    })
  },
  goTomvPage(){
    wx.navigateTo({
      url: '../mvPage/mvPage',
    })
  },
  moreSong(){
    wx.navigateTo({
      url: '../home-moreSong/moreSong',

    })
  },
  /**
   * 页面的初始数据
   */
  

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