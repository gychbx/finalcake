<template>
  <div class="container">
      <form class="layui-form" action="" style='width:400px;'>
  <div class="layui-form-item">
    <label class="layui-form-label">图片地址</label>
    <div class="layui-input-block">
      <input type="text" name="imgurl" required  lay-verify="required" placeholder="请输入图片地址" autocomplete="off" class="layui-input">
    </div>
  </div>
   <div class="layui-form-item">
    <label class="layui-form-label">商品名称</label>
    <div class="layui-input-block">
      <input type="text" name="pname" required  lay-verify="required" placeholder="请输入商品名称" autocomplete="off" class="layui-input">
    </div>
  </div>
   <div class="layui-form-item">
    <label class="layui-form-label">口味</label>
    <div class="layui-input-block">
      <input type="text" name="test" required  lay-verify="required" placeholder="请输入口味" autocomplete="off" class="layui-input">
    </div>
  </div>
    <div class="layui-form-item">
    <label class="layui-form-label">规格</label>
    <div class="layui-input-block">
      <input type="text" name="scale" required  lay-verify="required" placeholder="请输入规格" autocomplete="off" class="layui-input">
    </div>
  </div>
    <div class="layui-form-item">
    <label class="layui-form-label">标签</label>
    <div class="layui-input-block">
      <input type="text" name="lable" required  lay-verify="required" placeholder="请输入标签" autocomplete="off" class="layui-input">
    </div>
  </div>
    <div class="layui-form-item">
    <label class="layui-form-label">价格</label>
    <div class="layui-input-block">
      <input type="text" name="price" required  lay-verify="required" placeholder="请输入价格" autocomplete="off" class="layui-input">
    </div>
  </div>
  <div class="layui-form-item">
    <label class="layui-form-label">选择类型</label>
    <div class="layui-input-block">
      <select name="type" lay-verify="required">
        <option value=""></option>
        <option value="1">蛋糕</option>
        <option value="2">土司</option>
        <option value="3">礼品</option>
      </select>
    </div>
  </div>
  <div class="layui-form-item">
    <div class="layui-input-block">
      <button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>
      <button type="reset" class="layui-btn layui-btn-primary">重置</button>
    </div>
  </div>
</form>
  </div>
</template>

<script>
export default {
    name:'AddGoods',
  data(){
    return {
    }
  },
  mounted:function(){
      layui.use('form', function(){
      var form = layui.form;
      form.render();
      //监听提交
      form.on('submit(formDemo)', function(data){
          console.log(666)
          layer.msg(JSON.stringify(data.field));
           $.ajax({
             type: "POST",
             url: "http://localhost:81/insertgoods",
             data: data.field,
             dataType: "json",
             success: function(data){
                console.log(data);
             },
             error:function(err){
                console.log(err);
             }
         });
        return false;
        });
      });
  }
}
</script>
<style  scoped>
.container{
    width:100%;
}
</style>