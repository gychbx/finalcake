<template>
  <div class="container">
      <div class='loginandreg'>
          <div>
              <div class='right'>
                  <div>
                      <span v-if='this.$store.state.count1===0' @click='login'>登录</span>
                      <span v-else>{{this.$store.state.count2}}</span>
                       <span v-if='this.$store.state.count1===0' @click='login'>注册</span>
                      <span v-else @click='out'>退出登录</span>
                  </div>
                  <div>微信公众号
                    <img src="../../static/wxpop.png">
                  </div>
              </div>
          </div>
      </div>
      <div class='nav'>
        <div class='lineone'>
            <div>
                <img width="20" src="../../static/location.png">
                <span style='font-size:12px'>成都</span>
                <span style='padding-left:5px;font-size:12px;color:#888'>查询地址是否可配送</span>
            </div>
            <img src="../../static/logo.png">
            <div>
                  <input type="text" size=25 placeholder="雪域牛乳芝士" v-model='searchdata'>
                  <img style='padding-right:5px;' width="20" src="../../static/search.png" @click='search'>
                  <div style='position:relative;height:24px;display:flex;flex-direction:column;justify-content:center'>
                         <img @click='handleshopping' style='padding-left:10px' width="20" src="../../static/shopping.png" >
                         <span :style='this.$store.state.count===0?flagstyle1:flagstyle2'>{{this.$store.state.count}}</span>
                  </div>      
            </div>
        </div>
        <div class='linetwo'>
            <ul>
                <li v-for='(item,index) in arr' :key='(item,index)' :style='active===index?mystyle1:""'>
                   <router-link @click.native='change(index)' :style='active===index?mystyle2:""' class='link' :to='item.two'>{{item.one}}</router-link>
                   <ul v-if='index===4' class='hoverdiv'>
                        <li v-for="(item,index) in list1" @click="toCompanyArea(index)" :key='(item,index)'>{{item}}</li>
                   </ul>
                   <ul v-else-if="index===5" class='hoverdiv'>
                        <li v-for="(item,index) in list2" @click='tomynx(index)' :key='(item,index)'>{{item}}</li>
                   </ul>
                </li>
            </ul>
        </div>
      </div>
      <div class='hidenav' v-show='scrolldata>150'>
          <img src="../../static/logo.png">
          <ul>
              <li v-for='(item,index) in arr' :key='(item,index)' :style='active===index?mystyle1:""'>
                  <router-link @click.native='hidechange(index)' class='hidelink' :style='active===index?mystyle2:""' :to='item.two'>{{item.one}}</router-link>
                   <ul v-if='index===4' class='hoverdiv2'>
                        <li v-for="(item,index) in list1" @click="toCompanyArea(index)" :key='(item,index)'>{{item}}</li>
                   </ul>
                   <ul v-else-if="index===5" class='hoverdiv2'>
                        <li v-for="(item,index) in list2" @click='tomynx(index)' :key='(item,index)'>{{item}}</li>
                   </ul>
              </li>
          </ul>
            <div class='hideright'>
                <img class='img1' src="../../static/location.png" alt="">
                <span style='font-size:12px;padding-right:3px'>成都</span>
                <input v-show='showinput' type="text" size=20 placeholder="雪域牛乳芝士" v-model='searchdata'>
                <img @click='handlesearch2' src="../../static/search.png" alt="">
                <div style='position:relative'>
                  <img src="../../static/user.png" style='width:25px;height:25px;padding:10px;' alt="">
                  <ul>
                    <li style='border-bottom:1px solid #999'>登录</li>
                    <li>注册</li>
                  </ul>
                </div>
                <div style='position:relative;height:24px;display:flex;flex-direction:column;justify-content:center'>
                         <img @click='handleshopping' style='padding-left:10px' width="20" src="../../static/shopping.png" >
                         <span :style='this.$store.state.count===0?flagstyle1:flagstyle2'>{{this.$store.state.count}}</span>
                </div>  
            </div>
      </div>
  </div>
</template>
<script>
export default {
    name:'MyHeader',
  data(){
    return {
      flagstyle1:{
          display:"none"
      },
      flagstyle2:{
          display:"inline-block",
          width:"16px",
          height:"16px",
          fontSize:"12px",
          color:"#fff",
          lineHeight:"16px",
          textAlign:"center",
          borderRadius:"50%",
          backgroundColor:"orangered",
          position:"absolute",
          top:"-5px",
          left:"30px",
          display:"inline-block"
      },
      searchdata:'',
      showinput:false,
      scrolldata:0,
      active:0,
      times:0,
      list1:["企业采购","大客户区","福利券区","合作专区","小食盒区"],
      list2:["我的aha","我的订单","找回密码","礼券专区","卡券兑换"],
      arr:[{one:"首页",two:'/home'},{one:"蛋糕",two:'/cake'},{one:"土司",two:'/bread'},{one:"礼品",two:'/gift'},{one:"企业专区",two:''},{one:"我的诺心",two:''}],
      mystyle1:{
        borderBottom:'2px solid orange'
      },
      mystyle2:{
       color:"red"
      }
    }
  },
  watch:{
    changeindex:function(val){
      if(val===1){
        this.active=1;
      }else if(val===2){
        this.active=2;
      }else if(val===3){
        this.active=3;
      }
    }
  },
  props:{
    "changeindex":Number,
  },
  methods:{
    login:function(){
          this.$router.push('/login');
    },
    out:function(){
          this.$store.state.count=0;
          this.$store.state.count1=0;
          this.$router.push('/home');
    },
    handleshopping(){
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
          this.$router.push('/shopping')
      }
    },
    tomynx:function(index){
         if(index===0){
            this.$router.push('/aha');
          }else if(index==1){
            if(this.$store.state.count1==0){
              this.$router.push('/login');
            }else {
               this.$router.push('/myorder');
            }
          }else if(index==2){
               this.$router.push('/back');
          }else if(index==3){
            if(this.$store.state.count1==0){
              this.$router.push('/login');
            }else {
               this.$router.push('/lijuan');
            }
          }
          else if(index==4){
            if(this.$store.state.count1==0){
              this.$router.push('/login');
            }else {
               this.$router.push('/kajuan');
            }
          }
          window.scrollTo(0,0);
    },
    toCompanyArea:function(index){
        if(index===0){
            this.$router.push('/contentcaigou');
          }else if(index==1){
            this.$router.push('/client');
          }else if(index==2){
            this.$router.push('/weal');
          }else if(index==3){
            this.$router.push('/cooperate');
          }else if(index==4){
            this.$router.push('/food');
          }
          window.scrollTo(0,0);
    },
    search:function(){
          this.active=-1;
          if(this.searchdata===''){
            this.axios.get('http://localhost:81/navsearch',{params:{searchdata:"雪域牛乳芝士"}})
            .then(results=>{
              this.$emit('search-data',results)
            }).catch(err=>{
            console.log(err);
            })
          }else {
             this.active=-1;
             this.axios.get('http://localhost:81/navsearch',{params:{searchdata:this.searchdata}})
            .then(results=>{
              this.$emit('search-data',results);
             }).catch(err=>{
             console.log(err);
            })
          }
    },
    change:function(index){
       this.active=index;
       window.scrollTo(0,0);
    },
    hidechange:function(index){
        this.active=index;
         window.scrollTo(0,0);
    },
    handlescroll:function(){
          var scrollTop = window.pageYOffset || (document.documentElement.scrollTop+document.body.scrollTop)
          this.scrolldata=scrollTop;
    },
    handlesearch2:function(){
         if(this.times===0){
              this.showinput=true;
         }else{
              this.active=-1;
              if(this.searchdata===''){
                this.axios.get('http://localhost:81/navsearch',{params:{searchdata:"雪域牛乳芝士"}})
                .then(results=>{
                  this.$emit('search-data',results)
                }).catch(err=>{
                console.log(err);
                })
              }else {
                this.active=-1;
                this.axios.get('http://localhost:81/navsearch',{params:{searchdata:this.searchdata}})
                .then(results=>{
                  this.$emit('search-data',results);
                }).catch(err=>{
                console.log(err);
                })
              }
              window.scrollTo(0,0);
         }
          this.times++;
    }
  },
  mounted:function(){
    window.addEventListener('scroll',this.handlescroll,false)
  },
  destroyed:function(){
    window.removeEventListener('scroll', this.handlescroll,false)
  }
}
</script>
<style  scoped>
.hideright>div>ul{
  list-style: none;
  background-color: #fff;
  width:80px;
  position: absolute;
  left:-15px;
  top:50px;
  display: none;
}
.hideright>div:hover>ul{
  display: block;
}
.hideright>div>ul>li{
  font-size: 12px;
  width:30px;
  height:20px;
  padding:10px 0; 
  cursor: pointer; 
  margin:0 auto;
  text-align: center;
}
.hideright>div>ul>li:hover {
  color:orange;
}
.hideright>input {
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  font-size: 12px;
  padding: 2px 4px;
}
.img1 {
   width:25px;
   height:25px;
   padding: 10px 0px 10px 10px;
}
.hideright {
  display: flex;
  align-items: center;
}
.hideright>img:not(.img1){
  width:25px;
  height:25px;
  padding:10px;
}
.hidenav {
  width:100%;
  padding:0 200px;
  height:60px;
  position:fixed;
  top:0;
  left: 0;
  z-index: 4;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
}
.hidelink:hover {
 color:orange;
}
.hidelink {
  text-decoration: none;
  color:#666;
}
.hidenav>img{
  width:207px;
  height:24px;
}
.hidenav>ul{
    height:60px;
    list-style: none;
    display:flex;
}
.hidenav>ul>li{
    width:76px;
    height:60px;
    line-height: 60px;
    text-align: center;
    position: relative;
}
.link {
  color:#333;
  text-decoration: none;
}
.link:hover {
  color:orange;
}
.nav input {
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  font-size: 12px;
  padding: 2px 4px;
}
.lineone {
  height:54px;
  width:80%;
  margin:0 auto;
  display:flex;
  justify-content: space-around;
  align-items: center;
}
.lineone>div:first-child{
  height:24px;
  display: flex;
  align-items: center;
}
.lineone span:nth-child(2) {
  cursor: pointer;
}
.lineone span:nth-child(2):hover{
  color:orange;
}
.lineone>div:last-child{
  height:24px;
  display: flex;
  align-items: center;
}
.linetwo {
  height:70px;
}
.linetwo>ul {
  display: flex;
  justify-content: center;
  list-style: none;
}
.linetwo>ul>li{
  width:112px;
  height:20px;
  padding:24px 0px;
  text-align: center;
  position: relative;
}
.linetwo>ul>li:hover ul{
  display: block;
}
.hidenav>ul>li:hover ul{
  display: block;
}
.hoverdiv {
  list-style: none;
  position: absolute;
  width:100px;
  background-color: #fff;
  top:60px;
  left:0;
  z-index: 3;
  padding:5px;
  display: none;
}
.hoverdiv> li{
    padding:5px 0;
    color:#333;
    cursor: pointer;
}
.hoverdiv> li:hover{
    color:orange;
}
.hoverdiv2 {
  list-style: none;
  position: absolute;
  width:76px;
  background-color: #fff;
  top:60px;
  left:0;
  display: none;
}
.hoverdiv2> li{
    line-height:40px; 
    color:#666;
    cursor: pointer;
}
.hoverdiv2> li:hover{
    color:orange;
}
.container{
    width:100%;
    height:155px;
}
.loginandreg {
    width:100%;
    height:30px;
    background-color: #eee;
}
.loginandreg>div{
  width:80%;
  height:100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end
}
.nav {
    width:100%;
    height:124px;
}
.loginandreg .right{
  height:100%;
}
.right {
  display: flex;
  justify-content: space-between;
}
.right span:first-child:hover{
  color:orange
}
.right span:first-child {
  cursor: pointer;
}
.right span:last-child {
  cursor: pointer;
}
.right span:last-child:hover{
  color:orange
}
.right>div:first-child {
  line-height: 30px;
  font-size: 12px;
}
.right>div:last-child{
  width:60px;
  padding-left: 36px;
  font-size:12px;
  line-height: 30px;
  background: url('../../static/wx.png') no-repeat 8px 50%;
  background-size:20px 20px;
  cursor: pointer;
  position: relative
}
.right img {
  position:absolute;
  left:-66px;
  top:20px;
  z-index: 3;
  display: none;
}
.right>div:last-child:hover {
  color:orange;
}
.right>div:last-child:hover img {
  display: block;
}
</style>