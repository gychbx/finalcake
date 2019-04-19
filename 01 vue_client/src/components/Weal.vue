<template>
  <div class="box">
        <div class="wealImage"></div>
        <div class="rule">
            <h2>{{title}}</h2>
            <p v-for="item in rule" :key="item">{{item}}</p>
        </div>
  </div>
</template>

<script>
// import wealImg from "../assets/welfareBanner.jpg"
export default {
  name: "Weal",
  data() {   
    return {
        title:"福利券使用规则",
        rule:[
            "1、本券为提货凭证，需一次性兑换完成，不退款、不兑现、不找零；",
            "2、本券购买时可开具发票，兑换时不开具发票。",
            "3、登录诺心官网www.lecake.com[企业专区]-[福利券专区]， 使用悦享券可兑换福利产品（2-4人食）一个，使用尊享券可兑换福利产品（5-8人食）一个；  如兑换福利产品外的其他产品，可使用悦享券抵扣100元，尊享券抵扣200元， 差价应另外支付，明示不参与商品除外",
            "4、扫描二维码后填写必要信息，绑定用户后方可使用。",
            "5、如不绑定，则收货时需向配送员交回本券完成收货。",
            "6、本券有效期以福利券背面有效期为准，请于有效期内完成兑换。",
            "7、注意事项：节日期间兑换集中，请至少提前一日兑换；本券不记名， 遗失不补，应妥善保管；请注意券面完好，号码、二维码等污损无法使用的，损失自负。",
            "8、配送说明：订购时间、配送及收费等标准以诺心官网最新发布信息为准。",
            "9、优惠说明：使用本券兑换，不参与诺心积分奖励及其他优惠活动。",
            "10、特别声明：非授权的单位或个人，均无权销售本券，否则诺心有权不予兑换且对所有损失概不负责。"
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
.box{
    width: 100%;
    margin: 0 auto;
    /* position: relative; */
    /* top:109px; */
    /* z-index: -1; */
}
.wealImage{
    width: 100%;
    height: 365.34px;
    background-image: url("../assets/welfareBanner.jpg");
    background-size: 100%;
}
.rule {
    width: 50%;
    margin: 0 auto;
    padding: 30px 0;
    color: #3e3e3e;
}
h2 {
    text-align: center;
    font-size: 20px;
    margin-bottom: 30px;
}
</style>
