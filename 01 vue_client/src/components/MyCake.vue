<template>
  <div class="container">
      <div class="cake">
        <ul>
            <li>
                <span>口味：</span>
                <span class='des' @click='changecolor1(index)' :style='active1===index?colorstyle:""' v-for="(item,index) in testarr" :key='(item,index)'>{{item}}</span>
            </li>
            <li>
                <span>规格：</span>
                <span class='des' @click='changecolor2(index)' :style='active2===index?colorstyle:""' v-for="(item,index) in scalearr" :key='(item,index)'>{{item}}</span>
            </li>
        </ul>
        <div v-if='cakearr===0' style="width:1200px;height:300px;display:flex;flex-direction:column;justify-content:center;align-items:center;">
              <img style='padding:50px;' width=88 height=60 src="../../static/sorry.png" alt="">
              <div>抱歉，找不到相关商品，选择“<span @click='checkall' style='color:orangered;cursor:pointer;'>全部</span>”试试。</div>
        </div>
        <div v-else class='goods' v-for="(item,index) in cakearr" :key="(item,index)">
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
                    <el-button type='text' class="four" @click='addtoshopping(index)'>加入购物车></el-button>
                </div>  
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    name:'MyCake',
  data(){
    return {
      a:1,
        active1:0,
        active2:0,
        colorstyle:{
            color:"orangered"
        },
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
      testarr:["全部","雪域鲜乳4.9","雪域口味","巧克力味","芝士口味","慕斯口味","鲜果口味","冰淇淋味","奶油口味"],
      scalearr:["全部","2-4人食","5-8人食","10-12人食","15-20人食"],
      cakearr: 0,
      searchwords:{}
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
          }
      },
      changecolor1:function(index){
           this.active1=index;
           this.searchwords.keyword1=this.testarr[this.active1];
           this.searchwords.keyword2=this.scalearr[this.active2];
           //按关键字查询cake信息
           this.axios.post('http://localhost:81/searchinfo',this.searchwords, {
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
                if(results.data.length===0){
                  this.cakearr=0;
                }else{
                  this.cakearr=results.data;
                }
           }).catch(err=>{
                console.log(err);
           });
      },
      changecolor2:function(index){
          this.active2=index;
           this.searchwords.keyword1=this.testarr[this.active1];
           this.searchwords.keyword2=this.scalearr[this.active2];
           //按关键字查询cake信息
           this.axios.post('http://localhost:81/searchinfo',this.searchwords, {
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
                if(results.data.length===0){
                  this.cakearr=0;
                }else{
                  this.cakearr=results.data;
                }
                
           }).catch(err=>{
                console.log(err);
           });
      },
      checkall:function(){
          this.axios.post('http://localhost:81/getcakeinfo')
         .then(results=>{
          if(results.data.length===0){
              this.cakearr=0;
           }else{
              this.cakearr=results.data;
           }
           }).catch(err=>{
            console.log(err);
           });
           this.active1=0;
           this.active2=0;
      }
  },
  mounted:function(){
    this.axios.post('http://localhost:81/getcakeinfo')
    .then(results=>{
          if(results.data.length===0){
              this.cakearr=0;
           }else{
              this.cakearr=results.data;
           }
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
.cake {
  width: 1200px;
  padding: 20px 20px 60px 20px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  background-color: #eee;
}
.goods {
  width: 260px;
  height: 402px;
  padding: 19px;
  margin: 1px;
  transition: all 1s;
  background-color: #fff;
}
.cake>ul {
    width:1168px;
    height:100px;
    background-color:#fff;
    padding:10px 16px;
    margin-bottom:20px;
    list-style:none;
}
ul>li{
    height:50px;
    line-height: 50px;
}
ul>li>span{
   margin-right: 40px;
   color:#555;
   font-size: 14px;
}
.des{
    cursor: pointer;
}
.des:hover{
    color: orangered;
}
.goods:hover {
  background-color: lavenderblush;
}
.goods:hover > div > img {
  transform: scale(1.1);
}
.goods > div > img {
  width: 260px;
  height: 260px;
  transition: all 1s;
}
.goods > div:first-child {
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