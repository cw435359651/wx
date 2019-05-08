// pages/home-songList/songList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleList: ["推荐", "精品", "华语", "乡村", "电子", "古风", "摇滚"],
    contentList:[
      [{
          img:"",
          text:'那些喜欢到循环播放的歌'
        },
        {
          img: "",
          text: '那些喜欢到循环播放的歌'
        },
        {
          img: "",
          text: '那些喜欢到循环播放的歌'
        },
        {
          img: "",
          text: '播放的歌'
        }
      ],
      [{
        img: "",
        text: 'asd asd asd '
        },
        {
          img: "",
          text: 'asd asd asd '
        },
        {
          img: "",
          text: 'asd asd asd '
        },
        {
          img: "",
          text: 'asd asd asd '
        }
      ],
      [{
        img: "",
        text: '465456456456456'
       },
        {
          img: "",
          text: '465456456456456'
        },
        {
          img: "",
          text: '465456456456456'
        },
        {
          img: "",
          text: '465456456456456'
        }
      ],

    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    oindex:0, //导航坐标
  },
  goPlay(){
    wx.navigateTo({
      url: '../player/player',
    })
  },
  change (e) {
   let PageIndex=e.detail.current
    this.setData({
      oindex: PageIndex,
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