<template>
  <div class="container">
      <div class="gift">
        <div v-for="(item,index) in giftarr" :key="(item,index)">
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
                    <p class="three">{{item.price}}
                        <span v-if='index===18' style='color:#fff;font-size:12px;background-color:goldenrod'>加购价</span>
                        <span v-if='index===18' style='color:goldenrod;'>￥38</span>
                    </p>
                    <span @click='addtoshopping(index)' class="four">加入购物车</span>
                </div>  
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'MyGift',
  data(){
    return {
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
      },
         giftarr:''
    }
  },
  methods:{
  //加入购物车
      addtoshopping:function(index){
        if(this.$store.state.count1===0){
              this.$confirm('您尚未登录，是否登录？', '提示信息', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
              }).then(() => {
                this.$router.push('/login');
                window.scrollTo(0,0);
                this.$message({
                  type: 'success',
                  message: '欢迎进入登录页面!'
                });
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消登录'
                });          
              });
          }else{
                 this.axios.post('http://localhost:81/addtoshopping',this.giftarr[index], {
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
          }
      }
  },
    mounted:function(){
    this.axios.post('http://localhost:81/getgiftinfo')
    .then(results=>{
          this.giftarr=results.data;
    }).catch(err=>{
      console.log(err);
    })
   }
}
</script>
<style  scoped>
.container{
    width:100%;
}
.gift {
  width: 1200px;
  padding: 20px 20px 60px 20px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  background-color: #eee;
}
.gift > div {
  width: 260px;
  height: 402px;
  padding: 19px;
  margin: 1px;
  transition: all 1s;
  background-color: #fff;
}
.gift > div:hover {
  background-color: lavenderblush;
}
.gift > div:hover > div > img {
  transform: scale(1.1);
}
.gift > div > div > img {
  width: 260px;
  height: 260px;
  transition: all 1s;
}
.gift > div > div:first-child {
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