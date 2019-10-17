<template>
  <a-layout id="components-layout-demo-top-side">
    <a-layout-header class="header">
      <div class="logo"/>
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '60px' }"
      >
        <a-menu-item key="1"><B style="font-size:20px"> UNDANGAN</B></a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>-</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu 
            mode="inline"
            style="height: 100%; background: blue"
          >
             <a-button style="margin-bottom:20px; margin-top:20px; width:150px" type="default"><a-icon type="form" />DAFTAR</a-button>
           
             <a-button style="margin-bottom:20px; margin-top:20px; width:150px" type="default"><a-icon type="login" />MASUK</a-button>
          
            <a-button style="margin-bottom:20px; margin-top:20px; width:150px" type="default"><a-icon type="file" />UNDANGAN</a-button>
          


          </a-menu >
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
         
          <p> <b style="margin-right:12px"> Jenis permohonan </b> 
          <a-select defaultValue="individu" style="width: 150px" @change="handleChange">
      <a-select-option value="individu">Individu</a-select-option>
      <a-select-option value="kelompok">Kelompok</a-select-option>
    </a-select> </p>
    <hr/>

 <p><label style="margin-right: 140px">Nama Pemohon</label>   <label style="margin-right: 120px"> Undangan</label>  
    <label> Scan KTP </label>
    </p>
    <span>


     <a-input style="width: 180px; margin-right: 70px" placeholder="Nama"/>
<a-select defaultValue="Pagi" style="width: 100px; margin-right:90px" @change="handleChange">
<a-select-option value="Pagi">Pagi</a-select-option>
      <a-select-option value="Sore">Sore</a-select-option>

      </a-select>

    <a-upload style="width: 120px; margin-right: 10px" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :defaultFileList="defaultFileList">
        <a-button>
          <a-icon type="upload"/> Upload
        </a-button>
      </a-upload>
<hr/>
<h4 style="margin-top:14px">Data </h4>
    <p v-for="todo of todos" :key="todo.id">{{todo.name}} </p>
    </span>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>


<script>

import axios from "axios";
const baseURL ="http://localhost:3000/todos"

      export default {
        name: 'app',
        data(){
      return{
        todos:[],
        todoName: ''
      };

        },
        async created(){
          try{
            const res = await axios.get(baseURL);
            this.todos = res.data;
          }
    catch(e){
      console.error(e);
    }

        },

        methods: {
        async addTodo(){
        const res = await axios.post(baseURL, { name: this.todoName });
        this.todos = [...this.todos, res.data];
        this.todoName = "";

        }

        }
      };
</script>





<style>
#components-layout-demo-top-side .logo {
  width: 120px;
  height: 31px;
  background: rgba(255,255,255,.2);
  margin: 16px 28px 16px 0;
  float: left;
}
. menu{

background: red;



}
</style>


