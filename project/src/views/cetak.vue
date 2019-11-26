<template>
   <a-layout id="components-layout-demo-top-side">
    <a-layout-header class="header">
      <div class="logo"/>
      <a-menu class="menu"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '60px' }"
      >
        <a-menu-item key="1"><B style="font-size:24px; color:#fff; margin-left:0px"> UNDANGAN.com</B></a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item> &nbsp;</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu 
            mode="inline"
            style="height: 100%; background: #1A8FFC;"
          >
<<<<<<< HEAD
                 
      <router-link to="/invitation"><a-button style="margin-bottom:20px; margin-left:5px; margin-top:40px; width:150px" type="default"><a-icon type="file" />INVITATION</a-button></router-link>
           
              <router-link to="/"><a-button style="margin-bottom:20px; margin-left:5px; margin-top:20px; width:150px" type="default"><a-icon type="login"/>LOG OUT</a-button></router-link>
=======
             <a-button style="margin-bottom:20px; margin-left:7px; margin-top:40px; width:150px" type="default"><a-icon type="form" />DAFTAR</a-button>
           
             <a-button style="margin-bottom:20px; margin-left:7px; margin-top:20px; width:150px" type="default"><a-icon type="login" />MASUK</a-button>
          
            <a-button style="margin-bottom:20px; margin-left:7px; margin-top:20px; width:150px" type="default"><a-icon type="file" />UNDANGAN</a-button>
>>>>>>> 8802634de4a74f57a917a28e4d3df24c550a058c
          


          </a-menu >
        </a-layout-sider>

        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
        
        <a-form  @submit="addTodo">
        <p > <b style="margin-right:80px; margin-top:90px; background-color: #F0F2F5;"> Kode Permohonan Undangan </b> </p>
        <a-input-search placeholder="Isi Kode Permohonan" style="width: 250px ; margin-right: 90px;" @search="onSearch" />
        </a-form>

        </a-layout-content>
      </a-layout>
    </a-layout-content>
<<<<<<< HEAD
 <a-layout-footer style="text-align: center">
      Front-End ©2019 Praxis Academy
    </a-layout-footer>
=======
<Footer />
>>>>>>> 8802634de4a74f57a917a28e4d3df24c550a058c
  </a-layout>

  </template>

<script>

<<<<<<< HEAD
=======
import Footer from "../components/footer.vue";

      export default {
      components: {
        Footer
      },
        name: 'app',
        data(){
      return{
      };

        },
      };
>>>>>>> 8802634de4a74f57a917a28e4d3df24c550a058c
</script>
<style>
#components-layout-demo-top-side .logo {
  width: 120px;
  height: 31px;
  margin: 16px 28px 16px 0;
  float: left;
}
#components-layout-demo-top-side .header {
  background-color:#1A8FFC;
}
#components-layout-demo-top-side .menu{
  background-color:#1A8FFC;
}
 .upload-list-inline >>> .ant-upload-list-item {
    float: left;
    width: 200px;
    margin-right: 8px;
  }
  .upload-list-inline >>> .ant-upload-animate-enter {
    animation-name: uploadAnimateInlineIn;
  }
  .upload-list-inline >>> .ant-upload-animate-leave {
    animation-name: uploadAnimateInlineOut;
  }
</style>