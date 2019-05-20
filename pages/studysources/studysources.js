// pages/studysources/studysources.js
let addDatas=getApp();
var key="";
var isShow;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    VideosArr:[],
    key:"",
    isShow:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("获取到了的index"+options);
    this.listVideos();

  },

  //查询排行榜
  listVideos() {
    wx.request({
      //http://localhost:808/ListVideos
      url: 'http://localhost:808/ListVideos',
      success: (data) => {
        if (data.data.Videos['length'] != 0) {
          console.log(data);
          //更新数据
          this.setData({
            VideosArr: data.data.Videos,
            isShow: false
          })
          addDatas.data.VideosArray = data.data.Videos;
        }
        else{
          console.log(data);
          //更新数据
          this.setData({
            VideosArr: data.data.Videos,
            isShow: true
          })
          addDatas.data.VideosArray = data.data.Videos;
        }
      }
    })
  },

  submit:function(e){
    console.log("获取到了表单值", e.detail.value);
    var key = e.detail.value.key;
    wx.request({
      url: 'http://localhost:808/ListVideosBykeywords?key='+ key,
      success:(data)=>{
        if (data.data.SearchedVideo['length']!=0){
          console.log("结果集",data);
          this.setData({
            VideosArr: data.data.SearchedVideo,
            isShow: false,
          })
        }else{
          console.log("数据为空",data);
          this.setData({
            VideosArr: data.data.SearchedVideo,
            isShow: true,
          })  
        }
      }
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