// pages/pingPage/pingPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bottom:0,
    pingUser: {
      userId: 1,
      userImg: "https://avatar.csdn.net/9/E/7/3_qq_41261758.jpg",
      username: "CMihee",
      praise: 330,//点赞数
      msg: "评论的内容哈哈哈哈哈哈哈哈哈哈或或哈哈哈哈哈哈哈哈哈哈或或哈哈哈哈哈哈哈哈哈哈或或哈哈哈哈哈哈哈哈哈哈或或哈哈哈哈哈哈哈哈哈哈或或哈哈哈哈",
      huifu: 3,//回复数
      pingDate: "2月8日"
    },
    pingList:[
      {
        userId: 1,
        userImg: "https://avatar.csdn.net/9/E/7/3_qq_41261758.jpg",
        username: "CMihee",
        praise: 330,//点赞数
        msg: "评论的内容哈哈哈哈哈哈哈哈哈哈或或哈哈哈哈哈哈哈哈哈哈或或哈哈哈哈哈哈哈哈哈哈或或哈哈哈哈哈哈哈哈哈哈或或哈哈哈哈哈哈哈哈哈哈或或哈哈哈哈",
        huifu: 3,//回复数
        pingDate: "2月8日"
      }
    ],
    a: []

  },
  foucus(e) {

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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.a)
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