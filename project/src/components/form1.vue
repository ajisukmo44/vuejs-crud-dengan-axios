<template>
  
<div style="margin-top:20px; margin-left:20px">
<table class="table1" >
 <tr>
 <th> Id  </th>
 <th> Jenis  </th>
 <th> Nama  </th>
 <th> Waktu  </th>
 <th> Scan KTP  </th>
 </tr>
 <tr  v-for="todo of todos" :key="todo.id">
   <td>{{todo.id}}</td>
   <td>{{todo.jenis}}</td>
   <td>{{todo.nama}}</td>
   <td>{{todo.waktu}}</td>
   <td>{{todo.scan}}</td>
 </tr>
</table>
</div>

</template>
<script>

import axios from "axios";


const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
       },
    {
      title: 'Nama',
      className: 'nama'
    },
  ];

const baseURL ="http://localhost:3000/data"

      export default {

        name: 'app',
        data(){
      return{
        todos:[],
        columns
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

      };
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
