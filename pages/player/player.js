// pages/player/player.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playModle: 0, //默认顺序播放
    playModleClass: ["icon-shunxubofang", "icon-danquxunhuan", "icon-suijibofang"],
    goSongList: true,
    goBottom: "-100%",


  //   isScroll: true,
  //   goLyrics: false, //是否去歌词页
  //   isPlay: false,
  //   scorllTopNum: 0,//滚动的值
  //   beginTime: "00:00",
  //   endTime: "00:00",
  //   currentTime: 0, //时间转换计算后的一个值
  //   muiscTime: 0,
  //   musicMsg: {
  //     name: "绿 色",
  //     author: "陈雪凝",
  //     img: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000010UePb4dyfoi.jpg",
  //     src: "http://fs.w.kugou.com/201904131102/a0248c238f7f997562d0e89272befd38/G119/M01/05/0D/F4cBAFxlweSAT9BlAEHWDL3dgeI800.mp3"
  //   },
  //   lyrics: "[00:00.000] 作曲 : 陈雪凝\n[00:00.006] 作词 : 陈雪凝\n[00:00.18]编曲：Dadz\n[00:01.18]若不是你突然闯进我生活\n[00:04.67]我怎会把死守的寂寞放任了\n[00:26.15]说不痛苦那是假的\n[00:29.62]毕竟我的心也是肉做的\n[00:34.00]你离开时我心里的彩虹\n[00:37.90]就变成灰色\n[00:41.87]说不心酸那是假的\n[00:45.32]如果我真的没那么爱过\n[00:49.24]爱着一个没有灵魂的人\n[00:52.73]世界都是黑色\n[00:56.97]若不是你突然闯进 我生活\n[01:00.82]我怎会把死守的寂寞 放任了\n[01:04.76]爱我的话你都说\n[01:06.76]爱我的事你不做\n[01:08.77]我却把甜言蜜语当做你爱我的躯壳\n[01:13.19]你的悲伤难过我不参破\n[01:16.61]我也会把曾经的且过 当施舍\n[01:20.55]不去计较你太多\n[01:22.55]从此你在我心里\n[01:24.19]只剩绿色\n[01:44.78]说很快活那是假的\n[01:48.29]你的名字依然那么深刻\n[01:52.24]每个字都刺穿我的心脏\n[01:56.04]那鲜明的痛是红色\n[01:59.87]若不是你突然闯进 我生活\n[02:03.81]我怎会把死守的寂寞 放任了\n[02:07.70]爱我的话你都说\n[02:09.74]爱我的事你不做\n[02:11.70]我却把甜言蜜语当做你爱我的躯壳\n[02:16.07]你的悲伤难过我不参破\n[02:19.50]我也会把曾经的且过 当施舍\n[02:23.51]不去计较你太多\n[02:25.43]从此你在我心里\n[02:27.11]只剩绿色\n[02:32.13]呼～\n[03:34.28]若不是你突然闯进 我生活\n[03:38.18]我怎会把死守的寂寞 放任了\n[03:42.09]爱我的话你都说\n[03:44.13]爱我的事你不做\n[03:46.10]我却把甜言蜜语当做你爱我的躯壳\n[03:50.63]若不是你突然闯进 我生活\n[03:53.96]我怎会把死守的寂寞 放任了\n[03:57.87]爱我的话你都说\n[03:59.88]爱我的事你不做\n[04:01.90]我却把甜言蜜语当做你爱我的躯壳\n[04:06.29]你的悲伤难过我不参破\n[04:09.73]我也会把曾经的且过 当施舍\n[04:13.65]若不是你突然闯进 我生活\n[04:17.62]我怎会把死守的寂寞 放任了\n[04:21.50]爱我的话你都说\n[04:23.53]爱我的事你不做\n[04:25.55]我却把甜言蜜语当做你爱我的躯壳\n[04:31.59]和声：李美灵芝\n[04:33.11]混音：一曲不空\n[04:34.34]发行：3SEVEN叁七\n",
  // lyricsArr: [],

    songList:[
      { name: "去年夏天", author: "王大毛" },
      { name: "Lemon", author: "米津玄師" },
      { name: "无心", author: "小缘" },
      { name: "绿色", author: "陈雪凝" },
    ],
    currentMusic: 0,//默认播放列表的第一首
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx = wx.createAudioContext('myAudio');
    this.serachMuisc(this.data.songList[0]);
  },
  initSongList(){

  },
  //通过酷狗的接口搜索歌曲
  serachMuisc(obj){
    var _this = this;
    wx.showNavigationBarLoading()//加载loading
    wx.request({
      url: 'https://songsearch.kugou.com/song_search_v2',
      data: {
        keyword: obj.name + "-" + obj.author,
        page: 1,
        pagesize: 30,
        platform:"WebFilter"
      },
      success(res){
        var key = res.data.data.lists[0].FileHash;
        _this.getMusic(key)//拿到歌曲的连接
      }
    })
  },
  // 拿到歌曲的连接
  getMusic(key){
    var _this = this;
    wx.request({
      url: 'https://wwwapi.kugou.com/yy/index.php',
      data: {
        r:"play/getdata",
        hash: key
      },
      success(res) {
        wx.hideNavigationBarLoading()//取消loading
        _this.initMusic(res.data.data)
      }
    })
    
  },
  //初始化播放的歌曲信息
  initMusic(obj){
    var _this = this;
    this.setData({
      isScroll: true,
      goLyrics: false, //是否去歌词页
      isPlay: false,
      scorllTopNum: 0,//滚动的值
      beginTime: "00:00",
      endTime: _this.s_to_hs(parseInt(obj.timelength / 1000)),
      currentTime: 0, //时间转换计算后的一个值
      muiscTime: 0,
      musicMsg: {
        name: obj.song_name,
        author: obj.author_name,
        img: obj.img,
        src: obj.play_url
      },
      lyrics: obj.lyrics,
      lyricsArr: []
    });
    this.audioPlay();
  },
  //关闭播放列表
  closeSongList(e){
    this.setData({
      goBottom: "-100%",
    });
    setTimeout(() => {
      this.setData({
        goSongList: true
      })
    }, 300);
  },
  //播放列表里面的点击事件
  playThisMusic(e){
    var index = e.currentTarget.dataset.index;
    if(index == this.data.currentMusic){
      if (this.data.isPlay){
        this.audioPause();
      }else{
        this.audioPlay();
      }
    }else{
      this.setData({
        currentMusic: index
      })
      this.audioPause();
      this.serachMuisc(this.data.songList[index]);
    }
  },
  showSongList(){
    this.setData({
      goSongList: false,
    });
    setTimeout(() => {
      this.setData({
        goBottom: 0
      })
    },20)
  },
  //改变播放模式
  changeModle(){
    var num = this.data.playModle;
    num++;
    if (num == 3){
      num = 0;
    }
    this.setData({
      playModle: num
    })
  },
  //在滚动的时候不进行歌词滚动
  goScroll(){
    this.timer = setTimeout(()=>{
      this.setData({
        isScroll: true
      })
    },2000)
  },
  //没有滚动的时候
  noScroll() {
    clearTimeout(this.timer)
    this.setData({
      isScroll: false
    })
  },
  //直接跳到某个播放点
  moveBox(e){
    this.setData({
      scorllTopNum: e.detail.scrollTop
    })
  },
  // 去看歌词
  goToLyrics() {
    var _this = this;
    this.setData({
      goLyrics: true,
      lyricsArr: _this.parseLyric(this.data.lyrics)
    });
  },
  backYuan(){
    this.setData({
      goLyrics: false
    })
  },
  //上一曲
  audioPre(){
    var cur = this.data.currentMusic;
    cur--;
    if (cur < 0 ){
      cur = this.data.songList.length - 1;
      
    }
    this.setData({
      currentMusic: cur
    })
    this.audioPause();
    this.serachMuisc(this.data.songList[cur]);
    
  },
  //下一曲
  audioNext() {
    if(this.data.playModle != 2){
      var cur = this.data.currentMusic;
      cur++;
      if (cur == this.data.songList.length) {
        cur = 0;
      }
      this.setData({
        currentMusic: cur
      })
      this.audioPause();
      this.serachMuisc(this.data.songList[cur]);
    }else{
      this.randomPlay();
    }
    
  },
  //随机播放
  randomPlay(){
    var max = this.data.songList.length - 1;
    var min = 0;
    var cur = Math.round(Math.random() * (max - min)) + min;
    this.setData({
      currentMusic: cur
    });
    this.audioPause();
    this.serachMuisc(this.data.songList[cur]);
  },

  //播放完毕要执行的方法
  playEnd(e) {
    if(this.data.playModle == 1){//单曲循环
      this.audioPause();
      this.audioPlay();
      this.audioCtx.seek(0);
    }else{
      this.audioNext();
    }
  },
  //播放
  audioPlay() {
    this.setData({
      isPlay: true
    })
    this.audioCtx.play()
  },
  //正在播放的时候
  playing(e) {
    var arr = this.data.lyricsAr;
    var timeObj = e.detail;
    let beginTime = this.s_to_hs(parseInt(timeObj.currentTime))
    let endTime = this.s_to_hs(parseInt(timeObj.duration))
    this.setData({
      currentTime: parseInt(timeObj.currentTime), //时间转换计算后的一个值
      muiscTime: parseInt(timeObj.duration),
      beginTime: beginTime,
      endTime: endTime,
      //scorllTopNum: this.data.scorllTopNum + 0.5
    });
    
    if(this.data.goLyrics){
      this.getScroll(".act");
    }
  },
  //暂停
  audioPause() {
    this.setData({
      isPlay: false
    })
    this.audioCtx.pause()
  },
  tuoDong(e) {
    this.audioPause();
    //this.triggerEvent("audioPause")
  },
  //从哪里开始播放
  audioTo(time) {
    this.audioPlay();
    this.audioCtx.seek(time.detail.value)
  },
  //时间处理
  s_to_hs(s) {
    //计算分钟
    //算法：将秒数除以60，然后下舍入，既得到分钟数
    var h;
    h = Math.floor(s / 60);
    //计算秒
    //算法：取得秒%60的余数，既得到秒数
    s = s % 60;
    //将变量转换为字符串
    h += '';
    s += '';
    //如果只有一位数，前面增加一个0
    h = (h.length == 1) ? '0' + h : h;
    s = (s.length == 1) ? '0' + s : s;
    return h + ':' + s;
  },
  // 获取节点
  getScroll (el) {
    var that = this;
    wx.createSelectorQuery().select(el).boundingClientRect(function (rect) {
      if (that.data.isScroll && rect){
        if (rect.top + rect.height > 220) {
          var top = that.data.scorllTopNum + (rect.top + rect.height - 220);
          that.setData({
            scorllTopNum: top
          })
        }
        if (rect.top + rect.height < 220 - rect.height) {
          var top = that.data.scorllTopNum - (220 - rect.top + rect.height);
          if (top > 0) {
            that.setData({
              scorllTopNum: top
            })
          } else {
            that.setData({
              scorllTopNum: 0
            })
          }
        }
      }
      
    }).exec()  
  },
  //歌词的数据类型转换
  parseLyric(text) {
    //将文本分隔成一行一行，存入数组
    var lines = text.split('\n'),
      //用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
      pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
      //保存最终结果的数组
      result = [];
    //去掉不含时间的行
    while (!pattern.test(lines[0])) {
      lines = lines.slice(1);
    };
    //上面用'\n'生成生成数组时，结果中最后一个为空元素，这里将去掉
    lines[lines.length - 1].length === 0 && lines.pop();
    lines.forEach(function(v /*数组元素值*/ , i /*元素索引*/ , a /*数组本身*/ ) {
      //提取出时间[xx:xx.xx]
      var time = v.match(pattern),
        //提取歌词
        value = v.replace(pattern, '');
      //因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔
      time.forEach(function(v1, i1, a1) {
        //去掉时间里的中括号得到xx:xx.xx
        var t = v1.slice(1, -1).split(':');
        //将结果压入最终数组
        // result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
        result.push([parseInt(parseInt(t[0], 10) * 60 + parseFloat(t[1])), value]);
      });
    });
    //最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词
    result.sort(function(a, b) {
      return a[0] - b[0];
    });
    return result;
  },


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