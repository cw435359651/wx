// pages/home-videoList/videoList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoContent: [//视频内容数组
      {
        video: "",
        videoName: "不齐舞团邀你一起《大笑江湖》策马崩腾色粉色粉萨尔非让人发",
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
      url: '../mvPage/mvPage',
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