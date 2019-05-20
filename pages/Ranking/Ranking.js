// pages/Ranking/Ranking.js
var isShow;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ProgramArray:[],
    isShow: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.listRanking();
  },

  //查询排行榜
  listRanking(){
    wx.request({
      url: 'http://localhost:808/ListRanking',
      success: (data) => {
        if (data.data.Ranking['length'] != 0){
          console.log(data);
          //更新数据
          this.setData({
            ProgramArray: data.data.Ranking,
            isShow:false,
          })
        }
        else{
          console.log(data);
          //更新数据
          this.setData({
            ProgramArray: data.data.Ranking,
            isShow: true,
          })
        }
      }
    });
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