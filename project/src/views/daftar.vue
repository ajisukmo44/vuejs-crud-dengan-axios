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
            
      <router-link to="/about"><a-button style="margin-bottom:20px; margin-left:5px; margin-top:40px; width:150px" type="default"><a-icon type="form" />DAFTAR</a-button></router-link>
           
             <a-button style="margin-bottom:20px; margin-left:5px; margin-top:20px; width:150px" type="default"><a-icon type="login"/>MASUK</a-button>
          
            <a-button style="margin-bottom:20px; margin-left:5px; margin-top:20px; width:150px" type="default"><a-icon type="file" />UNDANGAN</a-button>
          


          </a-menu >
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
         
          <p> <b style="margin-top:50px;"> FORM REGISTRASI </b> 
          </p>
    <hr style="margin-top: 30px; margin-bottom: 30px"/>
<div id="app" style="margin-top:40px">
  <a-form @submit="addTodo">

 <p style="text-align:left;">
   <label style="margin-left:80px; margin-right:10px">Nama &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label> 
 
 <a-input style="width: 250px; margin-right: 50px" type="text" v-model="todoNama" placeholder="Nama Pemohon"/> 
<label style="margin-right:10px">No KTP &nbsp; &nbsp;&nbsp;&nbsp;   : </label> 
 <a-input style="width: 250px; margin-right: 57px" type="text" v-model="todoNoktp" placeholder="No KTP"/> </p>

 <p style="text-align:left;">
   <label style="margin-left:80px; margin-right:10px">Alamat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label> 
 
 <a-input style="width: 250px; margin-right: 50px" type="text" v-model="todoAlamat" placeholder="Alamat"/> 
<label style="margin-right:10px">Scan KTP &nbsp;   : </label> 
<a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      :defaultFileList="fileList"
      class="upload-list-inline"
    >
      <a-button> <a-icon type="upload" /> upload </a-button>
    </a-upload></p>



 <p style="text-align:left;"><label style="margin-left:80px; margin-right:10px">Jenis Kelamin&nbsp;&nbsp; :</label> <a-select  v-model="todoJK" style="width: 250px; margin-right:50px" type="text"  @change="handleChange" placeholder="Pagi">
<a-select-option disabled value="">Pilih Salah Satu</a-select-option>
<a-select-option value="Laki-laki">laki-laki</a-select-option>
      <a-select-option value="Perempuan">Perempuan</a-select-option>

      </a-select> 
      </p>
<p style="text-align:left;">
   <label style="margin-left:80px; margin-right:10px">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label> 
 
 <a-input style="width: 250px; margin-right: 50px" type="text" v-model="todoEmail" placeholder="Email"/> 
<label style="margin-right:10px">Username&nbsp;&nbsp;&nbsp;   : </label> 
 <a-input style="width: 250px; margin-right: 57px" type="text" v-model="todoUsername" placeholder="Username"/> </p>

       <p style="text-align:left;">
   <label style="margin-left:80px; margin-right:10px">No Hp&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label> 
 
 <a-input style="width: 250px; margin-right: 50px" type="text" v-model="todoNohp" placeholder="No Hp"/> 
<label style="margin-right:10px">Password &nbsp;&nbsp;&nbsp;   : </label> 
 <a-input style="width: 250px; margin-right: 57px" type="text" v-model="todoPassword" placeholder="Password"/> </p>
    
      <a-button type="primary" html-type="submit" style="margin-left:500px; margin-top:15px; width:300px">DAFTAR</a-button>
<br>
<br>
  </a-form>
<hr/>
</div>


<h2 style="margin-top:24px; margin-right:34px">Data Registrasi </h2>
   
<Data />



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
const baseURL ="http://localhost:3000/data2"

      export default {
      components: {
        Data
      },

        name: 'app',
        data(){
      return{
        todos:[],
        todoNama: '',
        todoAlamat: '',
        todoJK: '',
        todoEmail: '',
        todoNohp: '',
        todoNoktp: '',
        todoScanktp: '',
        todoUsername: '',
        todoPassword: ''
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
        const res = await axios.post(baseURL, { nama: this.todoNama, alamat: this.todoAlamat,
         jenis_kelamin: this.todoJK, email: this.todoEmail, no_hp: this.todoNohp,
         no_ktp: this.todoNoktp, scan_ktp: this.todoScanktp, username: this.todoUsername, password: this.todoPassword  });
        this.todos = [...this.todos, res.data];
        this.todoNama = "";
        this.todoAlamat = "";
        this.todoJK = "";
        this.todoEmail = "";
        this.todoNohp = "";
        this.todoNoktp = "";
        this.todoScanktp = "";
        this.todoUsername = "";
        this.todoPassword = "";
        }

        }
      };
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


