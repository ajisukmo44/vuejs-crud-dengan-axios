<template>
   <a-layout id="components-layout-demo-top-side">
    <a-layout-header class="header">
      <div class="logo"/>
      <a-menu class="menu"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '60px' }"
      >
        <a-menu-item key="1"><B style="font-size:24px; color:#fff;"> UNDANGAN.com</B></a-menu-item>
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
            style="height: 100%; background: #1A8FFC;">
            
      <router-link to="/cetak"><a-button style="margin-bottom:20px; margin-left:5px; margin-top:40px; width:150px" type="default"><a-icon type="file" />UNDANGAN</a-button></router-link>
           
              <router-link to="/"><a-button style="margin-bottom:20px; margin-left:5px; margin-top:20px; width:150px" type="default"><a-icon type="login"/>LOG OUT</a-button></router-link>
          


          </a-menu >
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
         
          <p> <b style="margin-top:50px;"> Jenis permohonan </b> 
          <a-select v-model="form.jenis_permohonan" placeholder="edit me" style="width: 150px"   @change="handleChange">

  <a-select-option disabled value="" >Pilih Salah Satu</a-select-option>
      <a-select-option value="individu">Individu</a-select-option>
      <a-select-option value="kelompok">Kelompok</a-select-option>
    </a-select> </p>
    <hr style="margin-top: 30px; margin-bottom: 30px"/>
<div id="app" style="margin-top:40px">
    <a-form @submit.prevent="add">
        <input type="hidden" v-model="form.id">

 <p style="text-align:left;"><label style="margin-left:180px; margin-right:210px">Nama Pemohon</label>   <label style="margin-right: 160px"> Waktu Undangan</label>  
    <label> Scan KTP </label>
    </p>
<p >    <a-input style="width: 240px; margin-right: 80px" type="text" v-model="form.nama_pemohon" placeholder="Nama Pemohon" required/> <a-select  v-model="form.waktu" style="width: 200px; margin-right:80px" type="text"  @change="handleChange" placeholder="Pagi" required>

<a-select-option disabled value="">Pilih Salah Satu</a-select-option>
<a-select-option value="Pagi">Pagi</a-select-option>
      <a-select-option value="Sore">Sore</a-select-option>

      </a-select>
    <a-upload
      v-model="form.scan_ktp"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      :defaultFileList="fileList"
      class="upload-list-inline"
    >
      <a-button> <a-icon type="upload" /> upload </a-button>
    </a-upload>
      </p>

         <a-button style="margin-left:600px; margin-top:15px; margin-bottom:20px; width:100px; background: #1A8FFC" type="primary" html-type="submit" v-show="!updateSubmit">SIMPAN</a-button>  
        <a-button style="margin-left:425px; margin-top:15px; width:250px; background:#f5b042"  type="default" v-show="updateSubmit" @click="update(form)">UPDATE</a-button>
  
<br>
  </a-form>
<hr/>
</div>


<h2 style="margin-top:24px; margin-right:34px">Data Undangan </h2>
   

<div style="margin-top:20px; margin-left:20px">
      <table class="table1" >
      <tr>
      <th> Id </th>
      <th> Jenis permohonan </th>
      <th> Nama Pemohon </th>
      <th> Waktu </th>
      <th> Scan Ktp</th>
      <th> Tindakan </th>
      </tr>
      
      <tr v-for="user of users" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.jenis_permohonan}}</td>
        <td>{{user.nama_pemohon}}</td>
        <td>{{user.waktu}}</td>
        <td>{{user.scan_ktp}}</td>
        <td> 
          <a-button  style="margin-right:2px" type="success" @click="edit(user)">Edit</a-button> 
         <a-button type="danger" @click="del(user)">Delete</a-button> 
        </td>
      </tr>
</table>
</div>


        </a-layout-content>
      </a-layout>
    </a-layout-content>
     <a-layout-footer style="text-align: center">
      Front-End ©2019 Praxis Academy
    </a-layout-footer>
  </a-layout>

  </template>


<script>
import axios from "axios";
import Data from "../components/Formdata.vue";

      export default {
      components: {
        Data
      },

        name: 'app',
        data(){
    return{
        form: {
          id: '',
          jenis_permohonan: '',
          nama_pemohon:'',
          waktu: '',
          scan_ktp:'',
          },
        users: '',
        updateSubmit: false
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/users').then(res => {
        this.users = res.data
      }).catch ((err) => {
        console.log(err);
        
      })
    },
      add(){
      axios.post('http://localhost:3000/users', this.form).then(res => {
          this.load()
          this.form.jenis_permohonan = '',
          this.form.nama_pemohon = ''
          this.form.waktu = '',
          this.form.scan_ktp = ''
          })
    },
    edit(user){ 
        this.updateSubmit = true
        this.form.id = user.id
        this.form.jenis_permohonan = user.jenis_permohonan
        this.form.nama_pemohon = user.nama_pemohon
        this.form.waktu = user.waktu 
        this.form.scan_ktp = user.scan_ktp 
    },
    update(form){ 
       return axios.put('http://localhost:3000/users/' + form.id, {jenis_permohonan: this.form.jenis_permohonan, nama_pemohon: this.form.nama_pemohon, waktu: this.form.waktu, scan_ktp: this.form.scan_ktp}).then(res => {
        this.load()
        this.form.id = ''
        this.form.jenis_permohonan = ''
        this.form.nama_pemohon = ''
        this.form.waktu = ''
        this.form.scan_ktp = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
    },
    del(user){
      axios.delete('http://localhost:3000/users/' + user.id).then(res =>{
          this.load()
          let index = this.users.indexOf(form.nama_pemohon)
          this.users.splice(index,1)
      })
    }
  }
}
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


