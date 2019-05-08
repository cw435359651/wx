// pages/home-moreSong/moreSong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleList: ["推荐", "华语", "欧美", "韩国", "日本"],
    recommend:{
      title: '推荐',
      titleABC: 'Recommend',
      songList: [//推荐页面 一个对象一首歌
        {
          img: '',
          songName: '爱在西元前',
          singer: '周杰伦'
        },
        {
          img: '',
          songName: '说爱你',
          singer: '蔡依林'
        },
      ]
    },
    chinese: {
      title: '华语',
      titleABC: 'Recommend',
      songList: [//推荐页面 一个对象一首歌
        {
          img: '',
          songName: '嘿嘿嘿',
          singer: 'CMihee'
        },
        {
          img: '',
          songName: '嘻嘻嘻',
          singer: 'Shinex'
        },
      ]
    },
    contentList: [],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    oindex: 0, //导航坐标
  },
  goPlay(){
    wx.navigateTo({
      url: '../player/player',
    })
  },
  change(e) {
    let PageIndex = e.detail.current
    this.setData({
      oindex: PageIndex,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      contentList: [this.data.recommend,this.data.chinese]
    })
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