<template>
    <div>
        <div class="wrap">
            <div class="main_width clear_fix">
                <img src="../../static/logo_new.png" alt="" class="pic">
            </div>
        </div>
        <div class="main">
            <div class="banner_link">
                <div class="login_wrap" v-if="page">
                    <div class="clear_fix tab_title">
                        <div class="f_left" @click="click"  data-id="1" :style="[ac==1?mystyle:'']">手机验证登录</div>
                        <div class="f_right">
                            <span>|</span>
                            <span @click="click" data-id="2" :style="[ac==2?mystyle:'']" >账户密码登录</span>
                        </div>
                    </div>
                    
                    <div class="tab_mobile" v-if="ac==1">
                        <p class="input_wrap username_wrap">
                            <input type="text" maxlength="11" title="手机号码" class="phone"  @focus="change" v-model="telphone" placeholder="手机号码">
                            <span class="error_message" >{{tel}}</span>
                        </p>
                        <p class="input_wrap yzm_wrap">
                            <input type="text" maxlength="6" class="yzm" title="验证码"  @focus="change" v-model="yanzhengma" placeholder="请输入验证码">
                            <img :src="acquireUrl" alt=""> 
                            <span @click="huan" style="cursor: pointer;">换一个</span> 
                            <span class="error_message" >{{yzm}}</span>
                        </p>
                         <p class="input_wrap yzm_wrap">
                            <input type="text" maxlength="6" title="短信验证码" @focus="change" v-model="dxyzm"  placeholder="短信验证码">
                        
                            <button v-show="show" class="code_btn"  @click="yanzheng">发送验证码</button>
                            <button v-show="!show" class="code_btn count" disabled >{{count}} s后重试</button>
                            <span class="error_message" >{{duanxin}}</span>
                        </p>
                    </div>

                    <div class="tab tab_account" v-else>
                        <p class="input_wrap username_wrap">
                            <input type="text" maxlength="50" title="email/手机号" v-model="zhanghao.usename"  @focus="change" placeholder="请输入账号" autocomplete="off">
                            <span class="error_message" >{{id}}</span>
                        </p>
                        <p class="input_wrap password_wrap">
                            <input type="password" maxlength="50" title="密码"  v-model="zhanghao.password"  @focus="change" placeholder="请输入密码">
                            <span class="error_message" >{{pwd}}</span>
                        </p>
                    </div>


                    <button class="btn" @click="login">立即登录</button>


                    <div>
                        <div class="clear_fix bottom_link" >
                            <router-link   class="link_1"   to="/forget">忘记密码</router-link>
                            <div>
                                <span>还没有账号？</span>
                                <span class="link_2" @click="reg">立即注册</span>
                            </div>
                        </div>

                        <div class="more_login_type">
                            <div>-------其他登录方式-------</div>
                        </div>
                        <div class="type_list">
                            <img src="../../static/weixin.png" alt="">
                            <img src="../../static/qq.png" alt="">
                        </div>
                    </div>
                </div>

                <div class="register_wrap" v-else>
                    <div class="clear_fix tab_title">
                        <div class="f_left">手机快捷注册</div>
                        <div class="f_right">
                            <span>|</span>
                            <span>已有账号？<i style='color: #fe4320;font-style: normal' data-id='10' @click="return1">请登录</i></span>
                        </div>
                    </div>

                    <div class="tab_mobile" >
                        <p class="input_wrap username_wrap">
                            <input type="text" maxlength="11" title="手机号码" class="phone"  @focus="change" v-model="usertel.telphone2" placeholder="手机号码">
                            <span class="error_message" >{{tel}}</span>
                        </p>

                        <div style="height:56px;position: relative;">
                            <slider @asd="change2"></slider>
                            <div class="abso" v-if="box">
                                <div class="boxchild">
                                            <div class="left">
                                                请在下方输入验证码
                                            </div>
                                            <div class="right">
                                                <i class="el-icon-warning" style="color:red;line-height:32px;font-size:20px"></i>
                                            </div>
                                        </div>
                                        <div class="yanzhen">
                                            <div style="height:42px;display: flex;align-items: center;justify-content: space-between;">
                                                <input  maxlength="6" v-model="yzm2" type="text" style="width:90px;height:30px;border: 1px solid #949494;margin-left:5px">
                                                <i class="el-icon-refresh" style="font-size:22px" @click="huan"></i>
                                            </div>
                                            <img :src="acquireUrl" alt="">
                                            <div style="font-size: 12px;color: #999;text-align: left;padding-bottom:10px" v-if="box1">
                                                <i class="el-icon-error" style="color:red; font-size:16px;text-indent: 10px"></i>
                                                验证码输入错误，请重新输入
                                            </div>
                                            <div class="bb" @click="tijiao">
                                                提交
                                            </div>
                                        </div>
                            </div>
                            <span class="error_message">{{q}}</span>
                        </div>

                         <p class="input_wrap yzm_wrap">
                            <input type="text" maxlength="6" title="短信验证码" @focus="change" v-model="dxyzm2"  placeholder="短信验证码">
                            <button v-show="show2" class="code_btn"  @click="yanzheng2">发送验证码</button>
                            <button v-show="!show2" class="code_btn count" disabled >{{count2}} s后重试</button>
                            <span class="error_message" >{{dx}}</span>
                        </p>
                         <button class="btn" @click="tianjia">立即注册</button>
                        <p class="clear_fix bottom_link two" >
                            <input type="checkbox" id="rule" v-model="a">
                            <label for="rule">我已阅读并同意<a href="/shop/help-41.html" target="_blank">《诺心lecake用户服务协议》</a></label>
                            <span class="error_message" v-if="!a">用户服务协议未勾选</span>
                        </p>
                    </div>
                </div>
        <el-dialog title="提示信息" :visible.sync="dialogVisible" width="20%" >
        <span>{{alert}}</span>
        <span slot="footer" class="dialog-footer">
            <el-button type="danger" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>

            </div>
        </div>
    </div>


</template>

<script>
import Slider from "./Slider"
	export default {
        name:"Reg2",
        components:{
            "slider":Slider,
        },
        
        data(){
            return {
                alert:"",
                alert:"验证码错误，请重新输入",
                alert2:"手机验证码错误",
                alert3:"密码只能是6-30位英文、数字及“_”、“-”组成",
                alert4:"账号或密码错误",
                alert5:"账号已存在",
                dialogVisible: false,
                page:true,
                a:true,
                box:false,
                box1:false,
                btn:false,
                q:"",
                q1:"请拖动滑块完成验证",
                q2:"",
                yzm2:"",
                show: true,
                show2:true,
                ac:1,
                telphone:"",
                usertel:{
                    telphone2:"",
                },
                zhanghao:{
                    usename:"",
                    password:""
                },
                yanzhengma:"",
                dxyzm:"",
                dxyzm2:"",
                tel:"",
                tel1:"手机号码不能为空",
                tel2:"手机号码格式不正确",
                tel3:"",
                yzm:"",
                yzm1:"验证码不能为空",
                yzm2:"",        
                duanxin:"",
                duanxin1:"请输入短信验证码",
                duanxin2:"",   
                
                dx:"",
                dx1:"请输入短信验证码",
                dx2:"",    
                
                
                id:"",
                id1:"用户名不能为空",
                id2:"用户名格式不正确",
                id3:"",
                pwd:"",    
                pwd1:"密码不能为空",
                pwd2:"",
                timer:null,
                timer2:null,
                count:"",
                count2:"",
                mystyle :{
                    color: "#fe4320"
                },
                mydata:"",
                 mydata2:"",
                 mydata3:"",
                 acquire:"",
                 acquireUrl:'',
                 acquireYzm:""
            }
        },
        methods: {
            click: function(e){
                // console.log(e.srcElement.dataset.id)
                if(e.srcElement.dataset.id==1){
                    this.ac=e.srcElement.dataset.id
                }else if(e.srcElement.dataset.id==2) {
                    this.ac=e.srcElement.dataset.id
                }
               
            },
            select:function(){
                this.axios.get("http://localhost:81/reg.do",{
					
					}).then(response => {
						console.log("get发送Ajax请求成功", response.data);
						this.mydata = response.data;
					}).catch(response => {
						console.log("get发送Ajax请求失败");
					})
            },
            insert:function(){
                this.axios.post("http://localhost:81/insert.do", this.usertel, {
						transformRequest: [
							function(data) {
								let params = '';
								for(let index in data) {
									params += index + "=" + data[index] + "&";
								}
								return params;
							}
						]
					}).then(response => {
                        console.log("post发送Ajax请求成功", response.data);
                        if(response.data=="no"){
                             this.dialogVisible=true
                            this.alert=this.alert5
                            // alert("账号已存在")
                        }else {
                            this.mydata2 = response.data;
                            this.$store.state.count2=this.usertel.telphone2;
                            this.$router.push({path:'/home'});
                        }
					}).catch(response => {
						console.log("post发送Ajax请求失败");
					})
            },
            chaxun:function(){
                this.axios.post("http://localhost:81/chaxun.do", this.zhanghao, {
						transformRequest: [
							function(data) {
								let params = '';
								for(let index in data) {
									params += index + "=" + data[index] + "&";
								}
								return params;
							}
						]
					}).then(response => {
                        console.log("post发送Ajax请求成功", response.data);
                        if(response.data=="no"){
                             this.dialogVisible=true
                            this.alert=this.alert4
                            // alert("账号或密码错误")
                        }else {
                            this.mydata3 = response.data;
                            this.$store.commit('increment1');
                            this.$store.state.count2=this.zhanghao.usename;
                            this.$router.push({path:'/home'})
                              this.axios.post('http://localhost:81/getallpiece')
                                    .then(results=>{
                                       this.$store.state.count=results.data[0].nums;
                                    })
                                    .catch(err=>{
                                        console.log(err)
                                    })
                        }
					}).catch(response => {
						console.log("post发送Ajax请求失败");
                	})
                
            },

            yanzheng: function () {
                if(this.telphone==""){
                    this.tel=this.tel1
                }else if(!(/^1[34578]\d{9}$/.test(this.telphone))){ 
                    this.tel=this.tel2 
                }else if(this.yanzhengma==""){
                    this.yzm=this.yzm1;      
                }else if(this.yanzhengma!=this.acquireYzm){
                    this.dialogVisible=true
                    // alert("验证码错误，请重新输入")
                    this.yanzhengma="";
                }else {
                    //发送验证码
                      this.getCode()
                      this.select()
                } 
            },
            yanzheng2:function(){
                if(this.usertel.telphone2==""){
                    this.tel=this.tel1
                }else if(!(/^1[34578]\d{9}$/.test(this.usertel.telphone2))){ 
                    this.tel=this.tel2 
                }else if(this.btn==false){
                    this.q=this.q1;
                }else {
                     //发送验证码
                    this.getCode2()
                    this.select()
                }
               
            },
            getCode(){
                 const TIME_COUNT = 120;
                 if (!this.timer) {
                   this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= TIME_COUNT) {
                     this.count--;
                    } else {
                        this.show = true;
                     clearInterval(this.timer);
                     this.timer = null;
                    }
                   }, 1000)
                  }
             },
            getCode2(){
                 const TIME_COUNT = 120;
                 if (!this.timer2) {
                   this.count2 = TIME_COUNT;
                    this.show2 = false;
                    this.timer2 = setInterval(() => {
                    if (this.count2 > 0 && this.count2 <= TIME_COUNT) {
                     this.count2--;
                    } else {
                        this.show2 = true;
                     clearInterval(this.timer2);
                     this.timer2 = null;
                    }
                   }, 1000)
                  }
             },
            login: function(){
                if(this.ac==1){
                        if(this.telphone==""){
                            this.tel=this.tel1
                        }else if(!(/^1[34578]\d{9}$/.test(this.telphone))){ 
                            this.tel=this.tel2 
                        }else if(this.dxyzm==""){
                            this.duanxin=this.duanxin1
                        }else if(this.dxyzm!=this.mydata){
                            // alert("手机验证码错误")
                            this.dialogVisible=true
                            this.alert=this.alert2
                        }else {
                            this.$store.commit('increment1');
                            console.log(this.$store.state.count1)
                            this.$store.state.count2=this.telphone;
                            this.$router.push({path:'/home'})
                              this.axios.post('http://localhost:81/getallpiece')
                                    .then(results=>{
                                        this.$store.state.count=results.data[0].nums;
                                    })
                                    .catch(err=>{
                                        console.log(err)
                                    })
                        }
                }else if(this.ac==2){
                    if(this.zhanghao.usename==""){
                            this.id=this.id1
                        }else if(!(/^1[34578]\d{9}$/.test(this.zhanghao.usename))){ 
                            this.id=this.id2 
                        }else if(this.zhanghao.password==""){
                            this.pwd=this.pwd1
                        }else if(!(/^[0-9A-Za-z]{6,20}$/.test(this.zhanghao.password))){
                            // alert("密码只能是6-30位英文、数字及“_”、“-”组成")
                            this.dialogVisible=true
                            this.alert=this.alert3
                        }else {
                            //跳转
                            console.log("qwer")
                            this.chaxun()
                        }
                }
              
            },
            tianjia:function(){
                console.log(this.mydata)
                if(this.usertel.telphone2==""){
                    this.tel=this.tel1
                }else if(!(/^1[34578]\d{9}$/.test(this.usertel.telphone2))){ 
                    this.tel=this.tel2 
                }else if(this.btn==false){
                    this.q=this.q1;
                }else if(this.dxyzm2==""){
                    this.dx=this.dx1
                }
                else if(this.dxyzm2!=this.mydata){
                    this.dialogVisible=true
                    this.alert=this.alert2

                    //  alert("手机验证码错误")
                }else if(this.a==true){
                    this.insert()
                }

            },
            return1:function(){
                this.page=true
            },
            reg:function(){
                this.page=false
            },
            change: function(){
                this.tel=this.tel3;
                this.yzm=this.yzm2;
                this.duanxin=this.duanxin2;
                this.id=this.id3;
                this.pwd=this.pwd2;
                this.dx=this.dx2
            },
            change2:function(e){
                this.box=true
                this.q=this.q2
                this.btn=true
            },
            tijiao:function(){
                if(this.yzm2!=this.acquireYzm){
                    this.box1=true
                }else {
                    this.box=false
                }
            },
            acquirepic:function(){
                console.log(666)
                this.axios.get("http://localhost:81/acquirepic.do",{
					}).then(response => {
						console.log("get发送Ajax请求成功", response.data);
                        this.acquire = response.data;
                         console.log(this.acquire[0].url)
                        this.acquireUrl=this.acquire[0].url;
                        this.acquireYzm=this.acquire[0].yzm;
                       
					}).catch(response => {
						console.log("get发送Ajax请求失败");
					})
            },
            huan:function(){
                this.acquirepic()
            }
        },
        mounted: function() {
            console.log(666)
			this.acquirepic()
	    },
	}
</script>

<style scoped>
	.wrap {
        width: 100%;
        height: 83px;
        border-bottom: 1px solid #e5e5e5;
        
    }
    .main_width  {
        padding: 29px 0;
        width: 62.5%;
        margin: 0 auto;
        height: 24px;
    }
    .pic {
        width: 207px;
        height: 24px;
    }
    .main {
        height: 520px;
        width: 100%;
        background: url(../../static/bg.jpg)
    }
    .banner_link {
        width: 46.25%;
        height: 520px;
        margin: 0 auto
    }
    .login_wrap {
        float: right;
        position: relative;
        z-index: 2;
        top: 50px;
        width: 250px;
        padding: 20px 60px;
        background: #ffffff;
        opacity: 0.95;
    }
    .register_wrap {
        float: right;
        position: relative;
        z-index: 2;
        top: 50px;
        width: 250px;
        padding: 20px 60px;
        background: #ffffff;
        opacity: 0.95;
    }
    .tab_title  {
        width: 250px;
        height: 28px;
        margin-bottom: 20px;
        font-size: 14px;
        display: flex
    }
    .tab_title div {
        width: 125px;
        height: 28px;
        line-height: 28px;
    }
    .f_left {
        cursor: pointer;
    }
    .f_right {
        display: flex;
        justify-content: space-between;
    }
    .f_right>span:nth-child(2) {
        cursor: pointer;
    }
    
    .input_wrap {
        width: 250px;
        height: 30px;
        margin-bottom: 30px;
    }
    .input_wrap input {
        border: none;
        outline: none;
        line-height: 20px;
        padding: 4px 0 5px 24px;
        width: 226px;
        border-bottom: 1px solid #e5e5e5;
    }
    .username_wrap input {
        background: url(../../static/teltwo.png);
        background-size: 15px 15px;
        background-repeat: no-repeat;
        background-position: 0 45%;
    }
    .password_wrap input {
        background: url(../../static/xinhao.png);
        background-size: 15px 15px;
        background-repeat: no-repeat;
        background-position: 0 45%;
    }
    .yzm_wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    .yzm_wrap input {
        width: 128px;
        background: url(../../static/yaoshi.png);
        background-size: 15px 15px;
        background-repeat: no-repeat;
        background-position: 0 45%;
    }
    .yzm_wrap span {
        
        font-size: 12px;
       
    }
    .yzm_wrap> img {
        width: 50px;
        height: 30px;
    }
    .code_btn {
        outline: none;
        border: none;
        width: 90px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: #fe4320;
        font-size: 12px;
        color: #ffffff;
        cursor: pointer;
    }
    .count {
        background: #FC9F8B;
    }
    .btn {
        border: none;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: #fe4320;
        color: #ffffff;
        font-size: 16px;
        cursor: pointer;
    }
    .bottom_link {
        margin-top: 12px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        color: #949494;
        font-size: 12px;
    }
    .link_1 {
        color: #949494;
        text-decoration: none;
    }
    .link_2 {
        color: #fe4320;
        cursor: pointer;
    }
    .more_login_type {
        margin-top: 20px;
        color: #949494;
        font-size: 12px;
    }
    .more_login_type> div {
        text-align: center;
        height: 20px
    }
    .type_list {
        height: 50px;
        text-align: center;
        padding-top: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .type_list img {
        width: 32px;
        height: 32px;
        line-height: 50px;
    }
    .type_list>img:nth-child(1) {
        margin-right: 15px;
    }
    .error_message {
        text-align: left;
        text-indent: 24px;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        color: #ff0000;
        display: inline-block;
        width: 250px;
    }
    .two {
        width: 280px;
        margin-top: 12px;
        justify-content: start;
    }
    .abso {
        position: absolute;
        left: 0;
        top: 0;
        background-color: white
    }
    .boxchild {
        width:252px;
        height: 34px;
        display: flex;
        align-items: center;
    }
    .left {
        width: 206px;
        height: 34px;
        background-color: #7AC23C;
        font-size: 12px;
        color: white;
        text-align: left;
        line-height: 34px;
        text-indent: 10px
    }
    .right {
        width: 42px;
        height: 32px;
        border: 1px solid #CCCCCC;
        text-align: center
    }
    .yanzhen {
        width: 248px;
        padding-bottom: 15px;
        border: 1px solid #ccc;
        margin-top: 1px;
        text-align: center
        
    }
   .bb {
        margin: 0 auto;
        cursor: pointer;
        background-color: #fc461e;
        width: 120px;
        height: 32px;
        line-height: 32px;
        color: #fff;
        text-align: center;
    }
</style>