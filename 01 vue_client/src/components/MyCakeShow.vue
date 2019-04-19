<template>
  <div class="container">
      <div class="bread">
         <div style='width:1200px;height:50px;line-height:50px;background-color:#fff' v-show='cakearr!=0'>
            <span style='padding-left:50px;cursor:pointer;' @click='searchall'>查看全部蛋糕</span>   
         </div>
         <div v-if='cakearr===0' style="width:1200px;height:300px;display:flex;flex-direction:column;justify-content:center;align-items:center;">
              <img style='padding:50px;' width=88 height=60 src="../../static/sorry.png" alt="">
              <div>抱歉，找不到相关商品，选择“<span @click='checkall' style='color:orangered;cursor:pointer;'>全部</span>”试试。</div>
        </div>
        <div class='cakeitem' v-else v-for="(item,index) in cakearr" :key="(item,index)">
            <div>
                <img :src="item.imgurl">
            </div>
            <div class='box'>
                <div>
                    <p class="one">{{item.pname}}</p>
                    <div v-if='item.lable==="专享价"' :style='mystyle1'>
                            <img src="../../static/aha.png" width='42' height='14'>
                            <span>{{item.lable}}</span>
                    </div>
                    <div v-else>
                            <span :style='mystyle2'>{{item.lable}}</span>
                    </div>
                </div>
                <div>
                    <p class="three">{{item.price}}</p>
                    <span class="four" @click='addtoshopping(index)'>购物车></span>
                </div>  
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
        cakearr:0,
        mystyle1: {
        backgroundColor: "red",
        width: "96px",
        height: "20px",
        lineHeight: "20px",
        fontSize: "14px",
        color: "#fff"
       },
        mystyle2: {
        backgroundColor: "orange",
        fontSize: "14px",
        color: "#fff"
        }
    }
  },
  methods:{
     //加入购物车
      addtoshopping:function(index){
            this.axios.post('http://localhost:81/addtoshopping',this.cakearr[index], {
						transformRequest: [
							function(data) {
								let params = '';
								for(let index in data) {
									params += index + "=" + data[index] + "&";
								}
								return params;
							}
						]
					})
          .then(results=>{
                if(results.data==='success'){
                      this.$alert('<p style="color:orangered">加入购物车成功</p>', '提示信息', {
                      dangerouslyUseHTMLString: true
                      });
                      this.$store.commit("increment");
                }else{
                      this.$alert('<p style="color:orangered">该商品已加入购物车</p>', '提示信息', {
                      dangerouslyUseHTMLString: true
                      });
                }
           }).catch(err=>{
                console.log(err);
           });
      },
     checkall:function(){
         this.$router.push('/cake');
      },
      searchall:function(){
          this.$router.push('/cake');
      }
  },
  //监听按关键字搜索的路由参数
  watch:{
      $route:function(val){
          if(val.query.cakearr.length===0){
                this.cakearr=0;
          }else {
                this.cakearr=val.query.cakearr;
          }
      }
  },
   mounted:function(){
       if(this.$route.query.cakearr.length===0){
           this.cakearr=0;
       }else{
            this.cakearr=this.$route.query.cakearr;
       }
  }
}
</script>
<style  scoped>
.container{
    width:100%;
}
.bread {
  width: 1200px;
  padding: 20px 20px 60px 20px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  background-color: #eee;
}
.bread  .cakeitem {
  width: 260px;
  height: 402px;
  padding: 19px;
  margin: 1px;
  transition: all 1s;
  background-color: #fff;
}
.bread  .cakeitem:hover {
  background-color: lavenderblush;
}
.bread .cakeitem:hover > div > img {
  transform: scale(1.1);
}
.bread  .cakeitem > div > img {
  width: 260px;
  height: 260px;
  transition: all 1s;
}
.bread  .cakeitem > div:first-child {
  width: 260px;
  height: 260px;
  overflow: hidden;
}
.box {
    width:260px;
    height:132px;
    display:flex;   
    flex-direction: column;
    justify-content: space-between;
}
.one {
  font-size: 14px;
  color: #333;
  padding: 8px 0;
}
.three {
  font-size: 16px;
  color: #333;
}
.four {
  font-size: 12px;
  color: red;
  padding: 5px 0px;
  cursor: pointer;
}
</style>