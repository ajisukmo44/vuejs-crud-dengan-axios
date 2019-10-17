
  <div id="app" style="margin-top:40px">
  <a-form @submit="addTodo">
<p>    <label>Nama : </label>    <a-input style="width: 180px; margin-right: 70px" type="text" v-model="todoName" placeholder="Nama"/> </p>
    <p> <label>Alamat : </label><a-input style="width: 180px; margin-right: 70px" type="text" v-model="todoAlamat"/> </p>
<button type="submit">SIMPAN</button>
<br>
<br>
  </a-form>
<hr/>
<h2 style="margin-top:14px">Data Undangan</h2>
<p v-for="todo of todos" :key="todo.id">{{todo.id}} - {{todo.name}} - {{todo.alamat}} </p>

</div>