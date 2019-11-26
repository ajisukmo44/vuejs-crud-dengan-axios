<template>
  <div style="margin-top:20px">
    <a-form @submit.prevent="add">
        <input type="hidden" v-model="form.id">
         
        <div>
        <a-input type="text" style="width:200px; margin-right:4px; margin-bottom:4px" v-model="form.nama" placeholder="masukan nama"/>
        </div>
        
        <div> 
        <a-input type="text" style="width:200px; margin-right:4px; margin-bottom:4px" v-model="form.alamat" placeholder="masukan alamat"/>
        </div>
         
         <div> 
          <a-input type="text" style="width:200px; margin-right:4px" v-model="form.jenis_kelamin" placeholder="masukan email"/> 
          </div>
          
          <div>
          <a-input type="text" style="width:200px; margin-right:4px; margin-bottom:4px" v-model="form.email" placeholder="masukan jenis kelamin"/>
          </div>
         
          <div> 
          <a-input type="text" style="width:200px; margin-right:4px" v-model="form.no_hp" placeholder="masukan no  hp"/> 
          </div>
          
           <div>
          <a-input type="text" style="width:200px; margin-right:4px" v-model="form.no_ktp" placeholder="masukan no ktp"/> 
          </div>
          
          <div>
          <a-input type="text" style="width:200px; margin-right:4px" v-model="form.scan_ktp" placeholder="masukan scan ktp"/> 
          </div>
          
          <div>
            <a-input type="text" style="width:200px; margin-right:4px; margin-bottom:4px" v-model="form.username" placeholder="masukan username"/>
            </div>
         
         <div> 
          <a-input type="text" style="width:200px; margin-right:4px; margin-bottom:4px" v-model="form.password" placeholder="masukan password"/> 
          </div>
          
        <a-button type="primary" html-type="submit" v-show="!updateSubmit">add</a-button>  
        <a-button type="danger" v-show="updateSubmit" @click="update(form)">Update</a-button> 
    </a-form>
 
  <div style="margin-top:20px; margin-left:20px">
      <table class="table1" >
      <tr>
      <th> No KTP </th>
      <th> Nama </th>
      <th> Alamat </th>
      <th> Jenis Kelamin </th>
      <th> Email</th>
      <th> No Hp</th>
      <th> Username </th>
      <th> Password</th>
      <th> Scan ktp</th>
      <th> Tindakan </th>
      </tr>
      
      <tr v-for="user of users" :key="user.id">
        <td>{{user.no_ktp}}</td>
        <td>{{user.nama}}</td>
        <td>{{user.alamat}}</td>
        <td>{{user.jenis_kelamin}}</td>
        <td>{{user.email}}</td>
        <td>{{user.no_hp}}</td>
        <td>{{user.username}}</td>
        <td>{{user.password}}</td>
        <td>{{user.scan_ktp}}</td>
        <td> 
          <a-button type="default" @click="edit(user)">Edit</a-button> 
        - <a-button type="danger" @click="del(user)">Delete</a-button> 
        </td>
      </tr>
</table>
</div>
</div>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
export default {
  data(){
    return{
        form: {
          id: '',
          nama: '',
          alamat:'',
          jenis_kelamin: '',
          email:'',
          no_hp: '',
          scan_ktp: '',
          username:'',
          password:''
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
          this.form.nama = '',
          this.form.alamat = ''
          this.form.jenis_kelamin = '',
          this.form.email = ''
          this.form.no_hp = '',
          this.form.no_ktp = ''
          this.form.scan_ktp = '',
          this.form.username = ''
          this.form.password = ''
      })
    },
    edit(user){ 
        this.updateSubmit = true
        this.form.no_ktp = user.no_ktp 
        this.form.nama = user.nama 
        this.form.alamat = user.alamat 
        this.form.jenis_kelamin = user.jenis_kelamin 
        this.form.email = user.email 
        this.form.no_hp = user.no_hp 
        this.form.scan_ktp = user.scan_ktp 
        this.form.username = user.username 
        this.form.password = user.password 
    },
    update(form){ 
       return axios.put('http://localhost:3000/users' + form.no_ktp , {nama: this.form.nama, alamat: this.form.alamat, jenis_kelamin: this.form.jenis_kelamin, email: this.form.email,no_ktp: this.form.no_hp, scan_ktp: this.form.scan_ktp, username: this.form.username,password: this.form.password}).then(res => {
        this.load()
        this.form.no_ktp = ''
        this.form.nama = ''
        this.form.alamat = ''
        this.form.jenis_kelamin = ''
        this.form.email = ''
        this.form.no_hp = ''
        this.form.scan_ktp = ''
        this.form.username = ''
        this.form.password = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
    },
    del(user){
      axios.delete('http://localhost:3000/users' + user.id).then(res =>{
          this.load()
          let index = this.users.indexOf(form.nama, form.alamat)
          this.users.splice(index,1)
      })
    }
  }
}
</script>


<style>
  .table1 {
    font-family: sans-serif;
    color: #444;
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #f2f5f7;
}
  .table1 tr th{
      background:#1A8FFC;
      color: #fff;
      font-weight: normal;
  }
  
  .table1, th, td {
      padding: 8px 20px;
      text-align: center;
  }
  
  .table1 tr:hover {
      background-color: #f5f5f5;
  }
  
  .table1 tr:nth-child(even) {
      background-color: #f2f2f2;
  }
</style>