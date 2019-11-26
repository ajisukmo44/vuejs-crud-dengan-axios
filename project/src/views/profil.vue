<template>
    <a-layout id="components-layout-demo-top-side">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        class="menu"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '60px' }"
      >
        <a-menu-item key="1">
          <B style="font-size:24px; color:#fff; "> Edit Profil </B>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>&nbsp;</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu mode="inline" style="height: 100%; background: #1A8FFC;">
            <a-button
              style="margin-bottom:20px; margin-left:7px; margin-top:40px; width:150px"
              type="default"
            >
              <a-icon type="form" />DAFTAR
            </a-button>

            <a-button
              style="margin-bottom:20px; margin-left:7px; margin-top:20px; width:150px"
              type="default"
            >
              <a-icon type="login" />MASUK
            </a-button>

            <a-button
              style="margin-bottom:20px; margin-left:7px; margin-top:20px; width:150px"
              type="default"
            >
              <a-icon type="file" />UNDANGAN
            </a-button>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <h2 style="text-align:center;">Form Daftar</h2>
          <br />
          <div>
            <a-row>
              <a-col style="text-align:left;">
                Nama &nbsp;
                <a-input
                  style="width:350px; margin-left: 55px"
                  v-decorator="['nama',
                { rules: [{ required: true, message: 'Masukkan nama Anda' }] },]"
                  placeholder="Masukkan nama Anda"
                />
              </a-col>
              <a-col style="float:right" :span="8">
                <a-input
                  style="margin-right:100px"
                  v-decorator="['userName', { rules: [{ required: true, message: 'Please input your username!' }] },]"
                  placeholder="Username"
                >
                  <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                </a-input>
              </a-col>
            </a-row>
            <br />
            <a-row style="text-align:left; margin-left:120px">
              <br />
              <a-col :span="16">
                Alamat &nbsp;
                <a-input
                  style="width:350px; margin-left:50px"
                  v-decorator="['Alamat',
                { rules: [{ required: true, message: 'Masukkan Alamat Anda' }] },]"
                  placeholder="Masukkan Alamat Anda"
                />
              </a-col>
              <a-col style="float:right" :span="8">
                <a-input
                  style="margin-right:100px"
                  v-decorator="['password',{ rules: [{ required: true, message: 'Please input your Password!' }] }, ]"
                  type="password"
                  placeholder="Password"
                >
                  <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                </a-input>
              </a-col>
            </a-row>
            <br />
            <a-row style="text-align:left; margin-left:120px">
              <br />
              <a-col>
                Jenis Kelamin
                <a-select
                  style="width:350px; margin-left:20px"
                  v-decorator="['gender',
          { rules: [{ required: true, message: 'Please select your gender!' }] },]"
                  placeholder="Pilih jenis kelamin Anda"
                  @change="handleSelectChange"
                >
                  <a-select-option value="male">Laki-laki</a-select-option>
                  <a-select-option value="female">Perempuan</a-select-option>
                </a-select>
              </a-col>
              <a-col style="float:right" :span="8">
                <a-input
                  style="margin-right:100px"
                  v-decorator="['password',{ rules: [{ required: true, message: 'Please input your Password!' }] }, ]"
                  type="password"
                  placeholder="Ulangi Pasword"
                >
                  <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                </a-input>
              </a-col>
            </a-row>
            <a-row>
                <br>
              <a-col>
                  <br>
                Nomor KTP
                <a-input
                  style="width:350px; margin-right:90px; margin-left:30px"
                  v-decorator="['alamat',
                { rules: [{ required: true, message: 'Masukkan nomor KTP Anda' }] },]"
                  placeholder="Masukkan nomor KTP Anda"
                />
              </a-col>
                
              <a-col style="float:right">
                <a-button style="margin-right:90px; margin-bottom:25px;" type="primary" html-type="submit" class="login-form-button">Daftar</a-button>
                <br> Sudah punya Akun?  
                <a style="margin-right:60px">Log In</a>
              </a-col>
            </a-row>
          </div>
          <p></p>
          <p style="text-align:left; margin-left:120px">
            E-mail
            <a-input
              style="width:350px; margin-right:90px; margin-left:60px"
              v-decorator="['alamat',
                { rules: [{ required: true, message: 'Masukkan e-mail Anda' }] },]"
              placeholder="Masukkan e-mail Anda"
            />
          </p>
          <p style="text-align:left; margin-left:120px">
            Nomor Telepon
            <a-input
              style="width:350px; margin-right:315px; margin-left:10px"
              v-decorator="['alamat',
                { rules: [{ required: true, message: 'Masukkan Nomor Telepon Anda' }] },]"
              placeholder="Masukkan Nomor Telepon Anda"
            />
          </p>
          <p  style="text-align:left; margin-left:120px">
            Scan KTP/Passport
            <a-upload
              style="width:350px; text-align:left; margin-left:10px"
              v-decorator="[
          'upload',
          {
            valuePropName: 'fileList',
            getValueFromEvent: normFile,
          },
        ]"
              name="logo"
              action="/upload.do"
              list-type="picture"
            >
              <a-button>
                <a-icon type="upload" />Click to upload
              </a-button>
            </a-upload>
          </p>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">Front-End ©2019 Praxis Academy</a-layout-footer>
  </a-layout>
</template>

<style>
#components-layout-demo-top-side .logo {
  width: 120px;
  height: 31px;
  margin: 16px 28px 16px 0;
  float: left;
}
#components-layout-demo-top-side .header {
  background-color: #1a8ffc;
}
#components-layout-demo-top-side .menu {
  background-color: #1a8ffc;
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
