<template>
  <div class="home" style="margin-top:20px">

    <a-button> <router-link to="/cetak">LOGIN</router-link></a-button>&nbsp; &nbsp;

    <a-button> <router-link to="/cetak">DAFTAR</router-link></a-button>&nbsp; &nbsp;

    <a-button> <router-link to="/invitation">INVITATION</router-link></a-button> &nbsp; &nbsp;

    <a-button> <router-link to="/cetak">CETAK UNDANGAN</router-link></a-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    
  }
}
</script>
