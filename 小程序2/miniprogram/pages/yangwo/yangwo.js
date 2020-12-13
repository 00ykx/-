// pages/yangwo/yangwo.js
var app = getApp()
Page({
  data:{
kaiguan:0,    
    },
  /**
   * 页面的初始数据
   */
  
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
    console.log('onPullDownRefresh', new Date())
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