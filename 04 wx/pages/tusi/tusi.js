// pages/tusi/tusi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: [
      {
        title: "综合",
        path: "../tusi/tusi",
        a: 1
      },
      {
        title: "销量",
        path: "../tusisallnum/tusisallnum",
        a: 1
      }, {
        title: "上新",
        path: "../tusinew/tusinew",
        a: 1
      }
    ],
    active: 0,
    imgs3: []
  },
  /**
     * 加入购物车
     */
  addCar: function (e) {
    var carts = wx.getStorageSync("carts") || [];
    var exist = carts.find(function (el) {
      return el.goodid == e.target.dataset.goodid;
    })
    console.log(carts);
    // console.log(e)
    // console.log(e.target.dataset)
    //如果购物车里面有该商品那么他的数量每次加一
    if (exist) {
      exist.count = parseInt(exist.count) + 1
    } else {
      carts.push({
        goodid: e.target.dataset.goodid,
        name: e.target.dataset.name,
        imgurl: e.target.dataset.imgurl,
        price: e.target.dataset.price,
        count: 1,
        selected: true
      })
    }
    wx.showToast({
      title: "加入购物车成功！",
      duration: 1000
    })

    //更新缓存数据
    wx.setStorageSync("carts", carts)

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;//=====注意此处，要用that 指代this=====
    wx.request({
      url: 'http://localhost:81/getbreadinfo',
      method: "POST",
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res.data)
        that.setData({ //======不能直接写this.setDate======
          imgs3: res.data, //在相应的wxml页面显示接收到的数据
        });
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