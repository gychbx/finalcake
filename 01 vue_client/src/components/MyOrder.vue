<template>
   <div class="main">
       <div class="left">
           <div>
            <div style="height: 36px;line-height: 36px;font-size: 18px;color: #ff4001;">我的诺心</div>
            <ul type=none>
                <li v-for="(item,index) in arr" :key="(item,index)" class="lii">
                   <span>{{item}}</span> 
                </li>
            </ul>
           </div>
           <div>
               <div style="height: 36px;line-height: 36px;font-size: 18px;color: #ff4001;">交易管理</div>
                <ul type=none>
                    <li :style="[index===0?mystyle:'']"   v-for="(item,index) in arr2" :key="(item,index)" class="lii" >
                        <span>{{item}}</span>
                    </li>
                </ul>
           </div>
           <div>
               <div style="height: 36px;line-height: 36px;font-size: 18px;color: #ff4001;">客户服务</div>
                <ul type=none>
                    <li class="lii">
                        <span>帮助中心</span> 
                    </li>
                </ul>
           </div>
       </div>

        <div class="right">
            <div class="right_one">
                <div :style="[ac==index?mystyle2:'']"  v-for="(item,index) in arr3" @click="click(index)" :key="(item,index)">
                    <p style="width:124px;height:16px;line-height:16px;border-right: 1px solid #A3A3A3;text-align:center">{{item}}</p>
                </div>
            </div>
            <div class="right_two"> 
                <div style="text-align: center;">
                    <img src="../../static/no.png" alt="">
                    <p style="font-size: 14px;color: #949494;">您的列表还是空的</p>
                </div>
            </div>
        </div>
   </div>
</template>
<script>

export default {
  name: 'MyOrder',
  data(){
      return {
          ac:0,
          arr:["个人中心","地址管理","我的积分","我的LE家族","个人资料","修改密码","发票管理"],
          arr2:["订单管理","优惠券","蛋糕券","储值卡","专享兑换券"],
          arr3:["全部","待付款","待收货","待评价"],
          mystyle:{
              color:"#ff4001"
          },
          mystyle2:{
            color:"#ff4001",
            borderBottom: "1px solid #E5E5E5"
              
          },
      }
  },
  methods:{
      click:function(index){
          if(index==0){
              this.ac=0
          }else if(index==1){
               this.ac=1
          }
          else if(index==2){
               this.ac=2
          }
          else if(index==3){
               this.ac=3
          }
      }
  }
}
</script>

<style scoped>
    .main {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        
    }
    .left {
        width: 204px;
        padding: 30px 0 64px 6px;
    }
    li {
        cursor: pointer;
    }
    .lii {
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        padding: 6px 0;
        color:#3E3E3E
    }
    span:hover {
        color: #ff4001
    }
    .right {
        padding-top: 40px;
        width: 980px;
    }
    .right_one {
        display: flex;
         border-bottom: 1px solid #e5e5e5;
    }
    .right_one>div {
       width: 125px;
        height: 52px;
        line-height: 52px;
        cursor: pointer;
        display: flex;   
        font-size: 14px;
        color: #3E3E3E;
        align-items: center;
    }
    .right_two {
            padding: 100px 0 100px 12px;
    }
</style>
