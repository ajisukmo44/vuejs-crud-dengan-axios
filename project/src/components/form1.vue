<template>
  
<div style="margin-top:20px; margin-left:20px">
      <table class="table1" >
      <tr>
      <th> Jenis permohonan </th>
      <th> Nama Pemohon </th>
      <th> Waktu </th>
      <th> Scan Ktp</th>
      <th> Tindakan </th>
      </tr>
      
      <tr v-for="user of users" :key="user.id">
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

</template>
<script>
import axios from "axios";

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
