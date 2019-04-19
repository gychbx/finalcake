<template>
    <div class="box">
        <div class="productall">
            <div class="productsmall" v-for="(item,index) in products" :key="index">
                <img :src="item.imgurl" alt="">
                <div class="productinfo">
                    <div class="address">
                        <p>{{item.name}}</p>
                        <p>{{item.num}}</p>
                        <p class="myprice"><small>¥</small><span>{{item.price}}</span></p>
                        <a href="#" class="addcar">加入购物车</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="buyrule">
            <h3>{{buyruletitle}}</h3>
            <ul>
                <li v-for="(item,index) in rule" :key="index">
                    <label for="">{{item.aim}}</label><span>:</span>
                    <p>{{item.words}}</p>
                    <p>{{item.words1}}</p>
                    <p>{{item.words2}}</p>
                    <p>{{item.words3}}</p>
                </li>
            </ul>
        </div>
        
  </div>
</template>

<script>
// import lineRight from "../assets/right.png"
// import lineLeft from "../assets/left.png"
export default {
  name: "Food",
  data() {   
    return {
            products:[
                {
                imgurl:"http://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201801/15983/list_15983.jpg",
                num:"1盒",
                name:" 提拉米苏杯小食盒",
                price:68 
            },
            {
                imgurl:"http://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201810/18551/list_18551_o.jpg",
                name:" 浪漫巴黎曲奇礼包（混合装）",
                num:"1件",
                price:68
            },
            {
                imgurl:"http://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201812/19085/list_19085.jpg",
                name:" 提拉米苏乐脆蛋糕·分享装",
                num:"1盒",
                price:68
            },
            {
                imgurl:"http://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201810/18554/list_18554_o.jpg",
                name:"千层蝴蝶酥·分享装",
                num:"1盒",
                price:68
            },
            {
                imgurl:"http://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201807/17080/list_17080.jpg",
                name:" 彩虹吐司（整条）",
                num:"1个（整条装）",
                price:78
            },
            {
                imgurl:"//imagecdn.lapetit.cn/postsystem/docroot/images/goods/201807/17082/list_17082.jpg",
                name:"原味匠心吐司（整条）",
                num:"1个（整条装）",
                price:78
            },
            {
                imgurl:"http://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201807/17085/list_17085.jpg",
                name:" 巧克力吐司（整条）",
                num:"1个（整条装）",
                price:78
            },
            {
                imgurl:"http://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201807/17085/list_17085.jpg",
                name:" 巧克力吐司（整条）",
                num:"1个（整条装）",
                price:78
            }
        ],
        buyruletitle:"小食盒购买规则",
        rule:[
            {
                aim:"销售说明",
                words:"本券为提货凭证，需一次性兑换完成，不挂失，不兑现，不找零；本券购买时可开具发票，兑换时不开具发票。"
            },{
                aim:"使用说明",
                words:"登录诺心官网www.lecake.com、诺心APP客户端可兑换同等面值小食产品一份，不可兑换其他产品；扫描二维码后填写必要信息，绑定用户后方可使用，如不绑定，则收货时需向配送员交回本券完成收货。本券自首次售出之日起三年内有效，请于有效期内完成兑换。"
            },{
                aim:"注意事项",
                words:"节日期间兑换集中，请至少提前一日兑换；本券不记名，遗失不补，请妥善保管。请注意券面完好，号码、二维码等污损无法使用的，损失自负。"
            },{
                aim:"配送说明",
                words1:"①单个地址使用单张小食券在诺心官网明示的免费配送区域内配送的，须另支付12元运费。",
                words2:"②单个地址使用二张及以上小食券(或单张小食券与单张蛋糕券搭配)在诺心官网明示的免费配送区域内一次性配送的，不再收取运费。",
                words3:"③其他超出免费配送区域的运费、订购及配送时间等、以诺心官网最新发布信息为准。"
            },{
                aim:"优惠说明",
                words:"使用本券兑换，不参与诺心积分奖励及其他优惠活动。"
            },{
                aim:"特别声明",
                words1:"①非授权的单位或个人，均无权销售本券，否则诺心有权不予兑换且所有损失概不负责。",
                words2:"②券面图案仅供参考，实际以诺心官网所售实物为准。"
            },
        ]

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    font-size: 14px;
}
a {
    text-decoration: none;
}
.box{
    width: 100%;
    margin: 0 auto;
    /* position: relative; */
    /* top:109px; */
    /* z-index: -1; */
}
.productall {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

}
.productsmall {
    width: 23%;
    height: 310px;
    font-size: 12px;
    color: #3e3e3e;
    text-align: center;
}
.productinfo {
    font-size: 12px;
    width: 100%;
    height: 70px;
    overflow: hidden;
    }
.address {
    position: relative;
    top: 0;
}
.productsmall:hover div{
    top:-42px;
    transition: 250ms;
} 
.productsmall img{
    margin-bottom: 15px;
    width: 100%;
}
.productinfo p{
    margin-bottom: 6px;
}

.myprice{
    color:red;
}
.addcar {
    background-color: red;
    color: white;
    padding: 3px 5px;
    border-radius: 4px;
     font-size: 12px;
    
}
.buyrule{
    width: 50%;
    margin: 0 auto;
    color: #3e3e3e;
}
.buyrule h3 {
    font-size: 18px;
    text-align: center;
    padding-bottom: 20px;
}
li {
    list-style: none;
}
li p {
    /* padding-left: 4em; */
    /* display:inline-block; */
    position: relative;
    left: 60px;
    top:-19px;
}
li label {
    position: relative;
}
</style>
