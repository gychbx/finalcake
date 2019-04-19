<template>
  <div class="container">
    <table class="layui-table" lay-even lay-skin="row" lay-size="lg">
      <colgroup>
        <col width="150">
        <col width="200">
        <col>
      </colgroup>
      <thead>
        <tr>
          <th>图片地址</th>
          <th>商品名称</th>
          <th>口味</th>
          <th>规格</th>
          <th>标签</th>
          <th>价格</th>
          <th>类型</th>
          <th colspan="2" style='text-align:center;'>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr class='goodsitem' v-for='(item,index) in goodsarr' :key='(item,index)'>
            <td data-id='1' @blur="updateinfo($event,index)" contenteditable="false" spellcheck='false'>{{item.imgurl}}</td>
            <td data-id='2' @blur="updateinfo($event,index)" contenteditable="false">{{item.pname}}</td>
            <td data-id='3' @blur="updateinfo($event,index)" contenteditable="false">{{item.test}}</td>
            <td data-id='4' @blur="updateinfo($event,index)" contenteditable="false">{{item.scale}}</td>
            <td data-id='5' @blur="updateinfo($event,index)" contenteditable="false">{{item.lable}}</td>
            <td data-id='6' @blur="updateinfo($event,index)" contenteditable="false">{{item.price}}</td>
            <td data-id='7' @blur="updateinfo($event,index)" contenteditable="false">{{item.type}}</td>
            <td style='cursor:pointer' @click='delgoods(index)'>删除</td>
            <td style='cursor:pointer' @click='changeinfo(index)'>修改</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "ShowGoods",
  data() {
    return {
      goodsarr:0
    };
  },
  methods:{
    updateinfo:function(e,index){
             this.axios.post('http://localhost:81/manageupdate',{cid:this.goodsarr[index].cid,id:e.srcElement.dataset.id,text:e.srcElement.innerText}, {
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
               console.log(results.data)
           }).catch(err=>{
                console.log(err);
           });
    },
    changeinfo:function(index){
        var info=document.getElementsByClassName('goodsitem')[index].children;
        for(var i=0;i<info.length-2;i++){
            info[i].setAttribute('contenteditable','true')
        }
    },
    delgoods:function(index){
         this.axios.post('http://localhost:81/delmanageinfo', {cid:this.goodsarr[index].cid}, {
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
                layer.msg("删除成功")
                this.goodsarr.splice(index,1);
           }).catch(err=>{
                console.log(err);
           });
    }
  },
  mounted:function(){
      this.axios.post('http://localhost:81/getmanageinfo')
      .then(results=>{
           this.goodsarr=results.data;
      }).catch(err=>{
        console.log(err);
      })
  }
};
</script>
<style  scoped>
.container {
  width: 100%;
}
</style>