<template>
  <div class="container">
    <div class="layui-layout layui-layout-admin">
      <div class="layui-header">
        <div class="layui-logo">诺心蛋糕后台管理系统</div>
        <!-- 头部区域（可配合layui已有的水平导航） -->
        <ul class="layui-nav layui-layout-left">
          <li class="layui-nav-item">
            <a href>控制台</a>
          </li>
          <li class="layui-nav-item">
            <a href>商品管理</a>
          </li>
          <li class="layui-nav-item">
            <a href>用户</a>
          </li>
          <li class="layui-nav-item">
            <a href="javascript:;">其它系统</a>
            <dl class="layui-nav-child">
              <dd>
                <a href>邮件管理</a>
              </dd>
              <dd>
                <a href>消息管理</a>
              </dd>
              <dd>
                <a href>授权管理</a>
              </dd>
            </dl>
          </li>
        </ul>
        <ul class="layui-nav layui-layout-right">
          <li class="layui-nav-item">
            <a href="javascript:;">
              <img src="http://t.cn/RCzsdCq" class="layui-nav-img">
              高大帅
            </a>
            <dl class="layui-nav-child">
              <dd>
                <a href>基本资料</a>
              </dd>
              <dd>
                <a href>安全设置</a>
              </dd>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href>退了</a>
          </li>
        </ul>
      </div>

      <div class="layui-side layui-bg-black">
        <div class="layui-side-scroll">
          <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
          <ul class="layui-nav layui-nav-tree" lay-filter="test">
            <li class="layui-nav-item layui-nav-itemed">
              <a class href="javascript:;">所有商品</a>
              <dl class="layui-nav-child">
                <dd>
                <a @click='toshowpage' href="javascript:;">商品信息</a>
                </dd>
                <dd>
                  <a @click='toaddpage' href="javascript:;">增加商品</a>
                </dd>
                <dd>
                  <a href>超链接</a>
                </dd>
              </dl>
            </li>
            <li class="layui-nav-item">
              <a href="javascript:;">解决方案</a>
              <dl class="layui-nav-child">
                <dd>
                  <a href="javascript:;">列表一</a>
                </dd>
                <dd>
                  <a href="javascript:;">列表二</a>
                </dd>
                <dd>
                  <a href>超链接</a>
                </dd>
              </dl>
            </li>
            <li class="layui-nav-item">
              <a href>云市场</a>
            </li>
            <li class="layui-nav-item">
              <a href>发布商品</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="layui-body">
        <!-- 内容主体区域 -->
            <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'MyHome',
  data() {
    return {};
  },
  methods:{
      toshowpage:function(){
          this.$router.push('/show')
      },
      toaddpage:function(){
          this.$router.push('/add')
      }
  }
};
</script>
<style  scoped>
.container {
  width: 100%;
}
</style>