<template>
<a-layout id="components-layout-demo-top-side">
    <a-layout-content style="padding: 0 50px; height: 100%">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>&nbsp;</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="600" height="2000" style="background: #fff">
          <a-menu mode="inline" style="height: 100%; background: #1A8FFC;"></a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '24px', minHeight: '450px' }">
          <div id="app" style="margin-top:40px">
            <a-form  
              id="components-form-demo-normal-login"
              :form="form"
              class="login-form"
              @submit="addTodo"
            >
              <h2>HALAMAN LOGIN</h2>
              <br>
              <a-form-item style="margin-top:15px">
                
                <a-input style="width:350px; margin-top:5px" v-decorator="['userName',{ rules: [{ required: true, message: 'Please input your username!' }] },]"
                  placeholder="Username">
                  <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input style="width:350px; margin-top:5px" v-decorator="['password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
                  type="password"
                  placeholder="Password"
                >
                  <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-button type="primary" html-type="submit" class="login-form-button"><router-link to="/invitation"><a-icon type="login"/> LOGIN</router-link></a-button><br> Belum punya Akun?  
               <router-link to="/daftar"> <a>Daftar disini</a></router-link>
              </a-form-item>
            </a-form>
          </div>
           <div class="home" style="margin-top:20px">

    <a-button> <router-link to="/login">LOGIN</router-link></a-button>&nbsp; &nbsp;

    <a-button> <router-link to="/daftar">DAFTAR</router-link></a-button>&nbsp; &nbsp;

    <a-button> <router-link to="/invitation">INVITATION</router-link></a-button> &nbsp; &nbsp;

    <a-button> <router-link to="/cetak">CETAK UNDANGAN</router-link></a-button>
  </div>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">Front-End ©2019 Praxis Academy</a-layout-footer>
  </a-layout>   





</template>


<style>
#components-layout-demo-top-side .logo {
  width: 120px;
  height: 31px;
  margin: 16px 28px 16px 0;
  float: left;
}
#components-layout-demo-top-side .header {
  background-color: #1a8ffc;
}
#components-layout-demo-top-side .menu {
  background-color: #1a8ffc;
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
