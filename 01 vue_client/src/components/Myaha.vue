<template>
   <div class="main">
        <div class="top clear_fix">
            <img src="../../static/avatar.png" class="avatar">
            <div class="right" v-if="$store.state.count1==0">
                <div class="login_wrap">
                    <router-link id="login" to="/login">登录</router-link>
                </div>
            </div>
            <div style="display:flex; align-items: center;flex-direction: column;  justify-content: center" v-else>
                <div style="display:flex; align-items: center">
                    <span>{{this.$store.state.count2}}</span>
                    <div style="height:18px;padding: 0 4px;background: #ff4001;color: #ffffff;border-radius: 2px;line-height:18px;margin-left:20px">Lv 1</div>
                </div>
                <div style="font-size: 14px;color: #ff4001;margin-top:15px;cursor: pointer;">aha会员专享 立即开通 ></div>
            </div>

        </div>

        <div class="noVip">
            <div class="discountIcon clear_fix icon8">
                <router-link  v-for="(item,index) in arr"  class="router"  :key="(item,index)"  :to="item.b">
                     <img :src="item.a" alt="">
                     <img src="../../static/activiteIcon.png" alt="" class="ActivateVipIcon" v-if="index===0||index===2" >
                </router-link>
            </div>
            <router-link class="global_buy_vip_goods buy" to="/">立即开通</router-link>
        </div>

        <div class="limiteArea">
            <div class="limite">
                <span>限时抢</span>
                <span style="color:#dbb670;">9人成团</span>
            </div>
            <div class="clear_fix">
                <div class="clear_fix limiteLi">
                    <img src="../../static/limitCake_01.jpg" alt="" style="width:220px;height:220px">
                    <div class="right2">
                        <p class="limiteTime"><i class="el-icon-time" style="font-size:20px"></i> {{d}}天{{h}}时{{m}}分{{s}}秒</p>
                        <p style="font-size: 14px;color: #3e3e3e;padding-top: 10px;">雪域牛乳芝士蛋糕·浓4.9</p>
                        <div class="bottom">
                            <span style="font-size:14px;color: #ff4001;padding-right: 20px;">扫码0元立即抢</span>
                            <span style="color: #949494;text-decoration: line-through;font-size: 14px;">¥298</span>
                            <img src="../../static/niuRuCode.png" alt="" style="width: 93px;padding-right: 56px;padding-top: 10px">
                        </div>
                    </div>
                </div>
                <div class="clear_fix limiteLi">
                    <img src="../../static/limitCake_02.jpg" alt="" style="width:220px;height:220px">
                    <div class="right2">
                        <p class="limiteTime"><i class="el-icon-time" style="font-size:20px" ></i> {{d}}天{{h}}时{{m}}分{{s}}秒</p>
                        <p style="font-size: 14px;color: #3e3e3e;padding-top: 10px;">雪域曲奇芝士蛋糕·浓4.9</p>
                        <div class="bottom">
                            <span style="font-size:14px;color: #ff4001;padding-right: 20px;">扫码0元立即抢</span>
                            <span style="color: #949494;text-decoration: line-through;font-size: 14px;">¥298</span>
                            <img src="../../static/niuRuCode.png" alt="" style="width: 93px;padding-right: 56px;padding-top: 10px">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="vipEnjoy">
            <div class="limite four" style="margin-bottom: 10px;">
                <div style="display:flex;">
                    <span>aha会员专享</span>
                    <div @click="click(index)" style="margin-top: 5px;" class="item" :style="[ac===index?mystyle:'']" v-for="(item,index) in a"  :key="(item,index)" >
                       {{item}}
                    </div>
        
                </div>
                <span style="font-size:14px;text-decoration: underline;padding-right: 30px;">查看更多</span>
            </div>

            <div class="enjoyList clear_fix">
                <div class="p_item_new"  v-for="(item,index) in arr2"  :key="(item,index)" >
                    <div style="overflow: hidden;height:260px">
                     <img :src="item.a" alt="" class="pic">
                    </div>
                    <div class="li_bottom">
                        <p style="font-size:14px;height: 60px;line-height: 30px;">{{item.b}}</p>
                        <p>
                            <span style="color: #deb269;padding-right: 10px;">{{item.c}}</span>
                            <span style="color: #949494;text-decoration: line-through;">{{item.d}}</span>
                        </p>
                        <button class="buyShop"  style="margin-top: 15px">立即抢购</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="grass_wrap clear_fix" style="display:flex;justify-content: space-between; background-color: #f4f4f4;">
            <img src="../../static/z1.jpg" alt="">
            <img src="../../static/z2.jpg" style="width:293px;height:180px" alt="">
            <img src="../../static/z3.jpg" style="width:293px;height:180px" alt="">
        </div>
   </div>
</template>

<script>

export default {
  name: 'MyNav',
  data(){
      return {
            d:"",
            h:'',
            m:'',
            s:'',
            ac:0,
            a:["推荐","礼物","生活","食品"],
            arr:[{a:"../../static/discountIcon_1.png",b:"/one"},{a:"../../static/discountIcon_2.png",b:"/two"},{a:"../../static/discountIcon_3.png",b:"/three"},{a:"../../static/discountIcon_5.png",b:"/four"},{a:"../../static/discountIcon_6.png",b:"/five"},{a:"../../static/discountIcon_7.png",b:"/six"},{a:"../../static/discountIcon_8.png",b:"/seven"}],
           
           arrcopy:[{a:"../../static/list_1.jpg",b:"中国·雷允上 玫瑰花茶（罐装）",c:"aha价：¥56.8",d:"¥68"},
                {a:"../../static/list_2.jpg",b:"日本·Tiger虎牌 保温杯（MMQ-S35C）",c:"aha价：¥262.8",d:"¥438"},
                {a:"../../static/list_3.jpg",b:"日本·UCHINO 内野素色无捻纱方格浴面巾礼盒",c:"aha价：¥102",d:"¥208"},
                 {a:"../../static/list_4.jpg",b:"中国·Royalstar荣事达 手持挂烫机（RS-GT80C）",c:"aha价：¥99.8",d:"¥205"},
            ],
           arr2:[{a:"../../static/list_1.jpg",b:"中国·雷允上 玫瑰花茶（罐装）",c:"aha价：¥56.8",d:"¥68"},
                {a:"../../static/list_2.jpg",b:"日本·Tiger虎牌 保温杯（MMQ-S35C）",c:"aha价：¥262.8",d:"¥438"},
                {a:"../../static/list_3.jpg",b:"日本·UCHINO 内野素色无捻纱方格浴面巾礼盒",c:"aha价：¥102",d:"¥208"},
                 {a:"../../static/list_4.jpg",b:"中国·Royalstar荣事达 手持挂烫机（RS-GT80C）",c:"aha价：¥99.8",d:"¥205"},
            ],
           arr3:[{a:"../../static/list_5.jpg",b:"日本·Tiger虎牌 保温杯（MMQ-S35C）",c:"aha价：¥262.8",d:"¥438"},
                {a:"../../static/list_6.jpg",b:"美国·Samsonite新秀丽 时尚双肩包-黑色",c:"aha价：¥458",d:"¥680"},
                {a:"../../static/list_7.jpg",b:"日本·Tiger虎牌 保温杯MMY-A48C",c:"aha价：¥238.8",d:"¥598"},
                 {a:"../../static/list_8.jpg",b:"德国·WMF Bistro 甜品16件套",c:"aha价：¥426",d:"¥1988"},
            ],
             arr4:[{a:"../../static/list_9.jpg",b:"日本·UCHINO 内野素色无捻纱方格浴面巾礼盒",c:"aha价：¥102",d:"¥208"},
                {a:"../../static/list_10.jpg",b:"中国·Royalstar荣事达 手持挂烫机（RS-GT80C）",c:"aha价：¥99.8",d:"¥205"},
                {a:"../../static/list_11.jpg",b:"美国·SOMEDELLE安睡宝 KIDS爱心防螨抑菌工艺(M码)",c:"aha价：¥99.8",d:"¥159"},
                 {a:"../../static/list_12.jpg",b:"美国·SOMEDELLE安睡宝 舒柔高弹水洗枕芯",c:"aha价：¥90.8",d:"¥159"},
            ],
             arr5:[{a:"../../static/list_1.jpg",b:"中国·雷允上 玫瑰花茶（罐装）",c:"aha价：¥56.8",d:"¥68"},
                {a:"../../static/list_13.jpg",b:"中国·林源茂 五谷丰登·豆韵套装",c:"aha价：¥99.8",d:"¥138"},
                {a:"../../static/list_14.jpg",b:"中国·COFCO中粮福小满麦果脆（每月装）",c:"aha价：¥106.8",d:"¥138"},
                 {a:"../../static/list_15.jpg",b:"中国·雷允上 红糖姜枣茶（纸盒）",c:"aha价：¥43.8",d:"¥48"},
            ],
            mystyle:{
                color:"#deb269",
                fontWeight: "bold"
            }
           
       }
     
        },

    methods: {
        click: function(index){
                this.ac=index
            console.log(index)
            if(index==0){
                this.arr2=this.arrcopy
            }else if(index==1){
                this.arr2=this.arr3
            }else if(index==2){
                this.arr2=this.arr4
            }else if(index==3){
                this.arr2=this.arr5
            }
        },
        countTime: function () {
                //获取当前时间
                var date = new Date();
                var now = date.getTime();
                //设置截止时间
                var endDate = new Date("2019-05-01 00:00:00");
                var end = endDate.getTime();
                //时间差
                var leftTime = end - now;
                //定义变量 d,h,m,s保存倒计时的时间
                if (leftTime >= 0) {
                    this.d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                    this.h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
                    if(this.h<10){
                        this.h="0"+this.h
                    }
                    this.m = Math.floor(leftTime / 1000 / 60 % 60);
                    if(this.m<10){
                        this.m="0"+this.m
                    }
                    this.s = Math.floor(leftTime / 1000 % 60);
                    if(this.s<10){
                        this.s="0"+this.s
                    }
                }
                //递归每秒调用countTime方法，显示动态时间效果
                setTimeout(this.countTime, 1000);
        }

     },
     mounted: function() {
			this.countTime()
	},

}
</script>

<style scoped>
   .main {
    background: #f4f4f4;
    width: 1200px;
    margin: auto;
    padding: 20px;
  
   }
   .main>div {
     margin-bottom: 20px;
    background-color: #ffffff;
  
   }
   .top {
       width: 100%;
        height: 160px;
        background: url(https://newimgcdn.lapetit.cn/web/images/aha/index/index_bg.jpg);
        margin-bottom: 20px;
   }
   .avatar {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        margin: 25px 35px 0 50px;
   }
   .right {
        padding-top: 45px;
   }
   .login_wrap {
        margin-top: 24px;
        font-size: 15px;
        padding: 5px 10px;
        color: #fff;
        background: #ff4001;
    }
   #login {
        font-size: 100%;
        outline: 0;
        color: inherit;
        text-decoration: none;
   }
   .noVip {
        width: 100%;
        height: 558px;
        position: relative;
        background: url(https://newimgcdn.lapetit.cn/web/images/aha/index/topBg.jpg) no-repeat center;
        margin-bottom: 20px;
   }
   .noVip .discountIcon {
    position: absolute;
    top: 245px;
    left: 67px;
    width: 1080px;
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    text-align: center;

   }
   .router {
       padding: 40px 0;
        width: 150px;
         position: relative;
   }
   .ActivateVipIcon {
        position: absolute;
        left: 78px;
        top: 27px;
   }
   .buy {
        position: absolute;
        left: 50%;
        margin-left: -150px;
        text-align: center;
        top: 450px;
        width: 300px;
        height: 60px;
        line-height: 60px;
        color: #ffffff;
        background: #c09962;
        font-size: 22px;
        text-decoration: none;
        
   }
   .limite {
        line-height: 20px;
        font-size: 20px;
        padding-top: 40px;
        padding-left: 34px;
   }
   .limiteLi {
        width: 49%;
        border-right: 1px solid #e1e1e1;
        padding: 25px 0 0 34px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 35px;
   }
   .clear_fix {
       display: flex
   }
   .right2 {
       width: 40%;
        padding: 19px 0 20px 0;
   }
   .bottom {
       padding-top: 10px;
   }
   .four {
       display: flex;
       justify-content: space-between
   }
   .four>div>div {
        margin: 1px;
        cursor: pointer;
        width: 110px;
        border-right: 1px solid #9c9c9c;
        text-align: center;
        font-size: 14px;
   }
   .p_item_new {
       border-right: 1px solid #f4f4f4;
        border-left: 1px solid #f4f4f4;
        margin-top: 0;
        background: #fff;
        float: left;
        padding: 19px;
   }
   
   .pic {
        width:260px;
        height:260px;
        transition: all 0.5s
   }
   .p_item_new:hover .pic{
       transform: scale(1.1)
   }
   .p_item_new:hover {
       background: pink;
   }

   .li_bottom {
        padding-top: 10px;
        text-align: center;
        font-size: 14px;
        width: 260px;
   }
   .buyShop {
       cursor: pointer;
       outline: none;
       border: none;
        width: 100px;
        height: 30px;
        display: inline-block;
        background: #ff4001;
        color: #fff;
        line-height: 30px;
   }
  .item:hover {
         color: #deb269;
    font-weight: bold;
  }
  .limiteTime {
    font-size: 14px;
    width: 150px;
    height: 21px;
    padding: 4px 9px 4px 10px;
    background: #f4f4f4;
    border-radius: 30px;
  }
</style>
