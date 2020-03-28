var postsData = require('../../data/posts-data.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    date:'Nov 18 2019',
    title:'正是虾肥蟹壮时',
    //单向数据绑定
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      posts_key:postsData.postList
      })
  },
  onPostTap:function(event){
    var postId = event.currentTarget.dataset.postid;
    //console.log("on post id is" + postId);打印文章id
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId
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
    console.log('onhide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onunload')
  },

})