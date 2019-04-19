<template>
  <div class="box">
    <div>
        <img :src="topimg" alt="">
    </div>
    <div class="info">
        <div  class="infoform">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <div class="msg">{{msg}}</div>  
                <el-form-item label="您的姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="您的手机" prop="phone">
                    <el-input v-model="ruleForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="公司名称" prop="company">
                    <el-input v-model="ruleForm.company"></el-input>
                </el-form-item>
                <el-form-item label="城市" prop="city">
                    <el-select v-model="ruleForm.city" placeholder="请选择活动区域">
                    <el-option label="成都市" value="shanghai"></el-option>
                    <el-option label="上海市" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="采购需求" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="msgright">
            <h3>{{infotitle1}}</h3>
            <p>{{info1}}</p>
            <h3>{{infotitle2}}</h3>
            <p>{{info2}}</p>
            <p>{{info3}}</p>
        </div>
    </div>
    <div>
          <img :src="bottomimg" alt="">
        </div>
  </div>
</template>

<script>
import topImg from "../assets/top.jpg";
import bottomImg from "../assets/bottom.png";
export default {
  name: "Contentcaigou",
  data() {
    return {
        topimg:topImg,
        bottomimg:bottomImg,
        infotitle1:"蛋糕券购买",
        infotitle2:"其他服务",
        info1:"定额（218元、336元、506元）实物蛋糕券，可用于员工福利、送客户、送领导等。批量购买，享受更多优惠！",
        info2:"我们还提供很多个性化的服务，企业员工团购，预付系统服务，月结系统服务，烘焙教室服务等。",
        info3:"如有具体需求，请电话联系或留言咨询。",
        msg:"如果有意进行企业采购合作,想要了解更多的信息,请您填写以下基本信息,我们会及时与您联系.",
         ruleForm: {
          name: '',
          phone: '',
          company: '',
          city: '',
          desc: ''
        },rules: {
          name: [
            { required: true, message: '请输入名字', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
          ],
          phone:[
              { required: true, message: '请输入手机号码', trigger: 'blur' },
            { min:6,max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ],
          company:[
              { required: true, message: '请输入公司名称', trigger: 'blur' }
          ],
          city: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请简要描述您的采购需求', trigger: 'blur' }
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
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    font-size: 14px;
}
.box{
    width: 73.6%;
    margin: 0 auto;
    background-color: #FAF1E0;
    /* position: relative; */
    /* top:109px; */
    /* z-index: -1; */
}
img {
    width: 100%;
}
.info {
    display: flex;
    justify-content: space-between;
}
.infoform {
    padding: 20px 40px;
}
.msg {
    margin-left: 25px;
    margin-bottom: 15px;
    color:grey;
    font-size: 12px;
}
.msgright {
    margin-top: 20px;
    margin-right: 25px;
}
</style>
