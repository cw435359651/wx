// component/headers/headers.js
const order = ['red', 'yellow', 'blue', 'green', 'red']
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      color:{
        type:Number,
        value:1,
      },
  },

  /**
   * 组件的初始数据
   */
  data: {
    headerList: [
      {
        name: "我的",
        url: "../logs/logs"
      },
      {
        name: "发现",
        url: "../home/home"
      },
      {
        name: "朋友",
        url: "../index/index"
      },
      {
        name: "视频",
        url: "../mvPage/mvPage"
      }],
      height:"0px"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    colorBtn(e) {//点击导航列表
      var _index = e.currentTarget.dataset.index
      // this.setData({
      //   color: _index
      // })
      if (_index == this.properties.color.value){
        return
      }
      wx.redirectTo({
        url: this.data.headerList[_index].url
      })

    },
    hiden(e){
      var num = e.currentTarget.dataset.id
          if(num == 0){
            console.log(e)
            this.setData({
              height: "0px"
            })
          }else{
            this.setData({
              height: "100%"
            })
          }
    }
  }
})
