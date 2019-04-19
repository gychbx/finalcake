<template>
<div>
    <div class="wrap">
        <div class="global_nav">
            <div style="width:216px">
                <img src="../../static/logo_new.png" alt="">
            </div>
            <p style="font-size: 18px;line-height: 20px;">找回密码</p>
        </div>
    </div>
    <div class="main">
        <div  style="margin-bottom: 80px;display:flex;justify-content: center;">
            <el-steps  :active="index"  align-center>
                <el-step title="填写账号" ></el-step>
                <el-step title="选择找回方式"></el-step>
                <el-step title="验证身份" ></el-step>
                <el-step title="重置密码"></el-step>
                <el-step title="完成"></el-step>
            </el-steps>
        </div>


        <div style=" text-align: center;" v-if="page==1">
            <p style="text-align: center;color: #949494;font-size:12px;margin-bottom:24px">提示：忘记用户名？试试您的常用邮箱或手机号，如依然无法解决，请咨询客服：4001-578-578</p>
            <input type="text" class="input" maxlength="50" id="userName" @focus="focus" v-model="obj.id" placeholder="用户名/手机号/邮箱" data-error="请输入用户名">
            <div style="height:24px;width:250px;margin:0 auto;text-align: left;text-indent: 24px;font-size: 12px;color: #ff0000;line-height: 24px;">{{user}}</div >
                <div class="box">
                    <slider style="width:250px;margin:0 auto" @asd="change"></slider>
                    <div class="abso" v-if="ac">
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
                                <input  maxlength="6" v-model="yzm" type="text" style="width:90px;height:30px;border: 1px solid #949494;margin-left:5px">
                                <i class="el-icon-refresh" style="font-size:22px;cursor: pointer;" @click="huan"></i>
                            </div>
                            <img :src="acquireUrl" alt="">
                            <div style="font-size: 12px;color: #999;text-align: left;padding-bottom:10px" v-if="ac1">
                                <i class="el-icon-error" style="color:red; font-size:16px;text-indent: 10px"></i>
                                验证码输入错误，请重新输入
                            </div>
                            <div class="bb" @click="tijiao">
                                提交
                            </div>
                        </div>
                    </div>
                </div>
            <button class="btn" @click="click">下一步</button>
        </div>

        <div class="two" v-if="page==2" style="height:98px;display:flex;justify-content: center;align-items: center;padding-bottom:200px">
            <div>选择找回密码方式：</div>
            <div class="pic" @click="click2">
                <span>手机找回</span>
            </div>
        </div>

        <div class="three" v-if="page==3" >
            
            <p style="font-size: 14px;padding-bottom:24px">我们已将找回密码短信发送至您的手机<span  style="color:#fe4320;">{{obj.id}}</span>，请尽快完整验证。</p>
            <p class="input_wrap" >
                <input type="text" maxlength="6" class="yzm" title="验证码" v-model="yanzhengma" placeholder="短信验证码">
            </p>
            <button class="btn" style="margin-top: 0px;" @click="click3">验证</button>
            <p style="height:32px;line-height:32px;width:480px;margin:0 auto;text-align:left;padding-top:20px">没有收到找回密码短信？</p>
            <p style="height:24px;line-height:24px;width:480px;margin:0 auto;text-align:left;font-size:12px;color: #949494;">1.如果您没有及时收到验证码短信，请耐心等待，可能是网络繁忙造成的信息堵塞。</p>
            <p style="height:24px;line-height:24px;width:480px;margin:0 auto;text-align:left;font-size:12px;color: #949494;">2.如果长时间收不到验证码短信，<span style="color:#fe4320;text-decoration: underline;cursor: pointer;" @click="fasong">请点此重新发送</span>找回密码短信。</p>
        </div>

        <div class="four" v-if="page==4" >
           <p class="input_wrap password_wrap">
                <input type="password" maxlength="50" title="密码"  v-model="obj4.password"  @focus="change1" placeholder="请输入密码">
                <span style=" display: inline-block;height:24px;width:250px;margin:0 auto;text-align: left;text-indent: 24px;font-size: 12px;color: #ff0000;line-height: 24px;">{{pwd}}</span >
            </p>
            <p class="input_wraptwo password_wraptwo">
                <input type="password" maxlength="50" title="密码"  v-model="password2"  @focus="change1" placeholder="请输入密码">
                <span style=" display: inline-block;height:24px;width:250px;margin:0 auto;text-align: left;text-indent: 24px;font-size: 12px;color: #ff0000;line-height: 24px;">{{pwdtwo}}</span >
            </p>
            <button class="btn" style="margin-top: 20px;text-align:center" @click="click4">下一步</button>
        </div>

        <div class="four" v-if="page==5" >
            <p style="font-size: 14px;padding-bottom:24px">恭喜，您已成功重置密码！</p>
            <button class="btn" style="margin-top: 20px;margin-bottom: 220px;text-align:center" @click="click5">立即登录</button>
        </div>
    </div>


    <el-dialog title="提示信息" :visible.sync="dialogVisible" width="20%">
        <span>{{alert}}</span>
        <span slot="footer" class="dialog-footer">
            <el-button type="danger" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>

    <el-dialog title="提示信息" :visible.sync="qw" width="20%">
        <span>{{success}}</span>
        <span slot="footer" class="dialog-footer">
            <el-button type="success" @click="qw = false">确 定</el-button>
        </span>
    </el-dialog>
    <my-foot></my-foot>
</div>
</template>

<script>
import Slider from "./Slider"
import MyFoot from "./MyFoot"
    export default {
        name:"Back",
          components:{
            "slider":Slider,
            "my-foot":MyFoot,
        },
        data(){
            return {
                qw:false,
                success:"发送成功",
                dialogVisible: false,
                alert:"",
                alert2:"用户不存在",
                alert3:"请输入验证码",
                alert4:"验证码错误",
                alert5:"更改失败",
                pwd:"",
                pwd1:"*请输入密码",
                pwd2:"*密码长度只能在6-20个字符之间",
                pwd3:"",
                pwdtwo:"",
                pwdtwo1:"*两次密码输入不一致",
                pwdtwo2:"*请再次输入密码",
                pwdtwo3:"",

                
                password2:"",
                tel:"13198581878",
                yanzhengma:"",
                page:1,
                index:0,
                yzm:"",
                ac:false,
                ac1:false,
                a:true,
                obj:{
                    id:""
                },
                obj4:{
                    mydata:"",
                    password:"",
                },
                
                mydata2:"",
                mydata4:"",
                user:"",
                user1:"*请输入用户名",
                user2:"*请拖动滑块完成验证",
                user3:"",
                user4:"*用户名格式不正确",
                acquire:"",
                acquireUrl:"",
                acquireYzm:""
            }
        },
        methods:{
            click: function(){
                if(this.obj.id==""){
                    this.user=this.user1
                }else if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.obj.id))){
                     this.user=this.user4
                }
                else if(this.a!=false){
                    this.user=this.user2
                }else {
                    this.one();
                   
                }
            },
            one:function(){
                 this.axios.post("http://localhost:81/one.do", this.obj, {
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
                            // alert("用户不存在")
                            this.dialogVisible=true
                            this.alert=this.alert2
                        }else {
                            this.obj4.mydata = response.data;
                            this.index=1
                            this.page=2
                        }
					}).catch(response => {
						console.log("post发送Ajax请求失败");
					})
            },
            click2:function(){
                this.page=3
                this.index=2
                this.random()
            },
            random:function(){
                this.axios.get("http://localhost:81/reg.do",{
					
					}).then(response => {
						console.log("get发送Ajax请求成功", response.data);
						this.mydata2 = response.data;
					}).catch(response => {
						console.log("get发送Ajax请求失败");
					})

            },
            click3:function(){
                if(this.yanzhengma==""){
                    this.dialogVisible=true
                    this.alert=this.alert3
                    // alert("请输入验证码")
                }else if(this.yanzhengma!=this.mydata2){
                     this.dialogVisible=true
                            this.alert=this.alert4
                    // alert("验证码错误")
                }else {
                    this.page=4
                    this.index=3
                }
            },
            click4:function(){
                 if(this.obj4.password==""){
                    this.pwd=this.pwd1
                }else if(!(/^[\x21-\x7E]{6,20}$/.test(this.obj4.password))){
                    this.pwd=this.pwd2
                }else if(this.password2==""){
                    this.pwdtwo=this.pwdtwo2
                }
                else if(this.obj4.password!=this.password2){
                    this.pwdtwo=this.pwdtwo1
                }else {
                    this.four()
                    
                }
            },
            four:function(){
                 this.axios.post("http://localhost:81/four.do", this.obj4, {
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
                            // alert("更改失败")
                        }else {
                            this.mydata4 = response.data;
                            this.page=5
                            this.index=4
                        }
					}).catch(response => {
						console.log("post发送Ajax请求失败");
					})
            },

            click5:function(){
                this.$router.push("/login")
            },
            fasong:function(){
                this.qw=true;
                // alert("发送成功")
                this.random()
            },
            focus: function(){
                this.user=this.user3
            },
            change:function(e){
                this.ac=true
                this.user=this.user3
            },
            change1:function(){
                this.pwd=this.pwd3
                this.pwdtwo=this.pwdtwo3
            },
            tijiao:function(){
                if(this.yzm!=this.acquireYzm){
                    this.ac1=true
                }else {
                    this.ac=false
                    this.a=false
                }
            },
            huan:function(){
                this.acquirepic()
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
        },
        mounted: function() {
            console.log(666)
			this.acquirepic()
	    },
    }  
</script>

<style scoped>
    .wrap {
        widows: 100%;
        height: 83px;
        border-bottom: 1px solid #e5e5e5;
        
    }
    .global_nav {
        width: 62.5%;
        margin: 0 auto;
        padding: 29px 0;
       
        display: flex;
    }
    .main {
        padding: 60px 0 40px;
    }
    .input {
        border: none;
        outline: none;
         line-height: 20px;
        padding: 4px 0 5px 24px;
        width: 226px;
        border-bottom: 1px solid #e5e5e5;
        background: url(../../static/teltwo.png);
        background-size: 15px 15px;
        background-repeat: no-repeat;
        background-position: 0 45%;
    }
    .btn {
        cursor: pointer;
        margin-top: 60px;
        border: none;
        outline: none;
        width: 250px;
        height: 50px;
        line-height: 50px;
        background: #fe4320;
        color: #ffffff;
        font-size: 16px;
    }
    .el-step {
        width: 150px;
        height: 20px
    }
    .box {
        width:250px;
        margin:0 auto;
        position: relative;
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
        text-indent: 5px
    }
    .right {
        width: 42px;
        height: 32px;
        border: 1px solid #CCCCCC;
    }
    .yanzhen {
        width: 248px;
        padding-bottom: 15px;
        border: 1px solid #ccc;
        margin-top: 1px;
        
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
    .abso {
        position: absolute;
        left: 0;
        top: 0;
        background-color: white
    }
    .pic {
        background: url(../../static/icons1.png);
        background-position: -80px 160px;
        width: 80px;
        height: 80px;
        position: relative;
        cursor: pointer;
    }
    .pic>span {
        position: absolute;
        top:80px;
        left: 12px;
        color: #fe4320;
        font-size: 14px
    }
    .three {
        text-align: center;
    }
    .four {
        text-align: center;
    }
    .yzm {
        background: url(../../static/yaoshi.png);
        background-size: 15px 15px;
        background-repeat: no-repeat;
        background-position: 0 45%;
        border: none;
        outline: none;
        line-height: 20px;
        padding: 4px 0 5px 24px;
        width: 226px;
        border-bottom: 1px solid #e5e5e5;
    }
    .input_wrap {
        width: 250px;
        height: 30px;
        margin: 0 auto;
        margin-bottom: 30px;
    }
    .input_wraptwo {
        width: 250px;
        height: 30px;
        margin: 0 auto;
        margin-bottom: 30px;
    }
    .password_wrap>input {
        background: url(../../static/xinhao.png);
        background-size: 15px 15px;
        background-repeat: no-repeat;
        background-position: 0 45%;
        border: none;
        outline: none;
        line-height: 20px;
        padding: 4px 0 5px 24px;
        width: 226px;
        border-bottom: 1px solid #e5e5e5;
    }
    .password_wraptwo>input{
        border: none;
        outline: none;
        line-height: 20px;
        padding: 4px 0 5px 0;
        width: 226px;
        border-bottom: 1px solid #e5e5e5;
        margin-left: 24px
    }
   
</style>