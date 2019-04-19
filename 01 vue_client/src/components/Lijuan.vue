<template>
   <div class="czcard_wrapper">
       <div class="cz_nav">
           <img src="../../static/jihuo.jpg" alt="">
           <img src="../../static/chaxun.jpg" alt="">
           <img src="../../static/chongzhi.jpg" alt="">
       </div>
       <div class="card_verify">
           <div style="display:flex">
            <div style="width: 351px;text-align: right;font-size:28px;color:#B36E01;">储值卡、专享兑换券卡号：</div>
            <input type="text" class="card">
           </div>
           <div style="display:flex;padding-top:16px">
            <div style="width: 351px;text-align: right;font-size:28px;color:#B36E01;">密 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 码：</div>
            <input type="text" class="card">
           </div>
           <div class="cz_bind">
               <button class="bind">绑定激活</button>
               <div style="margin-top: 25px;    text-align: center;    color: #bbbab5;text-decoration: underline;    font-size: 16px;    padding-left: 40px;">找回已激活的储值卡、专享兑换券</div>
           </div>
           <div>
               <img src="../../static/lijuan.jpg" alt="">
           </div>
       </div>
    
   </div>
</template>

<script>

export default {
  name: 'Lijuan'
}
</script>

<style scoped>
   * {
       margin: 0;
       padding: 0
   }
   .czcard_wrapper {
       width: 980px;
        margin: 0 auto;
        background-color: #fefaec;
        
   }
   .cz_nav {
       display: flex
   }
   .card_verify {
        margin-top: 40px;
        margin-bottom: 20px;
   }
   .card {
        width: 350px;
        height: 50px;
        padding: 0 10px;
        font-size: 30px;
        line-height: 52px;
        border: 1px solid #d6d9dd;
        background: #d8dadd;
        border-radius: 5px;
        outline: none
   }
   .cz_bind {
           margin: 40px 0 20px 0;
   }
   .bind {
           width: 370px;
    height: 52px;
    text-align: center;
    margin-left: 352px;
        background: #f00;
    color: #fff;
    font-size: 18px;
    border-radius: 5px;
    outline: none;
    border: none
   }
</style>
