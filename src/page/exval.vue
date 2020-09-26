<template>
  <div class="exval" id="pdfDom">
    <el-table :data="list" stripe style="width: 100%">
      <el-table-column prop="title" label="日期" width="180"></el-table-column>
      <el-table-column prop="tag_id" label="姓名" width="180"></el-table-column>
      <el-table-column
        prop="large_image_url"
        label="image"
        width="180"
      ></el-table-column>
    </el-table>
    <el-button type="primary" @click="getPdf(htmlTitle)">导出 PDF</el-button>
    <exprot
      :list="list"
      :tHeader="tHeader"
      :tValue="tValue"
      filename="yx"
    ></exprot>

    <img src="../assets/logo.png" preview="0" preview-text="放大缩小" />
  </div>
</template>
<style></style>
<script>
import { listObj } from "../server/index.js";
import exprot from "../components/exportComponent";
export default {
  components: { exprot },
  data() {
    return {
      htmlTitle: "yx",
      tHeader: ["日期", "姓名", "地址"],
      tValue: ["date", "name", "address"],
      list: [],
    };
  },
  methods: {
    async getdata() {
      let listt = await listObj.getalldata();
      this.list = listt.data;
      console.log(this.list);
    },
  },

  mounted() {
    this.getdata();
  },
};
</script>
