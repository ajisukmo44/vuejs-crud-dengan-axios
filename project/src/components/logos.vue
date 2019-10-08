<template>
  <div>
    <label>Jenis Permohonan</label> &nbsp;&nbsp;<a-select defaultValue="individu" style="width: 320px" @change="handleChange">
      <a-select-option value="individu">Individu</a-select-option>
      <a-select-option value="kelompok">Kelompok</a-select-option>
    </a-select>
    <br>
    <hr/>
    <label>Nama Pemohon</label>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
    <label> Scan KTP </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    <label> Undangan </label>
    <br/>
     <a-input style="width: 200px" placeholder="Nama"/>
      &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
      <a-select defaultValue="Pagi" style="width: 320px" @change="handleChange">
<a-select-option value="Pagi">Pagi</a-select-option>
      <a-select-option value="Sore">Sore</a-select-option>

      </a-select>
   
<br>
<br>
<br>
 <a-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :defaultFileList="defaultFileList">
    <a-button>
      <a-icon type="upload" /> Upload
    </a-button>
  </a-upload>
  </div>
</template>
<script>
export default {
  data () {
    return {
      defaultFileList: [{
        uid: '1',
        name: 'xxx.png',
        status: 'done',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/xxx.png',
      }, {
        uid: '2',
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      }, {
        uid: '3',
        name: 'zzz.png',
        status: 'error',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
      }],
    }
  },
  methods: {
    handleChange({file, fileList}) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
  },


  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    }
  }
}
</script>