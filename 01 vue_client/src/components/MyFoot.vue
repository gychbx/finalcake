<template>
   <div class="footer">
       <div class="footer_online">
           <div class="service_btn">
                在线客服
           </div>
           <div class="wx_btn">
               微信公众号
               <img src="../assets/erweima.png" alt="" class="pic">
           </div>
       </div>
       <div class="footer_tel">
           <span>客服电话：4001-578-578 服务时间（08:30-22:30）</span>
       </div>
       <div class="footer_nav clear_fix">
           <p>
               <router-link  v-for="(item,index) in arr"  class="router"  :key="(item,index)" :style="[7===index?mystyle:'']"  :to="item.b">{{item.a}}</router-link>
           </p>
       </div>
       <div class="footer_address">
            <p>诺心食品（上海）有限公司   上海徐汇区田林路140号28号楼503室  客服邮箱：services@lecake.com  公司电话：4001-578-578</p>
       </div>
       <div class="footer_copy">
           <p>copyright©2010-2019 诺心lecake.com版权所有 沪ICP备10211730号</p>
       </div>
   </div>
</template>

<script>

export default {
  name: 'MyNav',
  data(){
      return {
          arr:[{a:"诺心公告",b:"/nuoxin"},{a:"关于诺心",b:"/guanyu"},{a:"联系我们",b:"/lianxi"},{a:"客服服务",b:"/kefu"},{a:"食品经营许可证",b:"/shiping"},{a:"生产许可证",b:"/shenchan"},{a:"预付费卡协议",b:"/yufu"},{a:"上海工商",b:"/shanghai"},{a:"环保信息",b:"/huanbao"}],
          mystyle:{
            background: "url(../../static/guo.png)",
            backgroundSize: "20px 20px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "17% 0",
            paddingLeft:"32px"
          }
      }
  }
}
</script>

<style scoped>
    .box {
        width: 300px;
        height: 300px;
    }
    .footer {
        font: 12px/1.5 "Hiragino Sans GB", "Microsoft YaHei", Helvetica, '宋体', STFangsong, STXihei, Arial, serif;
        width: 100%;
        height: 238px;
        border-top: 1px solid #e5e5e5;
        text-align: center;
        padding: 40px 0 20px;
        background: #ebebeb;
    }
    .footer_online {
        margin-bottom: 20px;
        color: #3e3e3e;
        font-weight: normal;
        display: flex;
        justify-content: center;
    }
    .service_btn {
        width: 100px;
        height: 18px;
        padding-top: 36px;
        background: url(../assets/service.png);
        background-size: 30px 30px;
        background-repeat: no-repeat;
        background-position: 50% 0;
        cursor: pointer;
    }
    .wx_btn {
        height: 18px;
        padding-top: 36px;
        background: url(../assets/wx.png);
        background-size: 30px 30px;
        background-repeat: no-repeat;
        background-position: 50% 0;
        cursor: pointer;
        position: relative;
    }
    .wx_btn:hover .pic {
        display: block
    }
    .pic {
        position: absolute;
        top: -240px;
        left: -50px;
        display: none
    }
    .footer_tel {
        height: 40px;
    }
    .footer_tel span {
        margin: 0 auto;
        padding-left: 30px;
        display: inline-block;
        height: 40px;
        line-height: 40px;
        background: url(../assets/tel.png);
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-position: 0 50%;
     
    }
    .footer_nav {
        height: 44px;
    }
    .router {
        height: 16px;
        padding: 0 12px;
        margin-top: 12px;
        border-right: 1px solid #3e3e3e;
        line-height: 16px;
        text-decoration: none;
        text-align: center;
        display: inline-block;
        color: #3e3e3e;
    }
    .footer_address {
        height: 40px;
    }
    .footer_address p {
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #3e3e3e;
    }
    .footer_copy {
       height: 40px;
    }
    .footer_copy p {
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #3e3e3e;
    }
</style>
