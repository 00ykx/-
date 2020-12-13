const app = getApp()
 
Page({
  data: {
   kaiguan:0,
    timer:null,
    hours: '0' + 0,   // 时
    minute: '0' + 0,   // 分
    second: '0' + 0    // 秒
  },
  getDataFromOneNet: function () {
    //从oneNET请求我们的数据
    var that=this
     wx.request({
      url: 'http://api.heclouds.com/devices/643141553/datapoints?datastream_id=times&limit=20',
      header: {
        'content-type': 'application/json',
        'api-key': 'j5EWjW8BpEaR=jS32xXKYDSME28='
      },
      method:"GET",
      success: function (e) {
        console.log(e.data)
        that.setData({
          kaiguan:e.data.data.datastreams[0].datapoints[0].value
      })
        


        //var app = getApp()
       //app.globalData.temperature = res.data.data.datastreams[0]
        //拿到数据后保存到全局数据
        
       // var app = getApp()
       // app.globalData.temperature = res.data.data.datastreams[0]
       //console.log(app.globalData)
       
     
      },
      //ucc:function(){
       
   // },
  
  
      fail: function (e) {
        console.log("fail!!!")
      },

      complete: function (e) {
        console.log("end")
      }
    })
  },
  onLoad: function () {
  },
  //onLoad(){
   // this.setData({
    //  count: app.globalData.temperature.datapoints[0].value//需要修改
  //  })
  //},
//计时开始
  start: function () {
    let _this = this;
    _this.setInterval();
  },
 
  // 计时器
  setInterval: function () {
    const _this = this
    var second = _this.data.second
    var minute = _this.data.minute
    var hours = _this.data.hours
    _this.data.timer = setInterval(function () {  // 设置定时器
      second++
      if (second >= 60) {
        second = 0  //  大于等于60秒归零
        minute++
        if (minute >= 60) {
          minute = 0  //  大于等于60分归零
          hours++
          if (hours < 10) {
            // 少于10补零
            _this.setData({
              hours: '0' + hours
            })
          } else {
            _this.setData({
              hours: hours
            })
          }
        }
        if (minute < 10) {
          // 少于10补零
          _this.setData({
            minute: '0' + minute
          })
        } else {
          _this.setData({
            minute: minute
          })
        }
      }
      if (second < 10) {
        // 少于10补零
        _this.setData({
          second: '0' + second
        })
      } else {
        _this.setData({
          second: second
        })
      }
    }, 1000)
  },
 
//暂停
  stop: function () {
    let _this = this;
    clearInterval(_this.data.timer);
  },

  reset:function(){
    var that=this;
    let _this = this;
    clearInterval(_this.data.timer);
    that.setData({
      hours: '0' + 0,   // 时
    minute: '0' + 0,   // 分
    second: '0' + 0    // 秒
    })
  },
})