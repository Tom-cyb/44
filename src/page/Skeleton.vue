<template>
  <div class="Skeleton">
    <div class="content">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less">
.Skeleton {
  width: 100%;
  height: 100%;
  .content {
    div {
      margin-top: 20px;
      margin-left: 20px;
    }
  }

  div:nth-of-type(1) {
    width: 70%;
    height: 30px;
    background: #ccc;
  }
  div:nth-of-type(2) {
    width: 90%;
    height: 30px;
    background: #ccc;
  }

  div:nth-of-type(3) {
    width: 90%;
    height: 30px;
    background: #ccc;
  }

  div:nth-of-type(4) {
    width: 70%;
    height: 30px;
    background: #ccc;
  }

  div:nth-of-type(5) {
    width: 90%;
    height: 30px;
    background: #ccc;
  }
  div:nth-of-type(6) {
    width: 70%;
    height: 30px;
    background: #ccc;
  }

  div:nth-of-type(7) {
    width: 90%;
    height: 30px;
    background: #ccc;
  }

  div:nth-of-type(8) {
    width: 70%;
    height: 30px;
    background: #ccc;
  }

  div:nth-of-type(9) {
    width: 90%;
    height: 30px;
    background: #ccc;
  }
}
</style>
