<template>
  <div>
   <Navbar/>
    <div class="container">
      <div class="row">
        <div class="col-md-12"><router-view></router-view></div>
      </div>
    </div>

  </div>
</template>

<script>
  import Navbar from '@/components/Navbar';//引入组件
    export default {
        data(){
            return {}
        },
        components:{
            Navbar
        },//注册子组件
        methods:{}
    }
</script>

<style>

</style>
