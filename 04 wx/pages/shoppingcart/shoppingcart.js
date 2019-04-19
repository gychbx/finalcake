// pages/shoppingcart/shoppingcart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [{
      goodsId: 0,
      count: 0,
      imgurl: "../main/img/list5.jpg",
      name: "雪域牛乳芝士蛋糕",
      price: "¥218"
    }, {
      goodsId: 1,
      count: 0,
      imgurl: "../main/img/list6.jpg",
      name: "数字蛋糕",
        price: "¥218"
    }, {
      goodsId: 2,
      count: 0,
      imgurl: "../main/img/list7.jpg",
      name: "美刀刀蛋糕",
        price: "¥298"
    }, {
      goodsId: 3,
      count: 0,
      imgurl: "../main/img/list29.jpg",
      name: "红圆舞蛋糕",
        price: "¥218"
    }],
    carts: [], //数据 
    checkAll: true,
    cartList:false,
    total:0
  },

  /** 
   * 加入购物车  
   */
  addCar: function(e) {
    var carts=wx.getStorageSync("carts")||[];
    var exist = carts.find(function (el) {
      return el.goodid == e.target.dataset.goodid;
    })
    console.log(carts);
    console.log(e)
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
  //选择
  select: function (e) {
    var checkAll = this.data.checkAll;
    checkAll = !checkAll
    var carts = this.data.carts

    for (var i = 0; i < carts.length; i++) {
      carts[i].selected = checkAll
    }

    this.setData({
      carts: carts,
      checkAll: checkAll
    })
    this.getsumTotal()
  },
  add: function (e) {
    var carts = this.data.carts   //获取购物车列表
    var index = e.currentTarget.dataset.index //获取当前点击事件的下标索引
    var count = carts[index].count  //获取购物车里面的value值
    count++
    carts[index].count = count;
    this.setData({
      cart: carts
    });
    this.getsumTotal()

    wx.setStorageSync("carts", carts)  //存缓存
  },
  //减
  reduce: function (e) {
    var carts = this.data.carts  //获取购物车列表
    var index = e.currentTarget.dataset.index  //获取当前点击事件的下标索引
    var count = carts[index].count  //获取购物车里面的value值

    if (count == 1) {
      count--
      carts[index].count = 1
    } else {
      count--
      carts[index].count = count;
    }
    this.setData({
      carts: carts
    });
    this.getsumTotal()
    wx.setStorageSync("carts", carts)
  },
  // 选择
  selectedCart: function (e) {
    var carts = this.data.carts   //获取购物车列表
    var index = e.currentTarget.dataset.index;  //获取当前点击事件的下标索引
    var selected = carts[index].selected;    //获取购物车里面的value值
    //取反
    carts[index].selected = !selected;
    this.setData({
      carts: carts
    })
    this.getsumTotal();
    wx.setStorageSync("carts", carts)
  },
  //删除
  shanchu: function (e) {
    var carts = this.data.carts  //获取购物车列表
    var index = e.currentTarget.dataset.index  //获取当前点击事件的下标索引
    carts.splice(index, 1)
    this.setData({
      carts: carts
    });
    if (carts.length) {
      this.setData({
        cartList: true
      });
    }
    this.getsumTotal()
    wx.setStorageSync("carts", carts)
  },
  //提示
  go: function (e) {
    this.setData({
      carts: []
    })
    wx.setStorageSync("carts", [])
  },
  //合计
  getsumTotal: function () {
    var sum = 0
    for (var i = 0; i < this.data.carts.length; i++) {
      if (this.data.carts[i].selected) {
        sum += this.data.carts[i].count * this.data.carts[i].price.substring(1)
        console.log(this.data.carts[i])
      }
    }
    //更新数据
    this.setData({
      total: sum
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // var homeid = options.id
    // var Homedata = json.homeIndex[homeid];
    // this.setData({
    //   data: Homedata
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var carts = wx.getStorageSync("carts")
    this.setData({
      cartList: false,
      carts: carts
    })
    this.getsumTotal()
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