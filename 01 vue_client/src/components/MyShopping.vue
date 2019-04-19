<template>
  <div class="container">
      <div class='pay' v-show='this.shoppingarr.length!=0'>
          <div> 
               <div style='display:flex;align-items:center'>
                 <input @click='selectAll' v-model='flag' type="checkbox" id='all' style='width:16px;height:16px;'> <label for='all' style='padding:10px;cursor:pointer'>全选</label>
                 <el-button type='text' style='color:black;font-size:16px;padding:10px;' @click='delAllShoppingGoods'>删除</el-button>
                 <p style='height:22px;line-height:22px;padding:0px 5px;border-left:2px solid orange'>共<span style='color:orangered'>{{this.shoppingarr.length}}</span>件商品,已选择<span style='color:orangered'>{{this.checkarr.length}}</span>件</p>
              </div>
             <div style='display:flex;align-items:center'>
                 <div style='color:#333;font-size:14px'>应付(不含运费)：<span style='font-size:20px;color:orangered'>{{paymoney}}</span></div>
                 <div style='margin-left:10px;width:250px;height:60px;line-height:60px;text-align:center;background-color:orangered;color:white;font-size:20px'>结算</div>
             </div>
          </div>
      </div>
      <div class='shoppingwrap'>
            <div class='shoppingnums'>
                <span>您的购物车({{this.$store.state.count}})</span>
                <div v-show='shoppingarr.length!=0' @click='continueshopping' style='cursor:pointer' class='el-icon-caret-left'>继续购物</div>
            </div>
            <div v-if='shoppingarr.length===0' style='height:150px;padding:50px;display:flex;flex-direction:column;justify-content:space-between;align-items:center'>
                <img width=83 height=81 src="../../static/shopcar.png">
                <p>您还没有选购商品，<span @click='continueshopping' style='color:orangered;cursor:pointer;'>去逛逛！</span></p>
            </div>
            <div v-else class='shoppinglist'>
                <div class='shoppingitem' v-for='(item,index) in shoppingarr' :key='(item,index)'>
                    <div class='left'>
                            <input :value='item.pname' type="checkbox" v-model="checkarr" style='width:16px;height:16px;margin:30px'>
                            <img :src="item.imgurl" width=110 height=110>
                            <div style="width:300px;height:110px;display:flex;flex-direction:column;justify-content:space-between;">
                                <div>
                                    <p style='font-size:16px;color:#333;padding:10px 10px 0px;'>{{item.pname}}</p>
                                    <span style='font-size:12px;color:#aaa;padding-left:10px;'>{{item.scale}}</span>
                                </div>
                                <p style='font-size:16px;color:orangered;padding:10px;'>{{item.price}}</p>
                            </div>
                    </div>
                    <div class='right'>
                        <div>小计：￥{{parseInt(item.price.substring(1))*item.piece}}</div>
                        <div>
                            <el-button class='el-icon-minus'  @click='minus(index)'></el-button>
                            <div>{{item.piece}}</div>
                            <el-button class='el-icon-plus' @click='plus(index)'></el-button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
        checkarr:[],
        shoppingarr:0,
        flag:true
    }
  },
  //监听v-model绑定的数组
  watch:{
      checkarr:function(val){
          if(val.length===this.shoppingarr.length){
              this.flag=true;
          }else{
             this.flag=false;
          }
      }
  },
  computed:{
      //计算应付的金额
      paymoney:function(){
          var total=0;
          for(var i=0;i<this.shoppingarr.length;i++){
              for(var j=0;j<this.checkarr.length;j++){
                if(this.shoppingarr[i].pname===this.checkarr[j]){
                   total+=parseInt(this.shoppingarr[i].price.substring(1))*this.shoppingarr[i].piece
                }
              }
          }
          return "￥"+total;
      }
  },
  methods:{
      //删除购物车所有商品
      delAllShoppingGoods:function(){
          this.$confirm('此操作将永久删除购物车商品, 是否继续?', '提示信息', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        this.axios.post('http://localhost:81/delallshopping')
            .then(results=>{
                    //删除成功
                this.$store.commit('tozero');
                this.shoppingarr.splice(0)

            }).catch(err=>{
                    console.log(err);
            });
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      //全选
      selectAll:function(){
            if(this.flag===true){
                this.checkarr=[];
            }else{
                this.checkarr=[];
                for(var i=0;i<this.shoppingarr.length;i++){
                this.checkarr.push(this.shoppingarr[i].pname);
               } 
            }
      },
      //继续购物
      continueshopping:function(){
          this.$router.push('/cake')
      },
      minus:function(index){
          if( this.shoppingarr[index].piece===1){
                    this.$confirm('此操作将永久删除该商品, 是否继续?', '提示信息', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                    //注意删除v-model中绑定的checkarr数组对应的商品
                    for(var i=0;i<this.checkarr.length;i++){
                        if(this.checkarr[i]===this.shoppingarr[index].pname){
                            this.checkarr.splice(i,1);
                        }
                    }
                    //删除该商品
                    this.axios.post('http://localhost:81/delshopping',{sid:this.shoppingarr[index].sid}, {
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
                           console.log(results.data);
                    }).catch(err=>{
                            console.log(err);
                    });
                    this.shoppingarr.splice(index,1);
                    this.$store.commit('decrease');
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                    });
          }else{
              this.shoppingarr[index].piece--   
                //axios减少数据库中的piece(商品件数)
                 this.axios.post('http://localhost:81/updatepiece',{piece:this.shoppingarr[index].piece,sid:this.shoppingarr[index].sid}, {
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
                           console.log(results.data);
                    }).catch(err=>{
                            console.log(err);
                    });
          }    
      },
      plus:function(index){
          this.shoppingarr[index].piece++
           //axios增加数据库中的piece(商品件数)
                 this.axios.post('http://localhost:81/updatepiece',{piece:this.shoppingarr[index].piece,sid:this.shoppingarr[index].sid}, {
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
                           console.log(results.data);
                    }).catch(err=>{
                            console.log(err);
                    });
      }
  },
  mounted:function(){
    this.axios.post('http://localhost:81/getshoppingcar')
    .then(results=>{
         this.shoppingarr=results.data;
         for(var i=0;i<results.data.length;i++){
            this.checkarr.push(results.data[i].pname);
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
.shoppingwrap {
 width:1200px;
 margin: 0 auto;
}
.shoppingnums {
    padding:20px 0px;
    height:30px;
    text-align: center; 
    position: relative;
}
.shoppingnums>span {
    font-size: 20px;
    color:#333; 
    line-height:30px;
}
.shoppingnums>div {
    color:orangered;
    font-size:14px;
    position: absolute;
    left:0px;
    top:28px;
}
.shoppinglist {
    width:980px;
    margin: 0 auto;
}
.shoppingitem {
    margin-top:20px;
    border: 1px solid #ccc;
    height:110px;
    padding:20px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.left {
     display: flex;
    justify-content: space-between;
    align-items: center;
}
.right {
     height:110px;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
}
.right>div:first-child {
    padding: 10px;
    width:150px;
    text-align: right;
    color:orangered;
}
.right>div:last-child{
    padding:10px;
     width:150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.pay  {
    position: fixed;
    left: 0px;
    bottom: 0px;
    width:100%;
    height:80px;
    background-color: #fff;
    border: 1px solid #ccc;
}
.pay>div {
    margin: 0 auto;
    width:1200px;
    height:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>