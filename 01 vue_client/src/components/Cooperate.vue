<template>
    <div class="box">
        <div class="block">
            <el-carousel height="290px" :interval="time">
                <el-carousel-item v-for="item in imgarray" :key="item">
                    <img :src="item" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="coop">
            <div class="coopimg">
                <img :src="coopimg1" alt="">
                <div class="cooptitle">
                    <img :src="lineleft" alt="#" >
                    合作专区
                    <img :src="lineright" alt="#" >                 
                </div>
            </div>
            <div class="coopintroduce">
                <img :src="coopimg2" alt="">
                <div class="introduce">
                    <h2>{{introducetitle}}</h2>
                    <p>{{introducep}}</p>
                </div>
                <img :src="coopimg3" alt="">
            </div>
        </div>
        
  </div>
</template>

<script>
import lineRight from "../assets/right.png"
import lineLeft from "../assets/left.png"
export default {
  name: "Cooperate",
  data() {   
    return {
        imgarray:[
            "http://imagecdn.lapetit.cn/postsystem/docroot/images/bank/FC8C848DF5A80E57891D48059688D0CE.jpg",
            "http://imagecdn.lapetit.cn/postsystem/docroot/images/bank/9BFDB3077AB331E7C1681D9ED6950C3C.jpg"
        ],
        time:2000,
        coopimg1:"http://rescdn.lapetit.cn/shop/lecake/theme/xth2/images/bank_img/banklist_img/1.png",
        coopimg2:"http://rescdn.lapetit.cn/shop/lecake/theme/xth2/images/bank_img/bankarea_img/1.png",
        coopimg3:"http://rescdn.lapetit.cn/shop/lecake/theme/xth2/images/bank_img/other_img/detail.png",
        lineright:lineRight,
        lineleft:lineLeft,
        introducetitle:"招商银行活动",
        introducep:"即日起至19年4月15日（订购并完成配送），在诺心官网使用招行网关支付或在H5页面上使用招行一网通，购买草莓拿破仑蛋糕、唯·卢浮宫蛋糕、莓果缤纷蛋糕享受7.8折优惠，购买怦然心动蛋糕享受5折优惠，购买海盐乳酪芝士蛋糕、巧克力松露蛋糕享受7.5折优惠"
    }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    font-size: 14px;
}
.box{
    width: 100%;
    margin: 0 auto;
    /* position: relative; */
    /* top:109px; */
}
.block{
    width: 70%;
    height: 290px;
    margin: 0 auto;
}
img{
    width: 100%;
    height: 100%;
}
.coop {
     margin: 0 auto;
     width: 70%;
}
.coopimg {
     background: #FEF9E9;
     padding: 10px
}
.coopimg img {
    width: 189px;
    height: 119px;
}
.cooptitle {
    color: orangered;
    font-size: 20px;
    text-align: center;
}
.cooptitle img{
    width: 150px;
    height: 2px;
}
.coopintroduce {
    display: flex;
    padding: 20px;
}
.coopintroduce img:nth-child(1) {
    width: 200px;
    height: 180px;
}
.coopintroduce img:nth-child(3) {
    width: 90px;
    height: 30px;
}
.introduce {
    padding: 20px;
}
.introduce h2 {
    font-size: 20px;
    padding-bottom:10px ;
}
.introduce p {
    font-size: 18px;
    color:#636363;
}
</style>
