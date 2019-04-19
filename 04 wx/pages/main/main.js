// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs:[   "http://www.lecake.com/postsystem/docroot/images/app/7D5754137CD2748D91EC472EFF1CE19C.jpg",     "http://www.lecake.com/postsystem/docroot/images/app/4443E3CE39F724C4A0A9D75ECB6FECD8.jpg",  "http://www.lecake.com/postsystem/docroot/images/app/088D3D9579AB7F1A70C8378CBE751782.jpg"
    ],
    i1:"http://www.lecake.com/postsystem/docroot/images/app/FEAB6879C12669D3B6ECF0A95DF4F3CA.jpg",
    i2:"http://www.lecake.com/postsystem/docroot/images/app/52F07FADD233160595B0609CE780F6F6.jpg",
    imgs2:[],
    tusi:"img/toast.jpg",
    imgs3:[
      
    ],
    giftimg:"img/gift.jpg",
    imgs4:[
     
    ]
  },
go1:function(){
  wx.switchTab({
    url: '../../pages/cakelist/cakelist',
  })
},
  go2: function () {
    wx.switchTab({
      url: '../../pages/tusi/tusi',
    })
  },
  go3: function () {
    wx.switchTab({
      url: '../../pages/gift/gift',
    })
  },
  /**
   * 加入购物车
   */
  addCar: function (e) {
    var carts = wx.getStorageSync("carts") || [];
    var exist = carts.find(function (el) {
      return el.goodid == e.target.dataset.goodid;
    })
    // console.log(carts);
    // console.log(e)
    // console.log(e.target.dataset)
    //如果购物车里面有该商品那么他的数量每次加一
    if (exist) {
      exist.count = parseInt(exist.count) + 1
    } else {
      carts.push({
        goodid: e.target.dataset.goodid,
        name: e.target.dataset.name,
        imgurl:e.target.dataset.imgurl,
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
  url: 'http://localhost:81/gethomeinfo',
  header: {
    "content-type": 'application/json'
  },
  data: {
    type:1,
    piece:8
  },
  success:function(res){
    console.log(res.data)
    that.setData({ //======不能直接写this.setDate======
      imgs2: res.data, //在相应的wxml页面显示接收到的数据
    }); 
  }
});
    wx.request({
      url: 'http://localhost:81/gethomeinfo',
      header: {
        "content-type": 'application/json'
      },
      data: {
        type: 2,
        piece: 4
      },
      success: function (res) {
        console.log(res.data)
        that.setData({ //======不能直接写this.setDate======
          imgs3: res.data, //在相应的wxml页面显示接收到的数据
        });
      }
    });
    wx.request({
      url: 'http://localhost:81/gethomeinfo',
      header: {
        "content-type": 'application/json'
      },
      data: {
        type: 3,
        piece: 4
      },
      success: function (res) {
        console.log(res.data)
        that.setData({ //======不能直接写this.setDate======
          imgs4: res.data, //在相应的wxml页面显示接收到的数据
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