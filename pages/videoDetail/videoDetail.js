// pages/videoDetail/videoDetail.js
let appDatas=getApp();
let watchLink;
console.log("console "+appDatas);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoDetail:{},
    watchLink:{},
    //url='/pages/videoDetail/videoDetail'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("Detail里面的options"+options.index);
    this.setData({
      videoDetail:appDatas.data.VideosArray[options.index]
    })
  },

  bindButtonTap(e) {
    const that = this
    wx.request({
      watchLink:e.currentTarget.dataset.link,
      url:'watchLink'
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