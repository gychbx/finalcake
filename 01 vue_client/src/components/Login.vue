<template>
  <div>
    <reg2></reg2>
    <my-foot></my-foot>
  </div>
</template>

<script>
import Reg2 from "./Reg2"
import MyFoot from "./MyFoot"
export default {
  name: 'Login',
  components:{
    "reg2":Reg2,
    "my-foot":MyFoot
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
