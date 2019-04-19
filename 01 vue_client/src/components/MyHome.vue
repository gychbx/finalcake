<template>
  <div class="container">
    <el-carousel trigger="click" height="475px">
      <el-carousel-item v-for="item in carouselarr" :key="item">
        <img :src="item">
      </el-carousel-item>
    </el-carousel>
    <div class="cake_wrap">
      <div class="cake">
        <ul style='width:1200px;display:flex;justify-content:space-between;list-style:none'>
            <li><img src="../../static/homecakeleft.jpg" ></li>
            <li><img src="../../static/homecakeright.jpg" ></li> 
        </ul>
        <div v-for="(item,index) in cakearr" :key="(item,index)">
            <div>
                <img :src="item.imgurl" alt>
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
                    <span @click='addtoshopping(index,item.type)' class="four">加入购物车></span>
                </div>  
            </div>
        </div>
        <span @click='tocake' style="position:absolute;right:0;bottom:0;cursor:pointer">更多蛋糕></span>
      </div>
    </div>
    <img src="../../static/homebread.jpg" width='100%' style='padding:20px 0' alt="">
    <div class="bread">
        <div v-for="(item,index) in breadarr" :key="(item,index)">
            <div>
                <img :src="item.imgurl" alt>
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
                    <span  @click='addtoshopping(index,item.type)' class="four">加入购物车></span>
                </div>  
            </div>
        </div>
        <span @click='tobread' style="position:absolute;right:0;bottom:0;cursor:pointer">更多土司></span>
    </div>
    <img src="../../static/homegift.jpg" width='100%' style='padding:20px 0' alt="">
    <div class="gift">
        <div v-for="(item,index) in giftarr" :key="(item,index)">
            <div>
                <img :src="item.imgurl" alt>
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
                    <span  @click='addtoshopping(index,item.type)' class="four">加入购物车></span>
                </div>  
            </div>
        </div>
        <span @click='togift' style="position:absolute;right:0;bottom:0;cursor:pointer">更多礼品></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyHome",
  data() {
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
      carouselarr: [
        "../../static/crs1.jpg",
        "../../static/crs2.jpg",
        "../../static/crs3.jpg",
        "../../static/crs4.jpg",
        "../../static/crs5.jpg"
      ],
      cakearr:'' ,
      breadarr:'',
      giftarr: ''
    };
  },
    methods:{
      //加入购物车
      addtoshopping:function(index,type){
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
            var  threearr=0;
            if(type===1){
              threearr=this.cakearr[index]
            }else if(type===2){
              threearr=this.breadarr[index]
            }else {
              threearr=this.giftarr[index]
            }
            this.axios.post('http://localhost:81/addtoshopping',threearr, {
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
      },
     tocake:function(){
          this.$router.push('./cake');
          //改变nav导航栏的状态
          this.$emit("changeindex",1);
          window.scrollTo(0,0);

      },
     tobread:function(){
          this.$router.push('./bread');
           //改变nav导航栏的状态
          this.$emit("changeindex",2);
             window.scrollTo(0,0);
      },
     togift:function(){
        this.$router.push('./gift');
         //改变nav导航栏的状态
        this.$emit("changeindex",3);
           window.scrollTo(0,0);
      }
    },
    mounted:function(){                      
    this.axios.get('http://localhost:81/gethomeinfo',{params:{type:1,piece:8}})
    .then(results=>{
       this.cakearr=results.data;
    }).catch(err=>{
      console.log(err);
    });
      this.axios.get('http://localhost:81/gethomeinfo',{params:{type:2,piece:4}})
    .then(results=>{
       this.breadarr=results.data;
    }).catch(err=>{
      console.log(err);
    });
      this.axios.get('http://localhost:81/gethomeinfo',{params:{type:3,piece:4}})
    .then(results=>{
       this.giftarr=results.data;
    }).catch(err=>{
      console.log(err);
    });
  }
};
</script>
<style  scoped>
.container {
  width: 100%;
}
.el-carousel__item > img {
  width: 100%;
  height: 475px;
}
.cake_wrap {
  width: 100%;
  height: 1160px;
  position: relative;
}
.cake {
  width: 1200px;
  padding: 20px 20px 60px 20px;
  position: absolute;
  z-index: 2;
  left: 50%;
  margin-left: -600px;
  top: -100px;
  display: flex;
  flex-wrap: wrap;
}
.cake > div {
  width: 260px;
  height: 402px;
  padding: 19px;
  margin: 1px;
  transition: all 1s;
}
.cake > div:hover {
  background-color: lavenderblush;
}
.cake > div:hover > div > img {
  transform: scale(1.1);
}
.cake > div > div > img {
  width: 260px;
  height: 260px;
  transition: all 1s;
}
.cake > div > div:first-child {
  width: 260px;
  height: 260px;
  overflow: hidden;
}
.bread {
  width: 1200px;
  padding: 20px 20px 60px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
}
.bread > div {
  width: 260px;
  height: 402px;
  padding: 19px;
  margin: 1px;
  transition: all 1s;
}
.bread > div:hover {
  background-color: lavenderblush;
}
.bread > div:hover > div > img {
  transform: scale(1.1);
}
.bread > div > div > img {
  width: 260px;
  height: 260px;
  transition: all 1s;
}
.bread > div > div:first-child {
  width: 260px;
  height: 260px;
  overflow: hidden;
}
.gift {
  width: 1200px;
  padding: 20px 20px 60px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
}
.gift > div {
  width: 260px;
  height: 402px;
  padding: 19px;
  margin: 1px;
  transition: all 1s;
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