<template>
  <div class="login">
    <div class="lg">
      简书
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<style>
body {
  background: #ccc;
}
.login {
  margin-top: 220px;
}
.lg {
  font-size: 30px;
  text-align: center;
  position: relative;
  top: -130px;
  left: 130px;
  width: 100px;
  height: 70px;
  background: #000;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  line-height: 70px;
}
</style>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>
