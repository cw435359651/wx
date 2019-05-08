// pages/mytest/mytest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideLoading: false,
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    msg:"这个是一个测试页面",
    arr:[
      { img: "../../img/bg_map.jpg", name: "cccccc" },
      { img: "../../img/bg_map.jpg", name: "cccccc" },
      { img: "../../img/bg_map.jpg", name: "cccccc" },
      {img:"../../img/bg_map.jpg",name:"cccccc"},
    ],
    arr2: [
      { img: "../../img/bg_map.jpg", title: "cccccc", msg: "这个是啪啪啪...", userLog:"../../img/bg_map.jpg" },
    ]
  },
  aa(e){
    console.log(e)
  },
  // bb(e) {
  //   console.log(e)
  // },
  goIndex:function(){
    console.log(111)
    wx.switchTab({
      url:"../index/index"
    })
  },
  clickHeader:function(e){
    //e.detail字组件返回的数据
    console.log(e.detail);
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
    // //获得header组件
    // this.myheader = this.selectComponent("#myheader");
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
    //wx.showNavigationBarLoading()  导航也显示加载圈
    console.log("下拉刷新")
    //wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("到底部了")
    this.setData({
      hideLoading:true
    })
    this.addImg();
  },
  addImg(){
    for(var i = 0;i < 4;i++){
      this.data.arr2.push({ img: "../../img/bg_map.jpg", title: "cccccc", msg: "这个是啪啪啪...", userLog: "../../img/bg_map.jpg" })
    }
    this.setData({
      arr2: this.data.arr2
    });
    this.setData({
      hideLoading: false
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})