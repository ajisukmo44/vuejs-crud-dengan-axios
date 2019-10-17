<template>
  <div id="app" style="margin-top:17px">
  <form @submit="addTodo">
    
   <p> <label>Nama : </label><input type="text" v-model="todoName"> </p>
    <p> <label>Alamat : </label><input type="text" v-model="todoAlamat"> </p>
<button type="submit">SIMPAN</button>
<br>
<br>
  </form>


    <p v-for="todo of todos" :key="todo.id">{{todo.id}} - {{todo.name}} - {{todo.alamat}} <button>hapus</button></p>
    </div>

</template>
<script>

import Invitation from './components/invitation.vue'
import axios from "axios";
const baseURL ="http://localhost:3000/data"

      export default {
      components: {
      Invitation
      },

        name: 'app',
        data(){
      return{
        todos:[],
        todoName: '',
        todoAlamat: ''
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
        const res = await axios.post(baseURL, { name: this.todoName, alamat: this.todoAlamat });
        this.todos = [...this.todos, res.data];
        this.todoName = "";
        this.todoAlamat = "";
        }

        }
      };
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>