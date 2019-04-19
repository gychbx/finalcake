<template>
  <div class="container">
      <my-header @search-data='search' :changeindex='indexvalue'></my-header>
      <router-view @changeindex='tochangeindex'></router-view>
      <my-foot></my-foot>
  </div>
</template>
<script>
import MyHeader from './MyHeader.vue'
import MyCakeVue from './MyCake.vue';
import MyFoot from './MyFoot.vue';
export default {
    name:'MyPageOne',
  data(){
    return {
        mydata:'',
        indexvalue:0,
        shoppingindexvalue:0
    }
  },
  methods:{
    search:function(val){
        this.$router.push({path:'/cakeshow',query:{cakearr:val.data}})
    },
    tochangeindex:function(val){
          this.indexvalue=val;
    }
  },
  components:{
      "my-header":MyHeader,
      "my-foot":MyFoot
  }
}
</script>
<style  scoped>
.container{
    width:100%;
}
</style>