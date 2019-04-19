<template>
  <div class="box">
    <div class="img1">
        <img :src="img1" alt="">
    </div>
    <div class="myform">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名称" prop="name">
                <el-input type="password" v-model="ruleForm2.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
             <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')" class="login">登录</el-button>
            </el-form-item>
</el-form>
    </div>
  </div>
</template>

<script>
import Img1 from "../assets/img1.png"
export default {
  name: "Client",
  data() { 
      var checkName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.ruleForm2.checkName !== '') {
            this.$refs.ruleForm2.validateField('checkName');
          }
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      
    return {
        img1:Img1,
        ruleForm2: {
          pass: '',
          name: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]
        }
      };
      },
     methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    font-size: 14px;
}
.box{
    width: 90%;
    margin: 0 auto;
    /* position: relative; */
    /* top:109px; */
    /* z-index: -1; */
}
.img1 {
    padding: 20px 0 20px 20%;
}
.myform{
    padding: 30px 10%;
    margin: 0 auto;
    width: 40%;
    border-top: 2px solid rgba(0, 0, 0, 0.05);
    border-bottom: 2px solid rgba(0, 0, 0, 0.15);
}
.login {
    background:orangered;
    border: none;
}
</style>
